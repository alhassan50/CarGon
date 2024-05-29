'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'

import {BLOGS} from '@/app/data/blog'
import BlogCard from '../components/home/BlogCard'
import { useSearchParams } from 'next/navigation'


export default function Blog() {
    const searchParams = useSearchParams();

    let [pageNumber, setPageNumber] = useState(1)

    const goToNextPage = () => {
        setPageNumber(prevPage => (prevPage++))
    }
   
    const goToPrevPage = () => {
        console.log('prev')
        setPageNumber(prevPage => (prevPage--))
    }

    useEffect(()=>{
        console.log(pageNumber)
    }, [pageNumber])

    const renderBlogs = () =>{
        const paramValue = searchParams.get('page')

        if (paramValue && paramValue !== '') pageNumber = parseInt(paramValue)        

        return (
            [...BLOGS].slice((6*pageNumber)-6, (6*pageNumber) > BLOGS.length ? BLOGS.length : (6*pageNumber)).map(blog => (
                <li
                    key={blog.title} 
                    className=''
                >
                    <BlogCard blog={blog} />
                </li>
            ))
        )
    }

  return (

    <main>
        <div className=' mb-10 md:mb-[50px] sm-lg:mb-[70px] xl:mb-[100px]'>
            <h1 className='text-center my-[30] xsm:my-20 md:my-[50px] sm-lg:my-[90px]'>
                Blog
            </h1>

            <section className=''>
                <ul className='grid gap-[20px] xl:gap-[50px] md:grid-cols-2 lg:grid-cols-3'>
                    {/* {renderBlogs()} */}
                </ul>

                <div className='mt-[60px] md:mt-[70px] sm-lg:mt-[80px] flex justify-between items-center'>
                    <button className='bg-primaryBlue w-full max-w-[350px] py-3 px-[34px] text-[#f6f6f6]' onClick={goToPrevPage}>
                        Previous
                    </button>

                    <p>1/2</p>
                    
                    <button className='bg-primaryBlue w-full max-w-[350px] py-3 px-[34px] text-[#f6f6f6]' onClick={goToNextPage}>
                        Next
                    </button>
                </div>
            </section>
        </div>
    </main>
  )
}
