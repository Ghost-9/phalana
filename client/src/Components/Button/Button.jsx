import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({text, phantom, type, onClick, icon, iconSize }) => {
  return (
    <button
    className={phantom ? 'phantom-button' : 'brown-button'}
    onClick={onClick}
    type={type}
>
    {text}
    {icon !== '' && (
        <Icon
        className={icon}
        size={iconSize}
        />
    )}
</button>
  )
}


Button.propTypes = {
    text: PropTypes.string,
    phantom: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])

};
Button.defaultProps = {
    text: '',
    icon: '',
    iconSize: '1rem',
    onClick: undefined,
};

export default Button