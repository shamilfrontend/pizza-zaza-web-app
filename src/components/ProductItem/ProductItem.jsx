import React from 'react';

import { getFormattedPrice } from '../../helpers/getFormattedPrice';

import Button from '../Button/Button';

import './ProductItem.css';

const ProductItem = ({ product, onAdd, isAdded }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={'product'}>
      <div className="img-wrapper">
        <img src={product.img} alt=""/>
      </div>

      <div className="product-content">
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
        <div className="price">
          <span>Стоимость: <b>{getFormattedPrice(product.price)}</b></span>
        </div>
      </div>

      <Button
        className={`add-btn ${isAdded ? 'add-btn-added' : ''}`}
        onClick={onAddHandler}
      >
        {isAdded ? 'Убрать' : 'Добавить'}
      </Button>
    </div>
  );
};

export default ProductItem;
