import React from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import Header from '../Header/Header';
import BrandLogo from '../../../shared/BrandLogo/BrandLogo';
import TreapDeal from '../../../shared/TripDeal/TreapDeal';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <BrandLogo></BrandLogo>
           <TreapDeal></TreapDeal>
        </div>
    );
};

export default Home;