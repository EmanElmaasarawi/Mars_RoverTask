Check for the bases:
If the source and destination coordinates are the same, return true.
Recursive call to the function for each valid move
Check if the destination can be reached by replacing x coordinate with both the coordinates of the source point.
Check if the destination can be reached by replacing y coordinate with both the coordinates of the source point.
Return true, if either of the above two calls return true.