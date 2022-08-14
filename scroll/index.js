const boxes = document.querySelectorAll('.box')

function checkBoxes(){
    const start_point_animation = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const box_top = box.getBoundingClientRect().top
        if(box_top < start_point_animation)
            box.classList.add('show')
        else
            box.classList.remove('show')
    })
    console.log("Scroll");
}
checkBoxes()
window.addEventListener('scroll', checkBoxes)
window.addEventListener('onScroll', checkBoxes)