import { useEffect, useState } from 'react';


  //@ts-ignore
  export function useGet(amountRequired, limits){
    const [get, setGet] = useState()
    //@ts-ignore
    useEffect(() => {
      //@ts-ignore
      function collect(amount, nominals){
        if(amount === 0) return {}
        if(!nominals.length) return

        let currentNominal = nominals[0]                            // нулевой элемент массива(самый большой элемент)
        let availableNotes = limits[currentNominal]                 // количество банкном текущего номинала
        let notesNeeded = Math.floor(amount / currentNominal)   // получаем количество купюр
        console.log(notesNeeded);
        
        let numberOfNotes = Math.min(availableNotes, notesNeeded)  // количество банкнот необходимое

        //@ts-ignore
        let result = collect(amount - numberOfNotes * currentNominal, nominals.slice(1))

        if(result){
          //@ts-ignore
          let arr = numberOfNotes ? {[currentNominal]: numberOfNotes, ...result}  : result
          return arr
        }
      }
      let nominals = Object.keys(limits).map(Number).sort((a,b)=> b-a)

      let bills = Object.values(limits).map(Number).sort((a,b)=> a-b)

      setGet(collect(amountRequired,  nominals))
    },[amountRequired, limits])

    return get
  }





  //@ts-ignore
  export function useBillsState(value1, value2){
    const [out, setOut] = useState()

    useEffect(() => {
      let obj = value1
      let obj2 = value2

      for (let key in obj) {
        let a = obj[key]
        let b = key
        for (let key in obj2) {
          let c = obj2[key]
          let d = key
          if(b === d){
            obj2[key] = c - a
          }
        }
      }
      setOut(obj2)
    }, [value1, value2])
    return out
  }



// console.log(get(250, stateBills));

















// const bills = Object.keys(initialState.bills).reverse()
// const num = Object.values(initialState.bills).reverse()
//   // console.log(bills);
//   // console.log(num);
//   //@ts-ignore
//   function multiply(a, b) {
//     let c = [];
//     for (let i=0; i<a.length;i++) {
//         c.push(a[i]*b[i]);
//     }
//     return c;
//   }

//   let c = multiply(bills, num);
//   console.log(c);
