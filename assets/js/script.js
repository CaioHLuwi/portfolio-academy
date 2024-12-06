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
        company: 'MMonteiro Soluções em Técnologia',
        workDate: 'Jun de 2024 - Set de 2024 · 4 meses',
        description: 'Atuei na conquista do selo "Microsoft Partner", implementei o 1Password para gerenciamento seguro de credenciais e atendi simultaneamente mais de 10 empresas, com foco em executivos e diretores. Implementei ambientes Microsoft 365, migrei serviços como Gmail para Outlook e Keep para OneNote, documentei processos técnicos e realizei manutenção física e remota de dispositivos. Possuo experiência com Google Workspace, Microsoft 365 Admin Center, configuração de redes, Active Directory e gerenciamento de DNS. Também prestei assistência administrativa, registrei domínios, gerenciei e-mails e colaborei em suporte de TI, infraestrutura e administração.',
        tools: '',
        technologies: ['Google Workspaces Solutions', 'Ubuntu Unifi', 'Microsoft 365 Solutions']
    }
]

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
        technologiesExperiences[i].textContent = `Tecnologias: ${experiencesData[i].technologies.join(', ')}`;
    }
}

getExperiences();