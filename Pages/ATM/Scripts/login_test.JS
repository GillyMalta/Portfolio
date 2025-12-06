document.getElementById("send_It").addEventListener("click", function(e) {
    e.preventDefault();
});

let currentuser = null;
let balances = [];
let currentbalance = null;

function login() {
    fetch('Portfolio/Pages/ATM/Assets/JSON/login.json')
        .then(response => response.json())
        .then(data => {
            const loginArray = [];
            data.forEach(entry => loginArray.push(entry));

            const inputUser = document.getElementById("username").value;
            const inputPassword = document.getElementById("password").value;

            const isValid = loginArray.some(entry =>
                entry.user === inputUser && entry.password === inputPassword
            );

            if (isValid) {
                currentuser = inputUser;
                document.getElementById("current_User").innerHTML = inputUser;
                document.getElementById("display_Area").innerHTML = "What would you like to do today " + inputUser + "?";
                console.log('Login successful!');
            } else {
                alert("Incorrect login. Please try again!");
                console.log('Invalid credentials.');
            }
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

function logbackin() {
    document.getElementById("login").addEventListener("click", () => {
        fetch("/pages/login/login.html")
            .then(response => {
                if (!response.ok) throw new Error("Network error");
                return response.text();
            })
            .then(data => {
                document.getElementById("display_Area").innerHTML = data;
            })
            .catch(error => console.error("Error loading file:", error));
    });
}

document.getElementById("balance").addEventListener("click", () => {
    fetch("/pages/balance/balance.html")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.text();
        })
        .then(data => {
            document.getElementById("display_Area").innerHTML = data;
        })
        .catch(error => console.error("Error loading file:", error));
});

document.getElementById("withdraw").addEventListener("click", () => {
    fetch("/pages/withdraw/withdraw.html")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.text();
        })
        .then(data => {
            document.getElementById("display_Area").innerHTML = data;
        })
        .catch(error => console.error("Error loading file:", error));
});

document.getElementById("deposit").addEventListener("click", () => {
    fetch("/pages/deposit/deposit.html")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.text();
        })
        .then(data => {
            document.getElementById("display_Area").innerHTML = data;
        })
        .catch(error => console.error("Error loading file:", error));
});

document.getElementById("logout").addEventListener("click", () => {
    fetch("/pages/logout/logout.html")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.text();
        })
        .then(data => {
            document.getElementById("display_Area").innerHTML = data;
        })
        .catch(error => console.error("Error loading file:", error));
});
