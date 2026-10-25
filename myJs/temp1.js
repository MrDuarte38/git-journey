fruitList =  ["blueberry","bannana","cherry","peach","apple"];

function printAllFruits()
{
    console.log("Here is a list of all fruits");
    console.log(fruitList);
}

function printFruitListIndexed()
{
    for(let i=0; i<fruitList.length; i++)
    {
        console.log(parseInt(i) + ": " + fruitList[i]);
    }
}

function inlist(fruit)
{
    for(let i=0; i<fruitList.length;i++)
    {
        if(fruit==fruitList[i])
        {
            return true;
        }
    }
    return false;
}


printAllFruits();
printFruitListIndexed();


let favorite_fruit = "ApPlE";

if(inlist(favorite_fruit.toLowerCase))
{
    console.log(favorite_fruit + " is found!")
}
else
{
    console.log(favorite_fruit + " is not in list")
}

