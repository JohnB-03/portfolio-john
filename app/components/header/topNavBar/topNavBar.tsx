import tabNavElem from "@/app/utils/navTabUtils";
import styles from "./topNavBar.module.css";

export default function TopNavBar() {

    return (
        <div className="fixed top-3 left-160 text-xl z-1000 isolate">
            <nav>
                {
                    tabNavElem.map((elem, index) => (
                        (<a key={index} className={`${styles.navLinks} navLinks`} href={`#${elem}`}>{elem}</a>)
                    ))
                }
            </nav>
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