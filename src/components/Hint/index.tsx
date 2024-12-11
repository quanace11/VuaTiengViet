import React, { ReactNode } from 'react';

interface IProps {
  className: string;
  children: ReactNode;
}
const Hint = ({ className, children }: IProps) => {
  return (
    <div className={`absolute  ${className} `}>
      <div className=" relative  bg-lime-300 border-4 border-white rounded-3xl ">
        {' '}
        <p className=" text-white text-2xl text-nowrap p-4">{children}</p>
        <div className="absolute bottom-[-11px] left-12 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lime-300 border-r-4 border-b-4 border-white"></div>
      </div>
    </div>
  );
};

export default Hint;
