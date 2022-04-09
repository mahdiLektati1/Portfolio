import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import cv from '../data/cv.pdf';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Je suis <span>Mahdi Lektati</span></h4>
                <p className="paragraph">
                    Étudiant en MASTER 1 ICE à l'université Toulouse - Jean Jaurès, engagé et créatif, motivé et dévoué. Cherche à tirer parti de ses compétences exemplaires en matière de leadership, d'analyse et de codage en tant que développeur Informatique junior.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nom complet</p>
                        <p>Age</p>
                        <p>Nationalité </p>
                        <p>Langues </p>
                        <p>Lieu</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Lektati Mahdi</p>
                        <p>: 22</p>
                        <p>: Marocaine </p>
                        <p>: Anglais, Français, Arabe</p>
                        <p>: Toulouse, France</p>
                        <p>: Développeur Full Stack</p>
                    </div>
                </div>
                <PrimaryButton title={'Télécharger le CV'} link={cv} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
            text-align: justify;
            text-justify: inter-word;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
