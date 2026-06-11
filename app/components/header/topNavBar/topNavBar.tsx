import tabNavElem from "@/app/utils/navTabUtils";
import styles from "./topNavBar.module.css";

export default function TopNavBar() {

    return (
        <div className="fixed top-4 md:left-160 md:text-2xl z-1000 left-20 isolate right-0 text-lm">
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
