import '../styles/scss/main.scss';
import { Fragment } from 'react'
import Header from '../components/header';
import TabsComponent from '../components/tab';

function Destination() {
  return (
    <Fragment>
        <div>
            <strong>01 </strong>
            <strong>Pick your destination</strong>
        </div>
        <TabsComponent />
    </Fragment>
  )
}

export default Destination
