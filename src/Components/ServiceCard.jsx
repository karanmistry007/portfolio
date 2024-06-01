import React from 'react'

const ServiceCard = ({ Link,SVG, Position, Desc }) => {
    return (
        <a href={Link} className="service-card card cursor-pointer ease-in-out duration-300 p-8 w-[calc(100vw-40px)] sm:w-auto flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <div className="icon mb-4">
                <div className="education-svg">
                    {/* Render SVG markup as JSX */}
                    <div dangerouslySetInnerHTML={{ __html: SVG }} />
                </div>
            </div>
            <h3 className='mb-4'>
                {Position}
            </h3>
            <div className="line block h-0.5 rounded-lg w-10 bg-[#3e64ff] mb-8"></div>
            <p className='text-[#999999]'>
                {Desc}
            </p>
        </a>
    )
}

export default ServiceCard