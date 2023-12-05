document.addEventListener('DOMContentLoaded',()=>{
    const skills = document.querySelector('.lista-conocimientos')
    if (skills){
        skills.addEventListener('click', addSkill)
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