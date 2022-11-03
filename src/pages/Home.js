
import Carousel from "react-multi-carousel";
import {Row, Col,Card,Button} from 'react-bootstrap';
import {animations} from 'react-animation';
import {bounce} from 'react-animation';
import {Animated} from "react-animated-css";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import item from '../assets/images/item.png'
import "./Home.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Home() {
  const style = {
    animation: animations.fadeIn
  }
  return (

    <div>
      <div id="header0" class="header0 mt-5">
        <div class="bg-header mx-auto mt-1 text-xl text-[#0e0d0d]">
          <div class="flex mx-auto items-start justify-center">
            <div id="header-text-left" class=" max-w-lg flex-[0.4]">
              <h1>Quality server and fastest connection</h1>
              <ul>
                <li className="d-inline-flex"><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Green_check.svg" height={24}/><span>No setup or other hidden fees</span></li>
                <li className="d-inline-flex"><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Green_check.svg" height={24}/><span>Instant automatic Setup after payment</span></li>
                <li className="d-inline-flex"><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Green_check.svg" height={24}/><span>Unblock Skype, poker and adult websites</span></li>
                <li className="d-inline-flex"><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Green_check.svg" height={24}/><span>Browse 100% stealth and Anonymous!</span></li>
                <li className="d-inline-flex"><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Green_check.svg" height={24}/><span>Access blocked/censored websites in your Country</span></li>
                <li className="d-inline-flex"><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Green_check.svg" height={24}/><span>Choose a Server location near you we have Servers all over the world</span></li>
              </ul>
              <div className="d-flex justify-content-around">
                <button className="btn btn-info btn-lg">Get Start Now | only $6.00 / mo</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div class="header-text-right  flex flex-[0.6] mt-24 justify-end bg-[#93c7c7] bg-opacity-[0.1] rounded-r-2xl rounded-b-2xl">
              <img src={item} style={{width:"350px"}}/>
            </div>
          </div>
          <div style={{margin:"30px",color:"#323740",textAlign: "justify",textJustify: "inter-word"}}>
            <Row style={{margin:"20px",height:"460px"}}>
              <Animated animationIn ="bounceInLeft" animationOut="fadeOut" animationInDuration="5000" animationOutDuration="5000" isvisible={true}>
              <Col sm={12} style={{padding:"60px",color:"#323740"}}>
              <h2>What is www.nVpn.net?</h2><br/>
              - www.nVpn.net - provides a <strong>secure</strong> and <strong>private connection</strong> within a public network (e.g. the Internet). This connection is obtained through a method, called tunneling, where the data to be transferred is broken up into smaller 'packets' encrypted and are subsequently sent through the virtual tunnel created. <br/>The connection gets established via the Open Source Software <strong>OpenVPN</strong> (or L2TP/IPsec(IKEv1/IKEv2), Squid & Socks5 proxy). We provide by default <strong>a secure 256 Bit AES-CBC</strong> encrypted connection to our servers located all over the world where all traffic is directed through them!<br/>PLEASE NOTE: that if you do choose to use one of many free proxy services there is a great chance that your credit card and/or passwords will be subject to fraud because they log your activity!<br/><br/>
              With nVpn.net you can anonymize and <strong>encrypt</strong> your <strong>entire</strong> Internet activities. Regardless, whether you like to simply browse, keep a blog, write e-mails / ftp, run a business, transfer money, download images, exchange files or chat, you will always be unobserved and safe.
              </Col>
              </Animated>
            </Row>
            <Row style={{margin:"40px"}}>
              <Col sm={12} style={{marginLeft:"40px"}}>
              nVpn: Easy to use and offers connections through our 56 servers location in:<br></br>
              Armenia, Austria, Belarus, Canada (2x), Estonia, France (2x), Germany (3x), Hungary, Iran, Japan, Kaliningrad, Kosovo, Netherlands (2x), New Zealand, Nigeria, Norway, Poland, Romania, Russia, Sweden (2x), Swiss (3x), United Kingdom (3x) and United States (4x)!
              </Col>
            </Row>
             <Row style={{margin:"60px"}}>
              <Col sm={2}>
                <Row><Col sm={12}><img src="slagon1.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
                <Row><Col sm={12}><img src="slagon2.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon3.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon4.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon5.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon6.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon7.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon8.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon9.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon10.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon11.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon12.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon13.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon6.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon7.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon9.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon10.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon13.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon1.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon4.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon8.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
              <Col sm={2}>
              <Row><Col sm={12}><img src="slagon6.png" style={{width:"90px",height:"60px"}}></img></Col></Row>
              </Col>
             </Row>

            <Row style={{margin:"30px",marginLeft:"40px"}}>
              <Col sm={3}>
              <Animated animationIn ="slideInLeft" animationOut="rotateOutDownRight" animationInDuration="5000" animationOutDuration="5000" isvisible={true}>
                <Card style={{ width: '18rem',height:"450px",borderRadius:"20px",padding:"20px"}}>
                  <Card.Body>
                    <Card.Title>Sunday, 02.10.2011</Card.Title>
                    <Card.Text>               
                        As you can see we have tweaked our layout here and there. Going along with this a new Ticket and a huge <a href="#">Knowledgebase</a> System has been integrated.
                        Incase of any Problems or General Questions always take a first look into the Knowledgase that becomes frequently updated.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
              </Col>
              <Col sm={3}>
              <Animated animationIn ="slideInLeft" animationOut="rotateOutDownRight" animationInDuration="5000" animationOutDuration="5000" isvisible={true}>
                <Card style={{ width: '18rem',height:"450px",borderRadius:"20px",padding:"20px" }}>
                  <Card.Img variant="top" src="windflag2.png" style={{height:"150px"}}/>
                  <Card.Body>
                    <Card.Title>Friday, 04.03.2011</Card.Title>
                    <Card.Text>
                        The USA Server has also been updated to a more stable, faster Server. All USA Costumers <a href="#">download</a> your new Config file in order to connect.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
              </Col>
              <Col sm={3}>
              <Animated animationIn ="slideInRight" animationOut="rotateOutDownRight" animationInDuration="5000" animationOutDuration="5000" isvisible={true}>
                <Card style={{ width: '18rem',height:"450px",borderRadius:"20px",padding:"20px" }}>
                  <Card.Img variant="top" src="windflag1.png" style={{height:"150px"}}/>
                  <Card.Body>
                    <Card.Title>Tuesday, 01.03.2011</Card.Title>
                    <Card.Text>
                        To optimize the performance the Russia Server has been updated and replaced. All RU Costumers must <a href="#">download</a> your new Config file in order to connect.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
              </Col>
              <Col sm={3}>
              <Animated animationIn ="slideInRight" animationOut="rotateOutDownRight" animationInDuration="5000" animationOutDuration="5000" isvisible={true}>
                <Card style={{ width: '18rem',height:"450px",borderRadius:"20px",padding:"20px" }}>
                  <Card.Img variant="top" src="slagon3.png" style={{height:"150px"}}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
              </Col>
            </Row>
            <Row style={{margin:"30px",fontSize:"15px"}}>
                <p><h2>What other...</h2></p>
                <p><h3>Benefits of using our nVpn service:</h3></p>
              <Col sm={4} style={{float:"left",padding:"10px"}}>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/>Provides an extra layer of safety and anonymity by hiding your real IP address<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Use Skype, Yahoo and Google Talk in Middle East and Asia. Visit<br/>
                censored/blocked websites in Iran, Qatar, China, Turkey and many more<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Securely encrypted connection between your PC and the Internet (256 Bit AES-CBC / SHA512 as default and alternatively 128 Bit Blowfish-CBC / SHA1)<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Your ISP/office/school CANNOT monitor your activities<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> We offer Shared IP or Dedicated IP (*even Dynamic IPs as Upgrade possibility*)<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Unmetered bandwidth and NO Speed throttling<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Portforward - open the ports of your desire in our client area, ports are then opened instantly & automatically without any <br/>delay! (No more need to Portforward in your router.)<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Anti Port-Clash function: Even on Shared IPs your chosen port(s) - and by that your assets - are safe. Two members can never <br/>clash on the same port(s) at the same time<br/>
              </Col>
              <Col sm={4} style={{float:"left",padding:"10px"}}>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> TCP/443 Mode can be chosen from inside the Members Area. Allows to bypass almost all University/Workplace/School Firewall <br/>restrictions (good for places where OpenVPN's default UDP/1194 port is blocked)<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Server Switch possibility in Members Area - (1x FREE of charge) - change to 56 Countries (including 5181 IPs) in seconds, fully <br/>automatic without any delay.<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Instant setup and delivery to your mailbox, no need to wait, pay and go, like in McDonalds drive by<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Server Emergency function: Incase a Server downtime occurs (a rare event) the affected Members receive a free Switch slot to <br/>another alternative Country, as always fully automaticated. By this method: an alltime 100% Access is guaranteed. You will always <br/>be able to access another alternative Country, incase the original Country is undergoing a downtime for more than 30-45 minutes.<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> L2TP/IPsec(IKEv1 and IKEv2): Every subscription plan includes the L2TP/IPsec protocol in BOTH variants as IKEv1 or IKEv2<br/>
              </Col>
              <Col sm={4} style={{float:"left",padding:"10px"}}>
                
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Squid and SOCKS5 Proxy*New*: Every subscription plan includes a Squid and a SOCKS5 proxy. More info what a Squid and a SOCKS5 <br/>proxy is can be found in the knowledgebase. Both Proxies are setup in a way to support SSL Encryption in combination with <br/>"stunnel" making it an encrypted Proxy<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Anti DPI (Deep Packet Inspection): Additional measurements to bypass DPI (for countries like China and its great firewall, <br/>Iran..) have been setup using OpenVPN over SSL mode and/or with tls-crypt or via Obfsproxy<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> Inhouse DNS *New since May 2019*: Now using our own setup DNS Nameserver on every VPN location, no more external third-party <br/>DNS involved<br/>
                <BsFillBookmarkPlusFill size={20} style={{float:"left"}}/> WireGuard VPN *New since Oct 2019*: Now as well offering the highly demanded new VPN protocol WireGuard<br/>
              </Col>
            </Row>
          </div>
          
        </div>
      </div> 
      <center><h5>TESTIMONIALS</h5></center>
      <div class=" mx-auto mt-24" data-aos="fade-down">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={true}
          renderButtonGroupOutside={true}
        >
          <div class="srv-sl container my-12" srvsl-timer="5">
            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-show flex">
              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.1704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    {/* <h4>Alex Hoyt</h4> */}
                    {/* <b>15/10/2021</b> */}
                    <h2>Comparitech.com</h2>  <p>mentioned us in their No-Log VPN <a href="https://www.comparitech.com/vpn/vpn-logging-policies/#N">Overview</a>Overview</p>
                  </div>
                </div>
              </div>
              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.1704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    {/* <h4>Benjamin S.</h4> */}
                    {/* <b>20/10/2021</b> */}
                    <h1><a href="https://vpnpick.com/">VPNpick.com</a></h1> <p>has just now published a <a href="https://vpnpick.com/reviews/nvpn-review/">review</a> about us.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-hide">

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-female</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-female" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M60.150701,23.8204849 C65.1603059,23.8204849 70.1699108,25.7315847 73.9921105,29.5537844 L73.9921105,29.5537844 L74.8003614,30.3620353 C79.3741852,34.9358591 80.0427112,40.8160266 80.5658049,46.8166997 L80.5658049,46.8166997 L80.6483385,47.7784929 L80.7306039,48.7433178 C81.015952,52.0585273 81.3543604,55.384922 82.1666013,58.560212 L82.1666013,58.560212 L74.2790699,58.560212 C70.4226455,62.5776739 65.2866733,64.5864048 60.150701,64.5864048 C55.0147287,64.5864048 49.8787565,62.5776739 46.0223321,58.560212 L46.0223321,58.560212 L38.1552968,58.560212 C39.2749725,55.0235633 39.6350989,51.4496173 39.9103562,47.9601945 L39.9103562,47.9601945 L39.9847485,47.0012598 C40.4581044,40.8417339 40.8278688,35.0352071 45.5010406,30.3620353 L45.5010406,30.3620353 L46.3092915,29.5537844 C50.1314912,25.7315847 55.1410961,23.8204849 60.150701,23.8204849 Z" id="Rectangle" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M99.0573023,86.6627443 C89.6375604,75.6459122 75.6373086,68.6627443 60.0060505,68.6627443 C44.4145242,68.6627443 30.4457232,75.6104575 21.0267171,86.5788145" id="Path" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M78.5420097,90.1627443 C75.5706558,76.1353412 62.0653915,77.2280612 60.0249588,72.1627443 C57.9376945,77.3147502 43.9770088,76.1353412 41.5420097,90.0788145" id="Path-Copy-2" transform="translate(60.042010, 81.162744) scale(1, -1) translate(-60.042010, -81.162744) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    {/* <h4>Lana Hansen</h4> */}
                    {/* <b>03/11/2021</b> */}
                    <h1><a href="https://www.bestvpnrating.com" target="_blank">Bestvpnrating.com</a></h1> <p>has just now published a <a href="https://www.bestvpnrating.com/review/nvpn" target="_blank">review</a> about us.</p>
                    <div class="posted">Posted on 27 Jun 2018</div>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.1704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h1><a href="https://www.bestvpn.co" target="_blank">BestVPN.co</a></h1><p>has just now published a <a href="https://www.bestvpn.co/nvpn-review/" target="_blank">review</a> about us.
                    </p><div class="posted">Posted on 06 Jul 2018</div>
                  </div>
                </div>
              </div>

            </div>
            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-hide">
              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.1704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h1><a href="https://anonymster.com" target="_blank">Anonymster.com</a></h1><p> just now published a <a href="https://anonymster.com/nvpn-review-test/" target="_blank">review</a> about us.
                    </p><div class="posted">Posted on 29 Jan 2018</div>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-female</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-female" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M60.150701,23.8204849 C65.1603059,23.8204849 70.1699108,25.7315847 73.9921105,29.5537844 L73.9921105,29.5537844 L74.8003614,30.3620353 C79.3741852,34.9358591 80.0427112,40.8160266 80.5658049,46.8166997 L80.5658049,46.8166997 L80.6483385,47.7784929 L80.7306039,48.7433178 C81.015952,52.0585273 81.3543604,55.384922 82.1666013,58.560212 L82.1666013,58.560212 L74.2790699,58.560212 C70.4226455,62.5776739 65.2866733,64.5864048 60.150701,64.5864048 C55.0147287,64.5864048 49.8787565,62.5776739 46.0223321,58.560212 L46.0223321,58.560212 L38.1552968,58.560212 C39.2749725,55.0235633 39.6350989,51.4496173 39.9103562,47.9601945 L39.9103562,47.9601945 L39.9847485,47.0012598 C40.4581044,40.8417339 40.8278688,35.0352071 45.5010406,30.3620353 L45.5010406,30.3620353 L46.3092915,29.5537844 C50.1314912,25.7315847 55.1410961,23.8204849 60.150701,23.8204849 Z" id="Rectangle" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M99.0573023,86.6627443 C89.6375604,75.6459122 75.6373086,68.6627443 60.0060505,68.6627443 C44.4145242,68.6627443 30.4457232,75.6104575 21.0267171,86.5788145" id="Path" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M78.5420097,90.1627443 C75.5706558,76.1353412 62.0653915,77.2280612 60.0249588,72.1627443 C57.9376945,77.3147502 43.9770088,76.1353412 41.5420097,90.0788145" id="Path-Copy-2" transform="translate(60.042010, 81.162744) scale(1, -1) translate(-60.042010, -81.162744) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <h1><a href="https://www.vpnranks.com" target="_blank">VPNranks.com</a></h1><p> just now published a <a href="https://www.vpnranks.com/nvpn-review/" target="_blank">review</a> about us.
                    </p><div class="posted">Posted on 28 Jan 2018</div>
                  </div>
                </div>
              </div>

            </div>
            <div class="row row-cols-1 row-cols-lg-2 srvsl-desktop srv-sl-slide srv-sl-hide">
              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-first">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-male</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.8">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" fill="#FFFFFF" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-male" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" />
                              <rect id="Rectangle" transform="translate(60.077332, 39.999793) rotate(-45.000000) translate(-60.077332, -39.999793) " x="42.5773315" y="22.4997934" width="35" height="35" rx="17.5" />
                              <path d="M105.622076,81.0287079 C94.6173536,68.1581665 78.2613977,60 60,60 C41.7850193,60 25.4658062,68.1167462 14.4619435,80.9306559" id="Path" />
                              <rect id="Rectangle-Copy-5" transform="translate(60.077332, 71.008348) rotate(-45.000000) translate(-60.077332, -71.008348) " x="53.9918673" y="64.9228841" width="12.1709284" height="12.1709284" rx="4" />
                              <path d="M64.4848046,81.9166349 C65.1992135,81.4972168 66.015992,81.4070764 66.7590229,81.6003927 C67.5020538,81.7937091 68.171337,82.1704821 68.5907551,82.9848909 C68.8660196,83.4537582 69.0036518,83.9787482 69.0036518,84.5037381 C69.0036518,85.0287281 68.8660196,85.5537181 68.5907551,86.0225854 L68.5907551,86.0225854 L57.3857249,105.108488 C56.8470358,106.026055 55.8626306,106.589641 54.7986216,106.589641 L54.7986216,106.589641 L46.9177491,106.589641 C46.089322,106.589641 45.339322,106.253854 44.7964288,105.710961 C44.2535356,105.168068 43.9177491,104.418068 43.9177491,103.589641 L43.9177491,103.589641 L43.9177491,95.7087684 C43.9177491,94.6447594 44.4813349,93.6603542 45.3989019,93.1216651 L45.3989019,93.1216651 Z" id="Rectangle-Copy-6" transform="translate(60.077332, 90.430058) rotate(-45.000000) translate(-60.077332, -90.430058) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-end order-lg-first srv-sl-text">
                    <h1><a href="https://www.bestvpnrating.com" target="_blank">Bestvpnrating.com</a></h1><p> just recently published a <a href="https://www.bestvpnrating.com/service/nvpn" target="_blank">review</a> about us.
                    </p><div class="posted">Posted on 21 Oct 2016</div>
                  </div>
                </div>
              </div>

              <div class="col srvsl-mobile">
                <div class="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center srv-sl-last">
                  <div class="">
                    <div class="srv-sl-img shadow-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                        <title>icon-avatar-female</title>
                        <g id="Solutions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Solutions-–-General" transform="translate(-571.000000, -3300.000000)" stroke="#595959" stroke-width="2">
                            <g id="icon-avatar-female" transform="translate(571.000000, 3300.000000)">
                              <path d="M60,1 C64.7202286,1 69.4404572,2.80070651 73.0418703,6.40211954 L73.0418703,6.40211954 L113.59788,46.9581297 C117.199293,50.5595428 119,55.2797714 119,60 C119,64.7202286 117.199293,69.4404572 113.59788,73.0418703 L113.59788,73.0418703 L73.0418703,113.59788 C69.4404572,117.199293 64.7202286,119 60,119 C55.2797714,119 50.5595428,117.199293 46.9581297,113.59788 L46.9581297,113.59788 L6.40211954,73.0418703 C2.80070651,69.4404572 1,64.7202286 1,60 C1,55.2797714 2.80070651,50.5595428 6.40211954,46.9581297 L6.40211954,46.9581297 L46.9581297,6.40211954 C50.5595428,2.80070651 55.2797714,1 60,1 Z" id="Polygon-Copy-88" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M60.150701,23.8204849 C65.1603059,23.8204849 70.1699108,25.7315847 73.9921105,29.5537844 L73.9921105,29.5537844 L74.8003614,30.3620353 C79.3741852,34.9358591 80.0427112,40.8160266 80.5658049,46.8166997 L80.5658049,46.8166997 L80.6483385,47.7784929 L80.7306039,48.7433178 C81.015952,52.0585273 81.3543604,55.384922 82.1666013,58.560212 L82.1666013,58.560212 L74.2790699,58.560212 C70.4226455,62.5776739 65.2866733,64.5864048 60.150701,64.5864048 C55.0147287,64.5864048 49.8787565,62.5776739 46.0223321,58.560212 L46.0223321,58.560212 L38.1552968,58.560212 C39.2749725,55.0235633 39.6350989,51.4496173 39.9103562,47.9601945 L39.9103562,47.9601945 L39.9847485,47.0012598 C40.4581044,40.8417339 40.8278688,35.0352071 45.5010406,30.3620353 L45.5010406,30.3620353 L46.3092915,29.5537844 C50.1314912,25.7315847 55.1410961,23.8204849 60.150701,23.8204849 Z" id="Rectangle" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M99.0573023,86.6627443 C89.6375604,75.6459122 75.6373086,68.6627443 60.0060505,68.6627443 C44.4145242,68.6627443 30.4457232,75.6104575 21.0267171,86.5788145" id="Path" fill-opacity="0.8" fill="#FFFFFF" />
                              <path d="M78.5420097,90.1627443 C75.5706558,76.1353412 62.0653915,77.2280612 60.0249588,72.1627443 C57.9376945,77.3147502 43.9770088,76.1353412 41.5420097,90.0788145" id="Path-Copy-2" transform="translate(60.042010, 81.162744) scale(1, -1) translate(-60.042010, -81.162744) " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="text-center text-lg-start srv-sl-text">
                    <p>Privacy minded blog <a href="https://www.vpnmentor.com" target="_blank">vpnMentor</a> has published a <a href="https://www.vpnmentor.com/reviews/nvpn/" target="_blank">review</a> about us.
                    </p><div class="posted">Posted on 08 Jun 2016</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </Carousel>

      </div>
      <div class="row" style={{marginLeft:"10px",marginBottom:"30px"}}>
        
          <div class="col">
                <Card style={{ width: '17rem',height:"320px",padding:"5px",border:"0px",borderRight:"5px solid black"}}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>               
                      Our Support area is offline since 3 days now due to a server damage on the hoster's side. We are trying to resolve… 
                      <br></br><a href="#">https://t.co/NxIxghAFiX</a>
                      <br></br>03 July 2022, 00:00:00
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          <div class="col">
          
                <Card style={{ width: '17rem',height:"320px",padding:"5px",border:"0px",borderRight:"5px solid black"}}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>               
                      The Website server had a technical issue almost all throughout the day, which just has been fixed right now. Everything is back functional.
                      <br></br>04 June 2022, 00:00:00
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
          <div class="col">
                <Card style={{ width: '17rem',height:"320px",padding:"5px",border:"0px",borderRight:"5px solid black"}}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>               
                        Since yesterday there is a big problem with connecting / resolving our Hostname which is part of the config file. T… <br></br><a href="#">https://t.co/1VRIMfMvQy</a>
                        <br/>06 June 2020, 00:00:00
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
          <div class="col">
          
                <Card style={{ width: '17rem',height:"320px",padding:"5px",border:"0px",borderRight:"5px solid black"}}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>               
                        Update: Hostname problem is resolved now, all systems back up working. Important: Make sure to re-download your con… <br></br><a href="#">https://t.co/wSWy4y9E5l</a>
                        <br></br>06 June 2020, 00:00:00
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
          <div class="col">
                <Card style={{ width: '17rem',height:"320px",border:"0px",padding:"10px"}}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>               
                      <strong>That One Privacy Guy <a href="#">@ThatPrivacyGuy</a></strong>
                      Thank you @nVpnNet for donating another $2,100 towards <a href="#">@OSTIFofficial</a> audit of <a href="#">@OpenVPN</a>! I have added you to my blog post!<br></br>
                      5:59 PM - 10 Dec 2016<br></br>
                      <a href="#">See That One Privacy Guy's other Tweets</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
      </div>
    </div>
  );
}

export default Home;
