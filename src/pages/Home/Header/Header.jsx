import React from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import  headerImage from '../../../assets/images/Banner/carBanner.png'
import HeaderText from '../../../shared/HeaderText/HeaderText';
import AdvancedSearch from '../../../shared/AdvancedSearch/AdvancedSearch';

const Header = () => {
    return (
        <div className=" bg-center bg-cover  bg-no-repeat w-[412px] h-[216px] lg:w-full lg:h-full" style={{backgroundImage:"url('/src/assets/images/Banner/carBanner.png')"}}>
            <Navbar></Navbar>
            <HeaderText></HeaderText>
            <AdvancedSearch></AdvancedSearch>
        </div>
    );
};

export default Header;