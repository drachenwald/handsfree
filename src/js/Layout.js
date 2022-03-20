import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loading from './Loading'

const Layout = (props) => {

  const parents = (group) => {

    // Find the group object of this group's parent

    const parent = props.grouplist.find( obj => {
      return obj.group === group.parent
    })

    // Return a list of this parent, and all of its parents recursively

    if ( parent ) {
      return [ parent, ...parents(parent) ]
    } else {
      return []
    }

  }

  if ( props.group && props.officers && props.grouplist ) {

    return (
      <>
        <Navbar expand="sm" bg="primary" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand text="secondary" className="text-secondary">
                <img
                  alt=""
                  src={'/img/heraldry/' + props.group.slug + '.png'}
                  width="40"
                  className="d-inline-block align-middle"
                />{' '}
                {props.group.group}
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end text-secondary'>
              <Nav>
                <LinkContainer to="/"><Nav.Link className="mx-2 text-secondary">Home</Nav.Link></LinkContainer>
                <LinkContainer to="/about"><Nav.Link className="mx-2 text-secondary">About</Nav.Link></LinkContainer>
                <LinkContainer to="/events"><Nav.Link className="mx-2 text-secondary">Events</Nav.Link></LinkContainer>
                <LinkContainer to="/contact"><Nav.Link className="mx-2 text-secondary">Contact</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      <div className="banner">
        <Container>
          <h1 className="display-5 pt-5">{ props.title }</h1>
          { props.subtitle
            ?
              <h3>{ props.subtitle }</h3>
            :
              null
          }
          <h1 className="pb-1">&nbsp;</h1>
        </Container>
      </div>


        <br />

        <Container>

        { props.children }

        </Container>

        <br />

        <Navbar expand="lg" bg="primary" variant="dark">
          <Container>
            <Row>
              <Col className="align-middle">
                <Navbar.Text className="align-middle text-secondary">
                  <p>
                    &copy; {new Date().getFullYear()} {props.group.group}.
                    This is the recognised web site for {props.group.group}{' '}
                    in the Society for Creative Anachronism.<br />
                    Copyright on all content and images remains with the creators.
                  </p>
                  {
                    parents(props.group).length > 0
                    ?
                      <>
                        <p>
                          See also:
                        </p>
                        <ul>
                          {
                            parents(props.group).map(obj => (
                              <li key={obj.group}>
                                <a href={obj.website}>{obj.group}</a> - {obj.region}
                              </li>
                            ))
                          }
                        </ul>
                      </>
                    :
                      null
                  }

                </Navbar.Text>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return (
      <Loading />
    )
  }

}

export default Layout;
