import { Card, CardBody, CardHeader } from '@material-tailwind/react'
import React from 'react'

const PerfilCard = () => {
  return (
    <Card className='mt-20 h-1/3' style={{minHeight:'285px'}}>
      <CardHeader>
        <img src="https://images.pexels.com/photos/3483771/pexels-photo-3483771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </CardHeader>
      <CardBody>
        <p className='font-bold text-2xl'>Christopher Coronado Duarte</p>
      </CardBody>
    </Card>
  )
}

export default PerfilCard
