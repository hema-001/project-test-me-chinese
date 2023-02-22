import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Carousel from "./components/Carousel";
import ImageCap from "./components/ImageCap";
import Steps from "./components/Steps";

export default function MainPage() {
  return (
    <MDBContainer breakpoint="lg" fluid>
        <MDBRow>
            <MDBCol>
            <MDBContainer fluid style={{marginTop: "1.5rem", marginBottom: "1.5rem"}}>
                <MDBCol>
                    <Carousel className='shadow-5-strong'/>
                </MDBCol>
            </MDBContainer>
            </MDBCol>
        </MDBRow>
        <MDBRow className='d-flex justify-content-center' style={{marginBottom: "3rem"}}>
            <MDBCol>
                <MDBCard>
                    <ImageCap/>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{marginBottom: "5rem"}}>
            <MDBCol>
                <Steps />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}