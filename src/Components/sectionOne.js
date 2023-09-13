import img1 from './images/img1.png';
import { Navbar, Container, Nav, NavDropdown, Button, Card } from 'react-bootstrap';
function SecOne() {
    return (
        <div>

            <div className='' style={{ backgroundColor: '#212429',height: "500px" }} >

                <Navbar className='' style={{ backgroundColor: '#212429' }} variant="secondary">
                    <Container className='space-5 '>
                        <Navbar.Brand href="#home" style={{ color: 'white' }}>Start bootstrap</Navbar.Brand>
                        <Nav className="me-5 ">
                            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link href="#features" style={{ color: 'white' }}>About</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white' }}>Contact</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white' }}>Pricing</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white' }}>FAQ</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white' }}>Blog</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white' }}>Portfolio</Nav.Link>
                        </Nav>


                    </Container>
                </Navbar>

<div class="container">
                <div className='row mt-5'>

                    <Card className='col-6' style={{ backgroundColor: '#212429', outline: 'none', border: 'none' }}>
                        <Card.Body style={{ color: 'white' }}>
                            <h1 class="display-4 fw-bold">A bootstrap Tamplete <br></br>For Modern Business</h1>
                            <Card.Text >
                                Quickly design and customise responsive mobile-first site with <br></br>
                                Bootstrap , The world's most popular front-end open source toolkit
                            </Card.Text>
                            <Button variant="primary">Get Started</Button>
                            <Button className='ms-5' style={{ backgroundColor: '#212429' }} >Get Started</Button>
                        </Card.Body>
                    </Card>
                    <img className='col-6 ms-5' style={{ width: '30rem' }} src={img1}>

                    </img>
                </div>
            </div>
            </div>





        </div>


    );
}

export default SecOne;