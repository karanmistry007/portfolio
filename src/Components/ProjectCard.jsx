import React from 'react'

const ProjectCard = ({Image, Title, Technologies}) => {
    return (
        <div className="group image-1 cursor-pointer relative">
            <img className='max-w-[100%] w-full' src={Image} alt={Title} />
            <div className="caption opacity-0 bg-[#3e65ffcc] h-full w-full duration-300 transition-all group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="">
                    <h3 className='text-xl mb-2 font-medium'>
                        {Title}
                    </h3>
                    <h6 className='text-sm'>
                        {Technologies}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard