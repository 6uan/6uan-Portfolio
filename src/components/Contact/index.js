import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                'service_vz0uxk3',
                'template_78peci1',
                form.current,
                '8IEcuGWgJjaSuBScU'
            )
                .then(
                    () => {
                        alert('Message Successfully Sent!')
                        window.location.reload(false)
                    },
                   () => {
                        alert('Failed To Send!')
                   } 
                )

    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t','','','m','e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                        I'm always willing to answer questions or get started on new project! <br />
                        Don't be shy, shoot me an email.. 
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                    type="text" 
                                    name='name' 
                                    placeholder='Name' 
                                    required />
                                </li>
                                <li className='half'>
                                    <input 
                                    type="email" 
                                    name='email' 
                                    placeholder='Email' 
                                    required />
                                </li>
                                <li>
                                    <input 
                                    placeholder="Subject" 
                                    type='text' 
                                    name='subject' 
                                    required />
                                </li>
                                <li>
                                    <textarea
                                    placeholder='Message'
                                    name='message' 
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input 
                                    type="submit"
                                    className='flat-button'
                                    value="SEND"
                                    ></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    <b>Juan Gomez</b>
                    <br />
                    11200 SW Eight St
                    <br />
                    Miami, FL 33199 <br />
                    Florida International University <br />
                    <span><a href="mailto:jgome430@fiu.edu">jgome430@fiu.edu</a></span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[25.7562, -80.3755]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position ={[25.7562, -80.3755]}>
                            <Popup><big>Studying Here</big></Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>

    )
}

export default Contact