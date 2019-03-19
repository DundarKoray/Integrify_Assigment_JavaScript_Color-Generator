// get the value from INPUT
const input = document.querySelector('input')
//target the generate BUTTON
const button = document.querySelector('button')

// add EVENTLISTENER for the BUTTON
button.addEventListener('click', createDiv)






////////////////
//FUNCTIONS
// create a function that GENERATES HEX NUMBERS
function randomHexaNumberGenerator(){
    let randomHex = '0123456789ABCDEF'
    let colorHex ='#'
    
    for (let i=0; i<randomHex.length; i++){
        colorHex = colorHex + randomHex[Math.floor(Math.random() * randomHex.length)]
        
    }
    
    return colorHex.slice(0, 9);
}

// create a function that GENERATES DIVS
function createDiv (){
    const resultSection = document.querySelector('.result-section')
    
    if (input.value > 10 || input.value < 0) {
        alert('Max number is 10')
    } else{

        
        for(let i = 0; i < input.value; i++){
            
            const hexColor = randomHexaNumberGenerator() 
            const copyHexColor = hexColor;
            
            const createNewBox = document.createElement('div')
            createNewBox.setAttribute('class', 'gen-div' )
            
        const copyButton = document.createElement('button')
        copyButton.setAttribute('class', 'copy-button')
        copyButton.textContent = 'Copy'
        copyButton.addEventListener('click', copyPaste)

        const createSpan = document.createElement('span')
        createSpan.textContent = `${copyHexColor}`
        createNewBox.appendChild(createSpan)

        // createNewBox.textContent =`${copyHexColor}`
        createNewBox.style.background =`${copyHexColor}`
        
        createNewBox.appendChild(copyButton)
        resultSection.appendChild(createNewBox)    
        
        
    }
}

    
}




const restart = document.querySelector('.restart')


function copyPaste (){

    const copiedSpan = this.parentNode.querySelector('span')
    console.log(this);
    
    try {
        var range = document.createRange();
        range.selectNodeContents(copiedSpan);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    catch(err) {
        console.log(err);
    }
    document.execCommand('copy')
    
}


function removeDivs(){
    const remove = document.querySelectorAll('.gen-div');
    input.value = '';
    
    
    remove.forEach(element => {

        element.remove();
    })
    
}

restart.addEventListener('click', removeDivs)
