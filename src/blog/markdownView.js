import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Link, Typography } from '@mui/material';
function parseInline(text) {
    // Minimal inline parser:
    // - Links: [text](url)
    // - Bold: **text**
    const tokens = [];
    let rest = text;
    const pushText = (t) => {
        if (t)
            tokens.push(t);
    };
    while (rest.length) {
        const linkMatch = rest.match(/\[([^\]]+)\]\(([^)]+)\)/);
        const boldMatch = rest.match(/\*\*([^*]+)\*\*/);
        const next = [linkMatch, boldMatch]
            .filter(Boolean)
            .map((m) => ({ index: m.index ?? 0, match: m }))
            .sort((a, b) => a.index - b.index)[0];
        if (!next) {
            pushText(rest);
            break;
        }
        const { index, match } = next;
        pushText(rest.slice(0, index));
        if (match[0].startsWith('[')) {
            tokens.push({ type: 'link', text: match[1], href: match[2] });
        }
        else {
            tokens.push({ type: 'strong', text: match[1] });
        }
        rest = rest.slice(index + match[0].length);
    }
    return tokens;
}
function Inline({ text }) {
    const parts = parseInline(text);
    return (_jsx(_Fragment, { children: parts.map((p, idx) => {
            if (typeof p === 'string')
                return _jsx("span", { children: p }, idx);
            if (p.type === 'strong')
                return _jsx("strong", { children: p.text }, idx);
            return (_jsx(Link, { href: p.href, target: "_blank", rel: "noreferrer", sx: { fontWeight: 600, textDecorationThickness: '2px', textUnderlineOffset: '4px' }, children: p.text }, idx));
        }) }));
}
export function MarkdownView({ markdown }) {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    const blocks = [];
    let paragraph = [];
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
    return (_jsx(Box, { children: blocks.map((b, idx) => {
            if (b.type === 'h2') {
                return (_jsx(Typography, { variant: "h5", sx: { mt: idx === 0 ? 0 : 3.5, mb: 1.2, fontWeight: 800 }, children: b.text }, idx));
            }
            return (_jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.95, mb: 2 }, children: _jsx(Inline, { text: b.text }) }, idx));
        }) }));
}
