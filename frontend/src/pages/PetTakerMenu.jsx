import React from "react";

const PetTakerMenu = () => (
  <div className="pet-taker-menu">
    <div className="ellipse-bg"></div>
    <img
      className="profile-img"
      src="https://placehold.co/198x205"
      alt="Profile"
    />
    <div className="services-section">
      <h2 className="section-title">My services</h2>
      <span className="location">Glória, Aveiro</span>
      <div className="service-card pet-walking">
        <div className="service-header">
          <span className="service-title">Pet-Walking</span>
          <span className="service-status pending">2 pending</span>
        </div>
        <div className="service-details">
          <span className="service-schedule">Schedule-type: <span className="highlight">I choose</span></span>
          <span className="service-price">Price: <span className="highlight">5$/hour</span></span>
        </div>
        <span className="service-message error">No new requests.</span>
      </div>
      <div className="service-card pet-sitting">
        <div className="service-header">
          <span className="service-title">Pet-sitting</span>
        </div>
        <div className="service-details">
          <span className="service-schedule">Schedule-type: <span className="highlight">Client chooses</span></span>
          <span className="service-price">Price: <span className="highlight">25$/day</span></span>
        </div>
        <span className="service-status ongoing">On going</span>
      </div>
      <div className="service-card pet-training">
        <div className="service-header">
          <span className="service-title">Pet-Training</span>
        </div>
        <div className="service-details">
          <span className="service-schedule">Schedule-type: <span className="highlight">I choose</span></span>
          <span className="service-price">Price: <span className="highlight">20$/hour</span></span>
        </div>
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
      <div className="add-service-btn">
        {/* Add Circle SVG */}
        {/* ...existing code... */}
      </div>
      <div className="settings-btn">
        {/* Settings SVG */}
        {/* ...existing code... */}
        <span className="settings-badge">3 +</span>
      </div>
    </div>
  </div>
);

export default PetTakerMenu;