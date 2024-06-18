import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <Link to={`/listing/${listing.id}`} className="listing-card-link">
        <img src={listing.imageUrl} alt={listing.title} className="listing-card-image" />
        <div className="listing-card-details">
          <h2 className="listing-card-title">{listing.title}</h2>
          <p className="listing-card-price">{listing.price} Pi</p>
          <p className="listing-card-description">{listing.description}</p>
        </div>
      </Link>
    </div>
  );
};

ListingCard.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListingCard;
