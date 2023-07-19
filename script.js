// ACCESS BUTTONS IN HTML 
// ACCESS CARDS IN HTML 

const fillter__btns=document.querySelectorAll('.fillter__btns button')
const fillter__cards=document.querySelectorAll('.cards__container .card')

// FILLTER CARDS FUNCTION 

const fillterCards=(e)=>{
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active');

    fillter__cards.forEach( (card)=>{
        card.classList.add('hide')

        // CHECK IF THE CARD MATCHS SELECTED FILTER OR 'ALL' IS SELECTED 
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ){
        card.classList.remove('hide')

        }
    })
}
// CLICK EVENT TO EVERY BUTTONS ACHIVE BY FOREACH METHOD

fillter__btns.forEach( (button)=>{
    button.addEventListener("click",fillterCards)
})