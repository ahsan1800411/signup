import React from 'react';

const Text = ({ identity, value, onClick, txt, moreClass }) => {
  console.log({ identity, value });
  return (
    <p
      className={` ${
        identity === value && 'border border-gray-400 rounded-lg'
      } font-normal cursor-pointer text-lg mt-2 p-1.5 ${moreClass} ${
        identity !== value && 'text-gray-500 '
      } `}
      onClick={onClick}
    >
      {txt}
    </p>
  );
};

export default Text;
