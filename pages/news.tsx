
//Hooks
import { useEffect, useState } from 'react'

import styles from '../styles/News.module.css'

//Components
import Article from '../components/article'
import Header from '../components/pageHeader'
import Footer from '../components/pageFooter'

//Types
import { NewsProps, ArticleData } from '../types/news'



//News page takes data from news api
function News({tech, bus, sports, health} : NewsProps) {

    //Hooks
    const [techData, setTechData] = useState([])
    const [healthData, setHealthData] = useState([])
    const [busData, setBusData] = useState([])
    const [sportsData, setSportsData] = useState([])


    //Set data when page loads
    useEffect(() => {
        setTechData(tech.articles)
        setHealthData(health.articles)
        setBusData(bus.articles)
        setSportsData(sports.articles)
    }, [])

    return(

        //Container for page (For Header)
        <div className={styles.container}>

            <Header/>

            {/**Container for body of page */}
            <div className={styles.pageContainer}>

                  
                {/**Contains table of news articles */}
                <div className={styles.subjectContainer}>

                
                    {/**For columns of table */}
                    <div className={styles.columnContainer}>

                        {/**Title at top of column */}
                        <div className={styles.columnTitleContainer}>
                            <text className={styles.columnTitle}>Tech</text>
                        </div>

                        {/**Displays articles */}
                        {techData.map((article: ArticleData) => (

                            <div className={styles.articlePadding}>

                                {/**Article displayed */}
                                <Article
                                title = {article.title}
                                url = {article.url}
                                />

                            </div>
                        ))}
                    </div>


                    <div className={styles.columnContainer}>

                        <div className={styles.columnTitleContainer}>
                            <text className={styles.columnTitle}>Health</text>
                        </div>
                
                        {healthData.map((article: ArticleData) => (
                        
                        <div className={styles.articlePadding}>

                            <Article
                            title = {article.title}
                            url = {article.url}
                            />

                        </div>

                       

                        ))}
                    </div>

                    <div className={styles.columnContainer}>

                        <div className={styles.columnTitleContainer}>
                            <text className={styles.columnTitle}>Business</text>
                        </div>

                    
                        {busData.map((article: ArticleData) => (

                            <div className={styles.articlePadding}>

                                <Article
                                title = {article.title}
                                url = {article.url}
                                />
                            </div>

                        ))}
                    </div>

                    <div className={styles.columnContainer}>

                        <div className={styles.columnTitleContainer}>
                            <text className={styles.columnTitle}>Sports</text>
                        </div>

                        {sportsData.map((article: ArticleData) => (

                            <div className={styles.articlePadding}>

                                <Article
                                title = {article.title}
                                url = {article.url}
                                />

                            </div>

                        ))}
                    </div>

                </div>

            </div>

        <Footer/>

     </div>
        
    )

}


//Gets data from api and sends it as props to News page
export async function getServerSideProps() {

    //Making multiple api requests to get the different data
    const [techRes, businessRes, healthRes, sportsRes] = await Promise.all([
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=' + process.env.API_KEY),
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + process.env.API_KEY),
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=' + process.env.API_KEY),
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=' + process.env.API_KEY),
    ]);

    //Convert recieved data to json
    const [tech, bus, health, sports] = await Promise.all([
        techRes.json(),
        businessRes.json(),
        healthRes.json(),
        sportsRes.json(),
    ])

    return {props: {tech, bus, health, sports}}

}

export default News