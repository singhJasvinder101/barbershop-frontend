import React from 'react'

const Card2Component = ({ imageUrl }) => {
    return (
        <div class="flip-card" style={{ width: '18rem', height: '22rem' }}>
            <div class="flip-card-inner">
                <div class="flip-card-front" style={{ background: `url(${imageUrl})`, backgroundSize: 'cover' }}>
                </div>
                <div class="flip-card-back">
                    <p class="title">BACK</p>
                    <button className='btn btn-primary w-50 mx-auto'>Redirect Url</button>
                </div>
            </div>
        </div>
    )
}

export default Card2Component
