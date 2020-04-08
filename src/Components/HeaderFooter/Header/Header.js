import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor :'#00688b',
                    boxShadow:'none',
                    padding:'10px 0px',
                    borderBottom:'6px solid #e9ebee',
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow:1}}>
                        <div >
                            <h3 style={{fontSize:'24px',
                                        fontFamily:'Roboto',
                                        color:'#e9ebee'}} >
                                ONETOUCH
                            </h3>
                        </div>
                    </div>

                    <Link to="/">
                        <Button
                         style={{fontFamily:'Roboto',fontSize:'16px',color:'#e9ebee'}}   
                         >Home</Button>
                    </Link>

                    <Link to="/settings">
                    
                        <Button
                         style={{fontFamily:'Roboto',
                             fontSize:'16px',
                             color:'#e9ebee'}}
                         color="inherit">Settings</Button>
                    </Link>
                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;