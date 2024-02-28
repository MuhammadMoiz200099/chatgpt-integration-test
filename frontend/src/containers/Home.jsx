import React from 'react';
import Chats from '../components/chats/chats';
import Input from '../components/input/input';

const Home = () => {
    return (
        <div className='bg-[#2e2e2e] h-screen w-screen'>
            <Chats />
            <Input />
        </div>
    )
}

export default Home;