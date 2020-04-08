import React from 'react';
import Header from '../../Components/HeaderFooter/Header/Header';
import Footer from '../../Components/HeaderFooter/Footer/Footer';


const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;