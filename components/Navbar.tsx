import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import logo from '../public/assets/shared/logo.svg'
import styles from '../styles/components/Navbar.module.css'
import { useState } from 'react'


const Navbar: React.FC = () => {
    const links = [
        { number: '00', name: 'Home', path: '/' },
        { number: '01', name: 'Destination', path: '/destination' },
        { number: '02', name: 'Crew', path: '/crew' },
        { number: '03', name: 'Technology', path: '/technology' }
    ]

    const router = useRouter()

    return (
        <Fragment>
            <div className={`${styles.navbar} flex flex-ai-c flex-jc-sb`}>

                <div className={`${styles.navbar__logo}`}>
                    <Image src={logo} alt='logo' layout='fill' />
                </div>


                <div className={`${styles['navbar__links-primary']} hide-for-mobile flex `}>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={link.number}>
                                <a className={`flex flex-ai-c ${link.path === router.pathname ? styles.active : ''}`}>
                                <span>{link.number}</span>{link.name}</a>
                            </Link>
                        )
                    })}
                </div>



                <div className={`${styles['navbar__links-secondary']} hide-for-tablet`}>
                    <div className={`${styles.navbar__toggle}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar

// simpler way to change active state based or route url
// https://dev.to/yuridevat/how-to-add-styling-to-an-active-link-in-nextjs-593e