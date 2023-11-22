import React from 'react'
import { Box ,Text } from '../../../components/root'
import { Slider} from './index'

const DeviceFAN = () => {
  return (
    <Box horizontal className='h-16 bg-zinc-600 rounded-xl outline outline-slate-300 p-4 '>
    <Box className='w-4/5 mr-10'>
      <Text className='text-xl font-semibold'>Fan</Text>
    </Box>
    <Box className='w-2/5 py-2.5'>
      <Slider/>
    </Box>
  </Box>
  )
}

export default DeviceFAN