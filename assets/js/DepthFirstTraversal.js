// JavaScript program to print all
// paths from a source to
// destination.
 
let  v;
 
let adjList;
 
// A directed graph using
// adjacency list representation
function Graph(vertices)
{
    // initialise vertex count
        v = vertices;
  
        // initialise adjacency list
        initAdjList();
}
 
// utility method to initialise
    // adjacency list
function initAdjList()
{
    adjList = new Array(v);
  
        for (let i = 0; i < v; i++) {
            adjList[i] = [];
        }
}
 
// add edge from u to v
function addEdge(u,v)
{
    // Add v to u's list.
        adjList[u].push(v);
}
 
// Prints all paths from
    // 's' to 'd'
function printAllPaths(sx,sy, dx,dy)
{
    debugger;
     var isVisited = new Array(v);
     
     for(let i=0;i<isVisited.length;i++){
        isVisited[i]=false;
        
    }
        let pathList = [];
  
        // add source to path[]
        pathList.push({x:sx,y:sy});
  
        // Call recursive utility
        printAllPathsUtil(sx,sy, dx,dy, isVisited, pathList);
}
 
// A recursive function to print
    // all paths from 'u' to 'd'.
    // isVisited[] keeps track of
    // vertices in current path.
    // localPathList<> stores actual
    // vertices in the current path
function printAllPathsUtil(sx,sy, dx,dy,isVisited,localPathList)
{
    if (sx == dx && sy == dy) {
        debugger;

        for (var i = 0; i < localPathList.length; i++) {
            var Px = localPathList[i].x;
            var Py = localPathList[i].y;
           
            MessageValue.innerHTML+="(" + Px+","+Py+")";
            
           }
           
            // if match found then no need to
            // traverse more till depth
            return;
        }
  
        // Mark the current node
        var currentIndexToTrue = Points.findIndex(function(p) {
            return p.x == sx && p.y == sy
          });
        isVisited[currentIndexToTrue] = true;
  
        // Recur for all the vertices
        // adjacent to current vertex
        for (let i=0;i< Points.length;i++) {
            var _pSx=Points[i].x;
            var _pSy=Points[i].y;
            var index = Points.findIndex(function(p) {
                return p.x == _pSx && p.y == _pSy
              });
            if (!isVisited[index]) {
                // store current node
                // in path[]
                localPathList.push({x:_pSx,y:_pSy});
                printAllPathsUtil(_pSx,_pSy, dx,dy,isVisited, localPathList);
  
                // remove current node
                // in path[]
                var localPathIndex = localPathList.findIndex(function(p) {
                    return p.x == _pSx && p.y == _pSy
                  });
                localPathList.splice(localPathIndex,1);
            }
        }
 
        // Mark the current node
        var currentIndexToFalse = Points.findIndex(function(p) {
            return p.x == _pSx && p.y == _pSy
          });
        isVisited[currentIndexToFalse] = false;
}
 
 // Driver program
// Create a sample graph


function CreatePointsFromSToD(sx, sy, dx, dy)
{
  
   for(let _sx = sx ; _sx<=dx;_sx++)
   {
    if(sy<dy){
        for(let _sy=sy ;_sy<=dy;_sy++)
        Points.push({x:_sx,y:_sy});
}
else if(sy>=dy){
    for(let _sy=dy ;_sy<=sy;_sy++)
    Points.push({x:_sx,y:_sy});

}
}}
function UInt4(value) {
	return (value & 0xF);
};
// arbitrary source
let sx = 2;
let sy = 3;
// arbitrary destination
let dx = 4;
let dy = 6;
var Points=[];
CreatePointsFromSToD(sx, sy, dx, dy);
var verticesN=UInt4(dy-sy)+1;
Graph( verticesN);
debugger;
result.innerHTML=
"from ("+ sx + ","+sy +") to (" + dx+","+dy+")";
printAllPaths(sx,sy, dx,dy);


     