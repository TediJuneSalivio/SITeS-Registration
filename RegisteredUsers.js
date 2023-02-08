//document ready or body on load
$(document).ready(function() {

    //variable declarations
    let userInfo = JSON.parse(localStorage.getItem("tblPerson"))
    let CurrentID = localStorage.getItem("CurrentID")
    let CurrentPass = localStorage.getItem("CurrentPass")
    let usernameTag = document.getElementById('usernameTag');

    //looping through the array of object
    for (let index = 0; index < userInfo.length; index++) {
        if (CurrentID == userInfo[index].IdNumber && CurrentPass == userInfo[index].Password) {
            let fullname = `${userInfo[index].LastName} ${userInfo[index].FirstName}`
            usernameTag.textContent = fullname;
        }

        $('.row').append(`
        <div class="col-md-4">
            <div id="cont" class="card user-card">

                <div class="card-header">
                  <h5>Profile</h5>
                </div>

                <div class="card-block">
                    <div class="user-image">
                      <img class="img-radius" src="${userInfo[index].Picture}">
                </div>

                    <h6 id="FullName" class="f-w-600 m-t-25 m-b-10">${userInfo[index].LastName} ${userInfo[index].FirstName}</h6>
                    <h6 id="IdNumber" class="f-w-600 m-t-25 m-b-12">${userInfo[index].IdNumber}</h6>
                    <h6 id="YearLevel" class="f-w-600 m-t-25 m-b-11">${userInfo[index].Year}</h6>
                    <hr id="orangeHr">

                 </div>
            </div>
        </div>
    `)
    }

})

//function for logout
function logOut() {
    localStorage.removeItem("CurrentID")
    localStorage.removeItem("CurrentPass")
}