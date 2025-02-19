import React, { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, subject, message);

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
                from_name: name,
                to_name: "Mahima",
                message: {message, email, subject},
                reply_to: "",
            },
            process.env.REACT_APP_USER_ID
        )
        .then((response) => {
            setName("");
            setEmail("");
            setMessage("");
            setSubject("");
            toast.success("Message sent successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .catch((err) => {
            toast.error("Message failed to send, please try again later.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    };

    return (
        <div className="contact-container">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="contact-header">Contact Me</div>
            <hr></hr>
            <div className="contact-info">
                <div className="contact-right">
                    <form className="contact-form" onSubmit={onFormSubmit}>
                        <div className="contact-form-row">
                            <div className="contact-form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                            <div className="contact-form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="contact-form-message" type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button className="contact-form-button" type="submit">
                                Send
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;