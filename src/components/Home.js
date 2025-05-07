import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap
import './Home.css'; // Custom styles

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="d-flex align-items-center vh-100 hero-section">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center text-white text-center text-md-start">
          {/* Image */}
          <div className="hero-image-container mb-4 mb-md-0 me-md-5">
            <img
              src="images/relaxed.jpg"
              alt="Emmanuel Wanjala"
              className="hero-image"
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="display-4 fw-bold">Emmanuel Wanjala</h1>
            <p className="lead">Software Engineering Student | Frontend Developer</p>
            <div className="mb-3">
              <a href="https://github.com/Emmanuel1440" target="_blank" rel="noreferrer" className="btn btn-outline-light me-2">
                GitHub
              </a>
              <a href="https://linkedin.com/in/emmanuel-wanjala-51a6112b6" target="_blank" rel="noreferrer" className="btn btn-outline-light">
                LinkedIn
              </a>
            </div>
            <a href="/resume/RESUME.pdf" download className="btn btn-light">
              📄 View Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">About Me</h2>
          <div className="row align-items-center">
            {/* Photo */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="images/profile.jpg"  // Make sure this file exists in public/images
                alt="Emmanuel Wanjala"
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: '250px' }}
              />
            </div>

            {/* Info */}
            <div className="col-md-8">
              <div className="card shadow border-0">
                <div className="card-body">
                  <h3 className="card-title mb-3">Hi, I'm Emmanuel Wanjala 👋</h3>
                  <p className="card-text mb-4">
                    I'm a passionate Software Engineering student who loves solving real-world problems through intuitive and elegant frontend solutions.
                    I take pride in writing clean, maintainable code and turning design ideas into interactive and engaging web experiences.
                  </p>

                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="mb-2">🎓 Background</h5>
                      <ul>
                        <li>Currently pursuing a BSc in Software Engineering at Kirinyaga Universisty</li>
                        <li>Proficient in HTML, CSS, JavaScript, React, and Bootstrap</li>
                        <li>Actively building projects and showcasing them on GitHub</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="mb-2">🚀 Goals</h5>
                      <ul>
                        <li>Master frontend frameworks like React and Next.js</li>
                        <li>Develop impactful full-stack applications</li>
                        <li>Grow my technical portfolio and open-source contributions</li>
                        <li>Secure a frontend developer role at a tech-driven company</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-5 bg-white">
        <div className="container">
          <h2>Skills</h2>
          <ul className="list-inline">
            <li className="list-inline-item badge bg-primary m-1">HTML5</li>
            <li className="list-inline-item badge bg-primary m-1">CSS3</li>
            <li className="list-inline-item badge bg-primary m-1">JavaScript</li>
            <li className="list-inline-item badge bg-primary m-1">React</li>
            <li className="list-inline-item badge bg-primary m-1">Bootstrap</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-5 bg-light">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-md-6">
              <img src="images/delta.png" className="img-fluid mb-2" alt="Project 1" />
              <h5>Delta Hotel</h5>
              <p>The Delta Hotel website aims to provide a user-friendly platform for potential customers to browse available properties, 
                view detailed information about each property, and contact the hotel for reservations or inquiries.<br/>
               The site is designed to be responsive and visually appealing.</p>
               <p>
              <ul><li> HTML5: Structure and content of the web pages.</li>
                  <li>CSS3: Styling and visual presentation of the website.</li>
                  <li>JavaScript: Interactive elements and dynamic functionality.</li>
                  <li>Bootstrap 5: CSS framework for responsive design and pre-built components.</li>
                  <li>PHP: Server-side scripting for form processing and database interaction.</li>
                  <li>MySQL: Database for storing contact form submissions.</li></ul></p>
              <a href="https://github.com/Emmanuel1440/Delta_Hotel" className="btn btn-outline-dark btn-sm" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div className="col-md-6">
              <img src="images/home.png" className="img-fluid mb-2" alt="Project 2" />
              <h5>Baglioni Hotel</h5>
              <p>At the Baglioni Hotel London, you’ll discover a world of refined luxury in the heart of Kensington, one of the most prestigious neighborhoods in the city.<br/>

From the moment you arrive, you're welcomed with the elegance of Italian design and the warmth of world-class hospitality.
 Whether you're here for a romantic escape, a business trip, or a cultural adventure, you'll find every detail crafted to offer you a truly unforgettable stay.<br></br>

You’ll enjoy stunning views of Hyde Park, relax in beautifully designed rooms and suites, and indulge in exquisite Italian cuisine — all just steps away from London’s most iconic landmarks. At Baglioni, it’s not just a visit — it’s an experience tailored entirely to you.</p>
              <a href="https://github.com/Emmanuel1440" className="btn btn-outline-dark btn-sm" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     {/* Contact Section */}
<section id="contact" className="p-5 bg-white">
  <div className="container">
    <h2 className="text-center mb-4">Contact Me</h2>
    <div className="row justify-content-center">
      {/* Contact Info */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm border-0">
          <div className="card-body text-center">
            <h5 className="card-title mb-3">Let's Connect</h5>
            <p className="card-text">
              I'm always open to collaborating on exciting projects or discussing tech ideas.
              Reach out to me through email or LinkedIn.
            </p>
            <p className="mb-1"><strong>Email:</strong> <a href="mailto:emmanuelwanjala7416@gmail.com">emmanuelwanjala7416@gmail.com</a></p>
            <p className="mb-1"><strong>GitHub:</strong> <a href="https://github.com/Emmanuel1440" target="_blank" rel="noreferrer">github.com/Emmanuel1440</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/emmanuel-wanjala-51a6112b6" target="_blank" rel="noreferrer">Emmanuel Wanjala</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
