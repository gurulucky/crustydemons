import React,{useState} from 'react'
import {Container,Form, Row, Col, Button, InputGroup} from 'react-bootstrap'
import emailjs from 'emailjs-com';
import { BiEnvelope } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa";
import { Nav } from 'react-bootstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var prev_email = "";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [emailvalid, setEmailvalid] = useState("");

    const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
    
    function sendEmail(e){
        e.preventDefault();
        let templateParams = {
            to_email: email,
            from_name: "Crusty Demons Club",
        }
        const isValid = isValidEmail(email);
        if(isValid){
            if(email !== prev_email){
                emailjs.send('service_jdyrkfi', 'template_46gwuzg', templateParams, 'user_7E4fzvHFn7kvpGEfY1qjq').then(response=>{
                    toast.success('Thanks for joining our community!', {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        hideProgressBar: true,
                    });
                    console.log('Email sent successfully!', response); 
                    prev_email = email;
                },
                error=>{
                    console.log('Unable to send email', error);
                })
            }
            else{
                toast.warn('You have already subscribed!', {
                    position: "top-right",
                    autoClose: 3000,
                    closeOnClick: true,
                    hideProgressBar: true,
                });
                return;
            }
            setEmailvalid(true);
        }
        else{
            setEmailvalid(false);
        }
    }

    return(
        <section id="subscribe">
            <Container>
                <Form onSubmit={sendEmail}>
                    <Row className="form_content">
                        <Col lg="3" md="12" sm="12" className='community'>
                            <div>
                                <h1>Join Crusty Demons Club</h1>
                                <p className="icon">
                                    <Nav.Link href="http://www.facebook.com/crustydemons" target="_blank"><FaFacebookF /></Nav.Link>
                                    <Nav.Link href="http://www.instagram.com/crustysofficial" target="_blank"><FaInstagram/></Nav.Link> 
                                    <Nav.Link href="http://www.youtube.com/channel/UCI01qaaJwf1dCqOsL51DBfQ" target="_blank"><FaYoutube /></Nav.Link>
                                    <Nav.Link href="http://www.tiktok.com/@crustydemonsofficial" target="_blank"><FaTiktok /></Nav.Link> 
									<Nav.Link href="https://discord.gg/7KuhnzDWvm" target="_blank"><FaDiscord /></Nav.Link>									
                                </p>
                            </div>
                        </Col>
                        <Col lg="6" md="12" sm="12" style={{marginTop: '1vw', marginBottom: '1vw'}}>
                            <InputGroup>
                                <BiEnvelope className="email_icon"/>
                                <Form.Control
                                placeholder="Enter your email address"
                                aria-label="address"
                                aria-describedby="basic-addon1"
                                name="emailid"
                                type='text'
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                ></Form.Control> 
                            </InputGroup>     
                        </Col>
                        <Col lg="3" md="12" sm="12" style={{marginTop: '1vw', marginBottom: '1vw'}}>
                            <Button className="subscribe_btn" type='submit'>
                            Join Crusty Demons Club
                            </Button>{' '}
                        </Col>
                    </Row>
                    {emailvalid === false ? <p style={{color: 'Yellow', textAlign: 'center'}}>Please enter a valid email address</p> : null}
                </Form>
                
            </Container>
        </section>
    )
}

export default Subscribe

                                