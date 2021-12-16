import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { billsType, issuedType } from '../../redux/reducers/cashReducer';
import { StateType } from '../../redux/store';
import { useBillsState, useGet } from '../../utils/useGet';
import { Button } from '../Button/Button';
import s from './Display.module.css';
import { Input } from './Input/Input';

export const Display = () => {


  const [help, setHelp] = useState(false)
  const [balanceActive, setBalanceActive] = useState(false)
  const [issued, setIssued] = useState(false)
  const [remainder, setRemainder] = useState(false)

  const bills = useSelector<StateType, billsType>(state => state.cashPage.bills)
  const issuedState = useSelector<StateType, issuedType>(state => state.cashPage.issued)
  const notIssuedState = useSelector<StateType, issuedType>(state => state.cashPage.notIssued)

  const changeHelpBtn = () => {
    setHelp(!help)
    setBalanceActive(true)
    setIssued(false)
    setRemainder(false)
  }
  console.log("balanceActive",balanceActive);
  console.log("help",help);
  console.log("issued",issued);
  console.log("remainder",remainder);




  function container (text: string, value: any) {
    const createKeys = (value: any) => {
      return Object.keys(value).reverse()
    }
  
    const createValues = (value: any) => {
      return Object.values(value).reverse()
    }
    return (
          <div className={s.container}>
            <div className={s.bills_text}>{text}</div>
            <div className={s.bills}>
              <div>{createKeys({...value}).map((elem, index) => <div key={index}>{elem}</div>)}</div>
              <div>{createValues({...value}).map((elem, index) => <div key={index}> = {elem}</div>)}</div>
            </div>
          </div>
    )
  }


  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_inner}>
        <div className={s.btn_help}>
          <Button type='success' callback={changeHelpBtn}>{help ? "Скрыть" : "Показать купюры"}</Button>
          {help && <div className={s.wrapper_bills}>
                              {balanceActive &&
                                    container('Доступные купюры', bills)
                              }
                              {issued &&
                                    container('Выдано', issuedState)
                              }
                              {remainder &&
                                    container('Невыданные купюры', notIssuedState)
                              }
                            </div>
          }
        </div>
        {!help &&
                          <Input
                                setHelp={setHelp}
                                setIssued={setIssued}
                                setRemainder={setRemainder}
                                setBalanceActive={setBalanceActive}
                                help={help}
                                />
        }
      </div>
    </div>
  )
}




