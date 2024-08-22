import '../styles/scss/main.scss';
import { Fragment } from 'react'
import Header from '../components/header';
import TabsDestination from '../components/tabDestination';
import TabsTechnology from '../components/tabTechnology';

function Technology() {
  return (
    <Fragment>
      {/* <Header/> */}
      <TabsTechnology />
    </Fragment>
  )
}

export default Technology
