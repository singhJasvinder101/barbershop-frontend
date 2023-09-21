import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testinomials = [
    {
        img: "https://randomuser.me/api/portraits/men/53.jpg",
        name: "John Doe",
        content: "I can't express how thrilled I am with the services at this Barber Shop. The moment I walked in, I felt like I was in the hands of true professionals. The haircut I received was nothing short of exceptional, and the attention to detail was remarkable. The atmosphere is relaxed and inviting, and the staff is friendly and skilled"
    },
    {
        img: "https://randomuser.me/api/portraits/men/47.jpg",
        name: "John Doe",
        content: "As someone who values both style and tradition, I can confidently say that this Barber Shop is the best in town. Their barbers have a deep understanding of classic and contemporary grooming, and it shows in their work. The shaving experience is an absolute delight, and I always leave the shop feeling rejuvenated."
    },
    {
        img: "https://randomuser.me/api/portraits/men/42.jpg",
        name: "John Doe",
        content: "I recently visited Barber Shop for the first time, and I'm blown away by the level of service I received. Not only did I get a fantastic haircut that perfectly suited my style, but the warm and welcoming environment made me feel right at home. The barbers took the time to understand what I wanted, and they delivered beyond my expectations."
    },
    {
        content: "Read More"
    },
]

const TestinomialCardComponent = ({testinomialRef}) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
    };

    return (
        <div className='container' ref={testinomialRef}>
            {/* d-flex container justify-content-evenly */}
            <h1 className='my-5 mx-3'>What Our <span className='gold'>Clients Say</span></h1>
            <Slider className='mx-3' {...settings}>
                {testinomials.map((data, i) => (
                    data.content === "Read More" ? (
                        <div key={i} className="testinomial-card">
                            <div className="testinomial-card-info mx-4 w-100">
                                <button className='btn btn-primary testinomial-btn'>
                                    Load More
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div key={i} className="testinomial-card">
                            <div className="testinomial-card-img">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="testinomial-card-info">
                                <p className="testinomial-text-body">{data.content}</p>
                                <p className="testinomial-text-title">{data.name}</p>
                            </div>
                        </div>
                    )
                ))}
            </Slider>
        </div>
    )
}
// <div key={i} className="testinomial-card" style={{width: '18rem'}} >
// <div className="testinomial-card-img"><img src={data.img} alt="" /></div>
// <div className="testinomial-card-info">
//     <p className="testinomial-text-body">{data.content}</p>
//     <p className="testinomial-text-title">{data.name}</p>
// </div>
// </div>

export default TestinomialCardComponent
