import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import JourneyItem from './JourneyItem';

function JourneySetion() {
    return (
        <JourneyStyled>
            <JourneyItem 
                text={"L'éducation n'est pas une préparation à la vie, l'éducation est la vie elle-même."} 
            />
            <Title title={'Parcours professionnel'} span={'Parcours Pro'} />
            <InnerLayout>
                <div className="journey">
                    <div class="row example-split">
                        <div class="col-md-12 example-title">
                            <h2>EXPÉRIENCE PROFESSIONNELLE</h2>
                            <p>“ L'expérience, voilà le maître en toutes choses. ”</p>
                        </div>
                        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <ul class="timeline timeline-split">
                                <li class="timeline-item">
                                    <div class="timeline-info">
                                        <p>31 août 2021 <br />-<br /> 31 août 2023</p>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                        <h3 class="timeline-title">Alternance - Ingénieur en développement - Orange S.A</h3>
                                        <br />
                                        <p>Passionné par la révolution numérique et depuis toujours par le monde informatique, et par suite de la période de stage effectué au sein de l’entreprise Orange, j’ai choisi de poursuivre au sein de cette entreprise dans le cadre d’une alternance en tant qu’Ingénieur en développement. 
                                        <br />
                                        Lors de l’exercice de mes fonctions au poste d’Ingénieur en développement parmi l’équipe SCAINET, j’ai été chargé de concevoir de nouvelles solutions aux différentes demandes d’évolutions réalisées par nos utilisateurs, de gérer l’administration des serveurs hôtes de nos applications ainsi que de les maintenir. Ces différentes expériences au sein d'équipes variées et pluridisciplinaires garantissent ma capacité d'adaptation aux situations diverses et ma bonne gestion du stress.</p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info">
                                        <p>12 Avril 2021 <br />-<br /> 12 Août 2021</p>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                        <h3 class="timeline-title">Stage - Développeur Full Stack - Orange S.A</h3>
                                        <br />
                                        <p>J’ai débuté mon expérience professionnelle au sein de l’entreprise Orange dans le cadre d’un stage de fin d’études de licence en tant que développeur full stack. Cette expérience m’a permis de renforcer mes compétences en termes de <i>soft skills</i> ainsi que <i>technical skills</i>. Cette période de stage m’a permis aussi de découvrir le domaine du réseau et télécommunications grâce aux échanges réguliers avec le métier lors des différentes phases de développement des outils dont j’ai participé, tout en adoptant un développement agile de ces outils.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <br />
                        <div class="col-md-12 example-title">
                            <h2>ÉDUCATION</h2>
                            <p>“ Telle éducation, tels fruits. ”</p>
                        </div>
                        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <ul class="timeline timeline-split">
                                <li class="timeline-item">
                                    <div class="timeline-info">
                                        <p>2021 - Présent</p>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                        <h3 class="timeline-title">MASTER 1 ICE (Mathématiques et Informatique appliquées aux sciences humaines et sociales) - Parcours Ingénierie Continue Pour Les Ecosystèmes Logiciels Et Données</h3>
                                        <br />
                                        <p>J’ai choisi de poursuivre mes études en master ICE-LD à l’université de Toulouse Jean Jaurès afin de pouvoir profiter d’une expérience dans le milieu professionnel de travail en parallèle à mes études grâce à l’alternance, et ce dans le but de réaliser mon projet professionnel qui est de devenir un développeur full stack.</p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info">
                                        <p>2020 - 2021</p>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                        <h3 class="timeline-title">LICENCE MIASHS (Mathématiques et informatique appliquées aux sciences humaines et sociales) - Parcours INFORMATIQUE</h3>
                                        <br />
                                        <p>J'ai opté pour la France, car c’est un pays qui propose une formation de qualité, une multitude d’avantages pour les étudiants étrangers qui est pareille aux étudiants français, mais aussi, car une fois ma formation finie, je sais que dans mon pays, c’est un diplôme reconnu par l’état et par les recruteurs donc une formation fructueuse de tous les côtés. Enfin, ce qui m’a énormément motivé pour le choix de cette formation, c’est que ça me permettra de réaliser parfaitement ce que j’ai tracé comme projet professionnel, c’est le parfait projet d’étude pour devenir un développeur full stack.</p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info">
                                        <p>2018 - 2020</p>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                        <h3 class="timeline-title">DEUG SCIENCES MATHÉMATIQUES ET INFORMATIQUE (SMI)</h3>
                                        <br />
                                        <p>L'informatique m'ayant toujours intéressé, j'ai rapidement orienté mes études dans ce domaine. Après l'obtention de mon baccalauréat scientifique mention Bien, j'ai choisi de poursuivre mes études dans la faculté des sciences de Rabat à l’université Mohammed-V.</p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info">
                                        <p>2018</p>
                                    </div>
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                        <h3 class="timeline-title">BACCALAURÉAT SCIENCES MATHÉMATIQUES - OPTION B</h3>
                                        <br />
                                        <p>Lycée Moulay Youssef à Rabat, Maroc.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </InnerLayout>
            <div className="conclusion-rapper">
                <JourneyItem
                    text={"Pour accomplir de grandes choses, nous devons non seulement agir, mais aussi rêver, non seulement planifier, mais aussi croire."} 
                />
            </div>
        </JourneyStyled>
    )
}

