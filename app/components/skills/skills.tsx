"use client";

import SkillsCard from "./skillsCard";
import { skillsTab } from "./skillsTab";
import { useState } from "react";

export default function Skills() {
    const cardPerPage = 2;
    const numberPages = Math.round(skillsTab.length / cardPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [useAnimation, setUseAnimation] = useState(false);
    function setNextPage() {
        if (currentPage < numberPages) {
            setUseAnimation(true);
            setCurrentPage((prev) => prev + 1);

        }

    }

    function setPreviousPage() {
        if (currentPage > 1)
            setCurrentPage((prev) => prev - 1);
    }

    function changePage(numPage: number) {
        setCurrentPage(numPage);
    }

    const skills = skillsTab.slice((currentPage * cardPerPage) - 2, (currentPage * cardPerPage));

    return (
        <div id="Skills" className="pt-20 " >
            <h1 className="pl-10 pb-10 text-4xl">Here is my skills...</h1>
            <div className="py-5 flex justify-center place-items-center gap-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8" onClick={setPreviousPage}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                {
                    skills.map((skill, index) => (
                        (<div className="transition-opacity 1s ease-in-out" key={`${currentPage}-${index}`}><SkillsCard skill={skill}></SkillsCard></div>)
                    )
                    )
                }
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8" onClick={setNextPage}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="flex justify-center py-2 gap-3">
                {
                    [1, 2, 3].map((page, index) =>
                    (
                        <div key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={currentPage === page ? "#F1895C" : "currentColor"} className="w-5 h-5" viewBox="0 0 20 20" onClick={() => changePage(page)}>
                                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    )
                    )
                }
            </div>

        </div>
    );
}