import React from "react";

const notifications = [
  {
    id: 1,
    title: "João Rodrigues has requested",
    highlight: "Petsitting",
    details: "on 15/04/2025 at 21:00h.",
    action: "See details",
  },
  {
    id: 2,
    title: "Pedro Fernandes’s",
    highlight: "Petsitting",
    details: "service has been closed. You will receive your payment now.",
    action: "See details",
  },
  {
    id: 3,
    title: "Maria José has left you a",
    highlight: "review",
    details: ". Check it out!",
    action: "See details",
  },
  {
    id: 4,
    title: "The Pet-Care admins have concluded the dispute. You have lost and won’t receive any money for it.",
    highlight: "",
    details: "",
    action: "See details",
  },
];

const PetTakerNotifications = () => (
  <div className="pettaker-notifications-container">
    <div className="notifications-header">
      <button className="back-btn">
        {/* Back SVG */}
        {/* ...existing code... */}
      </button>
      <h1 className="notifications-title">Notifications</h1>
    </div>
    <div className="notifications-list">
      {notifications.map((n, idx) => (
        <div className="notification-card" key={n.id}>
          <div className="notification-content">
            <span>
              {n.title}{" "}
              {n.highlight && (
                <span className="notification-highlight">{n.highlight}</span>
              )}
              {n.details && (
                <span className="notification-details"> {n.details}</span>
              )}
            </span>
            <span className="notification-action">{n.action}</span>
          </div>
        </div>
      ))}
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

export default PetTakerNotifications;