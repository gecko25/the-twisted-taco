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
        sizes="80vw"
        style={{ width: '80%', height: 'auto' }} // optional
        priority
      />

  <h1>How to Order</h1>
    <div className={styles.lower_container}>
        <ol className={styles.order_list}>
          <li>
            Send me a message via <a href="https://ig.me/m/the.twisted.taco/ ">instagram</a> to place your order.
            Please include:
            <ul style={{ marginLeft: '25px'}}>
              <li className={styles.sublistitem}>Your name</li>
              <li className={styles.sublistitem}>Your order</li>
              <li className={styles.sublistitem}>Payment type (&quot;cash&quot;, &quot;venmo&quot;, or &quot;zelle&quot;)</li>
            </ul>
            </li>

          <li>When your order is ready, I will send a message to come pick it up at the table.</li>
        </ol>
        <p className={styles.payment}>⚠️ If you are paying with venmo or zelle, please send a screenshot of your payment. 🙏</p>
        <p className={styles.payment}>If you are paying with cash, we will collect payment when we deliever your tacos.</p>
        <br />

      <div>
        <p>
        <Image
        className={styles.payment_logo}
        src="/venmo_logo.png"
        alt="Venmo"
        width={15}
        height={15}
        priority
      />
      <a href="https://venmo.com/u/danielgrande21">@danielgrande21</a>
    </p>
       
        <p>
        <Image
        className={styles.payment_logo}
        src="/zelle_logo.png"
        alt="Zelle"
        width={15}
        height={15}
        priority
      />
      (410) 500-2906</p>
      </div>
    </div>

  </main>
  )
}
