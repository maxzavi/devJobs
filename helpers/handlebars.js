module.exports = {
    selectSkills : (selecteds=[], options)=>{
        const skills = ['HTML5','CSS3','CSSGrid','Flexbos','JavaScript','jQuery','Node','Angular','VueJS','ReactJS','React Hooks','Redux','Apollo','GrpahQL','TypeScript','PHP','Laravel','Symfony','Python','Django','ORM','Sequelize','Mongoose','SQL','MVC','SASS','WordPress']
        let html=''
        skills.forEach(skill=>{
            html += `
                <li>${skill}</li>
            `
        })

        return options.fn().html = html
    }
}