import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Bonjour, c'est <span>Lektati Mahdi</span></h1>
                <p>
                    C'est super agréable de vous rencontrer.<br />
                    Virtuellement en tout cas... mais je vous invite à jeter un coup d'œil sur mon travail et à me faire savoir si vous souhaitez discuter.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/mahdilektati/" className="icon i-linkedin" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/mahdiLektati1" className="icon i-github" target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                    <a href="mailto:lektati1@gmail.com" className="icon i-mail" target="_blank" rel="noreferrer">
                        <MailIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-mail{
                &:hover{
                    border: 2px solid  #cb4335 ;
                    color:  #cb4335 ;
                }
            }
        }
    }
`;

export default HomePage;
