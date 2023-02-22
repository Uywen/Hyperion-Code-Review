function NumInWords (number) {
    
    // used to translate all the numbers into words
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
  
    for (let i = 0; i < mad.length; i++) {
      let randomNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(randomNumber/Math.pow(1000,i)) !== 0) {

        // checks if the number is less than twenty so that it doesnt need to add a dash
        if (Math.floor(randomNumber/Math.pow(1000,i)) < 20) {
          word = first[Math.floor(randomNumber/Math.pow(1000,i))] + mad[i] + ' ' + word;

        //   if the number more than twenty it would add a dash to seperate the single first numbers from the tens
        } else {
          word = tens[Math.floor(randomNumber/(10*Math.pow(1000,i)))] + '-' + first[Math.floor(randomNumber/Math.pow(1000,i))%10] + mad[i] + ' ' + word;
        }
      }
  
      randomNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(randomNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(randomNumber/(100*Math.pow(1000,i)))] + 'hundred ' + word;
    }
      return word;
  }
  
//   type in any number and it shall be converted to numbers
// will not be able to convert a number to words with more than 15 digits
  console.log(NumInWords(999999999999999))