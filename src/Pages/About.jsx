import React from 'react'
import Navs from '../Components/Navs/Navs'
import PerfilCard from '../Components/Perfil/PerfilCard'
import PerfilHistory from '../Components/Perfil/PerfilHistory'
import PerfilTitle from '../Components/Perfil/PerfilTitle'


const About = () => {
  return (
    <div className='bg-gray-100 h-full'>
      <div className='bg-black'>
        <Navs />
      </div>
      <div className='flex items-center justify-center h-1/3'>
        <PerfilTitle/>
      </div>
      <div className='flex w-full justify-center'>
        <div className='w-1/4'>
          <PerfilCard />
        </div>
        <div className='flex w-1/3 mt-60 h-1/2'>
        <PerfilHistory>
            <p className='font-bold text-3xl'>My Short Story</p>
            <br />   
            <p>Christopher Coronado is a young professional at the age of 29. He successfully graduated from the University of Costa Rica with a degree in Systems Engineering with a specialization in Business Informatics.</p>
          </PerfilHistory>
        </div>
        <div className='flex w-1/3 mt-60'>
          <PerfilHistory>
            <p className='font-bold text-3xl'>My Long Story</p>
            <br />
            <p>Hello, I'm Christopher Coronado. I was born and raised in a small town called "El Jobo." This place is a small fishing village, where I learned the trade of fishing at the age of 8.</p>
            <br />
            <p>At the age of 6, I began my academic education at a school called "Gil Tablada Corea," which had a capacity for 40 students. Technology had always fascinated me since my childhood. The first mobile phones I saw had a green screen with black letters and had an antenna for making calls.</p>
            <br />
            <p>At the age of 11, I managed to get my first gaming console, the "PlayStation one." I remember playing for hours each day. I loved games like Winning Eleven or Silent Hill. From that moment, I decided that my life had to be related to technology.</p>
            <br />
            <p>At the age of 19, I started my university journey at the University of Costa Rica. During this phase of my life, I had doubts about my future and the study of computer science. However, as the years went by, I fell in love with web pages.</p>
            <br />
            <p>Currently, I have 5 years of experience in web application development and 1 year in monitoring using tools like Dynatrace, Splunk, and Icinga.</p>
          </PerfilHistory>
        </div>
      </div>
    </div>
  )
}

export default About
