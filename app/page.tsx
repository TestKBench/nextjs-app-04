import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to NextJS App 04</h1>
      <p className={styles.description}>Running on Next.js 14.1 with legacy font imports</p>
      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2>About &rarr;</h2>
        </Link>
      </div>
    </main>
  )
}
