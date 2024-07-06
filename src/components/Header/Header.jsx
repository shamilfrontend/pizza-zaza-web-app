import React from 'react';

import { useTelegram } from '../../hooks/useTelegram';

import Button from '../Button/Button';

import './Header.css';

const Header = () => {
  const { onClose, user } = useTelegram();

  return (
    <div className="header">
      <span className="username">{ user?.username ?? 'Неизвестный пользователь' }</span>

      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
};

export default Header;
