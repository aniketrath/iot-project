import React from 'react'
import {Applications , CameraNLock} from './appliances/index'
import { Fingerprint } from './fingerprint';
import { FaceProfile } from './faceprofile';
import {Box, Text ,Button} from "../../components/root/index"
import { UserOctagon} from 'iconsax-react';

export const Homepage = () => {
  function manageSave(){}
  return (
    <Box className='min-h-screen bg-zinc-900 text-white px-4 py-6 gap-4'>
      <Box horizontal className='h-14 bg-zinc-600 rounded-xl py-2 px-2 gap-2 outline outline-slate-50'>
        <Text><UserOctagon size="40" color="#ffffff"/></Text>
        <Text className='text-xl mt-1.5 font-bold'>Welcome </Text>
      </Box>
      <FaceProfile/>
      <Fingerprint/>
      <CameraNLock/>
      <Applications/>
      <Box className='items-center justify-center my-2'>
      <Button onClick={manageSave}
      className='w-40 h-10 text-lg font-semibold bg-orange-600 outline outline-orange-400'>
        Save
      </Button>
      </Box>
    </Box>
  )
}
export default Homepage