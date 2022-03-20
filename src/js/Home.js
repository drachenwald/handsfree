import { Button, Container, CardGroup, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import Layout from './Layout'

import battle from '../images/battle.jpg'
import bridge from '../images/bridge.jpg'
import helmet from '../images/helmet.jpg'

const Home = (props) => {
  return (
    <Layout title={props.group.group}
            subtitle={'Medieval recreation in ' + props.group.region}
            {...props}
    >

      <Container>

        <p>
          Ever wonder what it was like to fight in armour? To shoot a bow from a castle window?
          To learn how to make clothes right from preparing the wool to final embroidery or
          illuminate text on parchment? If you've even a passing interest in medieval arts
          &amp; crafts, medieval cookery &amp; brewing, heraldry &amp; arms, fencing or just
          historical research, we do all of this, and so much more in the
          Society for Creative Anachronism!
        </p>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={helmet} />
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
                About {props.group.group}.
              </Card.Text>
              <LinkContainer to="/about" className="stretched-link">
                <Button variant="primary"><b>Read more...</b></Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={battle} />
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Card.Text>
                Events taking place in our group.
              </Card.Text>
              <LinkContainer to="/events" className="stretched-link">
                <Button variant="primary"><b>Read more...</b></Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={bridge} />
            <Card.Body>
            <Card.Title>Contacts</Card.Title>
              <Card.Text>
                Get in touch.
              </Card.Text>
              <LinkContainer to="/contact" className="stretched-link">
                <Button variant="primary"><b>Read more...</b></Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </CardGroup>


      </Container>


    </Layout>
  )
}

export default Home;
