import React from 'react'

const CardContainer = ({width, height, bgColor, children}) => {
  return (
    <div className={`${width} ${height} ${bgColor} m-4 rounded-2xl`}>
        {children}
    </div>
  )
}

export default CardContainer