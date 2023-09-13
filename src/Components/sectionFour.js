import { Card, Button, Container,InputGroup,Form } from 'react-bootstrap';
function SecFour() {
    return ( 
        <Container>
            <div className='row bg-primary mt-5 rounded py-5 text-white'>
               <div className='col-6'>
                <h2>New Product, delivered to you</h2>
                <p>Sign up for our newsletter for the latestest updates</p>

               </div>
               <div className='col-6'>
               <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email Address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"/>
        <Button variant="outline-secondary" id="button-addon2">
          Sign Up
        </Button>
      </InputGroup>
      <p className='text-start'>Sign up for our newsletter for the latestest updates</p>

               </div>

            </div>

        </Container>
     );
}

export default SecFour;