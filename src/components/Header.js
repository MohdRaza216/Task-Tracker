import React from 'react'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <div>
          <div className='header'>
        
        {location.pathname === '/' && (
          <Button onClick={onAdd} text={showAdd ? 'Close' : 'Add'} color ={showAdd ? 'Green' : 'purple'}/>
          )}

        </div>
    </div>
  )
}

// Header.defaultProps = {
//     name: "Raju",
// }



export default Header
