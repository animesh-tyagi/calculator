//calc functions
function add(a,b) {
    return Number(a)+Number(b);
}

function sub(a,b) {
    return Number(a) - Number(b);
}

function mult(a,b) {
    return Number(a) * Number(b);
}

function div(a,b) {
    if (b==0) {
        alert("Error: Division by zero");
        return;
    }
    return Number(a)/Number(b);
}

function mod(a,b) {
    if(b==0) {
        alert("Error: Division by zero");
        return;
    }
    return Number(a)%Number(b);
}

//operate function
function operate(a,b,op) {
    switch (op) {
        case "+":
            return add(a,b);
        case "-":
            return sub(a,b);
        case "x":
            return mult(a,b);
        case "÷":
            return div(a,b);
        case "%":
            return mod(a,b);
    }
}

//global declerations
let num1;
let num2;
let op;
let dec = false;
let counter;

//screen selector
const screen = document.querySelector(".screen");

function format(num) {
    return Number(num.toFixed(6));
}

//Event Listener for number buttons
const numBtns = document.querySelectorAll(".num");
numBtns.forEach((btn) => {
    btn.addEventListener("click", ()=> {

        if(dec===true) {
            if(num1!=undefined && num2===undefined) {
                console.log(counter+1);
                num1 = num1 + (Number(btn.innerHTML)*(10**(-(counter+1))));
                counter +=1;;
                screen.textContent = format(num1);
                return;
            } else if(num1!=undefined && op!=undefined && num2!=undefined) {
                num2 = num2 + (Number(btn.innerHTML)*(10**(-(counter+1))));
                counter +=1;
                screen.textContent = format(num2);
                return;
            }
        }

        if(num1===undefined || (num1===undefined && op==="=")) {
            num1=Number(btn.innerHTML);
            op = undefined;
            screen.textContent= format(num1);
        } else if(num1!=undefined && op===undefined) {
            num1 = num1*10 + Number(btn.innerHTML);
            screen.textContent= format(num1);
        }
        else if(num1!=undefined && op!=undefined && num2===undefined) {
            num2=Number(btn.innerHTML);
            screen.textContent= format(num2);
        } else if(num1!=undefined && op!=undefined && num2!=undefined) {
            num2 = num2*10 + Number(btn.innerHTML);
            screen.textContent= format(num2);
        }
    })
});

//Event listener for operator buttons
const opBtns = document.querySelectorAll(".op");
opBtns.forEach((opBtn) => {
    opBtn.addEventListener("click",() => {
        dec = false;
        counter = 0;
        if(num1===undefined && op==="=") {
            num1 = Number(screen.textContent);
            op = opBtn.innerHTML;
            return;
        } else if(num1===undefined && op!="=") {
            alert("Enter number first");
            return;
        } else if(num2 !=undefined && op!=undefined) {
            num1 = operate(num1,num2,op);
            screen.textContent = format(num1);
            op = opBtn.innerHTML;
            num2 = undefined;
            return;
        } else if(op != undefined && op!="=") {
            alert("Already entered an operator");
            return;
        }
        op = opBtn.innerHTML;

    })
});


// '=' event listener
const eq = document.querySelector("#eq");
eq.addEventListener("click",() => {
    if(num1 === undefined || op === undefined || num2 ===undefined) {
        alert("Not a valid expression to evaluate");
        return;
    } else {
        let res = operate(num1,num2,op);
        screen.textContent=format(res);
        dec = false;
        num1 = undefined;
        num2 = undefined;
        op = "=";
        return;
    }
});


//allClear button event listener
const ac = document.querySelector("#allClear");
ac.addEventListener("click",() => {
    num1 = undefined;
    num2 = undefined;
    op = undefined;
    screen.textContent = '0'
});

//fucntion to check the length of the digit
function lenDigit(num) {
    return String(Math.abs(num)).length;
}

const del = document.querySelector("#delete");
del.addEventListener("click",() => {
    if(num1===undefined &&num2 ===undefined) {
        alert("Nothing to delete");
        return;
    } else if(num1!=undefined && num2===undefined) {
        if (lenDigit(num1) > 1) {
            num1 = Math.floor(num1/10);
        } else {
            num1 = undefined;
        }
        screen.textContent=format(num1);
    } else if(num1!=undefined && num2!=undefined) {
        if (lenDigit(num2) > 1) {
            num2 = Math.floor(num2/10);
        } else {
            num2 = undefined;
        }
        screen.textContent=format(num2);
    }
});

//sign button event listener
const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    if(num1===undefined && op!="=") {
        alert("Enter number first");
        return;
    } else if(num1!= undefined && op===undefined && num2===undefined){
        num1 = -1*num1;
        screen.textContent = format(num1);
    } else if(num1!=undefined && num2!=undefined && op!=undefined) {
        num2 = -1*num2;
        screen.textContent = format(num2);
    } else if(num1===undefined && op==="=" && num2 ===undefined) {
        num1 = screen.innerHTML;
        num1 = -1*num1;
        screen.textContent = format(num1);
    }
});

//'.' button event listener
const point = document.querySelector("#point");
point.addEventListener("click", ()=> {
    counter = 0;
    dec = true;
    if(num1!=undefined && num2===undefined) {
        op = undefined;
        screen.textContent = num1+'.';
    } else if(num1 === undefined ) {
        op = undefined;
        num1 = 0;
        screen.textContent = 0+'.';
    } else if(num1!=undefined && op!=undefined && num2===undefined) {
        num2 = 0;
        screen.textContent = 0+'.';
    } else if(num1!=undefined && op!=undefined && num2!=undefined) {
        screen.textContext = num2+'.';
    }
});