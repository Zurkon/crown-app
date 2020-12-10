import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.css';

// the chaining array function below could result on poor performance
// TODO: refactor later
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">

      {
        items
          .filter((item, index) => index < 4)
          .map(({ id, name, price, imageUrl }) => (
            <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
          ))
      }

    </div>
  </div>
);

export default CollectionPreview;