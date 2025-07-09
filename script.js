document.getElementById('saveButton').addEventListener('click', ()=>{

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

if(!nameInput || !ageInput){
    console.error('Los elementos del formularion no existen.');
    return;
}

const name = nameInput.value.trim();
const age = parseInt(ageInput.value)

if (validateLetters(name) && !isNaN(age)){
    localStorage.setItem('userName', name);
    localStorage.setItem('userAge', age);
    displayData();

}else{
    alert('Ingrese un nombre valido y una edad numerica.');
}


});


//funcion para validar entreada de datos solo (letras)
function validateLetters(str){
    const regrex =/^[A-Za-z\s]+$/
    return regrex.test(str)
}


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

//Datos almacenados 

window.onload = displayData;


// Contador de interacciones con usuario

if(!sessionStorage.getItem('interactionCount')){

    sessionStorage.setItem('interactionCount', 0);   
}

function updateInteractionCount(){
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount',count);
    console.log(`Interactions in this session: ${count}`);
}


document.getElementById(`saveButton`).addEventListener(`click`,updateInteractionCount);
document.getElementById(`clearButton`).addEventListener(`click`,updateInteractionCount)


document.getElementById('clearButton').addEventListener('click', ()=>{
    localStorage.clear();
    displayData();
})
