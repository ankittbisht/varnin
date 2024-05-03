import React from 'react'
import TwoColumnComponent from '../../../Components/TwoColumnComponent'
import Aboutus from '../../../Components/Aboutus'
import CardComponent from '../../../Components/Cardcomponent'
import Choosesection from '../../../Components/Choosesection'
import Slider from '../../../Components/Slider'
import ContactComponent from '../Contact/contact'
import MyComponent from '../../../Components/Contactus'

function Homepage() {
  return (
    <section>
        <TwoColumnComponent/>
        <Aboutus/>
        <CardComponent/>
        <Choosesection/>
        <Slider/>
        <MyComponent/>
    </section>
  )
}

export default Homepage