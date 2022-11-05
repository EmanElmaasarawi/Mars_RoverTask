
 //"NOURTH", "EAST", "SOUTH", "WEST"
const str_dir = [ "N", "E", "S", "W" ];
const dir_Step = [ "F", "B", "L", "R" ];

var obstacles = [];
var DestinationPath = [];
var Message = [];


function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
}
function storeCoordinate(xVal, yVal, array,dir) {
    array.push({x: xVal, y: yVal,d:dir});
}
//[[1,4], [3,5], [7,4]]
storeCoordinate(1, 4, obstacles);
storeCoordinate(3, 5, obstacles);
storeCoordinate(7, 4, obstacles);
////////////////////////////////////////


function CheckPoints(sx, sy, dx, dy,sDirStp,dDirStp) {
debugger;
DestinationPath=[];

var stp;

   storeCoordinate(dx, dy, DestinationPath,dDirStp);
    while(true){
       
        if(sx == dx && sy == dy)
        {
            storeCoordinate(dx, dy, DestinationPath,dDirStp);
            Message.push({m: stp});
            return true;
        }
        if(dx > sx )
        {   
            dx--;
            stp="B";
            dDirStp="W";
            storeCoordinate(dx, dy, DestinationPath,dDirStp);
            Message.push({m: stp});
            if(obstacles.some(value => { return value.x === dx && value.y === dy} ))
            return false;
        } 
        if(dx < sx )
        {   
            dx++;
            stp="F";
            dDirStp="E";
            storeCoordinate(dx, dy, DestinationPath,dDirStp);
            Message.push({m: stp});
            if(obstacles.some(value => { return value.x === dx && value.y === dy} ))
            return false;
        } 
        if(sx == dx & dy>sy) {
            dy--;
            stp="B";
            dDirStp="S";
            storeCoordinate(dx, dy, DestinationPath,dDirStp);
            Message.push({m: stp});
            if(obstacles.some(value => { return value.x === dx && value.y === dy} ))
            return false;
        }
        if(sx == dx & dy<sy) {
            dy++;
            stp="F";
            dDirStp="N";
            storeCoordinate(dx, dy, DestinationPath,dDirStp);
            Message.push({m: stp});
            if(obstacles.some(value => { return value.x === dx && value.y === dy} ))
            return false;
        }
        
        
    }};
   
    
document.getElementById('compute').addEventListener('click', function() {
   
    result.innerText = "" ;
    var source = document.getElementById('Source').value;
    var destination = document.getElementById('Destination').value;
    source = source.split(",");
    destination = destination.split(",");
        let x = parseInt(source[0]), y = parseInt(source[1]), sDirStp = source[2];
        let dx = parseInt(destination[0]), dy = parseInt(destination[1]), dDirStp = destination[2]; 
        

    if (CheckPoints(x,y,dx,dy,sDirStp,dDirStp))
    {
        result.innerHTML = '';
        MessageValue.innerHTML='';
        for (var i = DestinationPath.length-1; i >= 0; i--) {
           var Px = DestinationPath[i].x;
           var Py = DestinationPath[i].y;
           var d = DestinationPath[i].d;
          // result.innerText += "("+Px+","+Py+")"+" -->" ;
          result.innerHTML += `(${Px},${Py},${d}) -->` ;
           
          }
          for (var i = Message.length-1; i >= 0 ; i--) {
            var M = Message[i].m;
            MessageValue.innerHTML += `${M}` ;
           }
    } 
    else
       {
        for (var i = DestinationPath.length-1; i >= 0; i--) {
           var Px = DestinationPath[i].x;
           var Py = DestinationPath[i].y;
           var d = DestinationPath[i].d;
          // result.innerText += "("+Px+","+Py+")"+" -->" ;
           result.innerHTML += `(${Px},${Py},${d}) -->` ;
           
          }
          MessageValue.innerHTML = "STOPPED";
       }
  });

