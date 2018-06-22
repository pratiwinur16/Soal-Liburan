function spiralNumber(param)
{
    var arr=[];
    for(var y=0;y<param;y++){
      var row=[];
      for(var x=0;x<param;x++){
        row.push("");
      } 
      arr.push(row);
    }
    var counter=1;
    var x=0;var y=0;
    var position="top";
    while(counter<=param*param){
        if(position=="top"){
          if(x!==param){
            if(arr[y][x]==""){
              arr[y][x]=counter;
              counter++;
              x++;
            }else{
              position="right";y++;x--;
            }
          }else{
            position="right";y++;x--;
          }
        }
        else if(position=="right"){
          if(y!==param){
            if(arr[y][x]==""){
              arr[y][x]=counter;
              counter++;
              y++;
            }
            else{
              position="bottom";x--;y--;
            }
          }else{
            position="bottom";x--;y--;
          }
        }
        else if(position=="bottom"){
          if(x!==-1){
            if(arr[y][x]==""){
              arr[y][x]=counter;
              counter++;
              x--;
            }
            else{
              position="left";x++;y--;
            }
          }else{
            position="left";x++;y--;
          }
        }
        else if(position=="left"){
          if(y!==-1){
            if(arr[y][x]==""){
              arr[y][x]=counter;
              counter++;
              y--;
            }
            else{
              position="top";x++;y++;
            }
          }else{
            position="top";x++;y++;
          }
        }
        
    }
    return arr;
}

console.log(spiralNumber(3))
/*
    [
        [1,2,3],
        [8,9,4]
        [7,6,5]
    ]
*/

console.log(spiralNumber(10))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/
