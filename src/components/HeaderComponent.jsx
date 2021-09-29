import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <header className="header">
                    <nav  >
                        <div> <a href="http://192.168.100.221:3000/" className="navbar-brand">  Target Management App</a></div>
                    </nav>                      
                </header>
            </div>
        );
    }
}

export default HeaderComponent;