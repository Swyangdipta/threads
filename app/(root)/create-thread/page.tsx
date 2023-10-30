import React from 'react';
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from '@/lib/actions/user.actions';
import PostThreads from '@/components/forms/PostThreads';
import { ObjectId } from 'bson';
import { log } from 'console';
const Page = async () => {
    const user = await currentUser();
    if (!user) return null;
  
    // fetch organization list created by user
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
   
    let hehe= userInfo._id
    const serverObjectId = userInfo._id;
const clientObjectIdString = serverObjectId.toString();

  return (
  <>
    <h1 className='head-text'>Create Thread... </h1>
    <div className='mt-4'>
    <PostThreads userId={clientObjectIdString}/>
    </div>
   
    </>
  )
}

export default Page