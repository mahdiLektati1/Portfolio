import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import JourneySetion from '../Components/JourneySetion';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'À propos de moi'} span={'À propos de moi'} />
                <ImageSection />
                <ServicesSection />
                <JourneySetion />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
