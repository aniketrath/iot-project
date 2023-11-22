import React from 'react'

const Slider = () => {
  return (
    <input
    type="range"
    class=" h-6 w-20 cursor-pointer bg-neutral-200 dark:bg-neutral-600"
    min="0"
    max="2"
    step="1"
    id="customRange3" />
  )
}

export default Slider