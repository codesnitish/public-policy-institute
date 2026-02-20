import { ChevronRight, Share2, Download } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision and Mission' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'datahub', label: 'Data Hub' },
  { id: 'news', label: 'News' },
  { id: 'projects', label: 'Projects' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'people', label: 'People' },
  { id: 'events', label: 'Events' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'connect', label: 'Connect' },
];

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="w-full shrink-0 border-b border-[#e5eaf2] bg-[#f4f7fb] lg:h-full lg:w-[320px] lg:overflow-y-auto lg:border-b-0 lg:border-r">
      <div className="px-5 py-7 sm:px-7 sm:py-9">
        <nav className="mb-9 space-y-4" aria-label="Section navigation">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center justify-between text-left leading-none transition-colors ${
                activeSection === item.id
                  ? 'font-semibold text-[#1b3298]'
                  : 'font-normal text-[#1f2937] hover:text-[#123f75]'
              }`}
            >
              <span className="text-[16px] lg:text-[17px]">{item.label}</span>
              {activeSection === item.id && <ChevronRight className="h-4 w-4 shrink-0 text-[#123f75]" />}
            </button>
          ))}
        </nav>

        <div className="my-8 border-t border-[#d2dbe7]" />

        <a href="#" className="mb-3 flex w-full items-center justify-center gap-2 rounded-md border border-[#123f75] bg-white px-4 py-3 text-sm font-semibold text-[#123f75] transition hover:bg-[#123f75] hover:text-white">
          <Download className="h-4 w-4 shrink-0" />
          Guidelines for Research Blogs
        </a>
        <a href="#" className="mb-7 flex w-full items-center justify-center gap-2 rounded-md border border-[#123f75] bg-white px-4 py-3 text-sm font-semibold text-[#123f75] transition hover:bg-[#123f75] hover:text-white">
          Newsletters
          <ChevronRight className="h-4 w-4 shrink-0" />
        </a>

        <div>
          <p className="mb-3 text-sm font-semibold text-[#4b5563]">Share:</p>
          <div className="flex gap-3">
            <a href="#" className="text-[#123f75] transition hover:opacity-80" aria-label="Share link">
              <Share2 className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#123f75] transition hover:opacity-80" aria-label="X (Twitter)">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-[#123f75] transition hover:opacity-80" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-[#123f75] transition hover:opacity-80" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.66 1.196-1.6 2.905-1.6 2.121 0 3.71 1.328 3.71 4.187v5.695zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.963-1.708 1.192 0 1.915.757 1.915 1.708 0 .95-.723 1.708-1.963 1.708zm1.946 11.597H3.392V9.206h3.891v11.246z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
