var dice1 = 1;
var dice2 = 2;
var dice3 = 3;
var total = 6;
var mean = 2;
var median = 2;
var mode = 1;
var doubles = 0;
var triples = 0;
var cmean = 2;
var cmedian = 2;
var cmode = 1;
var totalrolls = 0;
const rolls = [1,1,1,2,23,3,3,43,43];
function rolldice()
{
    // rolls the dice
}
function getmean(numrolled, r1, r2, r3)
{
    // gets the mean of current dice roll
    if(numrolled === 1){return r1;}
    else if(numrolled === 2){return (r1+r2)/2}
    else{return (r1+r2+r3)/3;}
}
function getmedian(numrolled, r1, r2, r3)
{
    // gets the median of current dice roll
    if(numrolled === 1){return r1;}
    else if(numrolled === 2){return (r1+r2)/2}
    else{return r2;}
}
function getmode(numrolled, r1, r2, r3)
{
    // gets the mode of current dice roll
    if(numrolled === 3)
    {
        if(((r1 === r2) && (r2 === r3))||((r1 === r2) || (r1 === r3))){return r1;}
        if(r2 === r3){return r2;}
    }
    else{return r1;}
}
function getdoubles(r1, r2, r3)
{
    // gets the doubles over the total rolls
    if((r1 === r2)||(r1 === r3)||(r2 === r3))
    {
        doubles += 1;
        return doubles/totalrolls;
    }
    return doubles/totalrolls;
}
function gettriples(r1, r2, r3)
{
    // gets the triples over the total rolls
    if((r1 === r2) && (r2 === r3)){triples+=1;}
    return triples/totalrolls;
}
function getcmean()
{
    // gets cumulative mean
    var total = 0;
    for(let i = 0; i < rolls.length; i++)
    {
        total += rolls[i];
    }
    return total/rolls.length;
}
function getcmedian()
{
    // gets cumulative median
    rolls.sort();
    if(rolls.length % 2 === 1)
    {
        return rolls[Math.floor(rolls.length/2)];
    }else
    {
        return (rolls[rolls.length]+rolls[rolls.length/2-1])/2
    }
}
function getcmode()
{
    {
        console.log( rolls.sort((a,b) => rolls.filter(v => v===a).length - rolls.filter(v => v===b).length).pop());
    }
}
function updatetable(numrolled, total, mean, median, mode, doubles, triples, cmean, cmedian, cmode)
{
    //updates the table
}
getcmode();
