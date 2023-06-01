const container = document.querySelector('.container')
const Black = document.createElement('button')
const Random = document.createElement('button')
const Eraser = document.createElement('button')
const Gray = document.createElement('button')
const clear = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons');


function createDivs(col,rows){
    for (let i = 0; i < (col*rows); i++) {
       const div = document.createElement('div')
    container.style.background = 'white'
       container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
       container.appendChild(div).classList.add('box')
        
    }
}

createDivs(16,16)

function grayColor() { 
    
    const boxs = container.querySelectorAll('.box')
     Gray.textContent = "GRAY"
    Gray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
          let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
        }))
    })
    buttonsContainer.appendChild(Gray).classList.add('btn')
}
grayColor()


function rgbColors() {
    
    const boxs = container.querySelectorAll('.box')
    Random.textContent = "RGB"
    Random.addEventListener('click' ,() => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    buttonsContainer.appendChild(Random).classList.add('btn')
}
rgbColors()

function blackColor() {
   
    const boxs = container.querySelectorAll('.box')
    Black.textContent = 'BLACK';
    Black.addEventListener('click', function () {
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'rgba(0, 0, 0, 0.90)'
        }))
    })
    buttonsContainer.appendChild(Black).classList.add('btn')
}
blackColor() 

function eraseColor() {
   
    const boxs = container.querySelectorAll('.box')
    Eraser.textContent = 'ERASER';
    Eraser.addEventListener('click', function () {
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'rgba(255, 255, 255, 0.90)'
        }))
    })
    buttonsContainer.appendChild(Eraser).classList.add('btn')
}
eraseColor() 

function clearColor() {
   
    const boxs = container.querySelectorAll('.box')
    clear.textContent = 'CLEAR';
    clear.addEventListener('click', function () {
       
            reSet()
        
         
    })
    buttonsContainer.appendChild(clear).classList.add('btn')
}
clearColor() 
function reSet() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => {
        box.remove();
    })
}


function reSize() {
   
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('WHAT SIZE YOU WANT YOUR GRID TO BE?')
        user = parseInt(user)
       
            if (user === null) {
                alert('please insert number b/n 2 and 100')
                reSet();
                createDivs(16,16);
                grayColor();
                rgbColors();
                blackColor();
                eraseColor();
                clearColor()
            } else if(user <1){
                alert('negative number and number less than 1 is not allowed')
                reSet();
                createDivs(16,16);
                grayColor();
                rgbColors();
                blackColor();
                eraseColor();
                clearColor()
            }else if(user > 100){
                     alert('number grater than 100 is not allowed')
                     reSet();
                createDivs(16,16);
                grayColor();
                rgbColors();
                blackColor();
                eraseColor();
                clearColor()
            }else if(user>1 && user<100){
            reSet();
            createDivs(user,user);
            grayColor();
            rgbColors();
            blackColor();
            eraseColor();
            clearColor()
        }else{
            alert('Invalid type please insert number')
        } 
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()