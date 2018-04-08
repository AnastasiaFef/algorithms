/* 
Suppose we have some input data describing a graph of relationships between parents 
and children over multiple generations. The data is formatted as a list of (parent, 
    child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
            
1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   9

Write a function that takes this data as input and returns two collections: one 
containing all individuals with zero known parents, and one containing all individuals 
with exactly one known parent.

Sample output (pseudocode):
[
  [1, 2, 4], //Individuals with zero parents
  [5, 7, 8, 9] //Individuals with one parent
]

 */

var relationshipArray = ([
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 9]
]);

function parentChildPairs (relationshipArray) {
    let indWithZeroParents = [];
    let indWithOneParent = [];
    relationshipArray.forEach(element => {  
        let repeatedTimes = 0;   
        // let timesRepeated = 0;
        relationshipArray.forEach(secondElement => {
            if (element[0] === secondElement[1]){
                repeatedTimes ++;
            }
        })
        if(repeatedTimes === 1) {
            if(indWithOneParent.indexOf(element[0]) == -1) indWithOneParent.push(element[0])
        };
        if(repeatedTimes === 0) {
            if(indWithZeroParents.indexOf(element[0]) == -1) indWithZeroParents.push(element[0])
        }
    });
    console.log(indWithZeroParents, ' //Individuals with zero parents \n', indWithOneParent, ' //Individuals with one parent')
}

parentChildPairs(relationshipArray)