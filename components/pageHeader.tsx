
import {GiBookshelf} from 'react-icons/gi'
import styles from '../styles/components/Header.module.css'
import Link from 'next/link'


//Header title
const Header = () => {
    return(

        <div className={styles.header}>

            <Link href={"/"}>

                 <a className={styles.title}>
                    News Library 
                </a>

            </Link>
         
            <Link
            href={"/"}
            >
                <a>
                    <GiBookshelf className={styles.title}/>
                </a>

                
            </Link>
  
        </div>
    )
}

export default Header