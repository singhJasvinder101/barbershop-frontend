import React from 'react'
import { Image } from 'react-bootstrap'

const FAQSectionComponent = () => {
    const content = [
        {
            question: "Q: How many bookings come through the booking site?",
            description: "A: Virtually all of our bookings come through the booking website. We no longer take manual bookings or do manual invoicing. All bookings must be made through the website for our coordinators to see their booked events."
        },
        {
            question: "Q: Do you use the mobile admin app?",
            description: "A: Yes, we do! It’s mandatory for all our coordinators to download the app, so they always know their schedule. That’s why we like the ability to assign agents to each separate booking. They always have the correct information for their bookings on the app."
        },
        {
            question: "Q: Do you use other button integrations, Google, Facebook, etc.?",
            description: "A: Yes, we use all the booking buttons to get more bookings from as many places as possible."
        }
    ]
    return (
        <div className="faq-section container">
            <h1><span className='gold'>Q&A</span> with a client</h1>
            <div className='d-flex align-items-center justify-content-between'>
                <div className="left my-3 d-flex flex-column">
                    {content.map((cont, i) => (
                        <div className="faq" key={i}>
                            <h5 className='gold'>{cont.question}</h5>
                            <p>{cont.description}</p>
                        </div>
                    ))}
                </div>
                <div className="faq-right-section">
                    <div className="faq-image">
                        <Image fluid src="https://img.freepik.com/free-photo/yellow-speech-bubble-with-question-mark_23-2149726201.jpg?w=740&t=st=1694707500~exp=1694708100~hmac=a2ee07246e57931ea458e2aab9313c942d76a19206e88ed98ea0d402bd6a7d55" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQSectionComponent
