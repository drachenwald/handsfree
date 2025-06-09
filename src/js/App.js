import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async';

import About from './About'
import Home from './Home'
import Events from './Events'
import EventDetail from './EventDetail'
import Contact from './Contact'
import Loading from './Loading'
import NotFound from './NotFound'

import config from '../config.json'

function App() {

  const [ officerlist, setOfficerlist ] = useState([])
  const [ grouplist, setGrouplist ] = useState([])
  const [ eventslist, setEventslist ] = useState([])

  useEffect( () => {
    fetch(config.officerurl)
      .then(response => response.json())
      .then(data => {
        setOfficerlist(data)
      })
    // eslint-disable-next-line
  }, []);

  useEffect( () => {
    fetch(config.groupurl)
      .then(response => response.json())
      .then(data => {
        setGrouplist(data.data)
      })
    // eslint-disable-next-line
  }, []);

  useEffect( () => {
    fetch(config.eventsurl)
      .then(response => response.json())
      .then(data => {
        setEventslist(data)
      })
    // eslint-disable-next-line
  }, []);


  // From https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1

  const slugify = ( string ) => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w-]+/g, '') // Remove all non-word characters
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }


  const groupdetails = grouplist.find( obj => {
    return obj.id === config.domains[window.location.hostname]
  })

  console.log("before if")

  console.log("officerlist", officerlist)

  console.log("grouplist", grouplist)

  console.log("groupdetails", groupdetails)

  console.log("grouplist", grouplist)

  if ( officerlist && grouplist && groupdetails ) {

    console.log("in if")

    const group = {
      ...groupdetails,
      'slug': slugify(groupdetails.id),
    }

    const officers = officerlist.filter( obj => {
      return obj.group.toLowerCase().endsWith(group.group.toLowerCase())
    })

    return (
      <>
        <HelmetProvider>
          <Helmet>
            <html lang="en" />
            <title>{group.status} of {group.group}</title>
            <link rel="stylesheet" type="text/css" href={"/css/" + group.slug + ".css"}></link>
            <meta name="description" content={"Medieval recreation in " + group.region} />
          </Helmet>

          <Routes>
            <Route path="/" element={
              <Home group={group} officers={officers} grouplist={grouplist} />
            } />
            <Route path="/about" element={
              <About group={group} officers={officers} grouplist={grouplist} />
            } />
            <Route path="/contact" element={
              <Contact group={group} officers={officers} grouplist={grouplist} />
            } />
            <Route path="/contact" element={
              <Contact group={group} officers={officers} grouplist={grouplist} />
            } />
            <Route path="/events" element={
              <Events group={group} officers={officers} grouplist={grouplist} eventslist={eventslist} />
            } />
            <Route path="/events/:where/:when/:name" element={
              <EventDetail group={group} officers={officers} grouplist={grouplist} eventslist={eventslist} />
            } />
            <Route path="*" element={
              <NotFound group={group} officers={officers} grouplist={grouplist} />
            } />
          </Routes>

        </HelmetProvider>
        
      </>
    );
  } else {
    return (
      <Loading />
    )
  }

}

export default App;
