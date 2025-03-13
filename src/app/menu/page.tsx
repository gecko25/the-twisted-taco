"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";
import MenuItem from "@/components/MenuItem";

export default function Menu() {
  const [isScrollable, setIsScrollable] = useState(false);
  const [hasMoreToScroll, setHasMoreToScroll] = useState(false);

  useEffect(() => {
    function checkScrollable() {
      const scrollable =
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight;
      setIsScrollable(scrollable);
      setHasMoreToScroll(
        window.scrollY <
          document.documentElement.scrollHeight - window.innerHeight
      );
    }

    checkScrollable(); // Check on mount
    window.addEventListener("scroll", checkScrollable);
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("scroll", checkScrollable);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  console.log("hasMoreToScroll", hasMoreToScroll);
  console.log("isScrollable", isScrollable);

  function scrollDown() {
    console.log("scroll to bottom");
  }

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
      imageUri: "/pork2.jpeg",
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
      {hasMoreToScroll && (
        <Image
          className={styles.arrowDown}
          width={50}
          height={100}
          src="/arrow-bottom-direction-green-icon.svg"
          alt="Scroll down"
          onClick={scrollDown}
        />
      )}

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

      <div className={styles.prices}>
        <h2>$13 for small plate</h2>
        <h3>(2 tacos)</h3>
        <h2>$18 for large plate</h2>
        <h3>(3 tacos)</h3>
      </div>

      <h1 style={{ marginTop: "30px" }}>How to Order</h1>
      <div className={styles.lower_container}>
        <ul className={styles.order_list}>
          <li>
            Fill out an order form <br />{" "}
            <i>
              There should be order forms on your table or with us at order
              station table in the back.
            </i>
          </li>
          <li>Please fill out 1 form for each person/plate.</li>
          <li>
            Bring the order form(s) to the order station table in the back to
            pay & submit your order. We accept cash/zelle/venmo
          </li>
          <li>When your order is ready, we will bring it to your table.</li>
        </ul>

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
