// Variable Declarations
let userInfo = JSON.parse(localStorage.getItem("tblPerson"))
let IDNumber = document.getElementById("IDNumber");
let Password = document.getElementById("LoginPassword");
let validate = false;


//Function for login
function login() {

    if (IDNumber.value === "" || Password.value === "") {
        alert("Please fill up all fields");
    } else if (IDNumber.value.length != 7) {
        alert("ID Number length must be 7");
    } else {
        for (let index = 0; index < userInfo.length; index++) {
            if (IDNumber.value == userInfo[index].IdNumber && Password.value == userInfo[index].Password) {
                console.log('STATEMENT: ', true)
                validate = true;

                //Currently Logged in Student
                localStorage.setItem("CurrentID", IDNumber.value);
                localStorage.setItem("CurrentPass", Password.value);

                event.preventDefault();
                break;
            } else {
                validate = false;
                console.log('STATEMENT: ', false)
                event.preventDefault();
            }
        }
    }

    if (validate == true) {
        alert("Login Succesfully");
        clearFields();
        window.location.href = 'Home.html';
    } else {
        alert("Incorrect Email or Password");
        Password.value = null;
    }
}

//Clear Field function
function clearFields() {
    IDNumber = null;
    Password = null;
}