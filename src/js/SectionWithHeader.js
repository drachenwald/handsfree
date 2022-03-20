

const SectionWithHeader = ({title, item}) => {

  const text = item
    .replace(/\n+/g, '\n') // Replace multiple \n with single
    .replace(/^\n/, '') // Trim \n from start of text
    .replace(/\n$/, '') // Trim \n from end of text
    .split('\n')
    .reduce((total, line, index) => [total, <br key={index}/>, line])

  return (
    item
    ?
      <>
        { title ? <h4>{title}</h4> : null }
        <p>{text}</p>
      </>
    :
      null
  )
}

export default SectionWithHeader
