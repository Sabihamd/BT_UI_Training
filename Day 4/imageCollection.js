let $=function(id) {
    return document.getElementById(id)
}
function goToDefault(el){
    
    if(el.hasAttribute('src')){
        let image=el.getAttribute('src')
        let root=$('default')
        root.setAttribute('src', image)
    }
}

function backToNormal(){
    let root=$('default')
    root.setAttribute('src', './img7.jpeg')
}