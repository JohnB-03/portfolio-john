'use client'
export default function TopNavBar() {
    const classNameAnchor: string = "p-2 pr-6"
    const tabNavElem: string[] = [
        "Home",
        "HardSkills",
        "Projects",
        "Contacts"
    ];

    return (
        <div className="fixed top-3 left-160 text-xl">
            {
                tabNavElem.map((elem, index) => (
                    (<a key={index} className={classNameAnchor} href={`#${elem}`}>{elem}</a>)
                ))
            }
        </div >
    );
}

/* panel de couleur...

#2E3244
#C5C6C6
#FFFFFF
#F1895C
#516079

*/