import React from 'react'
import { Box, Text ,Button } from '../../../components/root'
import {PopupList} from './index'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const module = () => {
  return (
    <Box className='gap-4'>
        <Text className='text-xl font-bold'>Fingerprint :</Text>
        <Box className='gap-4 items-center justify-center'>
          
        <Popup className='bg-transparent'
         trigger=
                {<Button className='bg-slate-600 w-40 h-10 text-lg font-semibold outline outline-slate-500'>Saved Profiles</Button>} 
                modal nested>
                {
                    close => (
                        <Box className='modal bg-transparent rounded-xl'>
                          <Button onClick={() => close()} >
                          <PopupList />
                          </Button>
                        </Box>
                    )
                }
            </Popup>
          <Button className='bg-slate-600 w-40 h-10 text-lg font-semibold outline outline-slate-500'>Add New Profile</Button>
        </Box>
    </Box>
  )
}

export default module