import base64, re
from pathlib import Path
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image

ROOT = Path('/Users/nitishkumar/test/public-policy-institute')
OUT = ROOT / 'output/pdf/AstraNova_Labs_Enterprise_Report_Template.pdf'
TMP = ROOT / 'tmp/pdfs'
SVG = Path('/Users/nitishkumar/endpoint-agent/astra/astra-ui/dashboard/public/5.svg')
W, H = A4
pdfmetrics.registerFont(TTFont('PlusJakarta', str(TMP / 'fonts/PlusJakartaSans-Variable.ttf')))
pdfmetrics.registerFont(TTFont('Inter', str(TMP / 'fonts/Inter-Variable.ttf')))

# Palette sampled from supplied artwork: decisive cobalt on quiet, enterprise neutrals.
NAVY = HexColor('#0B1538'); INK = HexColor('#14213D'); BLUE = HexColor('#165DFF')
TEAL = HexColor('#14B8A6'); SKY = HexColor('#4AA3FF'); GOLD = HexColor('#F5B942')
MIST = HexColor('#F4F7FC'); LINE = HexColor('#D9E2F0'); SLATE = HexColor('#60708D')
GREEN = HexColor('#18A66A'); RED = HexColor('#E05B5B'); PALE_BLUE = HexColor('#EAF1FF')

def logo_image():
    raw = SVG.read_text(errors='ignore')
    match = re.search(r'data:image/png;base64,([^\"]+)', raw)
    if not match: raise RuntimeError('No embedded logo image found')
    # The supplied SVG contains the Astra wordmark in white on a black raster
    # matte. Keep every part of the supplied mark intact and key out only the
    # matte, then place it on the exact navy used by the cover.
    source = TMP / 'astranova_logo_source.png'
    source.write_bytes(base64.b64decode(match.group(1)))
    image = Image.open(source).convert('RGBA')
    pixels = image.load()
    for yy in range(image.height):
        for xx in range(image.width):
            red, green, blue, alpha = pixels[xx, yy]
            if red < 8 and green < 8 and blue < 8:
                pixels[xx, yy] = (red, green, blue, 0)
    # Flatten against the exact cover color. This is deliberately opaque: PDF
    # renderers handle it consistently, and the full raster field is visually
    # indistinguishable from the navy report background.
    field = Image.new('RGB', image.size, (11, 21, 56))
    field.paste(image, mask=image.getchannel('A'))
    png = TMP / 'astranova_logo_cover_rgb.png'
    field.save(png)
    return ImageReader(str(png))

def text(c, x, y, s, size=9, color=INK, font='Inter', align='left'):
    font = {'Helvetica': 'Inter', 'Helvetica-Bold': 'PlusJakarta'}.get(font, font)
    c.setFont(font, size); c.setFillColor(color)
    if align == 'right': c.drawRightString(x, y, s)
    elif align == 'center': c.drawCentredString(x, y, s)
    else: c.drawString(x, y, s)

def wrap(c, s, x, y, width, size=9, color=SLATE, leading=14, font='Inter'):
    font = {'Helvetica': 'Inter', 'Helvetica-Bold': 'PlusJakarta'}.get(font, font)
    c.setFont(font,size); words=s.split(); line=''; yy=y
    for word in words:
        test=(line+' '+word).strip()
        if c.stringWidth(test,font,size)>width and line:
            text(c,x,yy,line,size,color,font); yy-=leading; line=word
        else: line=test
    if line: text(c,x,yy,line,size,color,font); yy-=leading
    return yy

def rect(c, x, y, w, h, fill=white, stroke=LINE, radius=6, sw=0.8):
    c.setLineWidth(sw); c.setStrokeColor(stroke); c.setFillColor(fill)
    c.roundRect(x,y,w,h,radius,fill=1,stroke=1)

def tag(c, x, y, label, fill=PALE_BLUE, color=BLUE):
    c.setFillColor(fill); c.roundRect(x,y,82,16,8,fill=1,stroke=0)
    text(c,x+41,y+5,label,6.8,color,'PlusJakarta','center')

def wordmark(c, x, y):
    # Legacy helper retained for other template variants.
    stamp = c.beginText(x, y)
    stamp.setFont('PlusJakarta', 22)
    stamp.setFillColor(white)
    stamp.setCharSpace(1.7)
    stamp.textOut('ASTRA')
    c.drawText(stamp)

