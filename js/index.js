let input = document.getElementById('input')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('area')
let contador = 0


function addTarefa() {
    let valorInput  = input.value

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador

        let novoItem = `<div id= "${contador}" class="item">
        <div onclick = "marcarTarefa(${contador})" class="item-icone">
            <img id = "icone_${contador}" src="./icons/circle-outline.svg" alt="Circulo" class="circle">
        </div>
        <div onclick = "marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
        <div class="item-botao">
            <button onclick = "deletar(${contador})" class="delete"><img src="./icons/delete-empty.svg" alt="Icone lixeira">Deletar</img></button>
        </div>
    </div>`

    //Add item
    main.innerHTML += novoItem

    //Zera input
    input.value = ""
    input.focus()
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if(classe == "item") {
        item.classList.add('selecionado')

        var icone = document.getElementById('icone_'+id)
        icone.setAttribute('src', './icons/check-circle.svg')

        //Selecionado leva o item para baixo
        item.parentNode.appendChild(item)

    } else {
        item.classList.remove('selecionado')

        var icone = document.getElementById('icone_'+id)        
        icone.setAttribute('src', './icons/circle-outline.svg')

    }
}

input.addEventListener("keypress", function(event){

    if(event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})