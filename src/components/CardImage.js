import React from 'react';

const CardImage = ({ image }) => {
  return (
    <>
      <div className="card mt-2 border-dark border-2">
        <img src={image.urls?.regular} className="img-fluid" />
      </div>
    </>
  );
};

export default CardImage;
