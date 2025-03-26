import "./App.css";
import logo from "../public/ayush1.png";
import bigSol from "../public/bigSol.png";
import myPay from "../public/mypay.png";
import left from "../public/left.jpg";
import right from "../public/right.jpg";
import signature from "../public/signature.png";

const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="">
          {" "}
          <img src={logo} className="logo" alt="logo" />
        </div>
        <h2>Welcome !</h2>
        <div className="">
          {" "}
          <div className="socials" style={{marginBottom: "40px"}}>
            <a href="" target="_blank" className="socials-link"><small>LinkedIn</small></a>
            <a href="" target="_blank" className="socials-link"><small>Github</small></a>
            <a href="" target="_blank" className="socials-link"><small>Instagram</small></a>
            <a href="" target="_blank" className="socials-link"><small>Facebook</small></a>
            <a href="" target="_blank" className="socials-link"><small>X</small></a>
          
          

          </div>
          <h3 style={{ marginBottom: "5px" }}>Bio :</h3>
          Software Engineer (Full-Stack JS Developer) and AI/ML Enthusiast with
          over <span className="highlighted-text">3 years</span> of experience
          in Web Application / Software Development. Specialize in user-centric
          products using modern frameworks and technologies.
        </div>

        <div className="work-experience">
          <h3 style={{ marginBottom: "5px", marginTop: "40px" }}>
            Work Experience :
          </h3>

          <div className="card">
            <div className="">
              {" "}
              <img
                src={bigSol}
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </div>
            <strong>The Big Solutions</strong> <br />{" "}
            <small className="highlighted-text">May 2024 - Present</small>
            <p>
              Front-End Engineer / Front-End Team Lead <br />
            </p>
          </div>
          <div className="card">
            <div className="">
              {" "}
              <img
                src={myPay}
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </div>
            <strong>MyPay (FinTech)</strong> <br />{" "}
            <small className="highlighted-text">May 2023 - May 2024</small>
            <p>
              Front-End Engineer <br />
            </p>
          </div>

          <div className="card">
            <div className="" style={{ fontSize: "20px" }}>
              {" "}
              💻
            </div>
            <strong>Freelancer</strong> <br />{" "}
            <small className="highlighted-text">Prior - 2023</small>
            <p>
              Freelancer specializing in ML/AI projects, SEO, web application
              development, and full-stack development. <br />
            </p>
          </div>
        </div>

        <div className="projects">
          <h3 style={{ marginBottom: "5px", marginTop: "40px" }}>Projects :</h3>

          <div className="card">
            <strong>Xpress Sewa </strong>{" "}
            <small>
              <a target="_blank" href="https://xpressewa.com">
                Link
              </a>
            </small>
            <br />
            <small>
              Led the development of 21+ money transfer application sites with
              over 100k users and 2M+ transactions.
            </small>{" "}
            <br />
            <p></p>
          </div>
          <div className="card">
            <strong>MyPay Digital Wallet </strong>{" "}
            <small>
              <a target="_blank" href="https://customer.mypay.com.np">
                Link
              </a>
            </small>
            <br />
            <small>
              Fully‑fledged digital wallet with 50+ services and 500K+ users
            </small>{" "}
            <br />
            <p></p>
          </div>
          <div className="card">
            <strong>Agent Module </strong>{" "}
            <small>
              <a target="_blank" href="https://agent.mypay.com.np">
                Link
              </a>
            </small>
            <br />
            <small>
              Agent wallet integrating custom cashback and admin agent network
            </small>{" "}
            <br />
            <p></p>
          </div>
          <div className="card">
            <strong>MyPay Gold Customer Portal </strong>{" "}
            <small>
              <a target="_blank" href="https://www.mypaygold.com">
                Link
              </a>
            </small>
            <br />
            <small>
              Online platform that allows individuals to buy, sell, and store
              gold digitally.
            </small>{" "}
            <br />
            <p></p>
          </div>
          <div className="card">
            <strong>Voting Platform (International / National) </strong>{" "}
            <small>
              <a target="_blank" href="https://voting.mypay.com.np">
                Link
              </a>
            </small>
            <br />
            <small>
              Voting platform for multiple shows for Nepali users and
              International users.
            </small>{" "}
            <br />
            <p></p>
          </div>
          <div className="card">
            <strong>Market Place Admin Portal </strong>
            <br />
            <small>
              Internal market place admin portal for MyPay ecommerce and Team
              11.
            </small>{" "}
            <br />
            <p></p>
          </div>
          <div className="card">
            <strong>Shree Om Mandir Admin Portal </strong>
            <br />
            <small>
              Internal market place admin portal for Om Mandir.
            </small>{" "}
            <br />
            <p></p>
          </div>
        </div>

        <div className="about-me">
          <h3 style={{ marginBottom: "5px", marginTop: "40px" }}>
            About Me :
          </h3>

          Software Engineer (Full-Stack JS Developer) and AI/ML Enthusiast with
          over <span className="highlighted-text">3 years</span> of experience
          in Web Application / Software Development. Specialize in user-centric 

                  

          <div className="gallery">
            <img src={left} className="gallery-img" alt="logo" />
            <img src={right} className="gallery-img" alt="logo" />
           
          </div>

          Feel free to reach out to me via email at ayushniraula82@gmail.com, as I continuously check my inbox and am open to collaboration and new opportunities.
         <br /> <br /><br /> <br />
         <strong>Ayush Niraula</strong>
         <br />
         <img src={signature} alt="" style={{height: "90px"}}/>
        </div>
      </div>
    </>
  );
};

export default App;
