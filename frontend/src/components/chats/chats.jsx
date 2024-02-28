import React from 'react';
import { RiQuestionAnswerFill } from "react-icons/ri";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { useSelector } from 'react-redux';


const Chats = () => {

    const chats = useSelector((state) => state.chats.chat);

    return (
        <div className='w-screen h-5/6 p-4'>
            <div className='bg-[#3f3f3f] h-full w-full rounded'>
                {chats && chats.length ? (
                    <div className='flex flex-col justify-start items-start gap-10 p-4 overflow-y-scroll max-h-full '>
                        {chats.map((item) => (
                            <div className='flex flex-col justify-start items-start gap-4'>
                                {/* question */}
                                <div className='flex justify-start items-start gap-4'>
                                    <div><RiQuestionAnswerFill size={20} /></div>
                                    <div className='text-[#999999] text-xl font-bold -mt-1'>{item.question}</div>
                                </div>
                                {/* answer */}
                                <div className='flex justify-start items-start gap-4'>
                                    <div><RiQuestionAnswerLine size={20} /></div>
                                    <div className='text-[#d3d3d3] text-lg -mt-1'>{item.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Chats;