def header(c, section, page, label='{{REPORT_TITLE}}'):
    c.setFillColor(white); c.rect(0,H-44,W,44,fill=1,stroke=0)
    c.setStrokeColor(LINE); c.line(42,H-44,W-42,H-44)
    text(c,42,H-28,'ASTRANOVA LABS',9,INK,'Helvetica-Bold')
    c.setFillColor(BLUE); c.circle(151,H-25,3,fill=1,stroke=0)
    text(c,W-42,H-28,section,8,SLATE,'Helvetica-Bold','right')
    text(c,42,H-62,label,7,SLATE)
    text(c,W-42,H-62,f'{page:02d}',7,SLATE,'Helvetica-Bold','right')

def footer(c, page):
    c.setStrokeColor(LINE); c.line(42,42,W-42,42)
    text(c,42,27,'© 2026 AstraNova Labs. All rights reserved.',7,SLATE)
    text(c,W/2,27,'{{CONFIDENTIALITY}}',7,SLATE,'Helvetica','center')
    text(c,W-42,27,f'Page {page}',7,SLATE,'Helvetica-Bold','right')

def page_title(c, num, title, subtitle=''):
    text(c,42,H-100,f'{num:02d}',10,BLUE,'Helvetica-Bold')
    text(c,42,H-132,title,23,INK,'Helvetica-Bold')
    if subtitle: text(c,42,H-151,subtitle,9,SLATE)

def placeholder(c,x,y,w,h,label, note='', tone=PALE_BLUE):
    rect(c,x,y,w,h,white,LINE,6)
    c.setFillColor(tone); c.roundRect(x+1,y+1,w-2,h-2,5,fill=1,stroke=0)
    c.setStrokeColor(BLUE); c.setDash(3,3); c.rect(x+10,y+10,w-20,h-20,fill=0,stroke=1); c.setDash()
    text(c,x+w/2,y+h/2+5,label,10,BLUE,'Helvetica-Bold','center')
    if note: text(c,x+w/2,y+h/2-11,note,7,SLATE,'Helvetica','center')

def kpi(c,x,y,w,label,value,delta,status='ON TRACK'):
    rect(c,x,y,w,98,white,LINE,7)
    text(c,x+14,y+75,label,7,SLATE,'Helvetica-Bold')
    text(c,x+14,y+43,value,20,INK,'Helvetica-Bold')
    text(c,x+14,y+22,delta,8,GREEN if '+' in delta else RED,'Helvetica-Bold')
    tag(c,x+w-96,y+16,status,HexColor('#E7F7EF') if status=='ON TRACK' else HexColor('#FFF0F0'),GREEN if status=='ON TRACK' else RED)

def note(c,x,y,w,h,title,body,accent=TEAL):
    rect(c,x,y,w,h,white,LINE,7); c.setFillColor(accent); c.roundRect(x,y,5,h,3,fill=1,stroke=0)
    text(c,x+18,y+h-24,title,9,INK,'Helvetica-Bold'); wrap(c,body,x+18,y+h-42,w-34,8,SLATE,12)

def draw_table(c,x,y,w,rows=6):
    cols=[.34,.16,.16,.16,.18]; xs=[x]
    for p in cols: xs.append(xs[-1]+w*p)
    header_h=25; row_h=27
    rect(c,x,y,w,header_h+rows*row_h,white,LINE,6)
    c.setFillColor(NAVY); c.roundRect(x,y+rows*row_h,w,header_h,6,fill=1,stroke=0)
    c.rect(x,y+rows*row_h,w,8,fill=1,stroke=0)
    heads=['{{COLUMN_01}}','{{COLUMN_02}}','{{COLUMN_03}}','{{COLUMN_04}}','STATUS']
    for i,h in enumerate(heads): text(c,xs[i]+10,y+rows*row_h+9,h,7,white,'Helvetica-Bold')
    for r in range(rows):
        yy=y+(rows-r-1)*row_h
        if r%2==0: c.setFillColor(MIST); c.rect(x+1,yy+1,w-2,row_h-1,fill=1,stroke=0)
        c.setStrokeColor(LINE); c.line(x,yy,x+w,yy)
        vals=['{{ROW_LABEL}}','{{VALUE}}','{{VALUE}}','{{VALUE}}','● {{STATUS}}']
        for i,v in enumerate(vals): text(c,xs[i]+10,yy+9,v,7,INK if i<4 else GREEN,'Helvetica-Bold' if i==0 else 'Helvetica')
    text(c,x+10,y-15,'{{TABLE_NOTE}}  |  {{SOURCE}}',7,SLATE)

