import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
const index = (props) => {
  return (
    <>
        <nav 
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3`}>
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-secondary bg-secondary text-white" type="submit">Search</button>
                </form> */}
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label={
                            <span className={`${props.mode === 'light' ? 'text-dark' : 'text-white'} p-2`}>
                              {/* {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'} */}
                              {props.mode === 'light' ? <FaMoon /> : <FaSun />}
                            </span>
                          }
                        onClick={props.toggleMode}
                    />
                    
                </Form>
            </div>
        </nav>
    </>
  )
}

index.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
}

index.defaultProps = {
    title: 'Convertex',
    aboutText: 'About us'
};

export default index