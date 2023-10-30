import { fetchUserPosts } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import React from 'react'
import ThreadCard from '../cards/ThreadCard'
interface Props {
    currentUserId:string,
    accountId:string,
    accountType:string

}
const ThreadsTab = async({currentUserId,accountId, accountType}:Props) => {
    let result = await fetchUserPosts(accountId)
    if(!result) redirect('/')
  
  return (
   <section className='mt-9 flex flex-col gap-10'>
    {result.threads.map((data:any)=>(
        <ThreadCard 
        key={data._id} 
        id={data._id} 
        currentUserId={currentUserId} 
        parentId={data.parentId} 
        content={data.text} 
        author={accountType==='User'?{name:result.name,image:result.image,id:result.id}:
    {name:data.author.name,image:data.author.image,id:data.author.id}} 
        community={data.community} 
        createdAt ={data.createdAt} 
        comments={data.children}/>
    ))}
   </section>
  )
}

export default ThreadsTab