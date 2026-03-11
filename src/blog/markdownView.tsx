import { Box, Link, Typography } from '@mui/material';

function navigateSpa(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function isInternalHref(href: string) {
  return href.startsWith('/') || href.startsWith('#');
}

function parseInline(text: string): Array<string | { type: 'link'; text: string; href: string } | { type: 'strong'; text: string }> {
  // Minimal inline parser:
  // - Links: [text](url)
  // - Bold: **text**
  const tokens: Array<string | { type: 'link'; text: string; href: string } | { type: 'strong'; text: string }> = [];
  let rest = text;

  const pushText = (t: string) => {
    if (t) tokens.push(t);
  };

  while (rest.length) {
    const linkMatch = rest.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = rest.match(/\*\*([^*]+)\*\*/);

    const next = [linkMatch, boldMatch]
      .filter(Boolean)
      .map((m) => ({ index: (m as RegExpMatchArray).index ?? 0, match: m as RegExpMatchArray }))
      .sort((a, b) => a.index - b.index)[0];

    if (!next) {
      pushText(rest);
      break;
    }

    const { index, match } = next;
    pushText(rest.slice(0, index));

    if (match[0].startsWith('[')) {
      tokens.push({ type: 'link', text: match[1], href: match[2] });
    } else {
      tokens.push({ type: 'strong', text: match[1] });
    }

    rest = rest.slice(index + match[0].length);
  }

  return tokens;
}

function Inline({ text }: { text: string }) {
  const parts = parseInline(text);
  return (
    <>
      {parts.map((p, idx) => {
        if (typeof p === 'string') return <span key={idx}>{p}</span>;
        if (p.type === 'strong') return <strong key={idx}>{p.text}</strong>;
        if (isInternalHref(p.href)) {
          return (
            <Link
              key={idx}
              href={p.href}
              onClick={(e) => {
                e.preventDefault();
                navigateSpa(p.href);
              }}
              sx={{ fontWeight: 600, textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
            >
              {p.text}
            </Link>
          );
        }
        return (
          <Link
            key={idx}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            sx={{ fontWeight: 600, textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
          >
            {p.text}
          </Link>
        );
      })}
    </>
  );
}

export function MarkdownView({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: Array<{ type: 'h2' | 'p'; text: string }> = [];

  let paragraph: string[] = [];
  const flush = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith('## ')) {
      flush();
      blocks.push({ type: 'h2', text: line.replace(/^##\s+/, '') });
      continue;
    }
    paragraph.push(line);
  }
  flush();

  return (
    <Box>
      {blocks.map((b, idx) => {
        if (b.type === 'h2') {
          return (
            <Typography key={idx} variant="h5" sx={{ mt: idx === 0 ? 0 : 3.5, mb: 1.2, fontWeight: 800 }}>
              {b.text}
            </Typography>
          );
        }
        return (
          <Typography key={idx} sx={{ color: 'text.secondary', lineHeight: 1.95, mb: 2 }}>
            <Inline text={b.text} />
          </Typography>
        );
      })}
    </Box>
  );
}
