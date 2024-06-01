'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//framer variants
import { fadeIn } from '@/framerVariants'

export default function Details() {
  return (
    <section>
        <div>
            <motion.h3 
                className="mb-[10px] text-[22px] md:text-[30px] font-semibold"
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                Air freight excellence: Swift, Secure, and Global
            </motion.h3>

            <motion.p 
                className='text-lg mb-[10px] text-[#545454]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
            Welcome to our Air Freight Services, where speed, reliability, and global reach converge to redefine the way you move goods across borders. At Cagron, we understand the urgency and precision required in today&apos;s fast-paced business environment, and our air freight solutions are designed to meet those demands with unparalleled efficiency.
            </motion.p>

            <motion.figure 
                className='mt-5 mb-[60px]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <Image 
                    src={'/taxi.jpg'}
                    alt=''
                    width={850}
                    height={470}
                    className='w-full h-auto'
                />
            </motion.figure>

            <motion.h3 
                className="mb-[10px] text-[22px] md:text-[30px] font-semibold"
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                What is included in this service
            </motion.h3>

            <motion.p 
                className='text-lg mb-[10px] text-[#545454]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                We deliver peace of mind, reliability, and a commitment to excellence. Trust us to elevate your air freight experience, providing the speed and efficiency your business deserves. Contact us today to embark on a journey of seamless air freight solutions.
            </motion.p>
        </div>

        <div className='mt-5 mb-[60px] grid gap-[30px]'>
            <motion.div
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                    Express Shipping:
                </h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    For urgent shipments that demand immediate attention, our express air freight services guarantee the fastest transit times.
                </p>
            </motion.div>
            
            <motion.div
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                    Custom Solutions:   
                </h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    We understand that every shipment is unique. Our team works closely with you to create custom air freight solutions tailored to your specific needs, ensuring a seamless and efficient logistics experience.
                </p>
            </motion.div>
            
            <motion.div
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                    Advanced Tracking:   
                </h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    Keep tabs on your shipment in real-time with our advanced tracking systems. Monitor progress, estimate arrival times, and receive notifications, putting you in control every step of the way.
                </p>
            </motion.div>
        </div>

        <div className='grid gap-5 md:grid-cols-2'>
            <motion.figure 
                className=''
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <Image 
                    src={'/airport.jpg'}
                    alt=''
                    width={400}
                    height={430}
                    className='h-auto md:h-full md:'
                />
            </motion.figure>
            
            <div>
                <motion.h3 
                    className="mb-[10px] text-[22px] md:text-[30px] font-semibold"
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    Why choose air freight?
                </motion.h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    Air freight is the fastest mode of transportation, ensuring your goods reach their destination in the shortest time.
                </p>

                <motion.ul className='grid gap-[15px] mt-[30px]'>
                    <motion.li className='flex gap-2'
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure>
                            <Image 
                                src={'/check.svg'}
                                alt=''
                                width={25}
                                height={25}
                                className=''
                            />
                        </figure>

                        <p className='text-lg mb-[10px] text-[#545454]'>
                            Reduced Inventory Holding Costs
                        </p>
                    </motion.li>

                    <motion.li className='flex gap-2'
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure>
                            <Image 
                                src={'/check.svg'}
                                alt=''
                                width={25}
                                height={25}
                                className=''
                            />
                        </figure>

                        <p className='text-lg mb-[10px] text-[#545454]'>
                            Cost-effective for Urgent Shipments
                        </p>
                    </motion.li>
                    <motion.li className='flex gap-2'
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure>
                            <Image 
                                src={'/check.svg'}
                                alt=''
                                width={25}
                                height={25}
                                className=''
                            />
                        </figure>

                        <p className='text-lg mb-[10px] text-[#545454]'>
                            Global Connectivity
                        </p>
                    </motion.li>
                    <motion.li className='flex gap-2'
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure>
                            <Image 
                                src={'/check.svg'}
                                alt=''
                                width={25}
                                height={25}
                                className=''
                            />
                        </figure>

                        <p className='text-lg mb-[10px] text-[#545454]'>
                            Time-Sensitive Solutions
                        </p>
                    </motion.li>
                    <motion.li className='flex gap-2'
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure>
                            <Image 
                                src={'/check.svg'}
                                alt=''
                                width={25}
                                height={25}
                                className=''
                            />
                        </figure>

                        <p className='text-lg mb-[10px] text-[#545454]'>
                            24/7 Customer Support
                        </p>
                    </motion.li>
                </motion.ul>
            </div>

        </div>
    </section>
  )
}
