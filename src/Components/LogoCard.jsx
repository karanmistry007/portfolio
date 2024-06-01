import React from 'react'

const LogoCard = ({LogoLink,LogoSrc,LogoName}) => {
    return (
        <a href={LogoLink} className='logo-card'>
            <img className=' hover:scale-105 duration-300' src={LogoSrc} alt={LogoName} />
        </a>
    )
}

export default LogoCard