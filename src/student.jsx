import {Link} from 'react-router-dom';
import Style from './style';
function Student(){
  return (
    <div id="student">
        <div id='nav_div'>
          <Link to='/' style={Style}>Home</Link>
          <Link to='/student' style={Style}>Students</Link>
          <Link to='/contact' style={Style}>Contacts</Link>
        </div>
        <div>
          <div id='s1'>
            <div id='c1'>Student Details</div>
            <div id='c2'>Add new student</div>
          </div>
          <table id='table'>
            <tr className='tr'>
              <td>Name</td>
              <td>Age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Change</td>
            </tr>
            <tr className='tr'>
              <td>John</td>
              <td>24</td>
              <td>MERN</td>
              <td>October</td>
              <td>Edit</td>
            </tr>
            <tr className='tr'>
              <td>Doe</td>
              <td>25</td>
              <td>MERN</td>
              <td>November</td>
              <td>Edit</td>
            </tr>
            <tr className='tr'>
              <td>Biden</td>
              <td>26</td>
              <td>MERN</td>
              <td>September</td>
              <td>Edit</td>
            </tr>
            <tr className='tr'>
              <td>Barar</td>
              <td>22</td>
              <td>MERN</td>
              <td>September</td>
              <td>Edit</td>
            </tr>
            <tr className='tr'>
              <td>Christ</td>
              <td>23</td>
              <td>MERN</td>
              <td>October</td>
              <td>Edit</td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default Student;