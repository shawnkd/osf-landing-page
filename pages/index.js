import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useGlitch } from 'react-powerglitch'

export default function Home() {
  const glitch = useGlitch();

  
  
  return (
    <div className={styles.container} >
    
      <Head>
        <title>OS FRAGILES</title>
        <meta name="description" content="by cammi casino" />
        <link rel="icon" href="/favicon.ico" />
        <meta itemProp="og:image" content="/osf-lofo.jpeg" />
      </Head>

      <main className={styles.main}>
      
        <div ref={glitch.ref}>
        <a href="https://www.instagram.com/osfragiles/">
          <Image src="/osf-lofo.jpeg" alt="OSF Logo" width={360} height={200} className={styles.title} />
            {/* <h1 className={styles.title}>
              OS FRAGILES
            </h1> */}
            </a>
        </div>
        <div ref={glitch.ref}>
        <p className={styles.description}>
          by
          <code className={styles.code}>
          <a href="https://www.instagram.com/cammicasino/">
          cammi casino
          </a>
          </code>
        </p>
        </div>
        

        <div className={styles.container}>
        <video src="osf-teaser.mov" className={styles.title} autoPlay loop controls width={420}></video>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      {/* <footer className={styles.footer}>
      <p >
          by
          <code className={styles.code}>cammi casino</code>
        </p>
      </footer> */}
    </div>
  )
}
