import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a2e",
        height: "60px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxSizing: "border-box",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <p style={{ margin: 0, fontWeight: 700 }}>Header</p>
      <p style={{ margin: 0, color: "#b0b0c3" }}>👤 Jane</p>
    </div>
  );
};

export default Header;
