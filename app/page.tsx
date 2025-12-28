import Projects from "./components/projects/projects";
import Home from "./components/home/home";
import Contacts from "./components/contacts/contacts";
import Skills from "./components/skills/skills";

export default function Page() {
  return (
    <div>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  );
}
