import PageLayout from "./components/pageLayout"
import styles from '../styles/Home.module.css'
import Link from "next/link"
export default function Deportes({articles}) {
    return <PageLayout title="About">
        <div className={styles.container}>
      {articles.length === 0 && <p>No hay articulos</p>}
      {articles.length > 0 && articles.map((article, index) => (
        <Link href={`${article.url}`}>
        <div key={index}>
          <img src={article.urlToImage} alt={`image for the article ${article.title}`} 
          width={450}
          height={300}
          layout="responsive"
          priority={true}
          placeholder="blur"
          blurDataURL="https://www.gannett-cdn.com/presto/2022/10/18/USAT/bf61ec97-8f58-41cc-9b33-4b1115909642-AP_Russia_Ukraine_War_12.jpg?auto=webp&crop=4999,2812,x0,y254&format=pjpg&width=1200"
           ></img>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
        </Link>
      ))}
        </div>
    </PageLayout>
}





export async function getServerSideProps(){
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=ar&category=sport&apiKey=337d7836087242069f4b28afbf0e4fab")
    const {articles} = await response.json()
    return {
      props: {
        articles
      }
    }
    }