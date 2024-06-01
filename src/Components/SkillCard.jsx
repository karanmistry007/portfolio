import React from 'react'

const SkillCard = ({ Language,Percentage,LastWeek,ThisWeek }) => {
    return (
        <div className="skill-card card cursor-pointer hover:scale-[1.02] hover:rounded-xl duration-300 bg-white px-12 py-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full max-w-[400px] md:max-w-[350px] lg:max-w-[300px] ">
            <h6 className='text-center text-xl font-bold mb-5'>
                {Language}
            </h6>
            <div className="percentage w-fit m-auto">
                <div className="progress-bar">
                    <div className="progress-circle-1" role="progressbar" aria-valuenow={Percentage} aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="font-bold text-3xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] progress-text bg-white h-[145px] w-[145px] rounded-full flex justify-center items-center">{Percentage}%</div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5 text-center">
                <div className="left">
                    <h3 className='font-bold text-xl'>
                        {LastWeek}%
                    </h3>
                    <p className='text-xs text-[#999999] font-semibold'>
                        Last Week
                    </p>
                </div>
                <div className="line bg-[#999999] h-10 w-[1px]"></div>
                <div className="right">
                    <h3 className='font-bold text-xl'>
                        {ThisWeek}%
                    </h3>
                    <p className='text-xs text-[#999999] font-semibold'>
                        Last Month
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard