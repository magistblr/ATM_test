  //@ts-ignore
  export function get(amountRequired, limits){

//     //@ts-ignore
//     function collect(amount, nominals){
//       if(amount === 0) return {}
//       if(!nominals.length) return

//       let currentNominal = nominals[0]                            // нулевой элемент массива(самый большой элемент)
//       let availableNotes = limits[currentNominal]                 // количество банкном текущего номинала
//       let notesNeeded = Math.floor(amount / currentNominal)   //получаем количество купюр
//       let numberOfNotes = Math.min(availableNotes, notesNeeded)  // количество банкнот необходимое

//       //@ts-ignore
//       let result = collect(amount - numberOfNotes * currentNominal, nominals.slice(1))
//       if(result){
//         return numberOfNotes ? {[currentNominal]: numberOfNotes, ...result} : result
//       }
//     }


//     let nominals = Object.keys(limits).map(Number).sort((a,b)=> b-a)
//     let bills = Object.values(limits).map(Number).sort((a,b)=> a-b)
//     console.log("nominals", nominals);
//     console.log("bills", bills);

//     return collect(amountRequired,  nominals)
  }



// // console.log(get(230, initialState.bills));
// console.log(get(250, initialState.bills));


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
