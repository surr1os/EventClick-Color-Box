let boxItems = document.querySelectorAll('.box')
   
function arrayRandElement(e) {
    let arr = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
    var rand = Math.floor(Math.random() * arr.length);
    e.style.background = arr[rand]
}



function mOver(e){
    let elements = [e.currentTarget];
    let currentEl = e.currentTarget;
    while (currentEl){
       elements = [...elements, ...currentEl.children]
       currentEl = currentEl.children[currentEl.children.length - 1];

    }
    elements.forEach((el,i) => setTimeout(arrayRandElement, 200 * (i + 1), el))

     

}
function resetColor(e){
    e.style.background = ''
}
function mOut(e){
    resetColor(e.currentTarget)
}
boxItems.forEach(e => e.addEventListener('mouseenter', mOver))
boxItems.forEach(e => e.addEventListener('mouseleave', mOut))