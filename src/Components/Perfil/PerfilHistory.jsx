import { Card, CardBody, CardHeader } from '@material-tailwind/react'
import React from 'react'

const PerfilHistory = ({children}) => {
    return (
        <Card className='mx-5'>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}

export default PerfilHistory
