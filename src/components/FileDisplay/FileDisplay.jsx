import React, { use, useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FileDisplay = () => {


    const {food_list } = useContext(StoreContext)
  return (
    <div></div>
  )
}

export default FileDisplay