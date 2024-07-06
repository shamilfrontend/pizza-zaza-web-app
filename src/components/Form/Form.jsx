import React, {useEffect} from 'react';

import { useTelegram } from '../../hooks/useTelegram';

import './Form.css';

const Form = () => {
  const [city, setCity] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [subject, setSubject] = React.useState('physical');

  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    });
  }, []);

  useEffect(() => {
    if (!city || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [city, street]);

  return (
    <div className="form">
      <h3>Введите ваши данные</h3>

      <input
        value={city}
        type="text"
        className="input"
        placeholder="Город"
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        value={street}
        type="text"
        className="input"
        placeholder="Улица"
        onChange={(e) => setStreet(e.target.value)}
      />

      <select
        value={subject}
        className="app-select"
        onChange={(e) => setSubject(e.target.value)}
      >
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
