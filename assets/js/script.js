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
        description: 'Conquistei o selo "Microsoft Partner" para a empresa, realizando todos os processos necessários para a aquisição dos benefícios associados. Realizei atendimentos simultâneos a mais de 10 empresas, com foco em executivos e diretores, sempre prezando pela cordialidade e eficiência. Minhas atividades incluíram configuração e manutenção de hardware, como desktops, notebooks, impressoras e scanners, além de software. Desenvolvi relatórios detalhados sobre atendimentos e serviços prestados, e possuo sólidos conhecimentos em sistemas operacionais Windows e noções básicas de Linux e macOS. Atuei na administração de contas corporativas no Google Workspace e Microsoft 365, realizando criação, exclusão e gerenciamento de usuários e grupos de e-mails. Gerenciei sites e intranets com SharePoint, organizando permissões de acesso e estrutura hierárquica de arquivos, bem como bases de dados no Google Workspace, como drives compartilhados. Executei manutenções preventivas em dispositivos, tanto de forma remota quanto presencial, e implementei o uso do software 1Password para o gerenciamento de senhas. Documentei processos técnicos para uso interno e por novos colaboradores, criando uma base de conhecimento eficiente. Tenho conhecimentos básicos em configuração de roteadores, switches e redes, criação de diretórios e compartilhamento de arquivos em rede via servidores locais, além de noções em Microsoft Active Directory. Também ofereci suporte técnico a aplicativos do pacote Office 365.',
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
                technologiesElement.innerHTML = `<span class='principal-color'> Tecnologias: </span> ${experience.technologies?.join(', ') || 'N/A'}`;
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
        } else {
            experienceOne.classList.replace('d-none', 'd-block');
            experienceTwo.classList.replace('d-block', 'd-none');
        }
    })

    selectArea[1].addEventListener('click', () => {
        if(experienceOne.classList.contains('d-block')) {
            experienceOne.classList.replace('d-block', 'd-none');
            experienceTwo.classList.replace('d-none', 'd-block');
        }
    })
}

getExperiences();
selectExperience();
