import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
//import MediaQuery from 'react-responsive';
import { Card, Button, Container } from 'react-bootstrap';
class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <Card.Body>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <Card.Body>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
