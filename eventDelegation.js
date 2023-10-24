// click function here
let languages = document.querySelector('.languages');
let list = document.querySelector('#list');

list.addEventListener('click',(event)=>{
    if(event.target.matches("li")){
        if(event.target.innerText == 'javascript'){
            event.target.style.background = 'blue';
        }else if(event.target.innerText == "java"){
            event.target.style.background = 'yellow';
        }else if(event.target.innerText == 'python'){
            event.target.style.background = 'green';
        }else if(event.target.innerText == 'PHP'){
            event.target.style.background = 'black';
        }else{
            event.target.style.background = 'red';
        }
    } 
});

// new Elementadd function here
function addEliment(){
    let newEliment = document.createElement('li');
    console.dir(newEliment)
    newEliment.textContent = 'c';
    list.appendChild(newEliment);
    
}