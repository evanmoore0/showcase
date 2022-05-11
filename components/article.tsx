import styles from '../styles/components/Article.module.css'

{/**Component to display articles */}
const Article = (props : any) => {

    return(

        <a className = {styles.container}
        href = {props.url}
        >

            <text className={styles.title}>

                {props.title}

            </text>

        </a>
    )
}

export default Article