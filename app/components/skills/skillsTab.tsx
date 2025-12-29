export interface SkillsModel {
    name: string,
    tabSkills: { name: string, level: number }[]
}

export const skillsTab: SkillsModel[] = [
    {
        name: "HardSkills/Frontend Skills",
        tabSkills: [
            {
                name: "React JS",
                level: 4
            },
            {
                name: "Next.js",
                level: 4
            },
            {
                name: "Angular",
                level: 5
            },
            {
                name: "JavaScript",
                level: 3
            },
            {
                name: "TypeScript",
                level: 4
            },
            {
                name: "CSS",
                level: 5
            },
            {
                name: "HTML",
                level: 5
            }
        ]
    },
    {
        name: "HardSkills/Backend Skills",
        tabSkills: [
            {
                name: "Java",
                level: 4
            },
            {
                name: "Spring Boot",
                level: 4
            },
            {
                name: "C#",
                level: 2
            },
            {
                name: ".Net",
                level: 1
            },
            {
                name: "PHP",
                level: 2
            },
            {
                name: "API REST",
                level: 5
            }
        ]
    },
    {
        name: "HardSkills/DataBase Skills",
        tabSkills: [
            {
                name: "SQL",
                level: 4
            },
            {
                name: "NoSQL",
                level: 4
            },
            {
                name: "MongoDB",
                level: 4
            },
            {
                name: "SQL Server",
                level: 4
            },
            {
                name: "MySQL",
                level: 3
            },
            {
                name: "PgSQL",
                level: 2
            }
        ]
    },
    {
        name: "HardSkills/Other Technologies",
        tabSkills: [
            {
                name: "C",
                level: 4
            },
            {
                name: "C++",
                level: 3
            },
            {
                name: "Lua",
                level: 2
            },
            {
                name: "React Native",
                level: 3
            }
        ]
    },
    {
        name: "SoftSkills",
        tabSkills: [
            {
                name: "Curious",
                level: 4
            },
            {
                name: "Creativity",
                level: 4
            },
            {
                name: "Motivated",
                level: 5
            },
            {
                name: "Resilient",
                level: 4
            },
            {
                name: "Structured",
                level: 3
            }
        ]
    },
    {
        name: "Languages",
        tabSkills: [
            {
                name: "English",
                level: 4
            },
            {
                name: "French",
                level: 5
            },
            {
                name: "Dutch",
                level: 2
            }
        ]
    }
]
