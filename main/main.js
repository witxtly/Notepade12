let newfile = document.querySelector('.new-file')
let home = document.querySelector('.btn-home')
let Allnots = document.querySelector('.allnots')
let div = document.querySelector('.unit')
let nots = document.querySelector('.nots')
let delite = document.querySelector('.era')
let btnsearch = document.querySelector('.search-button')
let searchinput = document.querySelector('.search-input')
let textFieldAll = document.querySelector('.textFieldAll')
let mainSite = document.querySelector('.main')
let nameText = document.querySelector('.nameTexting')
let liane = document.querySelector('.linss')
let numText = document.querySelector('.numText')
let chan = document.querySelector('.changes')
let searchButton = document.querySelector('.search-button')
let findNotesn = document.querySelector('.search-input')


let noteCounter = 1
let deliteMode = false



newfile.addEventListener('click', function(event) {
    event.preventDefault()
    let notesn = document.createElement('div')
    notesn.classList.add("notesn")
    notesn.setAttribute('id', `${noteCounter}`) 
    let texting = document.createElement('p')
    texting.textContent = 'Notes ' + noteCounter
    let textField = document.createElement('textarea')
    textField.classList.add('texting')
    textField.setAttribute('id', `${noteCounter}`) 
    textField.style.display = 'none' 
    textFieldAll.appendChild(textField)
    mainSite.appendChild(textFieldAll)
    notesn.appendChild(texting)
    Allnots.appendChild(notesn)
    noteCounter++
    notesn.addEventListener('click', function(event) {
        event.preventDefault()
        div.style.display = 'none'
        textFieldAll.style.display = 'flex'
        textField.style.display = 'flex'
        mainSite.style.marginLeft = '0px'
        mainSite.style.marginTop = '0px'
        nameText.style.display = 'flex'
        numText.innerHTML = 'Notes ' + notesn.id
        chan.style.display = 'block'
        if (deliteMode === true) {
            notesn.remove()
            textField.remove()
            noteCounter = noteCounter - 1
            deliteMode = false
        }
        document.querySelectorAll('.texting').forEach(textFieldItem => {
            if (textFieldItem.id === notesn.id) {
                textFieldItem.style.display = 'flex'
            } 
            else {
                textFieldItem.style.display = 'none'
            }
        })
    })
})

delite.addEventListener('click', function() {
    deliteMode = true
})

home.addEventListener('click', function(event) {
    event.preventDefault()
    div.style.display = 'block'
    mainSite.style.marginLeft = '90px'
    mainSite.style.marginTop = '120px'
    textFieldAll.style.display = 'none'
    chan.style.display = 'none'
})


searchButton.addEventListener('click', function() {
    let notesnAll = document.querySelectorAll('.notesn')
    let query = findNotesn.value.toLowerCase()

    for (let note of notesnAll) {
        let text = note.textContent.toLowerCase()

        if (text.includes(query)) {
            note.style.display = "flex"
        } else {
            note.style.display = "none"
        }
    }
})