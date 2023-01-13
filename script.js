let a, b, c
setInterval(function() {
    a = Math.random() * 255
    b = Math.random() * 255
    c = Math.random() * 255
    document.querySelector('#ff').style.background = "rgb(" + a + ", " + b + ", " + c + ")";
    document.querySelector('#ss').style.color = "rgb(" + a + ", " + b + ", " + c + ")";
},100)

dance = document.getElementsByTagName("img")
// setInterval(function() {
//     for (let i = 2; i < dance.length - 2; i++) {
//         dance[i].style.top = Math.random() * 80 - 10 + "vh"
//         dance[i].style.left = Math.random() * 80 + "vw"
//         dance[i].style.transform = "rotate(" + Math.random() * 360 + "deg)"
//     }
// }, 500)

let i = 2;
setInterval(function() {
    if (i > 7) i = 2;
    dance[i].style.top = Math.random() * 80 - 10 + "vh"
    dance[i].style.left = Math.random() * 80 + "vw"
    dance[i].style.transform = "rotate(" + Math.random() * 360 + "deg)"
    i += 1
}, 60)


function nazvanie() {
    document.querySelector('#tt').style.display = 'none';
    document.querySelector('#ff').style.display = 'block';
    document.querySelector('#zxc').play()
}