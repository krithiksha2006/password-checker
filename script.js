function checkStrength() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;

    if (password.length < 8) {
        result.innerText = "Password Strength: WEAK";
        result.style.color = "red";
        return;
    }

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if (ch >= 'A' && ch <= 'Z')
            hasUpper = true;
        else if (ch >= 'a' && ch <= 'z')
            hasLower = true;
        else if (ch >= '0' && ch <= '9')
            hasDigit = true;
        else
            hasSpecial = true;
    }

    let score = 0;
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasDigit) score++;
    if (hasSpecial) score++;

    if (score <= 1) {
        result.innerText = "Password Strength: WEAK";
        result.style.color = "red";
    } else if (score <= 3) {
        result.innerText = "Password Strength: MEDIUM";
        result.style.color = "orange";
    } else {
        result.innerText = "Password Strength: STRONG";
        result.style.color = "green";
    }
}
