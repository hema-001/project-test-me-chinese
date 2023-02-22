import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <MDBContainer>
            <MDBCarousel showIndicators showControls fade >
                <MDBCarouselItem
                    className='w-100 h-100 d-block rounded-6'
                    itemId={1}
                    src={require("D:/js-workspace/project-test-me-chinese/client/test-me-cn-web/src/assets/img/jia.jpg")}
                    alt='...'
                >
                    <h5>Family</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block h-50 rounded-6'
                    itemId={2}
                    src={require("D:/js-workspace/project-test-me-chinese/client/test-me-cn-web/src/assets/img/meng.jpg")}
                    alt='...'
                >
                    <h5>Dream</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block rounded-6'
                    itemId={3}
                    src={require("D:/js-workspace/project-test-me-chinese/client/test-me-cn-web/src/assets/img/ai.jpg")}
                    alt='...'
                >
                    <h5>Love</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </MDBContainer>
      );
}