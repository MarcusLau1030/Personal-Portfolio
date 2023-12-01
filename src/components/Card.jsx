
import PropTypes from 'prop-types';
import images from "../images"

function Card(props) {

    const image = images[props.image_name]
    const isLinkDefault = props.link === "#";

    if (!isLinkDefault) {
        return(
            <a href={props.link} className="flex flex-col md:flex-row  max-w-full w-full h-full max-h-48 items-center bg-white border-gray-200 rounded-xl shadow lg:max-w-xl">
                <img className="object-contain w-20 h-10 sm:w-52 sm:h-48 rounded-l-lg" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                </div>
            </a>
        );
    }
    return(
        <div className="flex flex-col md:flex-row max-w-full w-full h-full max-h-48 items-center bg-white border-gray-200 rounded-xl shadow lg:max-w-xl">
            <img className="object-contain w-20 h-10 sm:w-52 sm:h-48 rounded-l-lg" src={image} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            </div>
        </div>
    );

}

Card.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    image_name: PropTypes.string,
}

Card.defaultProps = {
    title: " ",
    link: "#", 
    description: " ",
    image_name: " "
}

export default Card