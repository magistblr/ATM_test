import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeBalanceMake, changeBalanceGet } from '../../redux/actions';
import { StateType } from '../../redux/store';
import { Button } from '../Button/Button';
import s from './Display.module.css';
import s1 from './Input.module.css';

export const Display = () => {

  const [giveOut, setGiveOut] = useState(false)
  const [withdraw, setWithdraw] = useState(false)
  const [balanceActive, setBalanceActive] = useState(false)


  const text = useSelector<StateType, string>(state => state.cashPage.text)
  const balance = useSelector<StateType, number>(state => state.cashPage.balance)

  const changeGiveOut = () => {
    setGiveOut(true)
  }

  const changeWithdraw = () => {
    setWithdraw(true)
  }

  const changeGiveOutWithdraw = () => {
    setGiveOut(false)
    setWithdraw(false)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_inner}>
        <div className={s.btn_help}>
          <Button type='success' callback={() => setBalanceActive(true)}>Показать остаток</Button>
          {balanceActive && <div>{balance}</div>}
        </div>

        {giveOut && !withdraw && <Input changeBalance={changeBalanceGet} textBtn={"Снять"}/>}
        {!giveOut && withdraw && <Input changeBalance={changeBalanceMake} textBtn={"Внести"}/>}

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
              <Button type='success' callback={changeWithdraw}>Внести</Button>
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

  const [value, setValue] = useState("")

  const dispatch = useDispatch()

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }


  const addItemHandler = () => {
    const base = value.split(" ")
    if (value.trim() !== '') {
        dispatch(changeBalance(+base))
        setValue('');
    }
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
        addItemHandler();
    }
  }


//   useEffect(() => {
//     const validInput = /[0-9]/

//     if (!validInput.test(text)) {
//         setInvalid(true);
//     }
//     if (validInput.test(text)) {
//         setInvalid(false);
//     }
// }, [text])


  return (
    <form className={s1.wrapper}>
      <p>Введите сумму</p>
      <input  className={s1.input}
              title="Разрешено использовать только цифры и '.'"
              type="number"
              onChange={onChangeHandler}
              onKeyPress={onKeyPressHandler}
              value={value}
              name='message'
              />
      <Button callback={addItemHandler}>{textBtn}</Button>
    </form>
  )
}

