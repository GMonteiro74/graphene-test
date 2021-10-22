import React from 'react'

export default function Form() {
    return (
        <div style={{ zIndex: '-2'}} className='bg-rose' id='contact'>
        <img className='form-detail' src='./images/detail02.png' alt='page detail' />
        
        <div className='form-container'>
        <div className='form-text'>
        <div style={{ width: '60%', textAlign: 'center'}} className='uppercase'>
            <h1 className='sub-title'>Collaborate</h1>
            <div className='line-behind'> 
            <h1 className='title'>with US</h1>
            <hr className='white-line' />
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
        <form className='uppercase'>
        <div>
            <label name='name'>Name</label>
            <input type='text' placeholder='Name' name='name'/>

            <label name='phone'>Phone</label>
            <input type='text' placeholder='Phone' name='phone' />

            <label>experience</label>
            <select>
            <option value='Select'>Select</option>
            </select>
        </div>
        <div>
            <label name='surname'>Surname</label>
            <input type='text' placeholder='Surname' name='surname'/>

            <label name='email'>Email address</label>
            <input type='email' placeholder='Email' name='email' />

            <label>WHERE DID YOU HEAR ABOUT US?</label>
            <select>
            <option value='Select'>Select</option>
            </select>
            <button className='uppercase' type='submit'>Send</button>
        </div>

        </form>

        </div>
            
        </div>
    )
}
