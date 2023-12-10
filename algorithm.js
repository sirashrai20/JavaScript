let a=prompt("Enter a number:");
if(a%7==0){
    alert(a+ 'is a multiple of 7');  
}else{
    alert(a+ 'is not a multiple of 7');
}



let m=prompt("Enter your marks");
if(m<40){
    alert('You are Fail.');  
}else if(m<=40 &&m<50){
    alert('C');
}
else if(m<=50 && m<60){
    alert('C+');
}
else if(m<=60 &&m<70){
    alert('B');
}
else if(m<=70 &&m<80){
    alert('B+');
}
else if(m<=80 &&m<90){
    alert('A');
}else{
    alert('A+');
}