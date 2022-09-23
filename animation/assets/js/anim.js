console.log("Hey");


let first = document.getElementById("first");

let imageArray = new Array 
('assets/images/assets/Asset20.png' , 
 'assets/images/assets/Asset21.png' ,
 'assets/images/assets/Asset22.png' ,
 'assets/images/assets/Asset23.png' ,
 'assets/images/assets/Asset24.png' ,
 'assets/images/assets/Asset25.png' ,
 'assets/images/assets/Asset26.png' ,
 'assets/images/assets/Asset27.png');

let count = 0

function animate () {
    first.src = imageArray [count];
    count++;

    if (imageArray.length == count) {

        count=0;
    }
}

setInterval(animate,100)