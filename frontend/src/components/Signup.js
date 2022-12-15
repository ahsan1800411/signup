import React, { useState } from 'react';
import {
  IconArrowLeft,
  IconDots,
  IconUserCircle,
  IconBuildingBank,
  IconBrandTelegram,
  IconBrandTwitter,
  IconAt,
  IconLock,
} from '@tabler/icons';
import InputField from './InputField';
import Text from './Text';

const Signup = () => {
  const [selected, setSelected] = useState('yes');
  const [category, setCategory] = useState('NFT');

  return (
    <>
      <div className='flex justify-between mx-24 mt-20'>
        <IconArrowLeft size={25} className='font-extrabold' />
        <IconDots size={25} className='font-extrabold' />
      </div>
      <div className='mt-6 h-screen leading-snug flex  justify-center'>
        <div className=''>
          <h1 className='font-bold text-3xl '>Register</h1>
          <p className='font-normal text-lg mt-2 '>
            Create an account to get started
          </p>
          <p className='font-normal text-lg mt-2 text-start'>
            Would you like to order cards for your team?
          </p>
          <div className='flex my-1 '>
            <Text
              onClick={() => setSelected('yes')}
              identity={selected}
              value='yes'
              txt='Yes'
            />
            <Text
              onClick={() => setSelected('no')}
              identity={selected}
              value='no'
              txt='No'
              moreClass='ml-3'
            />
          </div>
          {/*  */}
          <InputField
            Icon={IconUserCircle}
            labelText='First Name'
            placeholderText='Enter First Name'
          />
          <InputField
            Icon={IconUserCircle}
            labelText='Last Name(Optional)'
            placeholderText='Enter Last Name'
          />
          <p className='font-normal text-lg  text-start'>
            Which category best describes you?
          </p>
          <div className='flex mt-1'>
            <Text
              onClick={() => setCategory('NFT')}
              identity={category}
              value='NFT'
              txt='NFT'
            />
            <Text
              onClick={() => setCategory('DeFi')}
              identity={category}
              value='DeFi'
              txt='DeFi'
              moreClass='ml-3'
            />
            <Text
              onClick={() => setCategory('Investor')}
              identity={category}
              value='Investor'
              txt='Investor'
              moreClass='ml-3'
            />
            <Text
              onClick={() => setCategory('Dev')}
              identity={category}
              value='Dev'
              txt='Dev'
              moreClass='ml-3'
            />
            <Text
              onClick={() => setCategory('Other')}
              identity={category}
              value='Other'
              txt='Other'
              moreClass='ml-3'
            />
          </div>
          <InputField
            Icon={IconUserCircle}
            labelText='Enter Title'
            placeholderText='Enter title'
          />
          <InputField
            Icon={IconBuildingBank}
            labelText='Your Company'
            placeholderText='Enter your company'
          />
          <InputField
            Icon={IconBrandTelegram}
            labelText='Your Telegram username'
            placeholderText='@username'
          />
          <InputField
            Icon={IconBrandTwitter}
            labelText='Your Twitter username(optional)'
            placeholderText='@username'
          />
          <InputField
            Icon={IconAt}
            labelText='Your Email Address'
            placeholderText='Ex: abc@example.com'
          />
          <InputField Icon={IconLock} labelText='Your Password' />
          <InputField Icon={IconLock} labelText='Confirm Password' />

          <div className='flex items-start mb-6'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 '
                required
              />
            </div>
            <label for='remember' className='ml-2 text-sm font-medium '>
              I agree with the terms and conditions.
            </label>
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>
    </>
  );
};

export default Signup;
