import { faCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';



const Layout = () => {
    return (
    <div className="App">
    <Sidebar />
    <div className='page'>
            <span className='tags top-tags'>
                    <FontAwesomeIcon icon={faFolderOpen}
                     color="#ffd700"/>
            <br />

            <span className='top-tags-code'>
                    <FontAwesomeIcon icon={faCode}
                     color="#ffd700"/>
            </span>    
            </span>
            <Outlet />
            <br />

            <span className='tags bottom-tags'>
                     <FontAwesomeIcon icon={faCode}
                     color="#ffd700"/>
            </span>
        </div>
    </div>
    )
}

export default Layout