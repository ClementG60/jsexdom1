function verificationPassword(){
    let p1 = document.getElementById("password1").value
    let p2 = document.getElementById("password2").value
    if (p1 == p2) {
        document.getElementById("password1").style.borderColor = "green"
        document.getElementById("password2").style.borderColor = "green"
    } else {
        document.getElementById("password1").style.borderColor = "red"
        document.getElementById("password2").style.borderColor = "red"
    }
}
