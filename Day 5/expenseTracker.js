let $=function(id){
    return document.getElementById(id)
}

function addItem(){
    let res=$('dropdown').value
    let txt=$('inputtext').value
    let amt=parseInt($('inputamount').value)
    
    if(res.length!=0 & txt.length!=0 & amt > 0){
        $('inputtext').value=" "
        $('inputamount').value=" "
        let trNode=document.createElement('tr')
        let tdNode1=document.createElement('td')
        let tdNode2=document.createElement('td')
        if(res=='+1'){
            tdNode1.innerHTML=txt
            tdNode2.innerHTML=amt
            trNode.appendChild(tdNode1)
            trNode.appendChild(tdNode2)
            $('tableId').appendChild(trNode)
            $('innerflex1').value=parseInt($('innerflex1').value)+amt
            $('innerflex2').value=parseInt($('innerflex2').value)+amt
        }
        else{
            tdNode1.innerHTML=txt
            tdNode2.innerHTML=amt
            trNode.appendChild(tdNode1)
            trNode.appendChild(tdNode2)
            $('tableId2').appendChild(trNode)
            $('innerflex3').value=parseInt($('innerflex3').value)+amt
            $('innerflex2').value=parseInt($('innerflex2').value)-amt
        }
    }
}

