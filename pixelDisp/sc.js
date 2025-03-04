document.body.style.cursor = 'none';
document.body.style.overflow = 'hidden';
cursor = new Image(20,20)
cursor.src = "img/tst.png"
block = new Image(20,20)
block.src = "img/block.png"

world = [
    [block,0,0],
    [block,1,1],
    [block,3,1],
    [block,2,2]
]
_TOOL_ = "block";

document.addEventListener('keydown', function(event) {
    if (event.key === 'F5') {
      event.preventDefault();
      // Optionally, perform other actions instead of reloading
      console.log('F5 reload disabled');
    }
});
window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

console.log("connected")
const canv = document.getElementById("screen");
const scren = canv.getContext("2d");
scren.fillStyle = "#4f0dd0"
canv.height = window.innerHeight;
canv.width = window.innerWidth;
var mousX = 0
var mousY = 0
document.addEventListener('mousemove', function(event) {
    scren.clearRect(0,0,canv.width,canv.height)
    mx = event.clientX;
    my = event.clientY;
    mousX = Math.round(mx/20)*20
    mousY = Math.round(my/20)*20
    world.forEach(it => world.forEach(it => scren.drawImage(it[0],it[1]*20,it[2]*20)))
    scren.drawImage(cursor,mousX,mousY)
});
document.addEventListener('click', function(event) {
    if (_TOOL_ = "block") {
        world.push([block,mousX/20,mousY/20])
    }
});