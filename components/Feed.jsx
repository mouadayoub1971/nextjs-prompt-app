"use client"
import { useState } from "react"
const Feed = () => {
  const [text, setText] = useState("")
  const handleSearchChange = () => {};
  return (
    
    <section>
      <form >
        <input type="text" value={text} onChange={handleSearchChange} />
      </form>
    </section>
  )
}
export default Feed