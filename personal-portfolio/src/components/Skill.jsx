
import PropTypes from 'prop-types';

function Skill(props) {

    return(

        <div className="flex min-w-min px-3 py-2 items-center justify-center font-sans text-black bg-white rounded-full">
            {props.skill}
        </div>

    );

}

Skill.propTypes = {
    skill: PropTypes.string,
}

Skill.defaultProps = {
    skill: " "
}


export default Skill