import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/developer.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Compétences professionnelles'} span={'Compétences'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={"Conception et Développement d'applications web"} 
                        paragraph={"Passionné par la réalisation et le développement de projets web, je me suis tout naturellement formé sur plusieurs technologies liées au monde du tech web. Aujourd'hui je me permets de dire que je possède une expérience et un savoir-faire intéressant en JavaScript (ES6 - React JS), Node JS,  PHP (Symfony / Laravel), SQL, Django REST, ainsi que les patrons de conception MVC, Layered, etc."}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Dev (Développement de Logiciels) - Ops (Opérations Informatiques)'} 
                            paragraph={"Durant ma période d’alternance Chez ORANGE SA, j’ai eu la chance de développer mes compétences en administration serveurs (RedHat / Debian - Orchestration d'infrastructure) ainsi qu’une bonne connaissance sur le principe de virtualisation. Cette expérience enrichissante m’a permis de toucher sur des projets concrets la conteneurisation Docker, Ansible ainsi que le principe d’intégration continue et du déploiement continue CI – CD avec Jenkins, Sonar, etc."}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'TOP EXPERTISE'} 
                        paragraph={"Ma formation d’alternance m’a permis d’acquérir des connaissances assez intéressantes, tant sur le frond-end que sur le back-end, dans le domaine applicatif ainsi que l’adaptation aux diverses procédures et logiciels requis. J’ai ainsi acquis au cours de ma formation et de mon expérience dans la gestion de projets, développements et administration d’outils opérant sur des équipement réseaux au sein d’une entreprise de services Internet m’ont permis d’opérer en développement agile avec des outils tel que Jira, Confluence, Git, ainsi que les langages C / C++, JAVA, PHP, SQL et Python parmi bien d’autres dans des d’applications orienté web ainsi que dans des applications plus abstraites. Ceci m’a permis de mettre en pratique mon esprit d’analyse et de synthèse afin d’améliorer les projets et leurs réalisations."}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ServicesSection;
