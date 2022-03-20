import Icon from '@mdi/react'
import { mdiAtomVariant } from '@mdi/js'

const Loading = (props) => (
  <div className='waitaminute'>
      <br />
      <Icon path={mdiAtomVariant} size={2} className='rotate' /><br />
      Loading
  </div>
)

export default Loading
