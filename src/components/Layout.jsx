import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";

import IES from "../pages/IES";
import BRD from "../pages/BRD";
import Mapping from "../pages/Mapping";
import Features from "../pages/Features";
import Testing from "../pages/Testing";

export default function Layout() {
  const [activePage, setActivePage] = useState("IES");

  const renderPage = () => {
    switch (activePage) {
      case "IES":
        return <IES />;
      case "BRD":
        return <BRD />;
      case "Mapping":
        return <Mapping />;
      case "Features":
        return <Features />;
      case "Testing":
        return <Testing />;
      default:
        return <IES />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="main-section">
        <Topbar />
        <main className="workspace">{renderPage()}</main>
      </div>
    </div>
  );
}