import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiWeb, mdiFacebook } from '@mdi/js';

import Layout from './Layout'
import Loading from './Loading';
import SectionWithHeader from './SectionWithHeader';

const EventDetail = (props) => {

  const params = useParams();

  const slug = params.where + '/' + params.when + '/' + params.name

  if ( props.eventslist ) {

    const event = props.eventslist.find( obj => {
      return obj.slug === slug
    })

    if ( event ) {

      const start = new Date(event['start-date']).toLocaleDateString()
      const end = new Date(event['end-date']).toLocaleDateString()
  
      return (
        <Layout title={event['event-name']} subtitle={start + ' - ' + end} {...props}>

          <p>
            
          </p>

          <SectionWithHeader item={event['summary']} />

          <SectionWithHeader title='Activities' item={event['activities']} />

          <SectionWithHeader title='Reservations' item={event['reservation-info']} />

          <p>
            {
              event.website
              ?
                <Button variant="primary" href={event.website}>
                  <Icon size='1rem' path={mdiWeb} /> Visit the event website
                </Button>
              :
                null
            }{' '}
            {
              event.facebook
              ?
                <Button variant="primary" href={event.facebook}>
                  <Icon size='1rem' path={mdiFacebook} /> Follow this event on Facebook
                </Button>
              :
                null
            }
          </p>

        </Layout>
      )
    }
  }

  return (
    <Loading />
  )

}

export default EventDetail;
