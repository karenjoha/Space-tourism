import '../styles/scss/main.scss';
import { Fragment } from 'react'
import Header from '../components/header';
import TabsCrew from '../components/tabCrew';

function Crew() {
  return (
    <Fragment>
        <div className='tittle-section'>
            <strong className='tittle-number'>02 </strong>
            <strong className='tittle-text'>Meet your crew</strong>
        </div>
        <TabsCrew />
    </Fragment>
  )
}

export default Crew
