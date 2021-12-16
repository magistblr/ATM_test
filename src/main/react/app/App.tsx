import { Display } from '../../../components/Display/Display';
import { DropDown } from '../../../components/DropDown/DropDown';
import { NumPad } from '../../../components/NumPad/NumPad';
import  { v1 }  from 'uuid';
import s from './App.module.css';
import { billsType } from '../../../redux/reducers/cashReducer';

export type billsStateType = Array<{
  id: string
  name: string
  bills: billsType
}>

function App() {


  const one = v1()
  const two = v1()
  const three = v1()
  const four = v1()
  const five = v1()
  const six = v1()


  const billsState: billsStateType = [
    {
      id: one,
      name: "1",
      bills: {
        "5000": 100,
        "2000": 400,
        "1000": 1000,
        "500": 3000,
        "200": 5000,
        "100": 8000,
        "50": 10000
      }
    },
    {
      id: two,
      name: "2",
      bills: {
        "5000": 476,
        "2000": 345,
        "1000": 6741,
        "500": 4362,
        "200": 234,
        "100": 1643,
        "50": 3450
      }
    },
    {
      id: three,
      name: "3",
      bills: {
        "5000": 234,
        "2000": 678,
        "1000": 845,
        "500": 2451,
        "200": 9654,
        "100": 2345,
        "50": 234
      }
    },
    {
      id: four,
      name: "4",
      bills: {
        "5000": 546,
        "2000": 562,
        "1000": 2543,
        "500": 4365,
        "200": 2154,
        "100": 124,
        "50": 342
      }
    },
    {
      id: five,
      name: "5",
      bills: {
        "5000": 2732,
        "2000": 347,
        "1000": 479,
        "500": 7556,
        "200": 3296,
        "100": 1257,
        "50": 3854
      }
    },
    {
      id: six,
      name: "6",
      bills: {
        "5000": 73,
        "2000": 147,
        "1000": 279,
        "500": 356,
        "200": 696,
        "100": 857,
        "50": 854
      }
    },
  ]



  return (
    <div className={s.wrapper}>
          <DropDown  type='success' data={billsState}>Выбрать набор купюр</DropDown>
      <div className={s.wrapper_outer}>
        <div className={s.wrapper_inner}>
          <Display/>
          <NumPad/>
        </div>
      </div>
    </div>
  );
}

export default App;
