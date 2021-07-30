import React from 'react'
import { AboutIntroWrapper,About, Title, Paragraph, LeftCol, RightCol, RightColContainer } from './AboutStyles'
import { SidebarRoute } from '../sidebar/SidebarStyles'

export default function AboutIntro() {
    return (
        <AboutIntroWrapper>
            
            <About>
                
                <LeftCol>
                    
                </LeftCol>

                <RightCol>
                    <RightColContainer>
                    <Title><h1>Predstavitev</h1></Title>
                    
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ante metus dictum at tempor commodo ullamcorper a lacus.
                        <br></br>
                        <br></br>
                        Aenean et tortor at risus viverra adipiscing at. Mattis rhoncus
                        urna neque viverra justo nec ultrices dui. Amet consectetur adipiscing
                        elit pellentesque habitant. Eget magna fermentum iaculis eu non diam phasellus
                        Aenean et tortor at risus viverra adipiscing at. Mattis rhoncus
                        urna neque viverra justo nec ultrices dui. Amet consectetur adipiscing.
                        <br></br>
                        <br></br>
                        elit pellentesque habitant. Eget magna fermentum iaculis eu non diam phasellus
                        Aenean et tortor at risus viverra adipiscing at. Mattis rhoncus
                        urna neque viverra justo nec ultrices dui. Amet consectetur adipiscing.
                        elit pellentesque habitant. Eget magna fermentum iaculis eu non diam phasellus
                        Aenean et tortor at risus viverra adipiscing at. Mattis rhoncus
                        
                    </Paragraph>
                    <SidebarRoute style={{marginBottom: "1rem"}} to='/drinks'>Read More</SidebarRoute>
                    </RightColContainer>
                </RightCol>
            </About>
        </AboutIntroWrapper>
    )
}
