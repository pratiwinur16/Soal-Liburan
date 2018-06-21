/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
//x untuk sumbu x, y untuk sumbu y// 

function benderaInggris(param) {
  if (param % 2===0 ){
    return 'invalid input'
  }
  var tampil = ""
  for (var y = 0 ; y<param;y++){
    var baris="";
    if (y==Math.floor(param/2)){
        baris = baris + "*************"
    }else{
      for (var x= 0 ; x < 3; x++){
        if (x==1){
          baris = baris + "*     "
        } else {
          baris = baris + "'     "
        }
      }
    } 
    tampil = tampil + baris + '\n';
  }
 return tampil 
}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input
