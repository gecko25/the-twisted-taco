import Image from "next/image";
import styles from "./Menu.module.css";
import MenuItem from "@/components/MenuItem";

export default function Menu() {
  const MenuItems = [
    {
      title: "Steak",
      description:
        "Grilled steak marinated with mexican spices topped with pico de gallo and queso fresco",
      imageUri: "/steak.jpeg",
    },
    {
      title: "Pork Carnitas",
      description:
        "Slow cooked pork lion marinated with pineapple and mexican spices topped with onions, cilantro and queso fresco on top",
      imageUri: "/pork.jpeg",
    },
    {
      title: "Cauliflower",
      description:
        "Fried cauliflower on a flour tortilla topped with purple cabbage salad, queso fresco and chipotle mayo.",
      imageUri: "/cauliflower.jpeg",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo.png"
          alt="The Twisted Taco"
          width={200}
          height={100}
          className={styles.logo}
          style={{
            height: "80px",
            width: "auto",
          }}
          priority
        />
        <Image
          src="/bright-eye-logo.png"
          alt="Bright Eye"
          width={200}
          height={100}
          className={styles.logo}
          style={{
            height: "80px",
            width: "auto",
          }}
          priority
        />
      </div>

      <h1>Menu</h1>
      <div className={styles.menuContainer}>
        {MenuItems.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            description={item.description}
            imageUri={item.imageUri}
          />
        ))}
      </div>

      <h1>How to Order</h1>
      <div className={styles.lower_container}>
        <ol className={styles.order_list}>
          <li>
            Send me a message via{" "}
            <a href="https://ig.me/m/the.twisted.taco/ ">instagram</a> to place
            your order with
            <ul style={{ marginLeft: "25px" }}>
              <li className={styles.sublistitem}>Your name</li>
              <li className={styles.sublistitem}>Your order</li>
              <li className={styles.sublistitem}>
                Payment type (cash, venmo, zelle)
              </li>
            </ul>
            <p className={styles.screenshot}>
              If using venmo or zelle, please include a screenshot of payment
              confirmation. <span>🙏</span>
            </p>
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
            (410) 500-2906
          </p>
        </div>
      </div>
    </main>
  );
}
