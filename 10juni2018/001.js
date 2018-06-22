/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 
     /*FUNCTION soal1
      parameter:
      - param 
    START
      IF param EQUALS TO 0 
        RETURN INVALID INPUT
      STORE Result with empty array 
      Sotre exclamationmark with "!"
      sotre ad with '@'
      sotre hastag with '#'
      sotre counter with 0 
      FOR `i` to length of param
        if counter equals to 0 then 
          add `exclamationmark` index of 0 to `result`
          increment counter 
        if  counter equals to 1 then 
          add `ad` index of 1 to `result`
          increment counter 
         if  counter equals to 1 then 
          add `hastag` index of 2 to `result`
          counter set to 0 
        ENDIF 
      ENDFOR 
      RETURN result 
    ENd function 
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
    var counter=0;
     for (var i=0; i<=param; i++){
       if (counter===0){
         result.push (exclamationMark)
         counter++
       } else if (counter===1) {
         result.push (ad) 
         counter++
       } else if (counter===2 ){
         result.push (hashtag)
         counter = 0
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
*/

