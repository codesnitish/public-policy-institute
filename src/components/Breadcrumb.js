import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Breadcrumb() {
    return (_jsx("nav", { className: "border-b border-[#e5eaf2] bg-[#f9fbfd] py-3", "aria-label": "Breadcrumb", children: _jsxs("ol", { className: "page-shell flex items-center gap-2 text-[14px]", children: [_jsx("li", { children: _jsx("a", { href: "#", className: "text-[#4b5563] transition hover:text-[#123f75]", children: "Home" }) }), _jsx("li", { className: "text-[#9ca3af]", "aria-hidden": "true", children: ">" }), _jsx("li", { children: _jsx("span", { className: "font-semibold text-[#123f75]", "aria-current": "page", children: "Our Gender Lens" }) })] }) }));
}
