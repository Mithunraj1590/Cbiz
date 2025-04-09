
import AboutSimplify from '@/widgets/AboutSimplify'
import AboutTeam from '@/widgets/AboutTeam'
import HomeContact from '@/widgets/HomeContact'
import OurCustomers from '@/widgets/OurCustomers'
import OurPlatform from '@/widgets/OurPlatform'
import PageBanner from '@/widgets/PageBanner'
import WhoWeAre from '@/widgets/WhoWeAre'
import React from 'react'

const AboutPage = () => {
  return (
    <main className='about'>
      <PageBanner title="About us" banner="/images/about.png"></PageBanner>
      <AboutSimplify title="Assisting Hassle-free Business Consultancy Services" description="The Paris united group's voyage started in the 1995 with a modest goal in mind: to give the people of Qatar access to the best perishable and nonperishable products available. At every stage of our journey, we have been propelled forward by our commitment to excellence and exceptional customer service. We plan to continue providing first-rate service to our clientele in the coming years." imageSrc="/images/about.png"/>
      <OurPlatform/>
      <WhoWeAre />
      <AboutTeam />
      <OurCustomers />
      <HomeContact />
    </main>
  )
}

export default AboutPage