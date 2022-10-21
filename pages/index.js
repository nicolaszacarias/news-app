import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from 'react'
// esto lo que hace es no tener que recargar toda la pagina para entrar por ejemplo al about SINGLE PAGE APLICATION
import styles from '../styles/Home.module.css'
import PageLayout from './components/pageLayout'

export default function Home({articles}) {
  // const [articles, setArticles] = useState([])
//   useEffect(() => {
//   fetch("https://newsapi.org/v2/top-headlines?country=ar&apiKey=4d55c3ad697940c891c9d130fb40ff82")
//   .then(res => res.json())
//   .then(response => {const {articles} = response
// setArticles(articles)})}, [])
  return (
    <PageLayout title="NewsApp - Home">
      <div onClick={Detailnotices}>deportes</div>
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
          blurDataURL='"https://www.gannett-cdn.com/presto/2022/10/18/USAT/bf61ec97-8f58-41cc-9b33-4b1115909642-AP_Russia_Ukraine_War_12.jpg?auto=webp&crop=4999,2812,x0,y254&format=pjpg&width=1200"'
           ></img>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
        </Link>
      ))}
     {/* <h1>aprendiendo next desde cero</h1>
     <Link href='/about'>Ir a about</Link> */}
    </div>
    </PageLayout>
  )
}


//N requetst => se ejecuta 1 vez en buildtime


// export async function getStaticProps(){
//   const response = await fetch("https://newsapi.org/v2/top-headlines?country=ar&apiKey=4d55c3ad697940c891c9d130fb40ff82")
//   const {articles} = await response.json()
//   return {
//     props: {
//       articles
//     }
//   }
//   }
  
//N requetst => se ejecuta N veces
// Para datos que necesitas que sean MUY LIVE
// tiene demasiados datos dinamicos


export async function getServerSideProps(context){
const response = await fetch("https://newsapi.org/v2/top-headlines?country=ar&apiKey=4d55c3ad697940c891c9d130fb40ff82")
const {articles} = await response.json()
return {
  props: {
    articles
  }
}
}

// export async function detailnotice({articles}){
// if(articles.source.name === "TyC Sports"  || "Olé")

// return deportes
// }

// export async function GetCategorysNews(context){
//   const response = await fetch("https://newsapi.org/v2/top-headlines?country=ar&apiKey=4d55c3ad697940c891c9d130fb40ff82")
//   const {articless} = await response.json()
//   return {
//     props: {
//       articless
//     }
//   }
//   }


  


//nextjs hace el fetching de datos en el servidor y luego al cliente le tiene que inyectar la misma informacion que ha utilizado en el
//servidor para renderizar la aplicacion para que el cliente sin hacer ese fetching de datos sea capaz de renderizar lo mismo y de esta forma encajar(hidrata el servidor)
//
//
//