// a1 = insert(null, 5);
// a2 = insert(a1, 2);
// a3 = insert(a2, 7);

// tree-type:
//     {
//         value: number,
//         left: null | Node,
//         right: null | Node,
//     }

function insert (tree, value){
    if(tree){
        if(tree.value === value){
            return tree;
        }
        else if(tree.value > value){
            tree.left = insert(tree.left, value);
        }
        else if(tree.value < value){
            tree.right = insert(tree.right, value);
        }
    }
    else{
        tree = {
            value, // same as value: value
            left: null,
            right: null,
        }
    }
    return tree;
}

a1 = insert(null, 5);
console.log('a1: ',a1)

a2 = insert(a1, 2);
console.log('a2: ',a2)

a3 = insert(a2, 7);
console.log('a3: ',a3)


function hasValue (tree, value){
    if(tree){
        if(tree.value === value){
            return true;
        }
        else if(tree.value > value){
            return hasValue(tree.left, value);
        }
        else if(tree.value < value){
            return hasValue(tree.right, value);
        }
    }
    else{
        return false;
    }
}

console.log(hasValue(a3, 5))