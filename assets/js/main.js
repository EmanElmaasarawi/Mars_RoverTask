
var x ; // Rover x
var  y ; // Rover y
var dir;// Rover direction
 //"NOURTH", "EAST", "SOUTH", "WEST"
const str_dir = [ "N", "E", "S", "W" ];



 function constructor (x,y,dir) {
            x = x;
            y =y;
            dir = dir;
  }

  
  // User clicked on the compute button
  // take coordinates and directions from the coodinates field, and message pattern to compute the new coordinates
  document.getElementById('compute').addEventListener('click', function() {
    var coodinatesvalue = document.getElementById('coodinates').value;
    var Messagevalue = document.getElementById('Message').value;
    //if (coodinatesvalue && Messagevalue) {
      compute(coodinatesvalue,Messagevalue);
    //}
  });
  
function compute(coodinatesvalue,Messagevalue)
{ 
  const str = coodinatesvalue.split(",");
 x=str[0];
 y=str[1];
 dir=str[2];
 // var rover =new constructor();
  Move(Messagevalue);
  result.innerHTML= `${x},${y},${dir}`;
} 
 

  function Foreward()
  {
      switch (dir)
      {
          case "N":
                  ++y;
              break;
          case "W":
            --x;
              break;
          case "S":
            --y;
              break;
          case "E":
            ++x;
              break;
          default:
              break;
      }
  }
  function Backward()
    {
        switch (dir)
        {
            case "N":
              --y;
                break;
            case "W":
              ++x;
                break;
            case "S":
              ++y;
                break;
            case "E":
              --x;
                break;
            default:
                break;
        }
  }

  function Move(Messagevalue)
    {
      const messages = Messagevalue.split("");
      for (let i = 0; i < messages.length; i++) 
      {
            switch (messages[i])
            {
                case 'L':
                    TurnLeft();
                    break;
                case 'R':
                    TurnRight();
                    break;
                case 'F':
                    Foreward();
                    break;
                case 'B':
                    Backward();
                    break;
                default:
                    break;
            }
        }
  }

  function TurnLeft()
    {
        let index = str_dir.indexOf(dir);
        let lenstr_dir=str_dir.length;
        if (index > -1 && index < lenstr_dir)
        {
            dir = str_dir[(index - 1 + lenstr_dir) % lenstr_dir];
        }
        else
        {
            // throw Exception;  
        }
  }
  function TurnRight()
    {
      let index = str_dir.indexOf(dir);
      let lenstr_dir=str_dir.length;
        if (index > -1 && index < lenstr_dir)
        {
            dir = str_dir[(index + 1) % lenstr_dir];
        }
        else
        {
            // throw Exception;  
        }
  }

  

  