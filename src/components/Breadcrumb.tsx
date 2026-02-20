
export default function Breadcrumb() {
  return (
    <nav className="border-b border-[#e5eaf2] bg-[#f9fbfd] py-3" aria-label="Breadcrumb">
      <ol className="page-shell flex items-center gap-2 text-[14px]">
        <li>
          <a href="#" className="text-[#4b5563] transition hover:text-[#123f75]">Home</a>
        </li>
        <li className="text-[#9ca3af]" aria-hidden="true">&gt;</li>
        <li>
          <span className="font-semibold text-[#123f75]" aria-current="page">Our Gender Lens</span>
        </li>
      </ol>
    </nav>
  );
}
