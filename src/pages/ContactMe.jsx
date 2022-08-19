import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import "../styles/contactMe.css"
import emailjs from "emailjs-com"

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7k4cved', 'template_6y2lp2m', form.current, '6vxXnYgsEoyrMVtkr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()

    }

    return (
        <div className="contactMe">
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                <span className="lastname">M</span>
                <span>e</span>
            </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto" style={{display: "flex", justifyContent: "flex-end"}}>
                            <input type="submit" className="btn btn-outline-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;