import Link from 'next/link';
import Menu from '../../Components/Menu/menus.component';
import Navbar from '../../Components/Navbar/Navbar';
import Image from 'next/image';

export default function DashboardLayout({children}) {
    return (
      <div className="h-screen flex">
        {/* Left Section*/}
          <div className="w-[14%] md:w-[8%] lg:w-[16%]">
            <Link 
              href="/"
              className='flex items-center justify-center lg:justify-start gap-2 text-black p-2 hover:text-red-600'
            >
              <Image src="https://res.cloudinary.com/dwuhstwoy/image/upload/v1737977806/Logo_Group_ddg0ho.png" width={30} height={30} alt='logo'/>
              <div className='hidden lg:block'>
                Encoders Dashboard
              </div>
            </Link>
            {/* Menu Section */}
            <Menu />
           </div>

          {/* Right Section */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-red-200 overflow-scroll">
            <Navbar/>
            {children}
          </div>
      </div>
    );
  }