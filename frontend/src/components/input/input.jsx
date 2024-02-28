import React, { useState } from 'react';
import { MdSend } from "react-icons/md";
import { useDispatch } from "react-redux";
import { askGPT } from '../../redux/slices/chat.slice';
import { toast } from 'react-toastify';

const Input = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const onSend = () => {
        if(!text || text.length <= 3) {
            toast.error("Kindly give some text to input.");
            return;
        }

        dispatch(askGPT({
            data: {
                msg: text
            }
        }))
        setText('')
    }

    return (
        <div className='w-screen h-1/6 p-4 flex items-center relative'>
            <input className='bg-[#3f3f3f] shadow-2xl outline-none ring-0 border-none rounded-xl px-6 py-3 text-lg text-white w-full' placeholder='Type here ...' value={text} onChange={handleOnChange} />
            <div className='absolute right-10 cursor-pointer hover:bg-[#717171] p-1.5 rounded'>
                <MdSend className='text-[#939393]' size={24} onClick={onSend} />
            </div>
        </div>
    )
}

export default Input;