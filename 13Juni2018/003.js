

// hanya boleh menggunakan rekursif
var res=1;
function soal3(param1, param2)
{
  //return Math.pow(param1,param2)
    res=res*param1;
    param2--;
   if (param2 === 0){
     var temp=res;
     res=1;
     return temp;
     }
   else {
  return soal3 (param1,param2 )}
}

console.log(soal3(2,5))
/*
    2 * 2 * 2 * 2 * 2 
    32
*/

console.log(soal3(3,3))
/*
    27
*/
console.log(soal3(5,6))

