

// List of integar
var list =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// check list item one by one
for(let i = 0 ; i < list.length ; i++) 
{

    // if any number is divisible by 3 and 5 this condition will execute
    if (list[i] % 3 == 0 && list[i] % 5 == 0)
    {
        // then replace integar with threefive
        list[i] = 'ThreeFive'
    }
    // then any number is divisible by 3 this condition will execute
    else if (list[i] % 3 == 0 ) 
    {
        // then replace integar with three 
        list[i] = 'Three'
    } 

    // then any number is divisible by 5 this condition will execute
    else if (list[i] % 5 == 0) 
    {
        // replace integar with five 
        list[i] = 'Five'
    }
}

// print list 
document.write('[', list, ']')