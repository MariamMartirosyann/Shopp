
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../Header';
import SectionOne from './sectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './SecctionFour';
import SectionFive from './sectionFive';
import Footer from '../Footer';
import '../../../App.css';


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