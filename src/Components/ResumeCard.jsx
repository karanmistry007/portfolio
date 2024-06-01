import React from 'react'

const EducationCard = ({ SVG, Year, Degree, Place, Desc }) => {
    return (
        <div className="resume-card flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
            <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full cursor-pointer">
                <div className="education-svg">
                    {/* Render SVG markup as JSX */}
                    <div dangerouslySetInnerHTML={{ __html: SVG }} />
                </div>
            </div>
            <div className="text">
                <h6 className="text-[#3e64ff] font-extrabold ">
                    {Year}
                </h6>
                <h2 className='text-2xl sm:text-3xl font-bold'>
                    {Degree}
                </h2>
                <h6 className='font-bold sm:text-lg sm:mt-2'>
                    {Place}
                </h6>
                <p className='text-[#999999] text-sm sm:text-base'>
                    {Desc}
                </p>
            </div>
        </div>
    )
}

export default EducationCard