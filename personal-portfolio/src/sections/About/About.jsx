import Synopsis from "./Synopsis.jsx"
import ProfilePicture from "./ProfilePicture.jsx";

function About() {

    return(
        <section id="About" className="bg-page_background w-full h-screen">
            <div className="flex h-full">
                <div className="flex flex-row mt-56 mx-56">
                    <div className="flex-none w-2/3">
                        <Synopsis></Synopsis>
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