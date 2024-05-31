import React from 'react'
import Image from 'next/image'

export default function Details() {
  return (
    <section>
        <div>
            <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                Air freight excellence: Swift, Secure, and Global
            </h3>

            <p className='text-lg mb-[10px] text-[#545454]'>
            Welcome to our Air Freight Services, where speed, reliability, and global reach converge to redefine the way you move goods across borders. At Cagron, we understand the urgency and precision required in today&apos;s fast-paced business environment, and our air freight solutions are designed to meet those demands with unparalleled efficiency.
            </p>

            <figure className='mt-5 mb-[60px]'>
                <Image 
                    src={'/taxi.jpg'}
                    alt=''
                    width={850}
                    height={470}
                    className='w-full h-auto'
                />
            </figure>

            <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                What is included in this service
            </h3>

            <p className='text-lg mb-[10px] text-[#545454]'>
                We deliver peace of mind, reliability, and a commitment to excellence. Trust us to elevate your air freight experience, providing the speed and efficiency your business deserves. Contact us today to embark on a journey of seamless air freight solutions.
            </p>
        </div>

        <div className='mt-5 mb-[60px] grid gap-[30px]'>
            <div>
                <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                    Express Shipping:
                </h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    For urgent shipments that demand immediate attention, our express air freight services guarantee the fastest transit times.
                </p>
            </div>
            
            <div>
                <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                    Custom Solutions:   
                </h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    We understand that every shipment is unique. Our team works closely with you to create custom air freight solutions tailored to your specific needs, ensuring a seamless and efficient logistics experience.
                </p>
            </div>
            
            <div>
                <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                    Advanced Tracking:   
                </h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    Keep tabs on your shipment in real-time with our advanced tracking systems. Monitor progress, estimate arrival times, and receive notifications, putting you in control every step of the way.
                </p>
            </div>
        </div>

        <div className='grid gap-5 md:grid-cols-2'>
            <figure className=''>
                <Image 
                    src={'/airport.jpg'}
                    alt=''
                    width={400}
                    height={430}
                    className='h-auto md:h-full md:'
                />
            </figure>
            
            <div>
                <h3 className="mb-[10px] text-[22px] md:text-[30px] font-semibold">
                    Why choose air freight?
                </h3>

                <p className='text-lg mb-[10px] text-[#545454]'>
                    Air freight is the fastest mode of transportation, ensuring your goods reach their destination in the shortest time.
                </p>

                <ul className='grid gap-[15px] mt-[30px]'>
                    <li className='flex gap-2'>
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
                    </li>

                    <li className='flex gap-2'>
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
                    </li>
                    <li className='flex gap-2'>
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
                    </li>
                    <li className='flex gap-2'>
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
                    </li>
                    <li className='flex gap-2'>
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
                    </li>
                </ul>
            </div>

        </div>
    </section>
  )
}
