import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u','a','n']
    const jobArray = ['S','t','u','d','e','n','t',' ','/',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _12`}>,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoTitle} alt="developer" />
               <AnimatedLetters letterClass={letterClass}
               strArray={nameArray}
               idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
               strArray={jobArray}
               idx={17} /> 
                </h1>
                <h2>Frontend Developer / JavaScript Amateur / Graphic Designer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
}
export default Home