import React from 'react'

const SkillPercentage = ({ Language, Percentage }) => {
    return (
        <div className="skill-percentage">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium ">{Language}</span>
                <span className="text-sm font-medium  ">{Percentage}%</span>
            </div>
            <div className="w-full bg-[#e4e4e4] rounded-full h-4 cursor-pointer">
                <div className="bg-[#3e64ff] h-4 rounded-full" style={{ width: Percentage + "%" }}></div>
            </div>
        </div>
    )
}

export default SkillPercentage