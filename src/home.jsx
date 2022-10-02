import {Link} from 'react-router-dom';
import Style from './style';
function Home(){
    return (
        <div id='home'>
            <div id='nav_div'>
                <Link to='/' style={Style}>Home</Link>
                <Link to='/student' style={Style}>Students</Link>
                <Link to='/contact' style={Style}>Contacts</Link>
            </div>
            <div style={{marginTop: '30px',marginLeft:'30px',fontWeight:'bold'}}>Home Page</div>
        </div>
    )
}

export default Home;