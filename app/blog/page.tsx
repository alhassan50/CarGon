'use client'

import React, { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BLOGS } from '@/app/data/blog';
import BlogCard from '../components/home/BlogCard';

function BlogContent() {
    const searchParams = useSearchParams();
    const paramValue = searchParams.get('page');
    const router = useRouter();

    console.log(paramValue);

    let [pageNumber, setPageNumber] = useState((paramValue && paramValue !== '') ? parseInt(paramValue) : 1);

    console.log("(paramValue && paramValue !== '') ? parseInt(paramValue) : 1: ", (paramValue && paramValue !== '') ? parseInt(paramValue) : 1);

    console.log("pageNumber: ", pageNumber);

    const goToNextPage = () => {
        router.push(`/blog?page=${pageNumber + 1}`);
    }

    const goToPrevPage = () => {
        router.push(`/blog?page=${pageNumber - 1}`);
    }

    const renderBlogs = () => {
        return (
            [...BLOGS].slice((6 * pageNumber) - 6, (6 * pageNumber) > BLOGS.length ? BLOGS.length : (6 * pageNumber)).map(blog => (
                <li
                    key={blog.title}
                    className=''
                >
                    <BlogCard blog={blog} />
                </li>
            ))
        );
    }

    return (
        <main>
            <div className='mb-10 md:mb-[50px] sm-lg:mb-[70px] xl:mb-[100px]'>
                <h1 className='text-center my-[30] xsm:my-20 md:my-[50px] sm-lg:my-[90px]'>
                    Blog
                </h1>

                <section className=''>
                    <ul className='grid gap-[20px] xl:gap-[50px] md:grid-cols-2 lg:grid-cols-3'>
                        {renderBlogs()}
                    </ul>

                    <div className='mt-[60px] md:mt-[70px] sm-lg:mt-[80px] flex gap-5 justify-between items-center'>
                        {
                            pageNumber > 1 ?
                                <button className='bg-primaryBlue w-full max-w-[350px] py-3 px-[34px] text-[#f6f6f6]' onClick={goToPrevPage}>
                                    Previous
                                </button>
                                :
                                <div className='w-full max-w-[350px]'></div>
                        }

                        <p>{pageNumber}/2</p>

                        {
                            pageNumber < 2 ?
                                <button className='bg-primaryBlue w-full max-w-[350px] py-3 px-[34px] text-[#f6f6f6]' onClick={goToNextPage}>
                                    Next
                                </button>
                                :
                                <div className='w-full max-w-[350px]'></div>
                        }
                    </div>
                </section>
            </div>
        </main>
    );
}

export default function Blog() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogContent />
        </Suspense>
    );
}
