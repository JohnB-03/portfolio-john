"use client"

import { useEffect } from "react";

export default function ScrollSpy() {
    const options = {
        rootMargin: "0px",
        threshold: 0.5,
    }

    useEffect(() => {
        const navLinks = document.querySelectorAll(".navLinks");

        let callBack = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${entry.target.id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        };
        const scrollSpyObserver = new IntersectionObserver(callBack, options);

        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            scrollSpyObserver.observe(section);
        });

        return () => scrollSpyObserver.disconnect();
    }, [])

    return null;

};


