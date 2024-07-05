import React from 'react'
import mycss from './scss/test.module.scss'
import picture from './logo.svg'

const Intro = () =>{
    return (
    <>
<img src={picture} className={`${mycss.logo} `}></img>
<a className={`${mycss.txt} `}>안녕하세요ㅋㅋㅋ하하하하하 ㅇ라ㅔ내러ㅏㅇ널ㅈ;ㅣ멀;ㅓㅑㄻ</a>    
    </>
)
}

export default Intro
