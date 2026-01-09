export interface ProjectsModel {
    img: string,
    title: string,
    description?: string,
    githubLink?: string,
    webSiteLink?: string
};


export const projectsTab: ProjectsModel[] = [
    {
        img: "../images/RotisserieDury_CE.png",
        title: "Company website Dury",
        description: "I designed and developed the official website for a rotisserie company. The website is currently live and used by the business.",
        githubLink: "not created yet",
        webSiteLink: "https://rotisseriedury.be/"
    },
    {
        img: "../images/BackOffice_SportWithMe.png",
        title: "BackOffice SportWithMe",
        description: "I designed and developed a backOffice to manage the data of the mobile app SportWithMe.",
        githubLink: "https://github.com/JohnB-03/SportWithMeBackOffice",
    },
    {
        img: "../images/CommingSoon.png",
        title: "New Project",
        description: "blabalbalbalbalablablabalbalbalablablabalbalbalbalablablabalbalabla",
        githubLink: "https://github.com/JohnB-03/SportWithMeBackOffice",
    }
];




