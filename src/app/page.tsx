import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Twisted Taco Logo"
        width={310}
        height={200}
        priority
      />

      <p className={styles.subtitle}>
          Taco Catering and Pop Up Events
        </p>
        <p className={styles.subtitle}>📍 Long Beach, NY</p>

<a
          href="https://www.instagram.com/the.twisted.taco/"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
      <div className={styles.tacogrid} />
    </a>

    <div className={styles.description}>
        <p>
          Follow us on <a href="https://www.instagram.com/the.twisted.taco">instagram</a> for pop up event announcements!
        </p>

        <p>
          Or give us a <a href="tel:4105002906">call, text</a> or <a href="mailto:thetwistedtaco516@gmail.com">email</a> to schedule a catering event.
        </p>
      </div>

    </main>
  )
}
