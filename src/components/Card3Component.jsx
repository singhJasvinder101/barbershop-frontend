import React from 'react'

const Card3Component = ({heading, icon, description}) => {
  return (
    <div className='card d-flex' style={{ width: '31%', height: '17rem'}}>
        <div className="card-inside d-flex flex-column">
            <span className='card3-icon'>
                {<i className={`${icon} card3-icons`}></i>}
            </span>
            <h2 className='card3-h teko text-center py-3'>{heading}</h2>
            <p className='card3-p px-3 py-2 montserret text-center'>{description}</p>
        </div>
    </div>
  )
}

export default Card3Component
