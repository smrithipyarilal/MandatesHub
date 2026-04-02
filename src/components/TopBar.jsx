export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="topbar-right">
        <div className="profile-chip">
          <div className="avatar">S</div>
          <span>Smrithi</span>
        </div>
      </div>
    </header>
  );
}