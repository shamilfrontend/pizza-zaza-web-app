import React, { useCallback, useEffect } from 'react';

import { useTelegram } from '../../hooks/useTelegram';

import ProductItem from '../ProductItem/ProductItem';

import './ProductList.css';

const products = [
  {
    id: 1,
    title: 'Пицца Ассорти',
    price: 820,
    description: '600 грамм',
    img: '/images/pizza/1.jpeg'
  },
  {
    id: 2,
    title: 'Пицца Пепперони',
    price: 820,
    description: '600 грамм',
    img: '/images/pizza/2.jpeg'
  },
  {
    id: 3,
    title: 'Пицца Четыре сыра',
    price: 820,
    description: '620 грамм',
    img: '/images/pizza/3.jpeg'
  },
  {
    id: 4,
    title: 'Пицца Маргарита',
    price: 820,
    description: '580 грамм',
    img: '/images/pizza/4.jpeg'
  },
  {
    id: 5,
    title: 'Пицца Охотничья',
    price: 830,
    description: '610 грамм',
    img: '/images/pizza/5.jpeg'
  },
  {
    id: 6,
    title: 'Пицца Цезарь',
    price: 830,
    description: '610 грамм',
    img: '/images/pizza/6.jpeg'
  },
  {
    id: 7,
    title: 'Пицца Гавайская',
    price: 820,
    description: '580 грамм',
    img: '/images/pizza/7.jpeg'
  },
  {
    id: 8,
    title: 'Пицца Рио',
    price: 1200,
    description: '630 грамм',
    img: '/images/pizza/8.jpeg'
  },
  {
    id: 9,
    title: 'Пицца Скандинавская',
    price: 980,
    description: '600 грамм',
    img: '/images/pizza/9.jpeg'
  },
  {
    id: 10,
    title: 'Пицца Примавера',
    price: 870,
    description: '630 грамм',
    img: '/images/pizza/10.jpeg'
  },
]

const getTotalPrice = (list = []) => {
  return list.reduce((acc, item) => {
    return acc += item.price;
  }, 0);
};

const ProductList = () => {
  const { tg } = useTelegram();

  const [addedItems, setAddedItems] = React.useState([]);

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
    };

    fetch('http://localhost:8000/api/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }, [addedItems]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)

    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    };
  }, [onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id);

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
        color: '#32b545',
        text: `Купить ${getTotalPrice(newItems)} ₽`
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
