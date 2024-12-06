async function getExperienceData() {
    const URL = "https://github.com/CaioHLuwi/portfolio-academy/blob/development/assets/json/data.json";
    const headers = {
        'Content-Type': 'application/json'
    }

    const req = await fetch(URL, {
        method: 'GET',
        headers
    });
    
    const res = await req.json();
    console.log(res);
}

getExperienceData()


        const titleExperiences = document.querySelectorAll('.experience-title');
        const companyExperiences = document.querySelectorAll('.experience-company');
        const workDateExperiences = document.querySelectorAll('.experience-workdate');
        const descriptionExperiences = document.querySelectorAll('.experience-description');
        const technologiesExperiences = document.querySelectorAll('.experience-technologies');

function getExperiences() {

    for(let i = 0; i < experiencesData.length; i++) {
        titleExperiences[i].textContent = experiencesData[i].title
        companyExperiences[i].textContent = experiencesData[i].company
        workDateExperiences[i].textContent = experiencesData[i].workDate
        descriptionExperiences[i].textContent = experiencesData[i].description
        technologiesExperiences[i].textContent = `Tecnologias: ${experiencesData[i].technologies[i]}`;
    }
}

getExperiences();