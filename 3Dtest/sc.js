document.body.style.cursor = 'none';
document.body.style.overflow = 'hidden';
canv = document.getElementById('screen')
scren = canv.getContext('2d')
canv.height = window.innerHeight;
canv.width = window.innerWidth;
scren.fillStyle = "#000000"
let mouX = 0
let mouY = 0
var cX = 1
var cY = 1
var cZ = 1
var cDir = 1

points = [
    [
        [1,5,1],
        [1,1,1],
        [1,3,1]
    ],
    [
        [3,3,1.5],
        [4,4,1.5],
        [3,4,1.5]
    ],
    [
        [5,5,4],
        [6,6,4],
        [7,6,4]
    ]
]

var speed = 0.05

document.addEventListener("keypress", function onEvent(event) {
    console.log(event.key)
    if (event.key === "w") {
        cZ = cZ + Math.cos(cDir)*speed*0.5
    }
    if (event.key === "a") {
        cX = cX - Math.sin(cDir)*speed*10
    }
    if (event.key === "s") {
        cZ = cZ - Math.cos(cDir)*speed*0.5
    }
    if (event.key === "d") {
        cX = cX + Math.sin(cDir)*speed*10
    }
    if (event.key === "i") {
        cY = cY - speed*10
    }
    if (event.key === "k") {
        cY = cY + speed*10
    }
    if (event.key === "j") {
        cDir = cDir - speed*0.1
    }
    if (event.key === "l") {
        cDir = cDir + speed*0.1
    }
    frUpd()
});

function rtmtrx(x,z,d) {
    rx = ((z*Math.sin(d))+(x*Math.cos(d)))
    rz = ((z*Math.cos(d))-(x*Math.sin(d)))
    return [rx,rz]
}

function frUpd() {
    scren.clearRect(0,0,canv.width,canv.height)
    points.forEach(point => {
        scren.beginPath();
        point.forEach(verts => {
            tx = (verts[0]*10 - cX) + 50
            ty = (verts[1]*10 - cY) + 50
            tz = (verts[2] - cZ) - 1
            x = tx/(tz/2)
            y = ty/(tz/2)
            if(tz > 0){
                scren.lineTo(rtmtrx(x,y,cDir)[0],rtmtrx(x,y,cDir)[1])
            }
        });
        scren.fill()
    });
}
