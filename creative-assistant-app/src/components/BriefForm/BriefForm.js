import React from 'react'
import Button from '../button/Button'
import './briefForm.css'

const BriefForm = ({captureVariables, saveData}) => {
  return (
    <form className='form-container' action="">
      <label htmlFor="briefContext">Write a parragraph describing your campaign</label>
      <textarea name="briefContext" id="briefContext" cols="30" rows="10" onChange={(e)=> captureVariables(e) } placeholder="The name of our company is [company name] and it specializes in [product industry]."></textarea>
      <Button align={{alignSelf: 'center'}} onClick={(e)=>{
        e.preventDefault()
        saveData()
      }}>
      Create Brief Template
      </Button> 
    </form>
  )
}

export default BriefForm