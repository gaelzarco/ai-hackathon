import React from 'react'
import Button from '../button/Button'
import './briefForm.css'

const BriefForm = ({captureVariables, saveData}) => {
  return (
    <form className='form-container' action="">
      <label htmlFor="briefContext">Write a paragraph describing your campaign</label>
      <textarea name="briefContext" id="briefContext" cols="30" rows="10" onChange={(e)=> captureVariables(e) }></textarea>
      <Button saveData={saveData} text='Create Brief Template'/>
    </form>
  )
}

export default BriefForm