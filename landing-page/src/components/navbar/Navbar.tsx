import React from 'react'
import Image from 'next/image'
import img from '../../assests/Woodnest.png'
import { Button } from '../ui/button'
import Link from 'next/link'


const Navbar = () => {
  const navitems = [
    { id: 1, name: 'Location', links: '/home' },
    { id: 2, name: 'Rooms', links: '/about' },
    { id: 3, name: 'Experiences', links: '/experience' },
    { id: 4, name: 'Contact', links: '/contact' },
  ];

  return (
    <div className="flex items-center justify-between h-[10ch] w-full px-28 shadow-sm bg-neutral-900">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-x-2">
        <Image src={img} alt="WoodNest" width={60} height={60} />
        <h1 className="text-xl text-neutral-200 font-bold">WoodNest</h1>
      </div>

      {/* Navigation + Button */}
      <div className="flex items-center gap-x-5">
        {navitems.map((item) => (
          <Link key={item.id} href={item.links} className="text-gray-100 hover:text-neutral-200 transition font-light">
            {item.name}
          </Link>
        ))}
        <Button variant="secondary">Book Now</Button>
      </div>
    </div>
  );
};

export default Navbar