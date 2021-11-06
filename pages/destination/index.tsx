import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import NavbarInPage from '../../components/NavbarInPage'

import data from '../../data.json'
import styles from '../../styles/pages/Destination.module.css'


interface Destination {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}

interface Props {
    destinations: Destination[]
}

let destinations: Destination[] = data.destinations;


const index: React.FC<Props> = () => {
    const [activeDest, setActiveDest] = useState(destinations[3].name)

    let destination = destinations.filter((dest) => dest.name === activeDest)[0]

    const clickHandler = (name: string) => {
        setActiveDest(name);
    }

    return (
        <div className={`${styles.dest}`}>
            <h5><span> 01</span> Destinations Page</h5>

            <div className='flex flex-ai-c flex-jc-c'>
                <div className={`${styles.dest__image}`}>
                    <Image src={destination.images.png} alt={destination.name} layout='fill' />
                </div>
            </div>


            <div className={`${styles.dest__details}`}>

                <div className={`${styles['dest__details-nav']}`}>
                    <NavbarInPage names={['Moon', 'Mars', 'Europa', 'Titan']} clickHandler={clickHandler} />
                </div>

                <h2>{destination.name}</h2>
                <p>{destination.description}</p>


                <div className={`${styles['dest__details-numbers']}`}>
                    <div className={`${styles['dest__details-number']}`}>
                        <span>Avg. Distance</span>
                        <span>{destination.distance}</span>
                    </div>
                    <div className={`${styles['dest__details-number']}`}>
                        <span>Est. Travel Time</span>
                        <span>{destination.travel}</span>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default index
