import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <img src={imageUrl} alt={title} width="100%" height="200px" style={{ objectFit: 'cover', borderRadius: '5px' }} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
