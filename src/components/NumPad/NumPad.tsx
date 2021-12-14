import React, { KeyboardEvent } from 'react'
import { useDispatch } from 'react-redux';
import { changeInputNumPad } from '../../redux/actions';
import { Button } from '../Button/Button';
import s from './NumPad.module.css';

export const NumPad = () => {

  const dispatch = useDispatch()


  
  const numbers = [
    {id: 1, value: '1'},
    {id: 2, value: '2'},
    {id: 3, value: '3'},
    {id: 4, value: '4'},
    {id: 5, value: '5'},
    {id: 6, value: '6'},
    {id: 7, value: '7'},
    {id: 8, value: '8'},
    {id: 9, value: '9'},
    {id: 10, value: '0'},
    {id: 11, value: '.'},
  ]
  console.log(numbers[0].value);


  const filter = (id: number, value: string) => {
    return numbers.filter(item => item.id === id ? dispatch(changeInputNumPad(value)) : "")
  }


  return (
    <div className={s.wrapper}>
      {numbers.map(item => <div className={s.num}><Button key={item.id}  block callback={() => filter(item.id, item.value)}>{item.value}</Button></div>)}
    </div>
  )
}
