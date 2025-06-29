import React from 'react';
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import ContactSection from '../Component/Contact';
import About from '../Component/About';
import Skils from '../Component/Skils';
import Fooder from '../Component/Fooder';
import Projects from '../Component/Projects';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
      
             <Skils></Skils>
            <Projects></Projects>
           
            <ContactSection></ContactSection>
            
            <Fooder></Fooder>

        </div>
    );
};

export default Root;