
import PropTypes from 'prop-types';
import React from 'react';

function Link(props) {

    const hrefname = '#' + props.text
    let scrollToSection = () => {
        const section = document.getElementById(props.text);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

    return(
        <div className="text-header_text font-mono text-2xl leading-5 tracking-normal">
            <button onClick={scrollToSection}>{props.text}</button >
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

