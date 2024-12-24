"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession();
  const [toggleDropDown, setToggleDropDown] = useState(false)
 const isUserLoginIn = true
 const [providers, setProvider] = useState(null)
 useEffect(() => {
  const setUpProviders = async () => {
   const response = await getProviders();
   setProvider(response)
  } 
  setUpProviders()
 }, [])
  return (
   <nav className="flex-between w-full mb-16 pt-3">
    <Link href="/" className="flex gap-2 flex-center">
     <Image src="/assets/images/book.svg" width={50} height={50} className="object-contain" />
     <p className="logo_text">StorySphere</p>
    </Link>

    {/* Desktop Navigation */}
    <div className="sm:flex hidden">
     {session?.user ? (
      <div className="flex gap-3 md:gap-5">
       <Link href="/create-prompt" className="black_btn">
        Create Post
       </Link>
       <button onClick={signOut} className="outline_btn">
        SignOut
       </button>
       <Link href="/profile">
        <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="profile" />
       </Link>
      </div>
     ) : (
      <>
       {providers &&
        Object.values(providers).map((provider) => (
         <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
          Sign In
         </button>
        ))}
      </>
     )}
    </div>

    {/** mobile Navigation */}
    <div className="sm:hidden flex relative">
     {session?.user ? (
      <div className="flex">
       <Image
        src={session?.user.image}
        width={37}
        height={37}
        className="rounded-full"
        alt="profile"
        onClick={() => setToggleDropDown((prev) => !prev)}
       />
       {toggleDropDown && (
        <div className="dropdown">
         <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropDown(false)}>
          My profile
         </Link>
         <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropDown(false)}>
          Create Prompt
         </Link>
         <button
          type="button"
          className="black_btn mt-5 w-full "
          onClick={() => {
           setToggleDropDown(false);
           signOut();
          }}
         >
          Sign Out
         </button>
        </div>
       )}
      </div>
     ) : (
      <>
       {providers &&
        Object.values(providers).map((provider) => (
         <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
          Sign In
         </button>
        ))}
      </>
     )}
    </div>
   </nav>
  );
}
export default Nav