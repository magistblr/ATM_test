import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { billsStateType } from '../../main/react/app/App';
import { changeBillsRestart } from '../../redux/actions';
import { Button, ButtonType } from '../Button/Button';
import './DropDown.scss';

type DropDownType = {
  data: billsStateType;
};

export const DropDown: React.FC<DropDownType & ButtonType> = ({ children, ...props }) => {
  const { data, disabled, type, loading, min, large, block, outlined, text, callback} = props;

  const [drop, setDrop] = useState<boolean>(false);
  const sortRef = React.useRef<HTMLInputElement>(null);

  const dispatch = useDispatch()

  const changeDropHandler = (id?: string) => {
    setDrop(!drop);
    if(id){
      data.filter(item => item.id === id ? dispatch(changeBillsRestart(item.bills))  : "")
    }
  };

  const handleOutsideClick  = (event:any) => {
      const path = event.path;
      if (!path.includes(sortRef.current)) {
        setDrop(false);
    };
  }

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick );
    return ()=> window.removeEventListener('click', handleOutsideClick )
  }, []);


  return (
    <div className="dropDown" ref={sortRef} onClick={()=> changeDropHandler}>
      <Button  callback={changeDropHandler} type={type} disabled={disabled} loading={loading} min={min} large={large} block={block} outlined={outlined} text={text}>{children}</Button>
        <div  className="dropDown__items-wrapper" >
              <ul className={`dropDown__items ${!drop && "dropDown__items_active"}`}>
                {data.map((elem) => (
                  <li key={elem.id} onClick={()=> changeDropHandler(elem.id)} className="dropDown__item">{elem.name}</li>
                ))}
              </ul>
        </div>
    </div>
  );
};
