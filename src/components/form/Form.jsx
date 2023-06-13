import React, { useState } from 'react'
import { validation } from './validations'
import styled from './Form.module.css'

export default function Form() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        
    })

    function handleChange(e) {
        setErrors(validation({...userData, [e.target.name]:e.target.value}))
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(userData)
    }

  return (
    <div className={styled.divContainer}>
        <form className={styled.container} onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email:
                <input 
                    type="text" 
                    id='email'
                    value={userData.email}
                    name='email'
                    onChange={handleChange}
                    className={errors.email && styled.warning}
                />
            </label>
                {errors.email && (<p className={styled.danger}>{errors.email}</p>)}
            <label htmlFor="password">
                Password:
                <input 
                    type="password" 
                    id='password'
                    value={userData.password}
                    name='password'
                    onChange={handleChange}
                    className={errors.password && styled.warning}
                />
            </label>

            <button>Submit</button>
        </form>
    </div>
  )
}
