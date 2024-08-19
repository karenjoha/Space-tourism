import '../styles/scss/main.scss';
import { Fragment } from 'react'
import Header from '../components/header';
import TabsDestination from '../components/tabDestination';
import TabsHome from '../components/tabHome';

function Home() {
  return (
    <Fragment>
      {/* <div>
        <strong>01 </strong>
        <strong>Pick your destination</strong>
      </div> */}
      <TabsHome/>
    
    </Fragment>
  )
}

export default Home
