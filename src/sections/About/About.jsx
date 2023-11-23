import Synopsis from "./Synopsis.jsx"
import ProfilePicture from "./ProfilePicture.jsx";
import Skill from "../../components/Skill.jsx";

function About() {

    const skills = [
        "Python", "Git", "C++", "Elixir", "Phoenix Framework", "Docker", "HTML", "CSS", "Javascript", "React", "SQL", "PostgreSQL" 
    ]

    return(
        <section id="About" className="bg-page_background w-full h-screen">
            <div className="flex h-full">
                <div className="flex flex-row mt-24 mx-4 lg:mt-56 lg:mx-56">
                    <div className="flex-none w-2/3">
                        <Synopsis></Synopsis>
                        <div className="flex flex-wrap gap-2 mt-3 w-4/5 lg:w-1/2">
                        {skills.map((point, index) => (
                            <Skill key={index} skill={point}></Skill>
                            ))}
                        </div>
                    </div>

                    <div className="flex w-1/3 h-3/5 justify-start items-center">
                        <ProfilePicture></ProfilePicture>
                    </div>

                </div>
            </div>
        </section>
    );

}



export default About