import React from 'react'

const imageUrl = [
  "/barbershop-cuate.svg",
  "Barber-amico.svg",
  "Barber-pana.svg"
]
const SvgComponent = () => {
  return (
    <div className='svg-image d-flex justify-content-center my-5'>
      <div >
        <h2 className='text-center text-light my-3'>Our Work</h2>
        {imageUrl.map((image, idx) => (
          <img className='mx-5' key={idx} src={image} alt="" />
        ))}
      </div>
    </div>
  )
}

export default SvgComponent
