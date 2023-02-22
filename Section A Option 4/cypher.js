let mess = prompt("Enter Message")

let newMess = "";
// shifts the letters entered by user by 15
let shift = 13
let ascii = "";

let newCode = 0

//the function of the cypher//
function cypher() {  

//iterating through the word that the user enters//  
for (const i of mess) {
//mess contains the ascii code of the words the use entered//    
let charCode = i.charCodeAt()

/*between 65 and 90 is uppercase letters*/
if (charCode >= 65 && charCode <= 90 ){

    newCode = charCode + shift
// if the user enters  a letter that shifts over 90 it would run this code
    if(newCode > 90){
        // if the word shifts and goes over Z it will minus 26 and start from A again
        newCode -=  26  
    }

    ascii += String.fromCharCode(newCode);

/*between 97 and 122 is lowercase letters*/
} else if(charCode >= 97 && charCode <= 122){

 newCode = charCode + shift
// if the letter the user enters shifts over 122 it would run this if statement
 if(newCode > 122){
     // if the word shifts and goes over Z it will minus 26 and start from A again
    newCode -= 26
 }

ascii += String.fromCharCode(newCode);

    
//if the user enters any special characters//
} else {

    ascii += String.fromCharCode(charCode)
       
}
}
}
cypher()
console.log(ascii);

