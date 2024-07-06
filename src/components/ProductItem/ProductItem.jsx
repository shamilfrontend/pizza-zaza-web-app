import React from 'react';

import Button from '../Button/Button';

import './ProductItem.css';

const ProductItem = ({ product, onAdd }) => {
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
          <span>Стоимость: <b>{product.price} ₽</b></span>
        </div>
      </div>

      <Button
        className='add-btn'
        onClick={onAddHandler}
      >
        Добавить
      </Button>
    </div>
  );
};

export default ProductItem;
