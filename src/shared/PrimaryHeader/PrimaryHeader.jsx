import React from 'react';

const PrimaryHeader = ({heading,styleText,text}) => {
    return (
        <div>
            <div className='text-center lg:py-12'>
                <h2 className='text-6xl'>{heading} <span className='text-[#00C9C9]'>  {styleText} </span></h2>
                <p className=''> {text} </p>
            </div>
        </div>
    );
};

export default PrimaryHeader;