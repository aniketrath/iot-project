import React from 'react'
import { Box ,Text } from '../../../components/root'
import { Toggle} from './index'

const device = () => {
  return (
    <Box horizontal className='h-16 bg-zinc-600 rounded-xl outline outline-slate-300 p-4 '>
      <Box className='w-3/5 mr-10'>
        <Text className='text-xl font-semibold'>Led</Text>
      </Box>
      <Box className='w-1/5 py-0.5'>
        <Toggle/>
      </Box>
    </Box>
  )
}

export default device