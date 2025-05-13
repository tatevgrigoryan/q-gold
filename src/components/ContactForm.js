import React from "react";

const ContactForm = () => {
    return (
        <form className="contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
            <div className="form-row">
                <div className="form-group">
                    <input type="text" required name="FirstName" />
                    <label>First Name</label>
                </div>
                <div className="form-group">
                    <input type="text" required name="Surname" />
                    <label>Surname</label>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <input type="email" required name="Email" />
                    <label>Email</label>
                </div>
                <div className="form-group">
                    <input type="tel" required name="Phone" />
                    <label>Phone</label>
                </div>
            </div>
            <div className="form-group">
                <textarea rows="5" required name="Message"></textarea>
                <label>Message</label>
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    );
};

export default ContactForm;
