var input = prompt("Give me a number!");

function checkedNum(x) {
    if (isNaN(x)) {
        alert("Insert a number, please!");
        //How do I get back to the beginning of my script?
    } 
    else if (x <= 0) {
        alert("Insert a number greater than zero, please!");
    }
    else {
        return x;
    }
}

var max = checkedNum(+input);
var i = 0;
while(i < max) {
    i++;
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            $( "#main" ).append( "<p>fizz-buzz</p>" );
        }
        else {
            $( "#main" ).append( "<p>fizz</p>" );
        }
    }
    else if (i % 5 === 0) {
       $( "#main" ).append( "<p>buzz</p>" );
    }
    else {
       $( "#main" ).append("<p>" + i + "</p>");
    }
}

