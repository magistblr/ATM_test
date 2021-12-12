import React from 'react';
import { Button } from '../../../components/Button/Button';
import s from './App.module.css';

function App() {
  return (
    <div className={s.wrapper}>
      <Button type='success'>Выдать</Button>
      <Button type='success'>Отмена</Button>
    </div>
  );
}

export default App;
