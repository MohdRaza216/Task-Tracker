import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ color = "green", text, onClick }) => {
  // const onClick = (e) => {
  //     console.log(e)
  // }
  return (
    <div>
      <button className='btn' onClick={onClick} style={{ backgroundColor: color }}>{text}</button>

    </div>
  )
}



Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
