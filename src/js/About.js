import { Image, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Layout from './Layout'

import tent from '../images/tent.jpg'

const About = (props) => {
  return (
    <Layout title="About the SCA" {...props}>
      <Row>
        <Col xs={12} md={8}>
          <p>
            The SCA is a practical history society. Our members are interested in all
            aspects of recreating the arts and skills of pre-17th century Europe, be
            it combat skills, astronomy, brewing, dancing, costuming feasting, calligraphy
            or one of many, many more skills.
          </p>
          
          <p>
            We are family friendly: kids of all ages take part with their parents,
            and notably some adults join because their kids are keen. We hold practices
            in armoured combat, rapier combat, and archery. We meet up to work on various
            arts and sciences, like armouring, metal casting, illlumination and more.
          </p>

          <p>
            We cover many cultures and time periods, and don’t restrict our members to any
            one area: Vikings mingle freely with 16th Venetian ladies, and swap skills and
            stories. Many of us have a ‘persona’ - a person from a specific time, place -
            to research. Some aim for a general “medieval” look and feel, and don’t get too
            worried about the details while others lovingly craft an entire identity with
            time appropriate clothes, accessories, weapons, household goods and skill sets.
          </p>

          <p>
            <Button href="https://insulaedraconis.org/activities/">
              Read more on our UK/Ireland/Iceland site
            </Button>
          </p>
          
          <p>
            <LinkContainer to="/">
              <Button variant="outline-primary">Go to home page</Button>
            </LinkContainer>
          </p>
        </Col>
        <Col xs={12} md={4}>
          <br />
          <Image src={tent} fluid rounded />
        </Col>
      </Row>

      

      
    </Layout>
  )
}

export default About;
