import React from 'react'
import data from '../../data.json'
import styles from '../../styles/pages/Destination.module.css'

interface Destination{
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}

interface Props{
    destinations: Destination[]
}

let destinations: Destination[] = data.destinations;


const index: React.FC<Props> = ({ destinations }) => {
    console.table(destinations)

    return (
        <div className={`${styles.dest}`}>
            Destinations Page
        </div>
    )
}

export default index
