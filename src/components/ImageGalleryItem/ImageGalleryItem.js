import React from 'react';

export default function ImageGalleryItem(props) {
  return (
    <li className="ImageGalleryItem">
      <img src={props.src} alt={props.alt} className="ImageGalleryItem-image" />
    </li>
  );
}
