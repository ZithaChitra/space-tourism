import React from 'react'
import Link from 'next/link'


import styles from '../styles/components/NavbarInPage.module.css'

interface Props {
    names?: string[];
    numbers?: number | null;
    discs?: number | null; //
    clickHandler: any
}

const NavbarInPage: React.FC<Props> = ({ names, numbers, discs, clickHandler }) => {
    // names for the nav bar
    if (typeof names !== 'undefined' && names?.length > 0) {
        return (
            <div className={`${styles.nav__strings} flex flex-ai-c flex-jc-c`}>
                {names.map((name, index) => {
                    return (
                        <Link href='' key={index}>
                            <a className='flex flex-ai-s' onClick={()=>clickHandler(name)}>{name}</a>
                        </Link>
                    )
                })}
            </div>
        )
    } else if (numbers) { // links for the navbar
        let nums: number[] = []
        for (let i = 0; i < numbers; i++) {
            let num = i + 1;
            nums.push(num)
        }

        return (
            <div className={`${styles.nav__numbers} flex flex-ai-c flex-jc-c`}>
                {nums.map((num) => {
                    return (
                        <Link href='' key={num}>
                            <a className='flex flex-ai-c flex-jc-c' onClick={()=>clickHandler(num)}>{num}</a>
                        </Link>
                    )
                })}
            </div>
        )
    } else if (discs) {
        let nums: number[] = []
        for (let i = 0; i < discs; i++) {
            let num = i + 1;
            nums.push(num)
        }

        return (
            <div className={`${styles.nav__discs} flex flex-ai-c flex-jc-c`}>
                {nums.map((num) => {
                    return (
                        <Link href='' key={num}>
                            <a onClick={()=>clickHandler(num)}></a>
                        </Link>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            data not read
        </div>
    )
}

export default NavbarInPage
