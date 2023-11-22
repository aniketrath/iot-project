import React from 'react'
import { Box  } from '../../components/root'
import {Navigation} from '../../components/module/index'
import { AddForm } from './components/index'

const AddFace = () => {
  return (
    <Box className='min-h-screen bg-zinc-900 text-white px-4 py-6 gap-4'>
        <Navigation/>
        <AddForm/>
    </Box>
  )
}

export default AddFace