
import ICON1 from './images/ICON1.png';
import icon2 from './images/icon2.png';
import {Card,container}  from 'react-bootstrap';
function SecTwo() {
    return (
    <div>
        <div class="container">
        <div className='row' style={{ height: '30px', color: 'black', marginTop: '10%' }}>
            <div className='col-4 text-start'>
                <h1> A Beter Way To Start Building</h1>
            </div>
            <div class="col-4">
            <Card style={{ width: '18rem',border:'none' }} className='col-4'>
            <Card.Img className='ms-3' style={{width:'50px',height:'50px'}} variant="top"src={ICON1} />    
                <Card.Body>                    
                    <h3 className='text-start'>Featured Title</h3>
                    <Card.Text className='text-start'>
           
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card style={{ width: '18rem',border:'none' }} className='col-4'>
            <Card.Img className='ms-3' style={{width:'50px',height:'50px'}} variant="top"src={ICON1} />    
                <Card.Body>                    
                    <h3 className='text-start'>Featured Title</h3>
                    <Card.Text className='text-start'>
           
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>

            <div class="col-4">
            <Card style={{ width: '18rem',border:'none' }} className='col-4 me-5'>
            <Card.Img className='ms-3' style={{width:'50px',height:'50px'}} variant="top"src={ICON1} />    
                <Card.Body>                    
                    <h3 className='text-start'>Featured Title</h3>
                    <Card.Text className='text-start'>
           
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>

            <Card style={{ width: '18rem',border:'none' }} className='col-4 me-5'>
            <Card.Img className='ms-3' style={{width:'50px',height:'50px'}} variant="top"src={ICON1} />    
                <Card.Body>                    
                    <h3 className='text-start'>Featured Title</h3>
                    <Card.Text className='text-start'>
           
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>


        </div>
        </div>

        </div>


    );
}

export default SecTwo;