import React from 'react';

import { useTelegram } from '../../hooks/useTelegram';

import Button from '../Button/Button';

import './Header.css';

const Header = () => {
  const { onClose, user } = useTelegram();

  return (
    <div className="header">
      <img
        src={user?.photo_url ?? 'blob:https://web.telegram.org/c62ac36e-f8eb-4547-be3c-62caff751300'}
        alt=""
        className="header-img"
      />

      <span className="username">{ user?.username ?? 'Неизвестный пользователь' }</span>

      <Button
        className="header-btn"
        onClick={onClose}
      >
        Закрыть
      </Button>
    </div>
  );
};

export default Header;
