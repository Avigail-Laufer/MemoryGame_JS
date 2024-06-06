let signInBtn = document.getElementById("signIn");
let signUpBtn = document.getElementById("signUp");
let fistForm = document.getElementById("form1");
let secondForm = document.getElementById("form2");
let container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});



function signIn(event) {
    event.preventDefault();
    let emailUser = document.getElementById('emailUserUp').value;
    let passwordUser = document.getElementById('passwordUserUp').value;
    let UserName = {
        email: emailUser,
        password: passwordUser
}

//מכניס את הנותונים לאוביקט ואם המערך ריק הוא מכניס את האוביקט למערך.
    let users = localStorage.getItem('users');
    let UserArrey = JSON.parse(users);
    if (UserArrey == null) {
        UserArrey = new Array();
    }
    else if (!pushToUsers(UserName, UserArrey)) {
        return;
    }
    //מכניס את האוביקט לזיכרון המקומי
    UserArrey.push(UserName);
    localStorage.setItem('currentUser', JSON.stringify(UserName));
    localStorage.setItem('users', JSON.stringify(UserArrey));
    window.open("../html/game.html","_self");
}


//פונקציה שמוודאת האם כתובת האימייל שבאובייקט החדש קיימת במערך

function findUser(email, UserArrey) {
    for (let i = 0; i < UserArrey.length; i++) {
        if (UserArrey[i].email == email) {
            return i;
        }
    }
    return -1;
}
// פונקציה שמוודאת האם הסיסמא שבאובייקט החדש קיימת במערך
function findPassword(password, UserArrey) {
    for (let i = 0; i < UserArrey.length; i++) {
        if (UserArrey[i].password == password) {
            return true;
        }
    }
    return false;
}
// פונקציה שבודקת תקינות קלט

function ChecksIfUserValid(index, password, UserArrey) {
    if (UserArrey[index].password == password) {
        return true;
    }
    return false;
}



//אם הפונקציה לא החזירה -1 הוא מקפיץ אלרט רלוונטי
function pushToUsers(UserName, UserArrey) {``
    let index = findUser(UserName.email, UserArrey);
    if (index != -1) {
        if (ChecksIfUserValid(index, UserName.password, UserArrey)) {
            alert("hi!, we have met you,  just log in");
        } else {
            alert("The Email that you entered is already exist in our system, Please choose another!");
        }
        return false;
    }
    if (findPassword(UserName.password, UserArrey)) {
        alert("The password that you entered is already exist in our system, Please choose another!");
        return false;
    }
    return true;
}






function logIn(event) {
    event.preventDefault();
    let emailUser = document.getElementById('emailUserIn').value;
    let passwordUser = document.getElementById('passwordUserIn').value;
    let users = localStorage.getItem('users');
    let UserArrey = JSON.parse(users);

    //אם האובייקט לא נמצא במערך הפונקציה מחזירה אלרט
    if (UserArrey == null) {
        alert(" Oops, it's the first time that we see your name here, please sign in.");
        return;
    }
    
    let index = findUser(emailUser, UserArrey);
    if (index == -1) {
        alert("Oops, it's the first time that we see your name here, please sign in.");
        return;
    }
    //אם הפונקציה שמוודאת תקינות מחזירה פולס היא מחזירה אלרט רלוונטי
    if (!ChecksIfUserValid(index, passwordUser, UserArrey)) {
        alert("There is a wrong with your password, please try again.");
        return;
    }

    let curentUser = UserArrey[index];
    localStorage.setItem('currentUser', JSON.stringify(curentUser));
    window.open("../html/game.html","_self");
}



  
    


