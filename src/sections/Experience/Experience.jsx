
import JobDescription from "../../components/JobDescription";

function Experience() {
    
    const first_points = [
    "• Spearheaded the development of an automated appointment scheduler, which streamlined the process for 5000+ tenants, resulting in a significant reduction in manual effort and a substantial increase in efficiency by 99%",
    "• Leveraged RESTful APIs and Docker containers to create a scalable and resilient application infrastructure, increasing application uptime by 95%",
    "• Collaborated with cross-functional teams to gather requirements and implement features that improved user experience, resulting in a 71% increase in customer outreach and retention"
    ]

    const second_points = [
        "• Provided personalized programming instruction to students in grades 6-12, tailoring lesson plans to accommodate varying skill levels and learning styles",
        "• Mentored students in problem-solving, algorithms, data structures, space and time complexity, and coding best-practices",
        "• Earned 95.00% positive student and parent feedback, recognized for my clear communication, adaptability, and attention to detail"
    ]

    const third_points = [
    "• Collaborated with a 4-person team to oversee the organization’s management of operations, risk, and $10,000+ in varying asset classes",
    "• Streamlined the ETL process for 3000+ stocks, performing preprocessing and postprocessing to ensure the accuracy, reliability and quality of data before warehousing into a database",
    "• Engineered a portfolio optimization software and deployed it into the financial markets, where it outperformed the SP500 by 6%"
    ]

    return(
        <>
            <section id="Experience" className="bg-page_background w-screen h-screen">
                <div className="flex h-full">
                    
                    
                    <ol className="w-full justify-center m-10 flex mt-[30%] lg:mt-[10%]">
                        <JobDescription title="Kelvin" date="June 2023 - August 2023" icon="kelvin" 
                        job_title="Software Engineering Intern" description={first_points}></JobDescription>
                        <JobDescription title="D15:4" date="September 2022 - August 2023" icon="d154" 
                        job_title="Tutor" description={second_points}></JobDescription>
                        <JobDescription title="Orcinus Partners" date="May 2022 - June 2023" icon="orcinus" 
                        job_title="Software Developer" description={third_points}></JobDescription>

                    </ol>


                    {/* <Skill skill="Python"></Skill> */}
                </div>
            </section>
            <div className="bg-page_background h-screen"></div>
        </>

    );

}


export default Experience