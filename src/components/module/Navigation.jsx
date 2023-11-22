import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box ,Button,Text } from '../root'
import { BackSquare} from 'iconsax-react';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Box horizontal className='h-14 bg-zinc-600 rounded-xl py-2 px-2 gap-2 outline outline-slate-50'>
        <Button onClick={()=>navigate('/')}><BackSquare size="40" color="#ffffff"/></Button>
        <Text className='text-xl mt-1.5 font-bold'>Add Profile </Text>
    </Box>
  )
}

export default Navigation