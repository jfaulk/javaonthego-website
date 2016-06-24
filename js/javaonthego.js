/**
 * Created by james on 2016-03-28.
 */

function isLoggedIn() {
    if (Cookies.get('userName') == undefined) {
        return false;
    }
    else {
        return true;
    }

}

function getCurrentUser() {
    if (Cookies.get('userName') == undefined) {
        return "";
    }
    else {
        return Cookies.get('userName');
    }
}

function LoadLoginPage() {
    document.location.replace("login.html");
}

function LoadRegisterPage() {
    document.location.replace("signup.html");
}

function ReturnUser() {
    SendMessage('LoginHandler', 'UserPassed', getCurrentUser());
}

