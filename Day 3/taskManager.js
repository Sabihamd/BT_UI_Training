let $=function(id) {
    return document.getElementById(id)
}

function addTask(){
    let res=prompt('Enter Task Name')
    if(res!=null){
        tasksarray.push(res)
        $('textbox').value+=res + '\n'
    }
}
let tasksarray=[]
function deleteTask(){
        let num=parseInt(prompt('Enter the task number'))
        if(num<1 || num>tasksarray.length){
            alert('There is no such index')
        }
        else{
            delete tasksarray[num-1]
            console.log(tasksarray)
            showArray()
        }
}

function showArray(){
    let st=''
    for(let i of tasksarray){
        if(i!=null){
        st+=i + '\n'
    }
    }
    $('textbox').value=st
}

