"use client";

import SkillsCard from "./skillsCard";
import { skillsTab } from "./skillsTab";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function Skills() {
    const cardPerPage = 2;
    const skills = skillsTab;
    const numberPages = Math.round(skills.length / cardPerPage);
    const [paging, setPaging] = useState({ first: 0, last: 1 })
    let style = "";
    function setNextPage() {
        if (paging.first + cardPerPage < skills.length) {
            setPaging((prev) => ({
                first: prev.first + cardPerPage,
                last: prev.last + cardPerPage
            }));
        }

    }

    function setPreviousPage() {
        if (paging.last > 1) {
            setPaging((prev) => ({
                first: prev.first - cardPerPage,
                last: prev.last - cardPerPage
            }));
        }

    }

    function changePage(numPage: number) {
        setPaging({ first: numPage * cardPerPage - 2, last: numPage * cardPerPage - 1 });
    }

    return (
        <div id="Skills" className="pt-20 " >
            <h1 className="pl-10 pb-10 text-4xl">Here is my skills...</h1>
            <div className="py-5 flex justify-center place-items-center gap-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8" onClick={setPreviousPage}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <AnimatePresence mode="popLayout">
                    {skills
                        .filter((_, index) => index === paging.first || index === paging.last)
                        .map((skill, index) => (
                            <motion.div
                                key={`${paging.first}-${index}`}
                                animate={{ x: [0, -8, 4, -3, 0] }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <SkillsCard skill={skill} />
                            </motion.div>
                        ))}
                </AnimatePresence>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8" onClick={setNextPage}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="flex justify-center py-2 gap-3">
                {
                    [1, 2, 3].map((page, index) =>
                    (
                        <div key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={paging.first / cardPerPage + 1 === page ? "#F1895C" : "currentColor"} className="w-5 h-5" viewBox="0 0 20 20" onClick={() => changePage(page)}>
                                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )
                    )
                }
            </div>

        </div >
    );
}


/*
 



{
                    skills.map((skill, index) => (
                        (index === paging.first || index === paging.last ?
                            (<div className="block animate-appear" key={`${paging.first}-${index}`}><SkillsCard skill={skill}></SkillsCard></div>) :
                            (<div className="hidden animate-disappear" key={`${paging.first}-${index}`}><SkillsCard skill={skill}></SkillsCard></div>)
                        ))
                    )
                }
 */