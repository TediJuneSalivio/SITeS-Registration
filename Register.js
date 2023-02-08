//Variable declarations
let newlName = document.getElementById("lName");
let newfName = document.getElementById("fName");
let newIdNumber = document.getElementById("idNumber");
let yearLevel = document.getElementById("year");
let newPassword = document.getElementById("newPassword");

//Passing the data into the photo.js
function passData() {

    if (newlName === "" || newfName.value === "" || newIdNumber.value === "" || newPassword.value === "") {
        alert("Please fill up all the fields!");
    } else if (newIdNumber.value.length != 7) {
        alert("Id length must be 7")
        event.preventDefault();
    } else {

        //Current user info after login
        sessionStorage.setItem("----Key----", "----Value----");
        sessionStorage.setItem("LastName:", newlName.value);
        sessionStorage.setItem("FirstName:", newfName.value);
        sessionStorage.setItem("ID Number:", newIdNumber.value);
        sessionStorage.setItem("YearLevel:", yearLevel.value);
        sessionStorage.setItem("Password:", newPassword.value);

        //alert
        alert("Last step: Take Photo");

        //redirect to photo.html
        window.location.href = 'Photo.html';

        event.preventDefault();
    }
}