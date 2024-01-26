import React from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import Header from '../Header/Header';
import BrandLogo from '../../../shared/BrandLogo/BrandLogo';
import TreapDeal from '../../../shared/TripDeal/TreapDeal';
import Categories from '../Categories/Categories/Categories';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <BrandLogo></BrandLogo>
           <TreapDeal></TreapDeal>
           <Categories></Categories>
        </div>
    );
};

export default Home;