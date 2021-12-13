import React, { useState } from 'react';
import { Button, ButtonType } from '../Button/Button';
import './DropDown.scss';

type DropDownType = {
  data: string[];
};

export const DropDown: React.FC<DropDownType & ButtonType> = ({ children, ...props }) => {
  const { data, disabled, type, loading, min, large, block, outlined, text} = props;

  const [drop, setDrop] = useState<boolean>(false);
  const sortRef = React.useRef<HTMLInputElement>(null);

  const changeDropHandler = () => {
    setDrop(!drop);
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
    <div className="dropDown" ref={sortRef} onClick={changeDropHandler}>
      <Button  callback={changeDropHandler} type={type} disabled={disabled} loading={loading} min={min} large={large} block={block} outlined={outlined} text={text}>{children}</Button>
        <div  className="dropDown__items-wrapper" >
              <ul className={`dropDown__items ${!drop && "dropDown__items_active"}`}>
                {data.map((elem,i) => (
                  <li key={i} onClick={changeDropHandler}  className="dropDown__item">{elem}</li>
                ))}
              </ul>
        </div>
    </div>
  );
};
