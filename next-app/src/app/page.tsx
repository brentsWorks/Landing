import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brent Brison</title>
        <meta name="description" content="Brent Brison's personal website." />
        <meta name="keywords" content="Brent Brison, software engineering, AI, machine learning, personal website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </Head>
      <header>
        <a href="#" className="logo">Home</a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>
      <section className="home">
        <div className="home-img">
          <img src="/images/profilepic.jpeg" alt="Profile Picture" />
        </div>
        <div className="home-content">
          <h1>Hi, I'm <span>Brent</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p className="aboutme"> Living a well-balanced life while fulfilling my unwavering passion for the future of technology.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/brent-brison/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/brentsWorks/"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/brentbrison/"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <a href="mailto:bbrison@ucsc.edu?subject=Contact&body=Hello%20Brent,%0D%0A%0D%0A" className="btn">Contact me</a>
        </div>
      </section>
      {/* ...repeat for Projects and Experience sections, using JSX (className instead of class, self-closing tags, etc.) */}
    </>
  );
}
