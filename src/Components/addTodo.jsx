import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
    const [text, settext] = useState('');

    const handletextChange = (event) => {
        settext(event.target.value);
        console.log(text);
    };

    const handleAddClick = () => {
        if (text === "") { alert("Todo can't be empty"); return; }

        onAdd(text);
        settext(''); // Clear input after adding
    };

    return (
        <div className='add'>
            <input
                type="text"
                placeholder='Enter Your next ToDo'
                value={text}
                onChange={handletextChange}
            />
            <button type='button' className='dltbtn' onClick={handleAddClick}>Add</button>
            {/* <button className='dltbtn' >Add</button> */}
        </div>
    );
}
