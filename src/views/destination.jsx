import '../styles/scss/main.scss';
import { Fragment } from 'react'
import Header from '../components/header';
import TabsDestination from '../components/tabDestination';

function Destination() {
  return (
    <Fragment>
        <div className='tittle-section'>
            <strong className='tittle-number'>01 </strong>
            <strong className='tittle-text'>PINK YOUR DESTINATION</strong>
        </div>
        <TabsDestination />
    </Fragment>
  )
}

export default Destination
