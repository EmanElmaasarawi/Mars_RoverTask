# Mars_RoverTask

for part 1 marsrover.html and main.js
get the source coodinates value and Message value from the user which could used to get the destination value
we have 4 main function for commands turn right,turn lift,move forward and move backward based on move function which debend on the message value
Check for the bases:
If the source and destination coordinates are the same, return true.
Recursive call to the function for each valid move
Check if the destination can be reached by replacing x coordinate with both the coordinates of the source point.
Check if the destination can be reached by replacing y coordinate with both the coordinates of the source point.
Return true, if either of the above two calls return true.

for part 2 and part 3 index.html and checkpath.js
which can get the message depend on source and destination pointers used as forward move or backward move on axix x then forward or backward on axis y to go from destination to the source then print the moves in opposite way and when it set in obisticals array then print stopped

theire is another solution using Depth First Traversal
i try to do function to get all allowed pointers in pointers array
then mark the current vertices in the path array as visited to avoid the unvisited in my cycle then print if the destination equal to the source
but it not worked as it can it make more enhancements but during the deedline i couldnt complete it
Thanks Eman
