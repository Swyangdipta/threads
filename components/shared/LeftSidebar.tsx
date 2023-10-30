"use client"

import React from 'react'
import Link from "next/link";
import { OrganizationSwitcher, SignedIn, SignOutButton ,useAuth} from "@clerk/nextjs";
import Image from "next/image";
import {sidebarLinks} from '../../constants/index';
import {usePathname, useRouter} from "next/navigation"
const LeftSidebar = () => {
    const router=useRouter();
    const pathname= usePathname();
    const {userId}= useAuth();
  return (
    <section className='custom-scrollbar leftsidebar'>
        <div className='flex w-full flex-1 flex-col gap-6 px-6'>
      
{sidebarLinks.map((data)=>{

const isActive=(pathname.includes(data.route)&&data.route.length>1||pathname===data.route)
if(data.route=='/profile') data.route=`${data.route}/${userId}`

return(
   <Link href={data.route} 
   className={`leftsidebar_link ${isActive? 'bg-primary-500':''}`}
   key={data.label}
   >
<Image 
src={data.imgURL}
alt={data.label}
width={24}
height={24}
/>
<p className='text-light-1 max-lg:hidden'>{data.label}</p>
   </Link>

)}
)}


        </div>
        <div className='mt-10 px-6'>
        <SignedIn>
                <SignOutButton signOutCallback={()=>router.push('/sign-in')}>
                    <div className='flex cursor-pointer gap-4 p-4'>
<Image 
src='/assets/logout.svg'
alt='logout'
width={24}
height={24}
/>
<p className='text-light-2 max-lg:hidden'>Logout</p>

{/* <OrganizationSwitcher appearance={{
    elements:{
        organizationSwitcherTrigger:"py-2 px-4"
    }
}}/> */}
                    </div>
                </SignOutButton>
            </SignedIn>
        </div>

    </section>
  )
}

export default LeftSidebar