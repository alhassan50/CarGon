'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion'

import { BLOGS } from '@/app/data/blog';
import BlogCard from '../components/home/BlogCard';

//framer variants
import { fadeIn, scaleCenter } from '@/framerVariants'

/* import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs page"
}; */

function BlogContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const paramValue = searchParams.get('page');

    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        if (paramValue && paramValue !== '') {
            setPageNumber(parseInt(paramValue));
        }
    }, [paramValue]);

    const goToNextPage = () => {
        router.push(`/blog?page=${pageNumber + 1}`);
    };

    const goToPrevPage = () => {
        router.push(`/blog?page=${pageNumber - 1}`);
    };

    const renderBlogs = () => {
        const startIndex = (pageNumber - 1) * 6;
        const endIndex = Math.min(pageNumber * 6, BLOGS.length);
        return BLOGS.slice(startIndex, endIndex).map((blog) => (
            <li key={blog.title} className='group cursor-pointer'>
                <BlogCard blog={blog} />
            </li>
        ));
    };

    return (
        <main>
            <div className='mb-10 md:mb-[50px] sm-lg:mb-[70px] xl:mb-[100px]'>
                <motion.h1 
                    className='text-center my-[30px] xsm:my-20 md:my-[50px] sm-lg:my-[90px]'
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    Blog
                </motion.h1>
                <section className=''>
                    <ul className='grid gap-[20px] md:grid-cols-2 lg:grid-cols-3'>
                        {renderBlogs()}
                    </ul>
                    <div className='mt-[60px] md:mt-[70px] sm-lg:mt-[80px] flex gap-5 justify-between items-center'>
                        {pageNumber > 1 ? (
                            <motion.div
                                variants={fadeIn("right", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                className='w-full xsm:max-w-[350px]'
                            >
                                <button
                                    className='bg-primaryBlue w-full py-3 px-[34px] text-[#f6f6f6]'
                                    onClick={goToPrevPage}
                                >
                                    Previous
                                </button>
                            </motion.div>
                        ) : (
                            <div className='w-full max-w-[350px]'></div>
                        )}
                        <motion.p
                            variants={scaleCenter(0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                        >
                            {pageNumber}/2
                        </motion.p>
                        {pageNumber < 2 ? (
                            <motion.div
                                variants={fadeIn("right", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                className='w-full xsm:max-w-[350px]'
                            >
                                <button
                                    className='bg-primaryBlue w-full py-3 px-[34px] text-[#f6f6f6]'
                                    onClick={goToNextPage}
                                >
                                    Next
                                </button>
                            </motion.div>
                        ) : (
                            <div className='w-full max-w-[350px]'></div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default function Blog() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BlogContent />
        </React.Suspense>
    );
}
