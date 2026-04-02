import { useState } from "react";
import { HotTable } from "@handsontable/react-wrapper";
import { registerAllModules } from "handsontable/registry";
import "handsontable/styles/handsontable.css";
import "handsontable/styles/ht-theme-main.css";

registerAllModules();

const initialSheetData = Array.from({ length: 30 }, () =>
  Array.from({ length: 20 }, () => "")
);

export default function ContentPanel({ title }) {
  const [viewMode, setViewMode] = useState("sheet");
  const [version, setVersion] = useState("Version 3");
  const [notes, setNotes] = useState("");
  const [sheetData, setSheetData] = useState(initialSheetData);

  return (
    <div className="content-panel-wrapper">
      <div className="content-panel-toolbar">
        <div className="split-toggle">
          <button
            className={`split-toggle-btn ${viewMode === "sheet" ? "active" : ""}`}
            onClick={() => setViewMode("sheet")}
          >
            ▦
          </button>

          <div className="split-divider" />

          <button
            className={`split-toggle-btn ${viewMode === "notes" ? "active" : ""}`}
            onClick={() => setViewMode("notes")}
          >
            ☰
          </button>
        </div>

        <div className="toolbar-right">
          <select
            className="version-dropdown"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          >
            <option>Version 3</option>
            <option>Version 2</option>
            <option>Version 1</option>
          </select>

          <button className="upload-btn">+</button>
        </div>
      </div>

      {viewMode === "sheet" ? (
        <div className="sheet-area">
          <HotTable
            data={sheetData}
            rowHeaders={true}
            colHeaders={true}
            width="100%"
            height={600}
            stretchH="none"
            contextMenu={true}
            copyPaste={true}
            manualColumnResize={true}
            manualRowResize={true}
            autoWrapRow={true}
            autoWrapCol={true}
            minRows={30}
            minCols={12}
            manualColumnMove={true}
            colWidths={120}
            licenseKey="non-commercial-and-evaluation"
            afterChange={(changes, source) => {
              if (!changes || source === "loadData") return;
              setSheetData((prev) => [...prev]);
            }}
          />
        </div>
      ) : (
        <div className="notes-area-wrapper">
          <textarea
            className="notes-area"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write notes here..."
          />
        </div>
      )}
    </div>
  );
}