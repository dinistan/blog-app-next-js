import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {

  const[menu,setMenu] = useState("All");

  return (
    <div>
        <div className='flex justify-center gap-6 my-10 rounded-lg'>
            <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-lg':""}>All</button>
            <button onClick={()=>setMenu('Smart Phones')} className={menu==="Smart Phones"?'bg-black text-white py-1 px-4 rounded-lg':""} >Smart Phones</button>
            <button onClick={()=>setMenu('Laptop')} className={menu==="Laptop"?'bg-black text-white py-1 px-4 rounded-lg':""} >Laptop</button>
            <button onClick={()=>setMenu('Gadgets')} className={menu==="Gadgets"?'bg-black text-white py-1 px-4 rounded-lg':""} >Gadgets</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=> menu === "All"?true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
      
    </div>
  )
}

export default BlogList
