"use client"

import Profile from "@components/Profile"
import { useSession } from "@node_modules/next-auth/react"
import { useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

const MyProfile = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
   const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
     const data = await response.json();
     console.log("this is data up")
     console.log(data);
     console.log('this is data down');
    setAllPosts(data);
   };
   
   if(session?.user.id) fetchPosts();
  }, []);
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
   }
  const handleDelete = async () => { }
  console.log(allPosts);
  return (
    <Profile name='My' desc='Welcome to you personal profile where you have all the prompt that you create ' data = {allPosts} handleEdit={handleEdit} handleDelete={handleDelete} />
  )
}
export default MyProfile