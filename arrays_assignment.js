let myArray = [1, 3, 2, 4, 6];
let copyarray = [];
document.write(myArray);
document.write("<br>")
let len = myArray.length;
console.log("the negative numbers are ");

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < 0) {
        document.write(myArray[i])
    }
}

document.write("<br>")

let sum = 0;
for (let i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];
}
document.write("sum of numbers =  ")
document.write(sum);

document.write("<br>")
let max = myArray[0];
let min = myArray[0];
for (let i = 0; i < len; i++) {

    if (myArray[i] > max) {
        max = myArray[i];
    }

}
document.write('maximum element  = ' + max);
document.write("<br>");

for (let i = 0; i < len; i++) {
    if (min > myArray[i]) {
        min = myArray[i]
    }
}


document.write('minimum element  = ' + min);

for (let i = 0; i < len; i++) {

    if (myArray[i] == max) {
        copyarray[i] = 0;
    }
    else {
        copyarray[i] = myArray[i];
    }
}

document.write("<br>");

//document.write(copyarray) ; document.write("<br>") ;

max = copyarray[0];
for (let i = 0; i < copyarray.length; i++) {
    if (copyarray[i] > max) {
        max = copyarray[i];
    }
}

document.write('second largest element = ' + max);

// even or odd elements in an array
 
let even  = 0  ; 
let odd  = 0  ; 
let even_list  =  [] ; 
let odd_list  = [] ;
for(let i = 0 ;i <len;i++){
    if(myArray[i]%2 ==0){
        even = even + 1 
        even_list.push(myArray[i]) ;
    } else {
        odd = odd + 1 ;
        odd_list.push( myArray[i] );
    }
} 
document.write('<br>')
//document.write(odd_list) ; 
document.write('<br>')
document.write(odd_list.length)  ;
document.write('<br>')
document.write(even_list.length) ;
 
