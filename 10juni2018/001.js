/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 
*/
function soal1(param)
{
  if (param  === 0 ){
    return 'invalid input'
  }
    var result = []
    var exclamationMark = '!'
    var ad = "@";
    var hashtag = "#"
     for (var i=0; i<=param; i++){
       if (result.length===0){
         result.push (exclamationMark)
       } else if (result.length===1) {
         result.push (ad) 
       } else if (result.length===3 ){
         result.push (hashtag)
       }
     }
    return result 
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input
