import React from 'react'
import styled from 'styled-components';

function JourneyItem({text}) {
    return (
        <JourneyItemStyled>
            <p>{text}</p>
        </JourneyItemStyled>
    )
}

const JourneyItemStyled = styled.div`
    margin-bottom: 5rem;
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &:not(:first-child){
        
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    p{
        padding: 1rem 0;
    }
`;

export default JourneyItem;
