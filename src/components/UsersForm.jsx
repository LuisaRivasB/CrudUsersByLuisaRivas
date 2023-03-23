import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defalultValues from '../utils/defaultValues'

const UsersForm = ({ createNewUser, updateInfo, updateUserById, handleClose, setupdateInfo  }) => {

    const{ reset, register, handleSubmit } = useForm()

    useEffect(() =>{
        if(updateInfo) {
            reset(updateInfo) 
        }
    }, [updateInfo])

    const submit = data => {
        if(updateInfo) {
            // update
            updateUserById(updateInfo.id, data)
        } else {
            // create
            createNewUser(data)
        }
        handleClose()
        reset(defalultValues)
    }

    const handleCancel = () => {
        reset(defalultValues)
        setupdateInfo()
        handleClose()
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <h2 className='form-title'>Form User</h2>
        <div onClick={handleCancel} className='form-close'>X </div>
        <div className='form-container'>
            <label className='form-label' htmlFor="email">Email </label>
            <input className='form-input' {...register('email')} type="email" id="email" />
        </div>
        <div className='form-container'>
            <label className='form-label' htmlFor="password">Password </label>
            <input className='form-input' {...register('password')} type="password" id="password" />
        </div>
        <div className='form-container'>
            <label className='form-label' htmlFor="first_name">Fisrt Name </label>
            <input className='form-input' {...register('first_name')} type="text" id="first_name" />
        </div>
        <div className='form-container'>
            <label className='form-label' htmlFor="last_name">Last Name </label>
            <input className='form-input' {...register('last_name')} type="text" id="last_name" />
        </div>
        <div className='form-container'>
            <label className='form-label' htmlFor="birthday">Birthday </label>
            <input className='form-input' {...register('birthday')} type="date" id="birthday" />
        </div>
        <button className='form-btn'>{ updateInfo ? 'Update' : 'Create' }</button>
    </form>
  )
}

export default UsersForm