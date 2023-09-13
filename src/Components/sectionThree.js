
import img1 from './images/img1.png';
import {Card,Button,Container}  from 'react-bootstrap';
function SecThree() {
  return (
    <Container style={{ marginTop: '30%',marginLeft: '120px' }} >  
    <div className='row'>
    <h1>
        From Our Blog
    </h1>
    <p> 
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita enim nihil rem <br></br> repellat fugit sint non rerum maxime cumque vero.
   </p> 
   </div>  
<div className="container">
    <div className='row mt-5'>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>

        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        </div>
    </div>
    </Container>
  );
}

export default SecThree;