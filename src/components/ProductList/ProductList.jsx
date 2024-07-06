import React from 'react';

import { useTelegram } from '../../hooks/useTelegram';

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

const getTotalPrice = (list = []) => {
  return list.reduce((acc, item) => {
    return acc += item.price;
  }, 0);
};

const ProductList = () => {
  const { tg } = useTelegram();

  const [addedItems, setAddedItems] = React.useState([]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id !== product.id);

    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();

      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`
      });
    }
  };

  return (
    <div className="list">
      {products.map(item => (
        <ProductItem
          product={item}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default ProductList;
