"use client"

import { sidebarLinks } from '@/constants'
import Link from "next/link";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import React from 'react'
import {usePathname, useRouter} from "next/navigation"
const Bottombar = () => {
    const router=useRouter();
    const pathname= usePathname()
  return (
   <section className='bottombar'>
    <div className='bottombar_container'>
    {sidebarLinks.map((data)=>{

const isActive=(pathname.includes(data.route)&&data.route.length>1||pathname===data.route)
return(
   <Link href={data.route} 
   className={`bottombar_link ${isActive? 'bg-primary-500':''}`}
   key={data.label}
   >
<Image 
src={data.imgURL}
alt={data.label}
width={24}
height={24}
/>
<p className='text-subtle-medium text-light-1 max-sm:hidden'>{data.label.split(/\s+./)[0]}</p>
   </Link>

)}
)}
    </div>

   </section>
  )
}

export default Bottombar 