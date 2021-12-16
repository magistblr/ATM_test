import React, { useCallback } from 'react'
import { ChangeEvent, KeyboardEvent, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeBills, changeError, changeInput, changeIssued, changeQuery } from "../../../redux/actions"
import { billsType } from "../../../redux/reducers/cashReducer"
import { StateType } from "../../../redux/store"
import { useBillsState, useGet } from "../../../utils/useGet"
import { Button } from "../../Button/Button"
import s from './Input.module.css';



type InputType = {
  setHelp: (value: boolean) => void
  setIssued: (value: boolean) => void
  setRemainder: (value: boolean) => void
  setBalanceActive: (value: boolean) => void
  help: boolean
}


export const Input: React.FC<InputType> = React.memo(({setHelp, setIssued, setRemainder, setBalanceActive,help}) => {


  const dispatch = useDispatch()
  const input = useSelector<StateType, string>(state => state.cashPage.input)
  const error = useSelector<StateType, boolean>(state => state.cashPage.error)
  const stateBills = useSelector<StateType, billsType>(state => state.cashPage.bills)
  const query = useSelector<StateType, string>(state => state.cashPage.query)

  const get = useGet(query, stateBills)
  const out = useBillsState(get, stateBills)

  console.log(get);
  console.log(out);


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.currentTarget.value))
  }

  const addItemHandler = () => {
    if(!error){
      if (input.trim() !== '') {
        if(get){
          dispatch(changeIssued(get))
        }
        if(out){
          dispatch(changeBills(out))
        }
        dispatch(changeInput(''))
      }
    }
    dispatch(changeQuery(input))
    setBalanceActive(false)
    setHelp(true)
    setIssued(true)
    setRemainder(true)
  }

  useEffect(() => {
    console.log("сработал");
    if(!help){

      dispatch(changeInput(''))
    }
    if(!help && get){

      dispatch(changeQuery(''))
    }
  }, [help, get])


  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
        addItemHandler();
    }
  }

  useEffect(() => {
    const validInput = /^\d+(\.\d{2})?$/

    if (input.length === 0) return
    if (!validInput.test(input)) {
        dispatch(changeError(true));
    }
    if (validInput.test(input)) {
      dispatch(changeError(false));
    }
  }, [input])


  return (
    <label className={s.wrapper}>
      {error ? <p className={s.text_error}>Пожалуйста введите сумму в формате '1234.29' или '1234'</p> : <p className={s.text}>Введите сумму</p>}
      <input  className={error ? `${s.error} ${s.input}` : s.input}
              type="text"
              onChange={onChangeHandler}
              onKeyPress={onKeyPressHandler}
              value={input}
              />
      <div className={s.btn}><Button callback={addItemHandler} disabled={error || input.length === 0}>Снять</Button></div>
    </label>
  )
}
)
