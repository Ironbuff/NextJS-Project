

import { Button } from '@/components/ui/button';
import React from 'react';
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=' h-[calc(100vh-10ch)] w-full flex flex-row bg-gray-400'>
      <div
        className='flex flex-col justify-between  h-full w-[70%]'
      >
        <div>
          <h1 className='text-5xl font-semibold tracking-widest text-white'>
            Nature{"'"}s <br />
            <span className='font-extralight'>Perfect</span><br />
            Hideaways
          </h1>
        </div>
        <div className='w-full flex flex-row justify-between '>
          <small className='w-[40%] text-sm font-extralight '>
            Discover Handpicked Luxury Cabins in breathtaking locations. Unplug,unwind and reconnect with what matters most
          </small>
          <p>
            <h1 className='flex flex-row items-center justify-start gap-x-1'>
              <FaStar className='text-yellow-400' /><span>4.7</span>
            </h1>
            <small className='text-sm font-extralight'>from 1,800+ stays</small>
          </p>
        </div>
      </div>

      {/* End Part */}
      <div className='flex border-1 border-black px-20 justify-between items-end'>
      
      <div className='flex flex-col gap-y-2 border-1 px-5 py-5 w-fit h-fit  '>
        <div className='flex flex-row items-center justify-center gap-x-10 text-base text-neutral-200'>
          <h1 className='text-base text-start'>Evergreen <br /> Pine Family Lodge</h1>
          <FaPen size={30} className='px-2 py-2 text-neutral-400 bg-neutral-700 rounded-full' />
        </div>

        <div className='flex flex-row gap-x-1.5'>
          {/*Option Part  */}
          <div className='flex flex-row items-center text-sm text-neutral-300 bg-neutral-700 w-fit px-2 py-2 rounded-lg'>
            <FaCalendarAlt />
            <select >
              <option >
                Feb 11
              </option>
              <option>
                Feb 12
              </option>
            </select>
          </div>
          {/* due date */}
          <div className='flex flex-row text-sm items-center  text-neutral-300 bg-neutral-700 w-fit px-2 py-2 rounded-lg'>
            <FaCalendarAlt />
            <select >
              <option>
                Mar 11
              </option>
              <option>
                Mar 12
              </option>
            </select>
          </div>
        </div>

        {/* Date Slot */}
        <div className='flex flex-row gap-x-1.5'>
          {/* Check In */}
          <div className='text-neutral-200 px-2 py-2 bg-neutral-700 rounded-lg'>
            <small className='font-light'>
              Check-In
            </small>
            <h1 className='text-sm'>After 2:00 PM</h1>
          </div>
          {/* Check Out */}
          <div className='text-neutral-200 px-2 py-2 bg-neutral-700 rounded-lg'>
            <small className='font-light'>
              Check-out
            </small>
            <h1 className='text-sm'>After 12:00 PM</h1>
          </div>
        </div>


        {/* time Slot */}
        <div className='flex flex-row justify-between items-center text-neutral-200'>
          <h1 className='text-lg'>$359/<small>night</small></h1>
          <h5 className='text-sm font-light'>2-5 guests</h5>
        </div>

        <Button variant={'secondary'} className='w-full'>
          Reserve
        </Button>
      </div>

      </div>
    </div>
  );
};

export default Hero;
