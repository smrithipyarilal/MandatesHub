const navItems = [
  { key: "IES", label: "IES Document" },
  { key: "BRD", label: "BRD Document" },
  { key: "Mapping", label: "Mapping Document" },
  { key: "Features", label: "Features Workspace" },
  { key: "Testing", label: "Testing Assistance" },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img
          src="/boa.jpg"
          alt="MandatesHub logo"
          className="sidebar-logo-image"
        />
        <div className="sidebar-logo-text">MandatesHub</div>
      </div>

      <div className="sidebar-dropdown-wrap">
        <select className="sidebar-dropdown" defaultValue="EPIC - April 2026">
          <option>EPIC - April 2026</option>
          <option>ENG - April 2026</option>
          <option>EPIC - October 2025</option>
          <option>ENG - October 2025</option>
          <option>EPIC - April 2025</option>
          <option>ENG - April 2025</option>
          <option>EPIC - October 2024</option>
          <option>ENG - October 2024</option>
          <option>EPIC - April 2024</option>
          <option>ENG - April 2024</option>
        </select>
      </div>

        <nav className="sidebar-nav">
            {navItems.map((item) => (
            <button
            key={item.key}
            className={`nav-item ${activePage === item.key ? "active" : ""}`}
            onClick={() => setActivePage(item.key)}
            >
            {item.label}
            </button>
            ))}
        </nav>
    </aside>
  );
}