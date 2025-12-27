import HardSkills from "./components/hardSkills/hardSkills";
import Projects from "./components/projects/projects";
import Home from "./components/home/home";
import Contacts from "./components/contacts/contacts";

export default function Page() {
  return (
    <div>
      <Home></Home>
      <HardSkills></HardSkills>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  );
}
