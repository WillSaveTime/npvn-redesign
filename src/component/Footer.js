import React from "react";
import { Button, Col, Row } from 'react-bootstrap';
import { BsFacebook, BsGoogle, BsLinkedin, BsSkype, BsTwitter, BsYoutube } from "react-icons/bs";


const Footer = () => {
  return(
    <>
      <div style={{height:"350px",backgroundColor:"#2a2a2a",paddingTop:"50px"}}>
        <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Row>
            <Col sm={2}>
              <Button>
              <BsFacebook size={50}></BsFacebook>
              </Button>
            </Col>
            <Col sm={2} >
              <Button>
              <BsYoutube size={50}></BsYoutube>
              </Button>
            </Col>
            <Col sm={2}>
            <Button>
              <BsLinkedin size={50}></BsLinkedin>
              </Button>
            </Col>
            <Col sm={2}>
            <Button>
              <BsTwitter size={50}></BsTwitter>
              </Button>
            </Col>
            <Col sm={2}>
            <Button>
              <BsGoogle size={50}></BsGoogle>
              </Button>
            </Col>
            <Col sm={2}>
            <Button>
              <BsSkype size={50}></BsSkype>
            </Button>
            </Col>
          </Row>
        </Col>
        </Row>
        <Row style={{margin:"50px",color:"white"}}>
        <Col md={{ span: 8, offset: 2 }}>
          <Row>
          <Col sm={4}>
            Blog<br/>
            VPN Router<br/>
            VPN fur Gescharss
          </Col>
          <Col sm={4}>
          Blog<br/>
            VPN Router<br/>
            VPN fur Gescharss
          </Col>
          <Col sm={4}>
          Blog<br/>
            VPN Router<br/>
            VPN fur Gescharss
          </Col>
          </Row>
        </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer;