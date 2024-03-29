import { Button } from 'react-bootstrap'
import Icon from '@mdi/react';
import { mdiFacebook } from '@mdi/js';

import Layout from './Layout'

const Contact = (props) => {

  const roles = [
    {
      title: "Seneschal",
      slug: "seneschal",
      desc: "The Seneschal is the chair of the group."
    },
    {
      title: "Exchequer",
      slug: "exchequer",
      desc: "The Exchequer is our group's treasurer."
    },
    {
      title: "Chatelaine",
      slug: "chatelaine",
      desc: "The Chatelaine is a great contact for newcomers."
    },
    {
      title: "Minister of Arts and Sciences",
      slug: "moas",
      desc: "The Minister of Arts and Sciences oversees the arts, crafts and other activities in the group."
    },
    {
      title: "Herald",
      slug: "herald",
      desc: "The Herald is responsible for heralding and heraldry."
    },
    {
      title: "Armoured Combat Marshal",
      slug: "armoured-combat-marshal",
      desc: "The Armoured Combat Marshal oversees all aspects of armoured combat in the group."
    },
    {
      title: "Archery Marshal",
      slug: "archery-thrown-marshal",
      desc: "The Archery Marshal oversees archery and thrown weapons activities within the group."
    },
    {
      title: "Fencing Marshal",
      slug: "fencing-marshal",
      desc: "The Fencing Marshal oversees all aspects of fencing combat in the group."
    },
    {
      title: "Chronicler",
      slug: "chronicler",
      desc: "The Chronicler manages communications of announcements with the group."
    },
    {
      title: "Signet Clerk",
      slug: "signet",
      desc: "The Signet is an officer whose responsibility is coordinating the production of those scrolls given out with awards."
    },
    {
      title: "Web Minister",
      slug: "webminister",
      desc: "The Web Minister is repsonsible for the group's website."
    },
    {
      title: "Social Media Minister",
      slug: "socialmedia",
      desc: "The Social Media Minister is responsible for the group's Social Media presence."
    },
  ]

  const officers = roles.filter( role => {

    return props.officers.find( obj => {
      return role.slug === obj.office
    })

  }).map( role => {
    const officer = props.officers.find( o => o.office === role.slug)

    return (

      <div key={officer.office}>
        <h3>{ role.title }</h3>

        <p>
          <strong>{ officer.scaname }</strong>{' '}

          { officer.mundanename
            ?
              <>({officer.mundanename})</>
            :
              null
          }{' '}

          { officer.pronouns
            ?
              <span className='text-muted'>({officer.pronouns})</span>
            :
              null
          }{' '}<br />

          { officer.email
            ?
              <>
                <strong>Contact:</strong>{' '}
                <a href={'mailto:'+officer.email}>{ officer.email }</a>
              </>
            :
              null    
          }
        </p>

        { role.desc
          ?
            <p>{role.desc}</p>
          :
            null
        }

        <hr />
      </div>

    )
  })

  return (
    <Layout title="Contacts" {...props}>
      {
        officers.length > 0
        ?
          <>{officers}</>
        :
          <>No officers are available to display at this time.</>
      }

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
    </Layout>
  )
}

export default Contact;
