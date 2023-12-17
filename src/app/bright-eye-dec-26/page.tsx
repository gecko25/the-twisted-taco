import Image from 'next/image'
import styles from './BrightEyeDec26.module.css'
import Link from 'next/link'

export default function QuickLinks() {
  return (
    <main className={styles.main}>
      <h1>Menu</h1>
      <Image
        className={styles.menu}
        src="/bright-eye-menu-12-26.jpg"
        alt="Twisted Taco Menu"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
        priority
      />

  <h1>How to Order</h1>
    <div className={styles.lower_container}>
        <ol className={styles.order_list}>
          <li>
            Send me a message via <a href="https://ig.me/m/the.twisted.taco/ ">instagram</a> to place your order with
            <ul style={{ marginLeft: '25px'}}>
              <li className={styles.sublistitem}>Your name</li>
              <li className={styles.sublistitem}>Your order</li>
              <li className={styles.sublistitem}>Payment type (cash, venmo, zelle)</li>
            </ul>
            <p className={styles.screenshot}>If using venmo or zelle, please include a screenshot of payment confirmation. <span>🙏</span></p>

            </li>

          <li>When your order is ready, I will send you message.</li>
          <li>Come to the table to pick up your tacos.</li>
          <li>Enjoy!</li>
        </ol>
        {/*<p className={styles.payment}>If you are paying with cash, we will collect payment when you pick up your order at the table.</p> */}

      <div>
        <p className={styles.payment_option}>
        <a href="https://venmo.com/u/danielgrande21">
        <img
          className={styles.payment_logo}
          src="/Venmo_Logo_Blue.png"
          alt="Venmo"
        />
        @danielgrande21
        </a>
      </p>
       
      <p className={styles.payment_option}>
        <img
        className={styles.payment_logo}
        src="/zellelogo.png"
        alt="Zelle"
      />
      (410) 500-2906</p>
      </div>
    </div>

  </main>
  )
}
