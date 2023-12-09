document.addEventListener('DOMContentLoaded',()=>{
    const skills = document.querySelector('.lista-conocimientos')
    if (skills){
        skills.addEventListener('click', addSkill)
        skillSelecteds()
    }
})
const skills = new Set()

const addSkill = e =>{
    if (e.target.tagName==='LI'){
        if (e.target.classList.contains('activo')){
            e.target.classList.remove('activo')
            skills.delete(e.target.textContent)

        }else{
            skills.add(e.target.textContent)
            e.target.classList.add('activo')
        }
    }
    const skillsArray = [...skills]
    document.querySelector('#skills').value= skillsArray
}

const skillSelecteds = ()=>{
    const selecteds = Array.from( document.querySelectorAll('.lista-conocimientos .activo'))
    //Inject in hidden
    selecteds.forEach(selected=>{
        skills.add(selected.textContent)
    })
    const skillsArray = [...skills]
    document.querySelector('#skills').value= skillsArray

}