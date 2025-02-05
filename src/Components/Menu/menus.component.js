import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Menu = () => {
  const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "https://res.cloudinary.com/dwuhstwoy/image/upload/v1737977806/Logo_Group_ddg0ho.png",
          label: "Home",
          href: "/"
        },
        {
          icon: "https://res.cloudinary.com/dwuhstwoy/image/upload/v1737977806/Logo_Group_ddg0ho.png",
          label: "Parents",
          href: "/parents"
        },
        {
          icon: "https://res.cloudinary.com/dwuhstwoy/image/upload/v1737977806/Logo_Group_ddg0ho.png",
          label: "Student",
          href: "/student"
        },
        {
          icon: "https://res.cloudinary.com/dwuhstwoy/image/upload/v1737977806/Logo_Group_ddg0ho.png",
          label: "Teacher",
          href: "/Teacher"
        },        {
          icon: "https://res.cloudinary.com/dwuhstwoy/image/upload/v1737977806/Logo_Group_ddg0ho.png",
          label: "Classes",
          href: "/Class"
        },
      ]
    }
  ]
  
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i=>(
        <div className='flex flex-col gap-2' key={i.title}>
          <span className='text-black hidden lg:block justify-center align-middle text-center font-bold'>{i.title}</span>
          {i.items.map(item=>(
            <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start p-2 gap-2'>
              <Image src={item.icon} alt='icons' width={20} height={20} className='hidden lg:block'/>
              <span className='text-black hover:text-red-600'>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu;