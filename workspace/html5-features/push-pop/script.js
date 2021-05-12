let boxes = Array.from(document.getElementsByClassName("box")); 



function selectedBox(id) {
    boxes.forEach(box => {
        box.classList.toggle('selected', box.id === id)
    })
}

boxes.forEach(box => {
    let id = box.id; 
    box.addEventListener("click", e => {
        history.pushState({id}, `Selected : ${id}`,`./selected=${id}`)
        selectedBox(id)
    })
})

window.addEventListener("popstate", e => {
    selectedBox(e.state.id)
})

history.replaceState({id:null}, 'Default state', './')