def build():
    logo=logo_image(); c=canvas.Canvas(str(OUT),pagesize=A4); c.setTitle('AstraNova Labs - Enterprise Report Template')
    # 1 cover
    c.setFillColor(NAVY); c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(BLUE); c.circle(W-5,H-40,190,fill=1,stroke=0); c.setFillColor(TEAL); c.circle(W-30,H-130,112,fill=1,stroke=0)
    c.setFillColor(HexColor('#102456')); c.circle(90,110,185,fill=1,stroke=0)
    c.drawImage(logo,48,H-150,width=160,height=54,preserveAspectRatio=True,anchor='sw')
    text(c,48,H-210,'ENTERPRISE INTELLIGENCE REPORT',9,HexColor('#BFD3FF'),'Helvetica-Bold')
    text(c,48,H-270,'{{REPORT_TITLE}}',34,white,'PlusJakarta')
    wrap(c,'{{REPORT_SUBTITLE}}',48,H-294,430,12,HexColor('#D6E2FF'),18)
    c.setStrokeColor(HexColor('#6177B0')); c.line(48,150,W-48,150)
    text(c,48,124,'REPORTING PERIOD',7,HexColor('#AABCE5'),'Helvetica-Bold'); text(c,48,105,'{{REPORT_PERIOD}}',10,white,'Helvetica-Bold')
    text(c,260,124,'PREPARED BY',7,HexColor('#AABCE5'),'Helvetica-Bold'); text(c,260,105,'{{PREPARED_BY}}',10,white,'Helvetica-Bold')
    tag(c,48,61,'{{CONFIDENTIALITY}}',HexColor('#1D3570'),white)
    text(c,48,30,'© 2026 AstraNova Labs. All rights reserved.',7,HexColor('#AABCE5'))
    c.showPage()
    # 2 executive
    header(c,'EXECUTIVE SUMMARY',2); page_title(c,1,'Executive Summary','Decision-ready performance signals and strategic context.')
    note(c,42,H-286,W-84,84,'{{EXECUTIVE_SUMMARY}}','A concise narrative placeholder for the most important performance outcome, context, and leadership decision required.',BLUE)
    xs=[42,174,306,438]
    for x,l,v,d in zip(xs,['{{KPI_01}}','{{KPI_02}}','{{KPI_03}}','{{KPI_04}}'],['{{VALUE}}']*4,['+{{CHANGE}}','+{{CHANGE}}','-{{CHANGE}}','+{{CHANGE}}']): kpi(c,x,H-405,120,l,v,d)
    text(c,42,H-450,'KEY FINDINGS',11,INK,'Helvetica-Bold')
    note(c,42,H-570,247,96,'{{INSIGHT_01}}','Priority finding with evidence, implications, and recommended action.',TEAL)
    note(c,307,H-570,247,96,'{{INSIGHT_02}}','Second finding designed for a concise executive readout.',GOLD)
    footer(c,2); c.showPage()
    # 3 metrics
    header(c,'METRICS',3); page_title(c,2,'KPI & Metrics','Reusable cards for targets, prior-period comparisons, and status.')
    for row in range(2):
        for col in range(3):
            kpi(c,42+col*174,H-286-row*128,156,f'{{KPI_{row*3+col+1:02d}}}','{{METRIC_VALUE}}','{{% CHANGE}}')
            text(c,56+col*174,H-370-row*128,'vs. {{PREVIOUS_PERIOD}}  |  Target: {{TARGET}}',6.5,SLATE)
    note(c,42,109,W-84,70,'{{METRICS_COMMENTARY}}','Use this space for methodology, performance context, or portfolio-level commentary.',BLUE)
    footer(c,3); c.showPage()
    # 4 chart library
    header(c,'VISUAL ANALYTICS',4); page_title(c,3,'Chart & Visualization','A flexible analytical canvas for any chart form.')
    placeholder(c,42,274,512,330,'[ CHART_PLACEHOLDER_01 ]','{{CHART_TITLE}}  ·  {{CHART_SUBTITLE}}  ·  Legend / axes / labels')
    note(c,42,130,512,92,'{{INSIGHT_01}}','{{CHART_COMMENTARY}}  |  {{SOURCE}}  |  {{METHODOLOGY}}',TEAL)
    footer(c,4); c.showPage()
    # 5 two charts
    header(c,'VISUAL ANALYTICS',5); page_title(c,4,'Comparative View','Text + chart, chart + chart, or KPI + commentary.')
    placeholder(c,42,344,247,224,'[ CHART_PLACEHOLDER_01 ]','bar / line / area / scatter')
    placeholder(c,307,344,247,224,'[ CHART_PLACEHOLDER_02 ]','donut / stacked / combination')
    note(c,42,188,247,104,'{{ANALYSIS_TITLE}}','{{ANALYSIS_TEXT}}',BLUE)
    note(c,307,188,247,104,'{{RECOMMENDATION}}','{{RECOMMENDATION_TEXT}}',GOLD)
    footer(c,5); c.showPage()
    # 6 full width visual
    header(c,'VISUAL ANALYTICS',6); page_title(c,5,'Full-Width Visualization','Optimized for a high-density analytical story.')
    placeholder(c,42,221,512,375,'[ LARGE_VISUALIZATION_PLACEHOLDER ]','{{CHART_TITLE}} · {{DESCRIPTION}} · {{LEGEND}} · {{AXIS_LABELS}}')
    text(c,42,184,'{{INSIGHT_01}}',9,INK,'Helvetica-Bold'); wrap(c,'{{INSIGHT_TEXT}}',42,166,512,8.5,SLATE,13)
    text(c,42,85,'{{SOURCE}}  |  {{METHODOLOGY}}',7,SLATE); footer(c,6); c.showPage()
    # 7 table
    header(c,'DATA TABLES',7); page_title(c,6,'Data Table','Designed for financial, operational, and analytical reporting.')
    draw_table(c,42,242,512,10)
    note(c,42,104,512,78,'{{TABLE_INSIGHT}}','{{TABLE_COMMENTARY}}',BLUE)
    footer(c,7); c.showPage()
    # 8 analysis
    header(c,'ANALYSIS & RECOMMENDATIONS',8); page_title(c,7,'Analysis & Next Steps','A structured page for narrative, decisions, and accountability.')
    text(c,42,H-202,'{{SECTION_TITLE}}',13,INK,'Helvetica-Bold')
    wrap(c,'{{RICH_TEXT_ANALYSIS}}  This flexible copy block supports detailed business context, interpretation, assumptions, and leadership guidance. It can expand with programmatic content while maintaining clear hierarchy.',42,H-226,290,9,SLATE,14)
    note(c,355,H-356,199,128,'KEY FINDING','{{KEY_FINDING}}',TEAL)
    note(c,355,H-500,199,128,'RECOMMENDATION','{{NEXT_STEP}}',GOLD)
    note(c,42,108,512,92,'{{SUPPORTING_NOTES}}','{{NOTES}} · {{OWNER}} · {{TIMELINE}}',BLUE)
    footer(c,8); c.showPage()
    # 9 appendix
    header(c,'APPENDIX',9); page_title(c,8,'Appendix','Definitions, methodology, detailed tables, and sources.')
    text(c,42,H-205,'A. {{APPENDIX_SECTION_TITLE}}',12,INK,'Helvetica-Bold')
    draw_table(c,42,373,512,5)
    text(c,42,317,'B. METHODOLOGY & DEFINITIONS',12,INK,'Helvetica-Bold')
    wrap(c,'{{METHODOLOGY}}  {{DEFINITIONS}}  {{DATA_SOURCES}}',42,293,512,9,SLATE,14)
    text(c,42,190,'C. ADDITIONAL NOTES',12,INK,'Helvetica-Bold')
    placeholder(c,42,93,512,72,'[ APPENDIX_CHART_OR_NOTE ]','{{ADDITIONAL_CONTEXT}}')
    footer(c,9); c.showPage(); c.save()

if __name__ == '__main__': build()
