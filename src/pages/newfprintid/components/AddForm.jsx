import React, { useState } from 'react'
import { Box , Text ,Button } from '../../../components/root'
import TextInput from '../../../components/root/TextInput'

const AddForm = () => {
    const [username , SetUsername] = useState("");
    //Form Submit Function
    function handleSubmit(e){

    }
    //Add Face Profile Image
    function addProfile(){
      
    }
  return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <Box className='p-4'>   
            <Text className='my-2 text-xl font-semibold'>Profile Name :</Text>
            <TextInput value={username}
            onChange={(text) => SetUsername(text)}
            className="my-2 outline outline-slate-300 
            focus:text-zinc-100 focus:outline focus:outline-zinc-100" />
            </Box>
            <Box className='items-center justify-center gap-6 '>
            <Button onClick={addProfile}
            className='w-48 h-10 text-lg font-semibold bg-slate-600 outline outline-slate-400'>
                    Add FingerPrint ID
            </Button>
            <Button className='w-40 h-10 text-lg font-semibold bg-orange-600 outline outline-orange-400'>Save</Button>
            </Box>
        </form>
  )
}

export default AddForm