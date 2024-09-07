console.log('hello world');
alert('Your current study is Chapters 1 to 10.')
var message  = +prompt('Enter Your Chapter Number');


if(message == 1){
    alert('Your 1st Chapter Is Alert');
}
else if(message == 2){
    alert('Your 2nd Chapter Is Variable For String');
}
else if(message == 3){
    alert('Your 3rd Chapter Is Variable For Numbers');
}
else if(message == 4){
    alert('Your 4Th Chapter Is Variable Names Legal and Illegal');
}
else if(message == 5){
    alert('Your 5Th Chapter Is Math Expressions: familiar operators');
}
else if(message == 6){
    alert('Your 6Th Chapter Is Math Expressions: unfamiliar operators');
}
else if(message == 7){
    alert('Your 7th Chapter Is Math Expressions: eliminating ambiguity');
}
else if(message == 8){
    alert('Your 8Th Chapter Is Concatenating text strings');
}
else if(message == 9){
    alert('Your 9Th Chapter Is Prompts');
}
else if(message == 10){
    alert('Your 10Th Chapter Is If Statments');
}
else if(message > 10){
    alert('Warning 😵😵' + '\n' + 'Your current study is Chapters 1 to 10')
}
else if(message <= String){
    alert('Please Enter Number 1 To 10')
} 
else{
    console.log('Not Found');
}