import React from 'react'
import { Box ,Button,Text } from '../root'
import { BackSquare} from 'iconsax-react';

const Navigation = () => {
  return (
    <Box horizontal className='h-14 bg-zinc-600 rounded-xl py-2 px-2 gap-2 outline outline-slate-50'>
        <Button><BackSquare size="40" color="#ffffff"/></Button>
        <Text className='text-xl mt-1.5 font-bold'>Add Profile </Text>
    </Box>
  )
}

export default Navigation