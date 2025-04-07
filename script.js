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
console.log(mod(10,3));

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

//screen selector
let screen = document.querySelector(".screen");

//Event Listener for number buttons
let numBtns = document.querySelectorAll(".num");
numBtns.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if(num1===undefined || (num1===undefined && op==="=")) {
            num1=Number(btn.innerHTML);
            op = undefined;
            screen.textContent= num1.toString();
        } else if(num1!=undefined && op===undefined) {
            num1 = num1*10 + Number(btn.innerHTML);
            screen.textContent= num1.toString();
        }
        else if(num1!=undefined && op!=undefined && num2===undefined) {
            num2=Number(btn.innerHTML);
            screen.textContent= num2.toString();
        } else if(num1!=undefined && op!=undefined && num2!=undefined) {
            num2 = num2*10 + Number(btn.innerHTML);
            screen.textContent= num2.toString();
        }
    })
});

//Event listener for operator buttons
let opBtns = document.querySelectorAll(".op");
opBtns.forEach((opBtn) => {
    opBtn.addEventListener("click",() => {
        if(num1===undefined && op==="=") {
            num1 = Number(screen.textContent);
            op = opBtn.innerHTML;
            return;
        }else if(num1===undefined && op!="=") {
            alert("Enter number first");
            return;
        } else if(num2 !=undefined && op!=undefined) {
            num1 = operate(num1,num2,op);
            screen.textContent = num1;
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
let eq = document.querySelector("#eq");
eq.addEventListener("click",() => {
    if(num1 === undefined || op === undefined || num2 ===undefined) {
        alert("Not a valid expression to evaluate");
        return;
    } else {
        let res = operate(num1,num2,op);
        screen.textContent=res;
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
    screen.textContent = ''
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
        screen.textContent=num1;
    } else if(num1!=undefined && num2!=undefined) {
        if (lenDigit(num2) > 1) {
            num2 = Math.floor(num2/10);
        } else {
            num2 = undefined;
        }
        screen.textContent=num2;
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
        screen.textContent = num1;
    } else if(num1!=undefined && num2!=undefined && op!=undefined) {
        num2 = -1*num2;
        screen.textContent = num2;
    } else if(num1===undefined && op==="=" && num2 ===undefined) {
        num1 = screen.innerHTML;
        num1 = -1*num1;
        screen.textContent = num1;
    }
});

    




