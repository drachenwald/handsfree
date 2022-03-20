import { ListGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Layout from './Layout'
import SectionWithHeader from './SectionWithHeader'

const Events = (props) => {

  const groupevents = props.eventslist.filter( obj => (
    obj['host-branch'].toLowerCase().endsWith(props.group.group.toLowerCase())
  ))

  if ( props.eventslist && groupevents.length === 0 ) {
    return (
      <Layout title="Events" {...props}>
        <p>
          No events posted - check back soon.
        </p>
        <Button href="https://drachenwald.sca.org/events/calendar/">
          Events elsewhere
        </Button>{' '}
        <LinkContainer to="/">
          <Button>Go to home page</Button>
        </LinkContainer>
      </Layout>
    )
  }

  return (
    <Layout title="Events" {...props}>

      <ListGroup>
        {
          props.eventslist.filter( obj => (
            obj['host-branch'].toLowerCase().endsWith(props.group.group.toLowerCase())
          )).map( obj => (
            <LinkContainer to={"/events/" + obj.slug} action key={obj.slug}>
              <ListGroup.Item>
                <h2>{obj['event-name']}</h2>
                <p>
                  {new Date(obj['start-date']).toLocaleDateString()} -{' '}
                  {new Date(obj['end-date']).toLocaleDateString()}
                </p>
                <SectionWithHeader item={obj.summary} />

              </ListGroup.Item>
            </LinkContainer>
          ))
        }
      </ListGroup>

    </Layout>
  )
}

export default Events;
