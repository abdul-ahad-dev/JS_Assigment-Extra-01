

// List of integar
var list =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// check list item one by one
for(let i = 0 ; i < list.length ; i++) 
{

    // if any number is divisible by 3 this condition will execute
    if (list[i] % 3 == 0 ) 
    {
        // then replace integar with three 
        list[i] = 'three'
    } 

    // then any number is divisible by 5 this condition will execute
    else if (list[i] % 5 == 0) 
    {
        // replace integar with five 
        list[i] = 'five'
    }
}

// print list 
document.write(list)