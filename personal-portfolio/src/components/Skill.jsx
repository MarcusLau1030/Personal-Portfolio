
import PropTypes from 'prop-types';

function Skill(props) {

    return(

        <div className="flex w-24 h-8 items-center justify-center font-sans text-black bg-white rounded-full">
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