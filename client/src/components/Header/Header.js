import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>

                <Link to='/registration' style={{textDecoration: 'none'}}>
                    <button>sign up</button>
                </Link>
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <button>login</button>
                </Link>

            </div>
        );
    }
}

export default Header;