 
    // *********************************************************************************************************************
    
// //    Q3
    
    for(var i = 0; i <=10; i++){
    
        document.write( "<br>"+ i )
    }


// Q4

var userInput =+prompt("Enter a number to table")

var userInputlength = +prompt("Enter Your Length")


for ( var i = 1; i <= userInputlength; i++){
    document.write(userInput + "x" + i + "="+ userInput * i + "<br>" )
}

// Q5

var fruit =["Apple","Mango","Banana","Orange","Strawberry" ]

for( var i = 0; i < fruit.length; i++)
{
document.write("Element at index" +i+ "is"+ fruit[i]+ "<br>" )
}


// Q 6


document.write("<br>"," Counting ","<br>")
for( var i = 1; i <=10; i++){
    document.write
    (i + ",")
}

document.write("<br>"," Reverse Counting ","<br>")

for( var b = 10; b >=1; b--  ){
    
    document.write(b+ ",")
}



document.write("<br>","Odd Number ","<br>")
for( var d = 1; d <=20; d++){

    if(d % 2 != 0){
        document.write(d +",")
    }
}

document.write("<br>","Even Number","<br>")
for( var e = 1; e <=20; e++){

    if(e % 2 == 0){
        document.write(e ,",")
    }
}


document.write("<br>","Series","<br>")
for( var e = 1; e <=20; e++){

    if(e % 2 == 0){
        document.write( e,"k",",")
    }
}


// Q7
 

document.write("<br>","<b>","Bakery","</b>")

var users = prompt("Welcome to ABC Bakery. What to do order sir/ma'am?")

var user_Proucduct =["cake","apple pie","cookie","chips","patties"]

if(users === "cake"){
    document.write("<br>","cake is","<b>"," available ","</b>","at index 0 in our bakery")
}

else if (users === "apple pie"){
  document.write("<br>","apple pie is","<b>"," available ","</b>","at index 1 in our bakery")
}

else if (users === "cookie") {
    document.write("<br>","cookie is","<b>"," available ","</b>","at index 2 in our bakery")
}

else if (users === "chips") {
    document.write("<br>","chips is","<b>"," available ","</b>","at index 3 in our bakery")
}

else if (users === "patties") {
    document.write("<br>","patties is","<b>"," available ","</b>","at index 4 in our bakery")
}

else{
    document.write("<br>","We are Sorry.",users," is ","<b>","not available ","</b>","in our bakery")
}

// Q8

var ar =[24,53,68,95]

document.write("<br>","Arry numbers",ar)

var ar =[24,53,68,95]

document.write("<br>","The Largest numbers of 95")

// // Q9


var ar =[24,53,68,99]

document.write("<br>","Arry numbers",ar)

var ar =[24,53,68,99]

document.write("<br>","The Largest numbers of 99","<br>")

// // Q10

for(var f = 1; f <=100; f++){
    document.write( 5*f +",")
}


