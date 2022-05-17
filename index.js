document.onkeydown = keyPressed;
var currentKey = 1;
var currentKeyString = "1";
var rowNum = 1;
function keyPressed(e) {
    console.log("user pressed key " + e.code + " CurrentKey = " + currentKey);
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
		enterKey();
    }
    else if(e.code == 'Backspace'){
		backspace();
    }
    else {
        let temp = e.code.toString();
        currentKeyString = currentKey.toString();
        let b = ("" + `${e.code}`).slice(temp.length - 1,temp.length);
        var elem = document.getElementById(currentKeyString);
        elem.innerHTML = b;
        currentKey++;
        if(currentKey == (rowNum*5)+1)
            currentKey--;
    }
}
function doTheAdd(rowNum){
    var op1 = document.getElementById((currentKey-4).toString()).innerHTML;
    var op2 = document.getElementById((currentKey-3).toString()).innerHTML;
    var op3 = document.getElementById((currentKey-2).toString()).innerHTML;
    var op4 = document.getElementById((currentKey-1).toString()).innerHTML;
    var op5 = document.getElementById((currentKey).toString()).innerHTML;
    console.log("column 1 = " + op1);
    console.log("column 2 = " + op2);
    console.log("column 3 = " + op3);
    console.log("column 4 = " + op4);
    console.log("column 5 = " + op5);
    var word = op1+op2+op3+op4+op5;
    console.log("word = " + word);
}
function backspace(){
	console.log("Inside of Backspace");
	if(currentKey == 1 || currentKey == 6 || currentKey == 11 || currentKey == 16 || currentKey == 21 || currentKey == 26){
		currentKeyString = currentKey.toString();
		var elem = document.getElementById(currentKeyString);
		elem.innerHTML = ' ';
	}
	else{
		currentKeyString = currentKey.toString();
        var elem = document.getElementById(currentKeyString);
        elem.innerHTML = ' ';
        currentKey--;
		}
}

function enterKey(){
	console.log("Inside of enterKey");
	if (currentKey % 5 != 0){
		console.log("5 letters where not entered");
		return;
	}
    doTheAdd(rowNum);
	rowNum++;
	if(rowNum == 2)
		currentKey = 6;
	if(rowNum == 3)
		currentKey = 11;
	if(rowNum == 4)
		currentKey = 16;
	if(rowNum == 5)
		currentKey = 21;
	if(rowNum == 6)
		currentKey = 26;
}
function buttonClick(id){
	console.log();
	b = document.getElementById(id).innerHTML;
	currentKeyString = currentKey.toString();
	var elem = document.getElementById(currentKeyString);
	elem.innerHTML = b;
	currentKey++;
	if(currentKey == (rowNum*5)+1)
		currentKey--;
}