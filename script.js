document.getElementById('saveButton').addEventListener('click', ()=>{

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

if(!nameInput || !ageInput){
    console.error('Los elementos del formularion mo existen.');
    return;
}

const name = nameInput.value.trim();
const age = parseInt(ageInput.value)

if (name && !isNaN(age)){
    localStorage.setItem('userName',name);
    localStorage.setItem('userAge',age);
    displayData();

}else{
    alert('Ingrese un nombre valido y una edad numerica.');
}
});


function displayData(){
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');

    if (name && age ){
        outputDiv.textContent = (`Hola ${name}, tinenes ${age} años.`);
    }else{
        outputDiv.textContent =(`No  hay datos almacenados.`);
    }
} 

//Datod almacenados 

window.onload = displayData;

if(!sessionStorage.getItem('interactionCount')){

    sessionStorage.setItem('interaction', 0);   
}

function uptadeInteractionCount(){
    let count = parseInt(sessionStorage.getItem('inractionCount'));
    count++;
    sessionStorage.setItem('interactionCount',count);
    console.log(`Interaciones en esta sesión: ${count}`);
}

document.getElementById(`saveButton`).addEventListener(`click`,uptadeInteractionCount);
document.getElementById(`clearButton`).addEventListener(`click`,uptadeInteractionCount)


document.getElementById('clearButton').addEventListener('click', ()=>{
    localStorage.clear();
    displayData();
})
