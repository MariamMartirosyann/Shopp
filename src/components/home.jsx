
import React from 'react';
import '../App.css';
import Footer from '../components/footer';
import Header from '../components/header';
import SectionFour from '../components/SecctionFour';
import SectionOne from '../components/sectionOne';
import SectionThree from '../components/sectionThree';
import SectionTwo from '../components/sectionTwo';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SectionFive from './sectionFive';

const Home = () => {
  return (
  
    
    <Grid container>
    <Container >
    <Header/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <Footer/>
    </Container>
    </Grid>
    
  );
}

export default Home