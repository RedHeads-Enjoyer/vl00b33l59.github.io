let a, b, c
setInterval(function() {
    a = Math.random() * 255
    b = Math.random() * 255
    c = Math.random() * 255
    document.body.style.background = "rgb(" + a + ", " + b + ", " + c + ")";
    document.querySelector('#ss').style.color = "rgb(" + a + ", " + b + ", " + c + ")";
},100)

dance = document.getElementsByTagName("img")
setInterval(function() {
    for (let i = 0; i < dance.length - 1; i++) {
        dance[i].style.top = Math.random() * 80 - 10 + "vh"
        dance[i].style.left = Math.random() * 80 + "vw"
        dance[i].style.transform = "rotate(" + Math.random() * 360 + "deg)"
    }
}, 500)