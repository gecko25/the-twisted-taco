import Image from 'next/image'
import styles from './QuickLinks.module.css'
import Link from 'next/link'

export default function QuickLinks() {
  return (
    <main className={styles.main}>
      <Link href="/">
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Twisted Taco Logo"
        width={310}
        height={200}
        priority
      />
      </Link>

<div className={styles.links}>

<a
          className={styles.card}
          href="https://www.instagram.com/the.twisted.taco/"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Instagram
          </p>
        </a>
      <a
          className={styles.card}
          href="tel:4105002906"
          role="button"
        >
          <p>Call</p>
        </a>

        <a
          className={styles.card}
          href="mailto:thetwistedtaco516@gmail.com"
          role="button"
        >
          <p>Email</p>
        </a>


      </div>

      <div className={styles.description}>
        <p>
          Follow us on instagram for pop up event announcements!
        </p>

        <p>
          Or give us a call, text or email to schedule a catering event.
        </p>
      </div>




    </main>
  )
}
