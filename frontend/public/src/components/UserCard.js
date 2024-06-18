import React from 'react';
import './UserCard.css'; // Assure-toi de créer et styliser ce fichier CSS selon tes besoins

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <div className="user-details">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-email">{user.email}</p>
        <p className="user-location">{user.location}</p>
      </div>
    </div>
  );
};

export default UserCard;
