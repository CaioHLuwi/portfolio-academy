const experiencesData = [
    {
        title: 'Suporte técnico N1',
        company: '4 Seniors Brasil',
        workDate: 'Jun de 2024 - Set de 2024 · 4 meses',
        description: 'Atuei no atendimento direto a clientes internacionais, utilizando o inglês como idioma principal, realizando diagnósticos e resolvendo problemas em ambientes corporativos em colaboração com técnicos de níveis superiores. Fui responsável pela organização, categorização e priorização de chamados, atribuindo-os conforme a complexidade, e pela análise de vulnerabilidades no ambiente interno dos clientes, elaborando advisories de cibersegurança para escalamento. Desenvolvi playbooks para processos de segurança cibernética e criei documentação detalhada de processos internos, contribuindo para a padronização e melhoria contínua dos fluxos de trabalho. Participei ativamente da migração e implementação do Movidesk como ferramenta de controle de chamados e configurei dispositivos como desktops, notebooks, iPhones e iPads, assegurando conformidade com as políticas de governança e compliance utilizando soluções Microsoft 365 (Intune, Azure, entre outras). Também preparei e configurei dispositivos para novos colaboradores, garantindo integração ao ambiente corporativo, e prestei suporte na impressão e digitalização de documentos para servidores remotos.',
        tools: ['Milldesk', 'Movidesk', 'Desk Manager'],
        technologies: ['Microsoft 365 Suit', 'Microsoft Teams', 'Outlook', 'Azure', 'Intune']
    },
    {
        title: 'Suporte técnico N2',
        company: 'MMonteiro Soluções em Tecnologia',
        workDate: 'Abr de 2023 - Jun de 2024 · 1 ano e 2 meses',
        description: 'Atuei na conquista do selo "Microsoft Partner", implementei o 1Password para gerenciamento seguro de credenciais e atendi simultaneamente mais de 10 empresas, com foco em executivos e diretores. Implementei ambientes Microsoft 365, migrei serviços como Gmail para Outlook e Keep para OneNote, documentei processos técnicos e realizei manutenção física e remota de dispositivos. Possuo experiência com Google Workspace, Microsoft 365 Admin Center, configuração de redes, Active Directory e gerenciamento de DNS. Também prestei assistência administrativa, registrei domínios, gerenciei e-mails e colaborei em suporte de TI, infraestrutura e administração.',
        tools: '',
        technologies: ['Google Workspaces Solutions', 'Ubuntu Unifi', 'Microsoft 365 Solutions']
    },
]

function getExperiences() {
    const experienceBoxes = document.querySelectorAll('.box-experiences');

    experienceBoxes.forEach((box, index) => {
        const experience = experiencesData[index];
        if (experience) {
            // Atualizar os dados do box correspondente
            const titleElement = box.querySelector('.experience-title');
            const companyElement = box.querySelector('.experience-company');
            const workDateElement = box.querySelector('.experience-workdate');
            const descriptionElement = box.querySelector('.experience-description');
            const technologiesElement = box.querySelector('.experience-technologies');

            if (titleElement) titleElement.textContent = experience.title || '--';
            if (companyElement) companyElement.textContent = experience.company || '--';
            if (workDateElement) workDateElement.textContent = experience.workDate || '--';
            if (descriptionElement) descriptionElement.textContent = experience.description || '--';
            if (technologiesElement) {
                technologiesElement.textContent = `Tecnologias: ${experience.technologies?.join(', ') || 'N/A'}`;
            }
        }
    });
}

function selectExperience(){
    const selectArea = document.querySelectorAll('.select-experience');
    const boxExperiences = document.querySelectorAll('.box-experiences');
    const experienceOne = document.querySelector('#experienceOne');
    const experienceTwo = document.querySelector('#experienceTwo');

    selectArea[0].addEventListener('click', () => {
        if(experienceOne.classList.contains('d-block')) {
            experienceOne.classList.replace('d-block', 'd-none');
            console.log('Aqui')
        } else {
            experienceOne.classList.replace('d-none', 'd-block');
            experienceTwo.classList.replace('d-block', 'd-none');
            console.log('Ali')
        }
    })

    selectArea[1].addEventListener('click', () => {
        if(experienceOne.classList.contains('d-block')) {
            experienceOne.classList.replace('d-block', 'd-none');
            experienceTwo.classList.replace('d-none', 'd-block')
            console.log('Aqui')
        } else {
            experienceOne.classList.replace('d-none', 'd-block');
            console.log('Ali')
        }
    })
}

getExperiences();
selectExperience();
