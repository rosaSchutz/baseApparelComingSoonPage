import React from "react";
import Form from "../Components/Form";
import classes from "../styles/home.module.css";

const Home = () => {
  return (
    <>
      <header className={`${classes.header}`}>
        <img
          className={`${classes.logoMobile}`}
          src="../../public/logo.svg"
          alt="logo"
        />
      </header>
      <main className={`${classes.main}`}>
        <section className={`${classes.heroImg}`}>
          <img
            className={`${classes.heroMobile}`}
            src="../../public/hero-mobile.jpg"
            alt="heroMobile"
          />
          <img
            className={`${classes.heroDesktop}`}
            src="../../public/hero-desktop.jpg"
            alt="heroDesktop"
          />
        </section>
        <section className={`${classes.content}`}>
          <div className={`${classes.contentImg}`}>
            <img
              className={`${classes.logoDesktop}`}
              src="../../public/logo.svg"
              alt="logo"
            />
          </div>
          <div className={`${classes.contentDiv}`}>
            <h1 className={`${classes.title}`}> coming soon</h1>
            <p className={`${classes.text}`}>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
