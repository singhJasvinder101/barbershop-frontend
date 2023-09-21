import React from 'react'

const ContactComponent = () => {
    return (
        <div>
            <section id="contact" className="contact-section py-5">
                <div className="container">
                    <h1 className="section-title text-light">Contact Us</h1>
                    <div className="contact-form">
                        <form action="/submit" method="POST">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" className="btn contact-btn"><a>Send Message</a></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactComponent
