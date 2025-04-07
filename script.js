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


let num1;
let num2;
let op;

let screen = document.querySelector(".screen");

//Event Listener for number buttons
let numBtns = document.querySelectorAll(".num");
numBtns.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if(num1===undefined) {
            num1=Number(btn.innerHTML);
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


let opBtns = document.querySelectorAll(".op");
opBtns.forEach((opBtn) => {
    opBtn.addEventListener("click",() => {
        if(num1===undefined) {
            alert("Enter number first");
            return;
        } else if(num2 !=undefined && op!=undefined) {
            op = opBtn.innerHTML;
            num1 = operate(num1,num2,op);
            screen.textContent = num1;
            num2 = undefined;
            return;
        } else if(op != undefined) {
            alert("Already entered an operator");
            return;
        }
        op = toString(opBtns.innerHTML);
    })
});




