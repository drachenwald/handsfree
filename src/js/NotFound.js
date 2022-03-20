import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Layout from './Layout'

const NotFound = (props) => {
  return (
    <Layout title="Page not found" {...props}>
      <LinkContainer to="/">
        <Button>Go to home page</Button>
      </LinkContainer>
    </Layout>
  )
}

export default NotFound;
