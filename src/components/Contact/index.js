import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const refForm = useRef();

    useEffect(() => {
        const time = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(time)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_rer3hk8',  // service id
            'template_270lzbn', //template id
            refForm.current,    // form ref
            'eYDM3ADHhrQujYXYG'  // pulic key
        )
            .then(
                () => {
                    alert('Message successully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArr={'Contact Me'.split('')} idx={15} />
                    </h1>
                    <p>
                        Want to get in touch? No worries simply use the below form.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='from_name' placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" name='from_email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" placeholder='Subject' name='subject' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Manash Chauhan,
                    <br />
                    India,
                    <br />
                    Nainital, Uttarakhand <br />
                    <span>manashchauhan2712@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[29.217672, 79.519034]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[29.217672, 79.519034]}>
                            <Popup>Manash lives here!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;