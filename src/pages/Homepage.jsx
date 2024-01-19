import React from 'react'
import Hero from '../components/homepage/Hero'
import Feedbacksection from '../components/homepage/Feedbacksection'
import Layout from '../components/common/Layout'
import Appointment from '../components/common/Appointment'
import { useLocation } from 'react-router-dom'
const Homepage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get('city');

  return (
    <>
      <Layout>
     <Hero/>
     <Appointment city={city}/>
     <Feedbacksection/>
     </Layout>
     </>
  )
}

export default Homepage