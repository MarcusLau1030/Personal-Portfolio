
import PropTypes from 'prop-types';
// import imageName from '../assets/profile_picture.jpg'

function Card(props) {

    const image_path = '/' + props.image_name

    return(

        <a href="#" className="flex flex-col max-w-xl w-full h-full max-h-48 items-center bg-white border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl">
            <img className="object-contain w-full h-96 md:h-auto md:w-48 rounded-l-lg" src={image_path} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            </div>
        </a>

    );

}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image_name: PropTypes.string,
}


export default Card