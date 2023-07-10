import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section id="home" className={styles.home}>
          <h1>Welcome to our Web3 World</h1>
          <p>Experience the future of the web with blockchain technology.</p>
        </section>
        <section id="about" className={styles.about}>
          <h2>About Us</h2>
          <p>We are pioneers in integrating blockchain with web development.</p>
        </section>
        <section id="services" className={styles.services}>
          <h2>Services</h2>
          <p>We offer various services related to Web3 development.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2023 Our Web3 World. All rights reserved.</p>
      </footer>
    </div>
  );
}
