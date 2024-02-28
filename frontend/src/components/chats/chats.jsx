import React from 'react';
import { RiQuestionAnswerFill } from "react-icons/ri";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { useSelector } from 'react-redux';


const Chats = () => {

    const chats = useSelector((state) => state.chats.chat);

    const example = [
        {
            id: 1,
            question: "loream kbasbd askdbakjsbdk jabsjkdbajsd jbjasd ",
            answer: "k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd"
        },
        {
            id: 2,
            question: "loream kbasbd askdbakjsbdk jabsjkdbajsd jbjasd ",
            answer: "k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd"
        },
        {
            id: 3,
            question: "loream kbasbd askdbakjsbdk jabsjkdbajsd jbjasd ",
            answer: "k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd"
        },
        {
            id: 4,
            question: "loream kbasbd askdbakjsbdk jabsjkdbajsd jbjasd ",
            answer: "k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd k;nasdnknaksdnas;dn;ans;kd;aksdn ;kanskdnk;asnd asd as d as d as da sd asd"
        },
    ]


    return (
        <div className='w-screen h-5/6 p-4'>
            <div className='bg-[#3f3f3f] h-full w-full rounded'>
                {example && example.length ? (
                    <div className='flex flex-col justify-start items-start gap-10 p-4 overflow-y-scroll max-h-full '>
                        {example.map((item) => (
                            <div className='flex flex-col justify-start items-start gap-4'>
                                {/* question */}
                                <div className='flex justify-start items-start gap-4'>
                                    <div><RiQuestionAnswerFill size={20} /></div>
                                    <div>{item.question}</div>
                                </div>
                                {/* answer */}
                                <div className='flex justify-start items-start gap-4'>
                                    <div><RiQuestionAnswerLine size={20} /></div>
                                    <div className='text-[#9d9d9d]'>{item.answer}</div>
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