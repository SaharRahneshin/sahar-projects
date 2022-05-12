const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".user-password");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinBtn = document.querySelector(".login-button");
signinBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    usernameInput.innerText = "";
    passwordInput.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifsendData = true;

    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerText = "Please enter a valid Email";
        ifsendData = false;
    }
    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please enter your Password";
        ifsendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "Your password id too short";
        ifsendData = false;
    }
    if (ifsendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: body,
                headers: headers
            })
            .then(Response => {
                if (Response.ok) {
                    alert("You loged in successfully");
                    window.location = "http://google.com";
                }
            })
    }

}