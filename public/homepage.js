
var items = [false, false, false, false, false, false, false, false, false, false];
var good = false;
var pay = [0, 0, 0, 0];
var keyword = ["name", "name", "address", "city", "state", "card number", "expiration date", "expiration date", "cart", "phone"];
function fun() {
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
        if (items[i] == true) {
            good = true;
        }
        else {
            good = false;
        }
    }
    if (good == true) {
        console.log("good");
    }
    else {
        console.log("bad");
    }
}

function userName(theName, theNum) {
    if (theNum == 1) {
        if (theName.match(/\w+/)) {
            items[0] = true;
        }
        else {
            items[0] = false;
        }
    }
    else if (theNum == 2) {
        if (theName.match(/\w+/)) {
            items[1] = true;
        }
        else {
            items[1] = false;
        }
    }
    console.log(items[0], items[1]);
}

function addressTest(theAdd, theNum) {
    if (theNum == 1) {
        if (theAdd.match(/\w+/)) {
            items[2] = true;
        }
        else {
            items[2] = false;
        }
    }
    else if (theNum == 2) {
        if (theAdd.match(/\w+/)) {
            items[3] = true;
        }
        else {
            items[3] = false;
        }
    }
    else if (theNum == 3) {
        if (theAdd.match(/\w+/)) {
            items[4] = true;
        }
        else {
            items[4] = false;
        }
    }
    console.log(items[2], items[3], items[4]);

}
function cardTest(theCard) {
    var y = theCard;
    var x2 = y.replace(/\s/g, "");
    console.log(x2);
    if (x2.match(/\d{16}/)) {
        items[5] = true;
    }
    else {
        items[5] = false;
    }
    console.log(items[5]);
}

function phoneTest(thePhone) {
    var p = thePhone;
    if (p.match(/\d{10}/)) {
        items[9] = true;
    }
    else {
        items[9] = false
    }
}

function expTest(theDate, theNumber) {
    var d = theDate;
    var month;
    var year;
    if (theNumber == 1) {
        month = d.match(/\d+/);
        if (month[0] >= 1 && month[0] <= 12) {
            items[6] = true;
        }
        else {
            items[6] = false;
        }
    }
    else if (theNumber == 2) {
        year = d.match(/\d{4}/);
        if (year == null) {
            items[7] = false;
            //console.log(items[6],items[7]);
        }
        //console.log("1", year);
        if (year[0] >= 1753 && year[0] <= 2100) {
            items[7] = true;
            console.log("2");
        }
        else {
            items[7] = false;
        }
    }
    console.log(items[6], items[7]);
}

function total(amount, theNum) {
    if (theNum == 1) {
        console.log("1");
        if (document.getElementById("blue").checked == true) {
            console.log("2");
            pay[0] = amount;
            items[8] = true;
        }
        if (document.getElementById("blue").checked == false) {
            pay[0] = 0;
            items[8] = false;
        }
    }
    if (theNum == 2) {
        console.log("2");
        if (document.getElementById("dark").checked == true) {
            console.log("2");
            pay[1] = amount;
            items[8] = true;
        }
        if (document.getElementById("dark").checked == false) {
            pay[1] = 0;
            items[8] = false;
        }
    }
    if (theNum == 3) {
        console.log("3");
        if (document.getElementById("lube").checked == true) {
            console.log("3");
            pay[2] = 10;
            items[8] = true;
        }
        if (document.getElementById("lube").checked == false) {
            pay[2] = 0;
            items[8] = false;
        }
    }
    if (theNum == 4) {
        console.log("4");
        if (document.getElementById("lube2").checked == true) {
            console.log("2");
            pay[3] = 20;
            items[8] = true;
        }
        if (document.getElementById("lube2").checked == false) {
            pay[3] = 0;
            items[8] = false;
        }
    }
    console.log(pay[0], pay[1],pay[2],pay[3]);
}

function display() {
    var amount = 0;
    for (var i = 0; i < pay.length; i++) {
        amount = amount + pay[i];
        console.log(amount);
    }
    if (document.getElementById("amount").innerHTML = amount) {
        console.log(1212121);
    }
}

function update() {
    for (var i = 0; i < items.length; i++) {
        console.log(items[i] + "  ");
        if (items[i] == false) {
            console.log(items[i] + "  ");
            document.getElementById("err").innerHTML = "Invaild " + keyword[i];
            break;
        }
        else {
            document.getElementById("err").innerHTML = "You are at set and ready to submit!";
        }
    }
}

function reset() {
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
    document.getElementById("5").value = "";
    document.getElementById("6").value = "";
    document.getElementById("7").value = "";
    document.getElementById("8").value = "";
    document.getElementById("dark").checked = false;
    document.getElementById("blue").checked = false;
    document.getElementById("amount").innerHTML = 0;
}