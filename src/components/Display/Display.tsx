import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, changeBalanceGet, changeError } from '../../redux/actions';
import { billsType } from '../../redux/reducers/cashReducer';
import { StateType } from '../../redux/store';
import { Button } from '../Button/Button';
import s from './Display.module.css';
import s1 from './Input.module.css';

export const Display = () => {

  const [giveOut, setGiveOut] = useState(false)
  const [withdraw, setWithdraw] = useState(false)
  const [balanceActive, setBalanceActive] = useState(false)


  const text = useSelector<StateType, string>(state => state.cashPage.text)
  const bills = useSelector<StateType, billsType>(state => state.cashPage.bills)
  const error = useSelector<StateType, boolean>(state => state.cashPage.error)

  const changeGiveOut = () => {
    setGiveOut(true)
  }

  const changeGiveOutWithdraw = () => {
    setGiveOut(false)
    setWithdraw(false)
  }

  const billsArr = Object.keys(bills).reverse()
  const billsArr1 = Object.values(bills).reverse()
  console.log(billsArr);
  
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_inner}>
        <div className={s.btn_help}>
          <Button type='success' callback={() => setBalanceActive(!balanceActive)}>{balanceActive ? "Скрыть" : "Показать остаток"}</Button>
          {balanceActive && <div className={s.bills_wrapper}>
                              <div>{billsArr.map((elem, index) => <div key={index}>{elem}</div>)}</div>
                              <div>{billsArr1.map((elem, index) => <div key={index}> = {elem}</div>)}</div>
                            </div>
          }
        </div>

        {giveOut && !withdraw && <Input changeBalance={changeBalanceGet} textBtn={"Снять"}/>}

        {!giveOut && !withdraw &&
          <>
            <div className={s.information}>
              <div className={s.text}>
                {text}
              </div>
                <Button min callback={changeGiveOutWithdraw}>ОК</Button>
            </div>

            <div className={s.buttons}>
              <Button type='success' callback={changeGiveOut}>Снять</Button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

type InputType = {
  textBtn: string
  changeBalance: (value: number) => void
}


export const Input: React.FC<InputType> = ({textBtn, changeBalance}) => {


  const dispatch = useDispatch()
  const input = useSelector<StateType, string>(state => state.cashPage.input)
  const error = useSelector<StateType, boolean>(state => state.cashPage.error)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.currentTarget.value))
  }


  const addItemHandler = () => {
    const base = input.split(" ")
      if(error){
        if (input.trim() !== '') {
          dispatch(changeBalance(+base))
          dispatch(changeInput(''))
      }
    }
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
        addItemHandler();
    }
  }

  useEffect(() => {
    const validInput = /^-?\d+(\.\d{2})?$/

    if (input.length === 0) return
    if (!validInput.test(input)) {
        dispatch(changeError(true));
    }
    if (validInput.test(input)) {
      dispatch(changeError(false));
    }
  }, [input])


  return (
    <form className={s1.wrapper}>
      <p>Введите сумму</p>
      <input  className={error ? `${s1.error} ${s1.input}` : s1.input}
              title="Разрешено использовать только цифры и '.'"
              type="text"
              onChange={onChangeHandler}
              onKeyPress={onKeyPressHandler}
              value={input}
              />
      {error && <span>Пожалуйста введите сумму в формате '1234.29' или '1234'</span>}
      <Button callback={addItemHandler} disabled={error}>{textBtn}</Button>
    </form>
  )
}

