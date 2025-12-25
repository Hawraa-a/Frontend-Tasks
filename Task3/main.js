let email = "hawraa@gmail.com";
let password = "1234";
let attempts = 3;

function askLogin() {

    while (attempts > 0) {
        userEmail = prompt("Enter your email:");
        userPassword = prompt("Enter your password:");
        if (userEmail == email && userPassword == password) {
            console.log("Login successful");
            break;
        }
        attempts--;
        console.log("Wrong!");
    }
    if (attempts == 0) {
        console.log("Wait 30 s then you can try again");
        setTimeout(() => {
            attempts = 3;
            askLogin();
        }, 30000); 
    }
}
askLogin();