import React from 'react';

import ProductItem from '../ProductItem/ProductItem';

import './ProductList.css';

const products = [
  { id: 1, title: 'Продукт 1', price: 5_000, description: 'Описание 1' },
  { id: 2, title: 'Продукт 2', price: 12_000, description: 'Описание 2' },
  { id: 3, title: 'Продукт 3', price: 5_000, description: 'Описание 3' },
  { id: 4, title: 'Продукт 4', price: 122, description: 'Описание 4' },
  { id: 5, title: 'Продукт 5', price: 5_000, description: 'Описание 5' },
  { id: 6, title: 'Продукт 6', price: 600, description: 'Описание 6' },
  { id: 7, title: 'Продукт 7', price: 5_500, description: 'Описание 7' },
  { id: 8, title: 'Продукт 8', price: 12_000, description: 'Описание 8' },
]

const ProductList = () => {
  const onAdd = () => {
  };

  return (
    <div className="list">
      {products.map(item => (
        <ProductItem
          product={item}
          onAdd={onAdd}
          className="item"
        />
      ))}
    </div>
  );
};

export default ProductList;
