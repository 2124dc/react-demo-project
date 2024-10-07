import React from "react";
import { Container } from "reactstrap";

const ContactUs = () => {
    return (
        <Container>
            <section id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading text-uppercase">Contact Us</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <form id="contactForm" name="sentMessage" novalidate>
                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <input className="form-control" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name." />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address." />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number." />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-md-2"></div>
                                    <div class="clearfix"></div>
                                    <div class="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default ContactUs;