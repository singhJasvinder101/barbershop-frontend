import React from 'react'
import Card3Component from './Card3Component'

const WhyChooseComponent = ({ whyChooseSectionRef }) => {
    const content = [
        {
            heading: "14-day free trial",
            icon: "ri-home-smile-2-line",
            description: "Try out almost all of our premium subscription features while deciding what your website needs."
        },
        {
            heading: "Amazing Live Chat Support",
            icon: "ri-wechat-line",
            description: "Ready to help with a click."
        },
        {
            heading: "Admin App",
            icon: "ri-user-settings-line",
            description: "Manage your business like a pro via the admin app."
        },
        {
            heading: "Assistance",
            icon: "ri-settings-4-line",
            description: "Get set up help if you need it."
        },
        {
            heading: "NO commission",
            icon: "ri-currency-line",
            description: "Every penny your clients pay you is yours"
        },
        {
            heading: "Join Our Happy Clients",
            icon: "ri-team-line",
            description: "Join the tens of thousands of happy clients we have already helped."
        },
    ]

    return (
        <div className='whyChoose-section container'>
            <h1 className='text-center py-5' ref={whyChooseSectionRef} >Why SimplyBook.me <span className='gold'>is the best</span> for your beauty salon</h1>
            <div className="d-flex  justify-content-between align-items-center flex-wrap gap-4 card3-inside">
                {content.map((card, idx) => (
                    <Card3Component key={idx} heading={card.heading} icon={card.icon} description={card.description} />
                ))}
            </div>
        </div>
    )
}

export default WhyChooseComponent