const JourneyStyled = styled.section`
    .journey{
        display: flex;
        flex-direction: column;
        width: 100%;

        h1,h2,h3,h4,h5,h6 {
            color: var(--journey-title-color);
            margin-top: 0;
            font-size: 1.4rem;
        }
        
        .example-header {
            background: #3D4351;
            color: #FFF;
            font-weight: 300;
            padding: 3em 1em;
            text-align: center;
            h1 {
                color: #FFF;
                font-weight: 300;
                margin-bottom: 20px
            }
            p {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 3px;
                font-weight: 700;
            }
        }
        .container-fluid {
            .row {
                padding: 0 0 4em 0;
                &:nth-child(even) {
                    background: #F1F4F5;
                }
            }
        }

        .example-title {
            text-align: center;
            margin-bottom: 60px;
            padding: 3em 0;
            border-bottom: 1px solid #E4EAEC;
            p {
                margin: 0 auto;
                font-size: 16px;
                max-width: 400px;
            }
        }

        /*==================================
            TIMELINE
        ==================================*/

            /*-- GENERAL STYLES
            ------------------------------*/
            .timeline {
                line-height: 1.4em;
                list-style: none;
                margin: 0;
                padding: 0;
                width: 100%;
                h1, h2, h3, h4, h5, h6 {
                    line-height: inherit;
                }
            }

            /*----- TIMELINE ITEM -----*/

            .timeline-item {
                padding-left: 40px;
                position: relative;
                &:last-child {
                    padding-bottom: 0;
                }
            }

            /*----- TIMELINE INFO -----*/

            .timeline-info {
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 3px;
                margin: 0 0 .5em 0;
                text-transform: uppercase;
                white-space: nowrap;
                p {
                    color: var(--primary-color);
                    text-align: center;
                    font-size: medium;
                }
            }
            /*----- TIMELINE MARKER -----*/

            .timeline-marker {
                position: absolute;
                top: 0; bottom: 0; left: 0;
                width: 15px;
                &:before {
                    background: var(--journey-primary-color);
                    border: 3px solid transparent;
                    border-radius: 100%;
                    content: "";
                    display: block;
                    height: 15px;
                    position: absolute;
                    top: 2px; left: -3px;
                    width: 15px;
                    transition: background 0.3s ease-in-out,
                            border 0.3s ease-in-out;
                }
                &:after {
                    content: "";
                    width: var(--journey-seperator-width);
                    background: var(--journey-seperator-color);
                    display: block;
                    position: absolute;
                    top: 24px; bottom: 0; left: 6px;
                }
                .timeline-item:last-child &:after {
                    content: none;
                }
            }
            .timeline-item:not(.period):hover .timeline-marker:before {
                background: transparent;
                border: 3px solid var(--journey-primary-color);
            }

            /*----- TIMELINE CONTENT -----*/

            .timeline-content {
                padding-bottom: 40px;
                p:last-child {
                    margin-bottom: 0;
                }
                p {
                    color: var(--journey-font-color);
                    text-align: justify;
                    text-justify: inter-word;
                }
            }

            /*----- TIMELINE PERIOD -----*/
            
            .period {
                padding: 0;
                .timeline-info {
                    display: none;
                }
                .timeline-marker {
                    &:before {
                        background: transparent;
                        content: "";
                        width: 15px;
                        height: auto;
                        border: none;
                        border-radius: 0;
                        top: 0;
                        left: -1.5px;
                        bottom: 30px;
                        position: absolute;
                        border-top: 3px solid #CCD5DB;
                        border-bottom: 3px solid #CCD5DB;
                    }
                    &:after {
                        content: "";
                        height: 32px;
                        top: auto;
                    }
                }
                .timeline-content {
                    padding: 40px 0 70px;
                }
                .timeline-title {
                    margin: 0;
                }
            }

            /*----------------------------------------------
                MOD: TIMELINE SPLIT
            ----------------------------------------------*/

                .timeline-split {
                    @media (min-width: 768px) {
                        .timeline {
                            display: table;
                        }
                        .timeline-item {
                            display: table-row;
                            padding: 0;
                        }
                        .timeline-info,
                        .timeline-marker,
                        .timeline-content,
                        .period .timeline-info {
                            display: table-cell;
                            vertical-align: top;
                        }
                        .timeline-marker {
                            position: relative;
                        }
                        .timeline-content {
                            padding-left: 30px;
                        }
                        .timeline-info {
                            padding-right: 30px;
                        }
                        .period .timeline-title {
                            position: relative;
                            left: -45px;
                        }
                    }
                }

            /*----------------------------------------------
                MOD: TIMELINE CENTERED
            ----------------------------------------------*/

                .timeline-centered {
                    @extend .timeline-split;
                    @media (min-width: 992px) {
                        &,
                        .timeline-item,
                        .timeline-info,
                        .timeline-marker,
                        .timeline-content {
                            display: block;
                            margin: 0;
                            padding: 0;
                        }
                        .timeline-item {
                            padding-bottom: 40px;
                            overflow: hidden;
                        }
                        .timeline-marker {
                            position: absolute;
                            left: 50%;
                            margin-left: -7.5px;
                        }
                        .timeline-info,
                        .timeline-content {
                            width: 50%;
                        }
                        > .timeline-item:nth-child(odd) .timeline-info {
                            float: left;
                            text-align: right;
                            padding-right: 30px;
                        }
                        > .timeline-item:nth-child(odd) .timeline-content {
                            float: right;
                            text-align: left;
                            padding-left: 30px;
                        }    
                        > .timeline-item:nth-child(even) .timeline-info {
                            float: right;
                            text-align: left;
                            padding-left: 30px;
                        }
                        > .timeline-item:nth-child(even) .timeline-content {
                            float: left;
                            text-align: right;
                            padding-right: 30px;
                        }
                        > .timeline-item.period .timeline-content {
                            float: none;
                            padding: 0;
                            width: 100%;
                            text-align: center;
                        }
                        .timeline-item.period {
                            padding: 50px 0 90px;
                        }
                        .period .timeline-marker:after {
                            height: 30px;
                            bottom: 0;
                            top: auto;
                        }
                        .period .timeline-title {
                            left: auto;
                        }
                    }
                }

            /*----------------------------------------------
                MOD: MARKER OUTLINE
            ----------------------------------------------*/
                
                .marker-outline {
                    .timeline-marker {
                        &:before {
                            background: transparent;
                            border-color: var(--journey-primary-color);
                        }
                    }
                    .timeline-item:hover .timeline-marker:before {
                        background: var(--journey-primary-color);
                    }
                }
            }
        
        .conclusion-rapper {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: center;
        }
`;

export default JourneySetion;
