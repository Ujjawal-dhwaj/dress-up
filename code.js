

const draggableItems = document.querySelectorAll('.dress__wrpr img');
const mainContainer = document.querySelector('.dressUpMain__img');
let touchData = {};  

draggableItems.forEach(item => {
   
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('touchstart', touchStart);
    item.addEventListener('touchmove', touchMove);
    item.addEventListener('touchend', touchEnd);
});

mainContainer.addEventListener('dragover', dragOver);
mainContainer.addEventListener('drop', drop);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.src);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const src = e.dataTransfer.getData('text/plain');
    appendImage(src);
}

function touchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    touchData = {
        src: e.target.src,
        x: touch.clientX,
        y: touch.clientY,
        element: e.target
    };
}

function touchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;
    
}


function touchEnd(e) {
    e.preventDefault();
    appendImage(touchData.src);
}

function appendImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'absolute';
    img.style.left = '0';
    img.style.top = '13%';
    img.style.width = '100%';  
    img.style.height = 'auto';  

    if (src.includes('pant')) {
        img.style.top = '63%';  
        img.style.width = '100%'; 
    }

    img.style.pointerEvents = 'none';  
    mainContainer.appendChild(img);
}





function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}




