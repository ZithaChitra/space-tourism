import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/assets/shared/logo.svg'
import styles from '../styles/components/Navbar.module.css'

function Navbar() {
    return (
        <div className={`${styles.navbar} flex flex-ai-c flex-jc-sb`}>

            <div className={`${styles.navbar__logo}`}>
                <Image src={logo} alt='logo' layout='fill'/>
            </div>


            <div className={`${styles['navbar__links-primary']} hide-for-mobile flex `}>
                <Link href='/'><a className={`flex flex-ai-c`}><span>00</span>Home</a></Link>
                <Link href='/'><a className={`flex flex-ai-c`}><span>01</span>Destination</a></Link>
                <Link href='/'><a className={`flex flex-ai-c`}><span>02</span>Crew</a></Link>
                <Link href='/'><a className={`flex flex-ai-c`} ><span>03</span>Technology</a></Link>
            </div>



            <div className={`${styles['navbar__links-secondary']} hide-for-tablet`}>
                <div className={`${styles.navbar__toggle}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
