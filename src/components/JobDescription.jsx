
import PropTypes from 'prop-types';


function JobDescription(props) {

    const image_path = "/Personal-Portfolio/src/assets/" + props.icon

    return(
        <li className="w-full max-w-lg relative mb-6 sm:mb-0">
            <div className="flex items-center w-full">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    {/* <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg> */}
                    <img className="rounded-full" src={image_path}></img>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-bold text-white">{props.title}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-white">{props.date}</time>
                <h1 className="text-base font-semibold text-white">{props.job_title}</h1>
                <ul>
                    {props.description.map((point, index) => (
                        <li className="text-base font-normal text-white" key={index}>{point}</li>
                    ))}
                </ul>
            </div>

        </li>
    );

}

JobDescription.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    job_title: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.array,
}

JobDescription.defaultProps = {
    title: " ",
    date: " ",
    job_title: " ",
    icon: " ",
    description: [],
}

export default JobDescription