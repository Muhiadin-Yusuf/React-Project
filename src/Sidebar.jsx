import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a2e",
        height: "800px",
        width: "200px",
        color: "#e0e0e0",
        padding: "16px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
      }}
    >
      <p style={{ color: "#fff", fontWeight: 700 }}>Acme</p>
      <p
        style={{
          padding: "8px",
          borderRadius: "6px",
          background: "rgba(108,99,255,.25)",
          color: "#a29bfe",
        }}
      >
        Home
      </p>
      <p style={{ padding: "8px" }}>Dashboard</p>
      <p style={{ padding: "8px" }}>Projects</p>
      <p style={{ padding: "8px" }}>Settings</p>
    </div>
  );
};

export default Sidebar;
