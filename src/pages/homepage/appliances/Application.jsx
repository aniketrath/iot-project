import React from 'react'
import { Box , Text } from '../../../components/root'
import { LED , FAN } from '.'

const Application = () => {
  return (
    <Box className='gap-4'>
        <Text className='text-xl font-semibold'>Applications</Text>
        <Box className='gap-4'>
        {Array(3).fill(<LED />)}
        <FAN/>
        </Box>

    </Box>
  )
}

export default Application