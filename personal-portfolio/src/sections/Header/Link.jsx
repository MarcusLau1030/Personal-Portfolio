
import PropTypes from 'prop-types';

function Link(props) {

    return(
        <div className="text-header_text font-mono text-2xl leading-5 tracking-normal">
            <a href="#">{props.text}</a>
        </div>
    );

} 

Link.propTypes = {
    text: PropTypes.string,
}

Link.defaultProps = {
    text: "Sample Text",
}

export default Link

