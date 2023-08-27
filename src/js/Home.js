import { Button, Container, CardGroup, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import Icon from '@mdi/react';
import { mdiFacebook } from '@mdi/js';

import Layout from './Layout'

import battle from '../images/battle.jpg'
import bridge from '../images/bridge.jpg'
import helmet from '../images/helmet.jpg'

const Home = (props) => {
  console.log(props.group)
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
            <Card.Img variant="top" src={helmet} alt="A fighter in his shining helmet"/>
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
                About {props.group.group}.
              </Card.Text>
              <LinkContainer to="/about" className="stretched-link">
                <Button variant="primary"><strong>What we do...</strong></Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={battle} alt="A battle for a medieval castle" />
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Card.Text>
                Events taking place in our group.
              </Card.Text>
              <LinkContainer to="/events" className="stretched-link">
                <Button variant="primary"><strong>See our events...</strong></Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={bridge} alt="Banners hanging from a castle bridge" />
            <Card.Body>
            <Card.Title>Contacts</Card.Title>
              <Card.Text>
                Get in touch.
              </Card.Text>
              <LinkContainer to="/contact" className="stretched-link">
                <Button variant="primary"><strong>Who we are...</strong></Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </CardGroup>

        { props.group['facebook-page']
          ?
            <div className='text-center mt-4'>
              <Button variant="primary" href={props.group['facebook-page']}>
                <Icon size='1.3rem' path={mdiFacebook} /> <strong>Visit us on Facebook</strong>
              </Button>
            </div>
          :
            null
        }

      </Container>


    </Layout>
  )
}

export default Home;
