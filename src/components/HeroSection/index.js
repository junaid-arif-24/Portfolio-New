import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation/index'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                
                <HeroInnerContainer >
                        <Title>{Bio.title}</Title>
                        
                        <SubTitle>{Bio.description}</SubTitle>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection