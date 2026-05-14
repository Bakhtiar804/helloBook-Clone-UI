function createAccount(){
    let button = document.getElementById('color-green')

    window.location.href = 'createAccount.html'
}

let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];

function craeteNewAcc(){

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('newPass').value
    let confirmPass = document.getElementById('confirmPass').value
    let date = document.getElementById('date').value

class userDetails  {
    constructor(firstName , lastName , email , password , confirmPass , date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPass = confirmPass;
        this.date = date;
    }
}



let users = new userDetails(firstName , lastName , email , password , confirmPass , date)

usersArray.push(users);

localStorage.setItem('usersArray' , JSON.stringify(usersArray));

firstName = ''
confirmPass = ''
lastName = ''
date = ''
password = ''
email = ''


}


function loginAcc(){

    let loginEmail = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value

    let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];

    let checkUser = false;

    for(let i = 0; i < usersArray.length; i++){

        if(
            usersArray[i].email === loginEmail &&
            usersArray[i].password === loginPassword
        ){

            checkUser = true;

            alert('Login Successful')

            window.location.href = 'home.html'
        }
    }

    if(checkUser === false){
        alert('Invalid Email or Password')
    }

}

