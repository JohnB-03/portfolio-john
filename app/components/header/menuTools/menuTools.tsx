"use client"
import { Moon, Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";


export default function MenuTools() {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <div className="p-4 pl-7">
            <Button variant="outline" size="icon" onClick={changeTheme}>
                {theme === "dark" ?
                    <Lightbulb />
                    :
                    <Moon />
                }
            </Button>
        </div>
    );
}