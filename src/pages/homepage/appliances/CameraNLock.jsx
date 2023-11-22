import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box ,Text , Button} from '../../../components/root'

const CameraNLock = () => {
    var status = 'locked'
    const navigate = useNavigate();
  return (
    <Box className='gap-4 my-2'>
        <Text className='text-xl font-semibold'>Lock and Camera :</Text>
      <Box horizontal className='h-16 bg-zinc-600 rounded-xl outline outline-slate-300 p-4 gap-4 text-xl font-semibold'>
        <Text>Lock Status :</Text>
        <Text className={status === 'unlocked' ? 'text-green-500':'text-red-500'}>
          {status === "unlocked" ? "Unlocked" : "Locked"}
        </Text>
      </Box>
      <Box className='items-center justify-center'>
      <Button onClick={()=>navigate('/')}
          className='bg-slate-600 w-40 h-10 text-lg font-semibold outline outline-slate-500'>View Live Feed !</Button>
      </Box>
      
    </Box>
  )
}

export default CameraNLock