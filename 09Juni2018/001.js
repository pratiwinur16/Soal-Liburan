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

////cara 2 /// 
function soal1(param){
  if(param<=0){return "invalid input"}
  var result =[];
 for (var i = 0 ; i<param; i++){
    if(param%2==0){
        if(param/2==i || param/2-1==i){
            result.push('*')
        }else{
            result.push('')
        }
    }else{
        if(Math.floor(param/2)==i){
            result.push('*')
        }else{
            result.push('')
        }
    }
     
     
   }

  return result;
  }
