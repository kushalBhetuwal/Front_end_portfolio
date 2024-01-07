import React from 'react'
import { useState, useRef } from 'react'
import {motion} from 'framer-motion'



const Contact = () => {
  const formRef = useRef();
  const[form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e)=>{}
  const handleSubmit = (e)=>{}
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"></div>
  )
}

export default Contact