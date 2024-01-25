import React from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import  headerImage from '../../../assets/images/Banner/carBanner.png'

const Header = () => {
    return (
        <div className="h-[90vh]" style={{backgroundImage:"url('/src/assets/images/Banner/carBanner.png')"}}>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;