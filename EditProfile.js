//Variable declarations
let userInfo = JSON.parse(localStorage.getItem("tblPerson"));
let CurrentID = localStorage.getItem("CurrentID");
let CurrentPass = localStorage.getItem("CurrentPass");
let profileEdit = document.getElementById('profileEdit');
let fNameEdit = document.getElementById("fNameEdit");
let lNameEdit = document.getElementById("lNameEdit");
let yearEdit = document.getElementById("yearEdit");

//body on load
$(document).ready(function() {
    for (let index = 0; index < userInfo.length; index++) {
        if (CurrentID == userInfo[index].IdNumber && CurrentPass == userInfo[index].Password) {
            profileEdit.setAttribute('src', userInfo[index].Picture)
        }
    }
})


//edit profile function
function editProfile() {

    localStorage.setItem('updatedFirstName', fNameEdit.value);
    localStorage.setItem('updatedLastName', lNameEdit.value);
    localStorage.setItem('updatedYear', yearEdit.value);

    for (let index = 0; index < userInfo.length; index++) {
        if (CurrentID == userInfo[index].IdNumber && CurrentPass == userInfo[index].Password) {
            userInfo[index].FirstName = localStorage.getItem('updatedFirstName');
            userInfo[index].LastName = localStorage.getItem('updatedLastName');
            userInfo[index].Year = localStorage.getItem('updatedYear');

            localStorage.setItem("tblPerson", JSON.stringify(userInfo));
            alert("Information updated");

            //remove item from local storage
            localStorage.removeItem('updatedFirstName', fNameEdit.value);
            localStorage.removeItem('updatedLastName', lNameEdit.value);
            localStorage.removeItem('updatedYear', yearEdit.value);

            //clear field
            fNameEdit.value = "";
            lNameEdit.value = "";
            yearEdit.value = "1st Year";

            window.location.href = 'Home.html'

        }
    }
}

//cancel function
function cancel() {
    let condition = confirm("Do you want to cancel Editing your Information?")

    if (condition == true) {
        fNameEdit.value = "";
        lNameEdit.value = "";
        yearEdit.value = "1st Year";
        window.location.href = 'Home.html'
    }
}

//redirect to home page
function goHome() {
    window.location.href = 'Home.html'
}