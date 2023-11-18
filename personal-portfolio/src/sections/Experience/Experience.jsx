
import Skill from "../../components/Skill"
import JobDescription from "../../components/JobDescription";

function Experience() {
    
    return(
        <section id="Experience" className="bg-page_background w-full h-screen">
            <div className="flex h-full">
                
                
                <ol class="w-full justify-center m-10 sm:flex mt-[10%]">
                        <JobDescription title="Kelvin" date="June 2023 - August 2023" description="Intern"></JobDescription>
                        <JobDescription title="Orcinus Partners" date="June 2023 - August 2023" description="Software Developer"></JobDescription>
                        <JobDescription title="Yale University" date="June 2023 - August 2023" description="Research Intern"></JobDescription>
                </ol>


                {/* <Skill skill="Python"></Skill> */}
            </div>
        </section>
    );

}


export default Experience