import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function ImageCap() {
  return (
    <>
      <MDBCard className='mb text-white shadow-5' background='dark'>
        <MDBCardImage position='top' src={require("D:/js-workspace/project-test-me-chinese/client/test-me-cn-web/src/assets/img/background1321x583.jpg")} alt='...' />
        <MDBCardBody>
          <MDBCardTitle>What is this website?</MDBCardTitle>
          <MDBCardText>
            This website is a place for you to learn Chinese characters. Based on your input, the website will generate a list of characters that you need to learn. 
            You can also add your own characters to the list.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}