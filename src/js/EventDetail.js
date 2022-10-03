import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import {  mdiCrown, mdiShieldHalfFull, mdiBullseyeArrow, mdiCandle, mdiWeb, mdiFacebook,
          mdiSwordCross, mdiMapMarker, mdiAlert, mdiMonitor } from '@mdi/js';

import Layout from './Layout'
import Loading from './Loading';
import SectionWithHeader from './SectionWithHeader';

import strings from './lib/strings.js';

const EventDetail = (props) => {

  const params = useParams();

  const slug = params.where + '/' + params.when + '/' + params.name

  const lang = 'en';

  if ( props.eventslist ) {

    const event = props.eventslist.find( obj => {
      return obj.slug === slug
    })

    if ( event ) {

      const start = new Date(event['start-date']).toLocaleDateString()
      const end = new Date(event['end-date']).toLocaleDateString()

      const datestring = ( start === end ? start : start + ' - ' + end )
  
      return (
        <Layout title={event['event-name']} subtitle={datestring} {...props}>

      
          { event.status.toLowerCase() !== 'cancelled' ? <SectionWithHeader item={event.summary} /> : <div><h2><Icon size='1.5rem' path={mdiAlert} color='#900' title="Cancelled" /> {strings[lang]['cancelledLong']}</h2><p>{strings[lang]['contactStaff']}</p></div> }

          { event['emergency-alert'] ? <div><h2><Icon size='1.5rem' path={mdiAlert} color='#900' title="Important Info" /> {strings[lang]['importantInfo']}</h2><p>{event.emergencyalert}</p></div> : null }

          <p>
            { event['progress'].toLowerCase() === 'king' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['kingPresent']} /> {strings[lang]['kingPresent']}<br /></span> : null }
            { event['progress'].toLowerCase() === 'queen' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['queenPresent']} /> {strings[lang]['queenPresent']}<br /></span> : null }
            { event['progress'].toLowerCase() === 'both' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['kingAndQueenPresent']} /> {strings[lang]['kingAndQueenPresent']}<br /></span> : null }

            { event['progress-nordmark'] && event['progress-nordmark'].toLowerCase() === 'prince' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['princeNordmarkPresent']} /> {strings[lang]['princeNordmarkPresent']}<br /></span> : null }
            { event['progress-nordmark'] && event['progress-nordmark'].toLowerCase() === 'princess' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['princessNordmarkPresent']} /> {strings[lang]['princessNordmarkPresent']}<br /></span> : null }
            { event['progress-nordmark'] && event['progress-nordmark'].toLowerCase() === 'both' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['princeAndPrincessNordmarkPresent']} /> {strings[lang]['princeAndPrincessNordmarkPresent']}<br /></span> : null }

            { event['progress-id'].toLowerCase() === 'prince' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['princeIdPresent']} /> {strings[lang]['princeIdPresent']}<br /></span> : null }
            { event['progress-id'].toLowerCase() === 'princess' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['princessIdPresent']} /> {strings[lang]['princessIdPresent']}<br /></span> : null }
            { event['progress-id'].toLowerCase() === 'both' ? <span><Icon size='1rem' path={mdiCrown} title={strings[lang]['princeAndPrincessIdPresent']} /> {strings[lang]['princeAndPrincessIdPresent']}<br /></span> : null }

            { event['activities'].indexOf( 'Heavy Fighting' ) !== -1 ? <span><Icon size='1rem' path={mdiShieldHalfFull} title={strings[lang]['heavy']} /> {strings[lang]['heavyScheduled']}<br /></span> : null }
            { event['activities'].indexOf( 'Fencing' ) !== -1 ? <span><Icon size='1rem' path={mdiSwordCross} title={strings[lang]['fencing']} /> {strings[lang]['fencingScheduled']}<br /></span> : null }

            { event['activities'].indexOf( 'Archery' ) !== -1 ? <span><Icon size='1rem' path={mdiBullseyeArrow} title={strings[lang]['archery']} /> {strings[lang]['archeryScheduled']}<br /></span> : null }

            { event['activities'].indexOf( 'Dancing' ) !== -1 ? <span><Icon size='1rem' path={mdiCandle} title={strings[lang]['dancing']} /> {strings[lang]['dancingScheduled']}<br /></span> : null }
            { event['activities'].indexOf( 'A&S' ) !== -1 ? <span><Icon size='1rem' path={mdiCandle} title={strings[lang]['artsci']} /> {strings[lang]['artsciScheduled']}<br /></span> : null }
          </p>

          { event['site-address'] ? <div><h4>{strings[lang]['siteAddress']}</h4><p>{event['site-address']}</p><p><Button variant="primary" href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(event['site-address'])}><Icon size='1rem' path={mdiMapMarker} color='#fff' title={strings[lang]['viewMap']} />{strings[lang]['viewMap']}</Button></p></div> : null }

          <SectionWithHeader title='Site Information' item={event['site-info']} />

          <SectionWithHeader title='Activities' item={event['activities']} />

          <SectionWithHeader title='Cost' item={event['cost']} />

          <SectionWithHeader title='Reservations' item={event['reservation-info']} />

          <SectionWithHeader title='Payment' item={event['payment']} />

          { event['event-steward'] && !event['event-steward-email'] ? <div><h4>{strings[lang]['eventSteward']}</h4> <p>{event['event-steward']}</p></div> : null }
          { event['event-steward'] && event['event-steward-email'] ? <div><h4>{strings[lang]['eventSteward']}</h4> <p>{event['event-steward']} (<a href={'mailto:' + event['event-steward-email']}>{event['event-steward-email']}</a>)</p></div> : null }

          { event['vc-url'] && event['vc-url'].search('zoom.us') !== -1 ? <p><Button variant="primary" href={event['vc-url']}><Icon size='1rem' path={mdiMonitor} color='#fff' title="Video conference" /> {strings[lang]['joinOnline']}</Button></p> : null }
          { event['vc-url'] && event['vc-url'].search('zoom.us') === -1 ? <p><Button variant="primary" href={event['vc-url']}><Icon size='1rem' path={mdiWeb} color='#fff' title="Website" /> {strings[lang]['visitWebsite']}</Button></p> : null }
          { event['pwinfo'] ? <p><b>{strings[lang]['pwInfo']}:</b> {event['pwinfo']}</p> : null }

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
