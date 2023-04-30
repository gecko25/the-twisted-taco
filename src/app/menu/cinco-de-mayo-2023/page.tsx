import Image from 'next/image'
import styles from './CincoDeMayo2023.module.css'
import Link from 'next/link'

export default function CincoDeMayo2023() {
  return (
    <main className={styles.main}>
      <Link href="/">
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Twisted Taco Logo"
        width={220}
        height={140}
        priority
      />
      </Link>

      <h1>Cinco de Mayo Menu 2023</h1>
      <h2>Nolans Pub in Long Beach</h2>
      <h3>Please join us from 4-8pm</h3>

<div className={styles.links}>

      <div className={styles.card}>
        <h4>Steak</h4>
        <p>Steak marinated in chimichurri salsa. Topped with pico de gallo & queso fresco.</p>
      </div>

      <div className={styles.card}>
        <h4>Chicken</h4>
        <p>Shredded chicken breast cooked in salsa verde and onions. Topped with queso fresco.</p>
      </div>

      <div className={styles.card}>
        <h4>Califlower</h4>
        <p>Beer batterred fried califlower topped with red cabbage coleslaw and chipotle mayo</p>
      </div>


      </div>

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
