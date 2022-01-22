import React from 'react'
import headingImage from '../siteImage/heading-Image.png'
import {Container} from 'react-bootstrap'

const HeadingSection = () => {
    return (
       <Container >
            <div className='py-4 my-2 flex'>
            <div className='mx-auto' >
            <h1  className='tracking-in-expand-fwd-bottom' style={{textTransform:'capitalize'}}>Planting a <span className='marked-text'>Rooftop garden</span><br></br>is similar to believe <br></br> in tomorrow</h1>
            </div>

            <div className='mx-auto'>
                <img src={headingImage} alt="heading-img" className='headImg img-fluid '/>
            </div>

        </div>
       </Container>
    )
}

export default HeadingSection
