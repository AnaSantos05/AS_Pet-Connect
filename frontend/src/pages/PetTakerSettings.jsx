import React from "react";

const PetTakerSettings = () => (
  <div className="pettaker-settings-container">
    <div className="ellipse-bg"></div>
    <img
      className="profile-img"
      src="https://placehold.co/198x205"
      alt="Profile"
    />
    <button className="logout-btn">LogOut</button>
    <div className="settings-section">
      <div className="settings-card">
        <span className="settings-title">Profile</span>
      </div>
      <div className="settings-card">
        <span className="settings-title">History</span>
      </div>
      <div className="settings-card">
        <span className="settings-title">Language</span>
      </div>
      <div className="settings-card">
        <span className="settings-title">Notifications</span>
        <span className="settings-badge">3 +</span>
      </div>
      <div className="settings-card">
        <span className="settings-title">About Us</span>
      </div>
    </div>
    <div className="bottom-bar">
      <button className="icon-btn">
        {/* Paw SVG */}
        {/* ...existing code... */}
      </button>
      <button className="icon-btn">
        {/* Map SVG */}
        {/* ...existing code... */}
      </button>
      <button className="icon-btn">
        {/* Settings SVG */}
        {/* ...existing code... */}
      </button>
    </div>
  </div>
);

export default PetTakerSettings;