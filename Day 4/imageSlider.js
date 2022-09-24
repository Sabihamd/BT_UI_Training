let $=function(id) {
    return document.getElementById(id)
}

let images=['img7.jpeg', 'img8.jpeg', 'img10.jpeg', 'img11.jpeg']
let i=0
function fun() {
    $('slider').src=images[i]
    if(i <  images.length-1){
        i+=1
    }
    else{
        i=0
    }

    setTimeout(fun,2000)
 }
 window.onload =fun
