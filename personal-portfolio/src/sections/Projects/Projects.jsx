
import Card from '../../components/Card.jsx'

function Project() {

    return(
        <section id="Projects" className="h-screen bg-page_background">
            <div className='h-full flex flex-col gap-5 justify-center items-center mx-auto'>
                <Card title="Project1" description="Ecommerce website this is my website project and i worked really hard to make this" image_name="profile_picture.jpg"></Card>
                <Card title="Project2" description="Hit!Hit " image_name="radiatorlabs.png"></Card>

            </div>
        </section>
    );

}


export default Project