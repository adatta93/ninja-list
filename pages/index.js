import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        facere voluptatibus dolore facilis impedit obcaecati provident totam,
        dolor sed culpa tempora incidunt soluta blanditiis pariatur odio at,
        sequi aliquid. Repudiandae odit necessitatibus reprehenderit, tempore
        aliquid ut sequi minima eaque repellat quae aliquam ullam excepturi
        voluptas quas voluptatibus aspernatur deleniti maiores ipsa quaerat
        delectus quibusdam mollitia recusandae tenetur dolorem? Laborum,
        perspiciatis! Vero laboriosam pariatur sed quae?
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        facere voluptatibus dolore facilis impedit obcaecati provident totam,
        dolor sed culpa tempora incidunt soluta blanditiis pariatur odio at,
        sequi aliquid. Repudiandae odit necessitatibus reprehenderit, tempore
        aliquid ut sequi minima eaque repellat quae aliquam ullam excepturi
        voluptas quas voluptatibus aspernatur deleniti maiores ipsa quaerat
        delectus quibusdam mollitia recusandae tenetur dolorem? Laborum,
        perspiciatis! Vero laboriosam pariatur sed quae?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
