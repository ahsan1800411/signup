import React from 'react';

const InputField = ({ labelText, placeholderText, Icon, value }) => {
  return (
    <>
      <label
        htmlFor='input-group-1'
        className='block my-2 text-sm font-medium  '
      >
        {labelText}
      </label>
      <div className='relative mb-6'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  '>
          <Icon className='text-center mt-0.5' />
        </div>
        <input
          type='text'
          className='bg-gray-50 border w-[480px] border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  '
          placeholder={placeholderText}
        />
      </div>
    </>
  );
};

export default InputField;
