import React from 'react'

const handleFormSubmit = (e) => {
    e.preventDefailt();
    console.log(e);
}

export const CustomForm = () => {
  return (
    <form
    className='todo'
    onSubmit={handleFormSubmit}
    >
    <div className='wrapper'>
        <h1>hello</h1>
    </div>
    </form>
    )
}
