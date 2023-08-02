import React, { useState } from "react";
import PropTypes from "prop-types";


const Icon = ({className, size, color, hoverColor, width, height, cursor,onClick }) => {
    const [fill, setFill] = useState(color);
    return (
        <div>
            <i
                className={className} onClick={onclick}
                onMouseOver={() => setFill(hoverColor)}
                onMouseOut={() => setFill(color)}
                style={{
                    fontSize: size,color:fill, width: width, height: height, cursor: cursor, transition: '0.2s'
                }}
            
            ></i>
        </div>
    );
}

Icon.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cursor: PropTypes.string,
    onClick: PropTypes.func,
}

Icon.defaultProps = {
    className: '',
    size: '',
    hoverColor: 'none',
    width: '100%',
    height: '100%',
    cursor: ''
}

export default Icon;