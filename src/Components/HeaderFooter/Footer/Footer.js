import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {

    const styleFooter=[styles.bck_blue, styles.footer];

    return(
        <footer className={styleFooter.join(' ')}>
            <div >
                <h3 style={{fontSize:'24px',
                                fontFamily:'Roboto',
                                color:'#e9ebee'}} >
                        ONETOUCH
                    </h3>
            </div>


        </footer>


    );

}

export default Footer;