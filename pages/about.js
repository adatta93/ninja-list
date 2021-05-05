import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function About() {
  useEffect(() => {
    document.title = "Ninja List | About";
  }, []);

  return (
    <div className={styles.container}>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        facilis numquam obcaecati harum porro explicabo voluptatem, nobis ipsam
        corrupti architecto voluptatibus repellendus minus error soluta est
        sapiente deleniti ea eos ullam possimus dolorem exercitationem vero.
        Amet, quisquam aperiam ea laudantium rem perferendis quas, quidem minus
        repellendus reprehenderit inventore vel perspiciatis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        facilis numquam obcaecati harum porro explicabo voluptatem, nobis ipsam
        corrupti architecto voluptatibus repellendus minus error soluta est
        sapiente deleniti ea eos ullam possimus dolorem exercitationem vero.
        Amet, quisquam aperiam ea laudantium rem perferendis quas, quidem minus
        repellendus reprehenderit inventore vel perspiciatis?
      </p>
    </div>
  );
}
