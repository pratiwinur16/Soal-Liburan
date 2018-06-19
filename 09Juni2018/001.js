function soal1(param)
{
  if (param < 1 ) return ('invalid input');
  var kosong = Array(Math.floor((param - 1) / 2)).fill('');
   return param % 2 == 0 
   ? [...kosong, '*','*', ...kosong] 
   : [...kosong, '*', ...kosong]
}




// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']

