import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Display } from '../../../components/Display/Display';
import { DropDown } from '../../../components/DropDown/DropDown';
import s from './App.module.css';

function App() {
  return (
    <div className={s.wrapper}>
          <DropDown  type='success' data={["1", "2", "3", "4", "5", "6"]}>Выбрать набор купюр</DropDown>
      <div className={s.wrapper_outer}>
        <div className={s.wrapper_inner}>
          <Display/>
        </div>
      </div>
    </div>
  );
}

export default App;
