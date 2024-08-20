import '../styles/scss/main.scss';
import { Fragment } from 'react'
import Header from '../components/header';
import TabsDestination from '../components/tabDestination';
import TabsTechnology from '../components/tabTechnology';

function Technology() {
  return (
    <Fragment>
      {/* <div>
        <strong>01 </strong>
        <strong>Pick your destination</strong>
      </div> */}
      <TabsTechnology />
    </Fragment>
  )
}

export default Technology
