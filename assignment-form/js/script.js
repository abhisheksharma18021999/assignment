// Global Variables
var jobRole = document.querySelector('#other-title');
var title = document.querySelector('#title');
var design = document.getElementById('design');
var color = document.getElementById('color');
var checkbox = document.querySelector('.activities');
var all = document.querySelector('input[name="all"]');
var jsFramework = document.querySelector('input[name="js-frameworks"]');
var jsLibs = document.querySelector('input[name="js-libs"]');
var express = document.querySelector('input[name="express"]');
var node = document.querySelector('input[name="node"]');
var buildTools = document.querySelector('input[name="build-tools"]');
var npm = document.querySelector('input[name="npm"]');
var totalAmount = document.createElement('h2');
var payment = document.getElementById('payment');
var cc = document.getElementById('credit-card');
var creditCard = document.querySelector('#payment option[value="credit card"]');
var paypal = document.querySelector('#payment option[value="paypal"]');
var bitcoin = document.querySelector('#payment option[value="bitcoin"]');
var additionalPayment = document.querySelectorAll('p');
var paypalIndex = additionalPayment[0];
var bitcoinIndex = additionalPayment[1];
checkbox.parentNode.insertBefore(totalAmount, checkbox.nextElementSibling);
var value = 0;
var additionalPayment = document.querySelectorAll('p');
var ccNumE = document.getElementById('cc-num');
var paypal = document.querySelector('#payment option[value="paypal"]');
var bitcoin = document.querySelector('#payment option[value="bitcoin"]');
var zipElement = document.getElementById('zip');
var cvvElement = document.getElementById('cvv');
var input = document.querySelector("#name");
var mail = document.getElementById('mail');
var activities = document.querySelector('.activities');

// When the page loads, give focus to the first text field

window.addEventListener('load', function () {
    var input = document.getElementById('name');
    input.focus();
});

// A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.

function displayJobRole() {
    jobRole.style.display = 'none';
    // Function logic to hide and show based off a select value of 'other'
    title.addEventListener('change', function () {
        if (title.value === 'other') {
            jobRole.style.display = 'block';
        } else {
            jobRole.style.display = 'none';
        }
    });
}
displayJobRole();

// For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.
// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."


function displayThemes() {
    design.addEventListener('change', function () {
        for (var i = 0; i < color.length - 3; i++) {
            var colors = color[i];
            if (design.value === 'js puns') {
                color[i].style.display = 'block';
            } else if (design.value === 'heart js') {
                color[i].style.display = 'none';
            } else {
                color[i].style.display = 'block';
            }
        }
    });

    design.addEventListener('change', function () {
        for (var i = 3; i < color.length; i++) {
            var colors = color[i];
            if (design.value === 'heart js') {
                color[i].style.display = 'block';
            } else if (design.value === 'js puns') {
                color[i].style.display = 'none';
            } else {
                color[i].style.display = 'block';
            }
        }
    });
}
displayThemes();


/* Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
*/

