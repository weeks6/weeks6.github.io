document.getElementById("ebanaya").onclick = distanceCalc;

function distanceCalc() {
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;

    console.log(x1, y1, x2, y2);
    let interm = document.getElementById("someshit");
    interm = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
    document.getElementById("output").innerHTML = interm;
};
