import React from 'react';

export default function Contact() {
    return(
            <section className="container d-flex justify-content-center min-vh-100 align-items-center" id="contact">
            <div className="contactFormContainer w-50">
                <h2 className="text-center mt-4">Get in Touch</h2>
                <div className="contactForm text-center">
                    <form action="https://formspree.io/f/mknljvkp" method="POST">
                        <div className="form-control">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="sender-name"
                                placeholder="Enter Your Name"
                                className="input-field"
                                required />
                        </div>
                        <div className="form-control">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="sender-email"
                                placeholder="Enter Your Email"
                                className="input-field"
                                required />
                        </div>
                        <div className="form-control">
                            <label for="message">Message</label>
                            <textarea
                                id="message"
                                rows="10"
                                placeholder="Enter Your Message"
                                name="message"
                                className="input-field"
                                required></textarea>
                        </div>
                        <div className="text-center">
                            <input
                                type="submit"
                                value="Submit"
                                id="submit-btn"
                                className="submit-btn mb-4" />
                        </div>	
                    </form>
                </div>
            </div>
        </section>
    );
}