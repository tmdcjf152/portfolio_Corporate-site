const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {
    if (!isTxt("userid", 5)) e.preventDefault();
    if(!isPwd("password1","password2", 5)) e.preventDefault(); 
    if(!isPwd("password2","password1", 5)) e.preventDefault();
    if(!isEmail("email")) e.preventDefault();
    if(!isTel("tel",11)) e.preventDefault();
    if(!isCheck("gender")) e.preventDefault(); 
});

function isTxt(name, len) {
    if (len === undefined) len = 5;

    let input = form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if (txt.length >= len) {
        const errMsgs = input.closest("td").querySelectorAll("p");

        if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

        return true;
    } else {

        const errMsgs = input.closest("td").querySelectorAll("p");

        if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`Please enter at least ${len} characters of ID.`);

        input.closest("td").append(errMsg);
        return false;
    }
}

function isEmail(name){

    let input = form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(/@/.test(txt)){

        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("td").querySelector("p").remove();
        return true;

    }else{

        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("Please write an email including @");
        input.closest("td").append(errMsg);
        return false;
    }
}

function isPwd(name1, name2, len){
    let pwd1 = form.querySelector(`[name=${name1}]`);
    let pwd2 = form.querySelector(`[name=${name2}]`);

    let pwd1_val = pwd1.value;
    let pwd2_val = pwd2.value;


    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+?><]/;


    if(pwd1_val === pwd2_val && pwd1_val.length >= len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)){
        const errMsgs = pwd1.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0) pwd1.closest("td").querySelector("p").remove();
    }else{
        const errMsgs = pwd1.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) pwd1.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        
        errMsg.append(`Please enter the same password including at least ${len}characters, English, numbers, and special characters`);
        pwd1.closest("td").append(errMsg);

        return false;
    }
}

function isTel(name, len) {
    if (len === undefined) len = 5;

    let input = form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if (txt.length >= len) {
        const errMsgs = input.closest("td").querySelectorAll("p");

        if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

        return true;
    } else {

        const errMsgs = input.closest("td").querySelectorAll("p");

        if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`Please write your cell phone number at least ${len} characters`);

        input.closest("td").append(errMsg);
        return false;
    }
}

function isCheck(name){

    let inputs = form.querySelectorAll(`[name=${name}]`);
    let isCheck = false; 


    for(let el of inputs){

        if(el.checked) isCheck = true;
    }

    if(isCheck){
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length>0) inputs[0].closest("td").querySelector("p").remove();
        return true;
    }else{
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length>0) inputs[0].closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("Please check the required check items");
        inputs[0].closest("td").append(errMsg);

        return false;
    }
}