'use strict';

//for video
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const errorMsgElement = document.getElementById('spanErrorMsg');

const constraints = {
    audio: false,
    video: {
        width: 250,
        height: 225
    }
};

//access webcam
async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
    }
}

//success
function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
}

//load init
init();

//draw image
var context = canvas.getContext('2d');
snap.addEventListener('click', function() {
    //250 225
    context.drawImage(video, 0, 0, 250, 225);
    window.alert("Click Save Profile if you're done");
});


//Declare variables as reference to the HTML elements
let lNameStored = document.getElementById('lName')
let fNameStored = document.getElementById('fName')
let IDNumberStored = document.getElementById('IDNumber')
let yearLevel = document.getElementById('yearLevel')
let PassStored = document.getElementById('Password')

let arrPerson = [];


//On body load
function OnLoad() {

    let lName = sessionStorage.getItem("LastName:");
    let fName = sessionStorage.getItem("FirstName:");
    let IDNumber = sessionStorage.getItem("ID Number:");
    let yearLevel = sessionStorage.getItem("YearLevel:")
    let Password = sessionStorage.getItem("Password:");

    $('#lName').html(lName);
    $('#fName').html(fName);
    $('#IDNumber').html(IDNumber);
    $('#yearLevel').html(yearLevel);
    $('#Password').html(Password);

    //Check if localStorage has existing keys before displaying the table
    if (localStorage.length > 0) {
        arrPerson = JSON.parse(localStorage.getItem("tblPerson"));
    } else {
        //Set the starting values of the keys
        localStorage.setItem("Registered Users:", 0)
        localStorage.setItem("tblPerson", null);
    }
}

// <-------------------------------------------------------->
// Save Info into storage
function SaveProfile() {
    let dataURL = canvas.toDataURL();
    let RegisteredUsers = Number(localStorage.getItem("Registered Users:"));

    //Create a new Person object
    let objPerson = new Users(lNameStored.innerHTML, fNameStored.innerHTML, IDNumberStored.innerHTML, yearLevel.innerHTML, PassStored.innerHTML, dataURL);

    //Add the newly created object in arrPerson
    arrPerson.push(objPerson);

    //Serialize the objectPerson by converting into a string since localStorage
    //only stores data in the form of a string
    let serializedObj = JSON.stringify(arrPerson);

    //Store the serializedObj in localStorage having the key "tblPerson"
    localStorage.setItem("tblPerson", serializedObj);

    //Update the stored tblPersonId by incrementing its value
    RegisteredUsers++;
    localStorage.setItem("Registered Users:", RegisteredUsers)

    //success
    alert("Succesfully created your account");

    //remove recent userinfo 
    sessionStorage.removeItem('----Key----');
    sessionStorage.removeItem("LastName:");
    sessionStorage.removeItem("FirstName:");
    sessionStorage.removeItem("ID Number:");
    sessionStorage.removeItem("YearLevel:")
    sessionStorage.removeItem("Password:");

    //go back to login page
    goBackToLogin();
}

function goBackToLogin() {
    window.location.href = "Index.html"
}