import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
TextWrapper, TopLine, Heading,Subtitle,BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = ({LightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
        <InfoContainer LightBg={LightBg} id={id}>
         <InfoWrapper>
             <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText= {darkText}>{description}</Subtitle>
                        <BtnWrap>
                          <Button to='home'
                           smooth={true}
                           duration={true}
                           spy={true}
                           offset={-80}
                           primary={primary}
                           dark = {dark ? 1: 0}
                           dark2={dark2 ? 2 : 0}> {buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                     <ImgWrap>
                     {/* <ImageTwo width='500px' height='500px'/>  */}
                     <Img  src={img} alt={alt}/>
                     </ImgWrap>
                  </Column2>
             </InfoRow>
         </InfoWrapper>
        
        </InfoContainer>   
        </>
    )
}

export default InfoSection
