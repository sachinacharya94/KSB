import React from 'react';
import Image from 'next/image';
import one from "../../public/img.jpg"

const index = () => {
  return (
    <>
      <div className='h-[100px] w-[100px]'>
        <Image
          src={one}
          width={1000}
          height={100}
          alt="Picture of the author"
          layout="responsive"
        />

        <div>index</div>
      </div>
    </>
  );
}

export default index;