function disableCheckbox() {

    checkbox.addEventListener('change', function (e) {
        var isChecked = e.target.checked;
        for (var i = 0; i < checkbox.children.length; i++) {
            if (isChecked[i]) {
                value += 100;
                break;
            } else {
                value = 0;
            }
        }

        if (jsFramework.checked) {
            express.disabled = true;
            express.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (jsFramework.checked === false) {
            express.disabled = false;
            express.parentNode.className = '';
            value = 0;
        }
        if (express.checked === true) {
            jsFramework.disabled = true;
            jsFramework.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (express.checked === false) {
            jsFramework.disabled = false;
            jsFramework.parentNode.className = '';
        }

        if (jsLibs.checked === true) {
            node.disabled = true;
            node.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (jsLibs.checked === false) {
            node.disabled = false;
            node.parentNode.className = '';
        }

        if (node.checked === true) {
            jsLibs.disabled = true;
            jsLibs.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (node.checked === false) {
            jsLibs.disabled = false;
            jsLibs.parentNode.className = '';
        }

        if (npm.checked === true) {
            value += 100;
        }

        if (buildTools.checked === true) {
            value += 100;
        }

        if (all.checked === true) {
            value += 200;
        }
        totalAmount.innerHTML = 'Total: $' + value + '.00';
    });
}
disableCheckbox();

/*
Display payment sections based on the payment option chosen in the select menu
The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
*/

function paymentMethod() {

    creditCard.selected = 'selected';
    additionalPayment[0].style.display = 'none';
    additionalPayment[1].style.display = 'none';

    payment.addEventListener('change', function () {
        if (payment.value === 'paypal') {
            additionalPayment[0].style.display = 'block';
        } else {
            additionalPayment[0].style.display = 'none';
            cc.style.display = 'none';
        }

        if (payment.value === 'bitcoin') {
            additionalPayment[1].style.display = 'block';
        } else {
            additionalPayment[1].style.display = 'none';
            cc.style.display = 'none'
        }

        if (payment.value === 'credit card') {
            cc.style.display = 'block';
        } else {
            cc.style.display = 'none';
        }
    })
}
paymentMethod();

/*
If any of the following validation errors exist, prevent the user from submitting the form:
Name field can't be blank
Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like on dave@teamtreehouse.com for example.
// If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted.
Credit card field should only accept a number between 13 and 16 digits
The zipcode field should accept a 5-digit number
The CVV should only accept a number that is exactly 3 digits long
Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or a message could appear near the field or at the top of the form
There should be an error indication for the name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV
When JavaScript is switched off or unavailable, all the form fields that need to be filled out should be visible. For example, the “Your Job Role” text field should be visible on the page when JavaScript is switched off.
*/

// Validate the name field letters only. No numbers.
function name() {
    var inputE = document.querySelector('#name').value;
    if (isNaN(inputE)) {
        console.log("NAME PASS");
        input.className = 'clear';
        return true
    } else {
        input.className = 'error';
        console.log("NAME ERROR");
        return false;
    }
}

// Using a regular expression for my email validation
function returnEmail() {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(mail.value)) {
        console.log("Email PASS");
        mail.className = 'clear';
        return true
    } else {
        mail.className = 'error';
        console.log("EMAIL ERROR");
        return false;
    }
}

// Validating credit card for number | Also creating statements to disable validation if paypal or bitcoin are selected
function creditCardValidate() {
    var ccNum = document.getElementById('cc-num').value; // Not sure why, but this variable only works within the scope of this function
    if (ccNum.length >= 13 && ccNum.length <= 16 && !isNaN(ccNum) || paypal.selected === true || bitcoin.selected === true) {
        console.log("CC# PASS");
        ccNumE.className = 'clear';
        return true;
    } else {
        ccNumE.className = 'error';
        console.log("Credit Card ERROR");
        return false;
    }
}

// Zip code must be 5 characters exactly and numbers only
function validateZip() {
    var zip = document.getElementById('zip').value; // Not sure why, but this variable only works within the scope of this function
    if (zip.length === 5 && !isNaN(zip) || paypal.selected === true || bitcoin.selected === true) {
        console.log("ZIP PASS");
        zipElement.className = 'clear';
        return true
    } else {
        zipElement.className = 'error'
        console.log("ZIP ERROR");
        return false;
    }
}

// Cvv must be three characters exactly and numbers only
function validateCvv() {
    var cvv = document.getElementById('cvv').value;
    if (cvv.length === 3 && !isNaN(cvv) || paypal.selected === true || bitcoin.selected === true) {
        console.log("CVV PASS");
        cvvElement.className = 'clear';
        return true
    } else {
        cvvElement.className = 'error';
        console.log("CVV ERROR");
        return false;
    }
}

function validateCheckbox() {
    var checkboxElement = document.querySelector('input[type="checkbox"]:checked');
    if (checkboxElement) {
        activities.className = 'clear';
        return true;
    } else {
        activities.className = 'error';
        return false;
    }
}

var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    if (name() === true && returnEmail() === true && validateCheckbox() === true && creditCardValidate() === true && validateZip() === true && validateCvv() === true) {
        console.log("Passed test");
        return true;
    } else {
        e.preventDefault();
        name();
        returnEmail();
        validateCheckbox();
        creditCardValidate();
        validateZip();
        validateCvv();
    }

});
