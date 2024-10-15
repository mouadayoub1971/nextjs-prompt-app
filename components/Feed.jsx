"use client"
import { useState } from "react"
import { useEffect } from "react"
import PromptCard from "./PromptCard";
const AllPromptCard = ( {data, handleTagClick} ) => {
 return (
  <div className="mt-16 prompt_layout">
   {data.map((post) => (
    <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
   ))}
  </div>
 );
};
const Feed = () => {
  
  const [text, setText] = useState("")
  const [allPosts, setAllPosts] = useState([])
  const handleSearchChange = () => { };

  useEffect( () => {
    const fetchPosts =async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      console.log(data)
      setAllPosts(data)
    }
    fetchPosts()
  }, [])
  const handleTagClick = () => {}
  return (
   <section className="feed">
    <form className=" relative  w-full text-center">
     <input
      type="text"
      value={text}
      onChange={handleSearchChange}
      placeholder="Search for tag or username "
      className="search_input peer"
     />
      </form>
      <AllPromptCard data={allPosts} handleTagClick={handleTagClick} />
   </section>
  );
}
export default Feed