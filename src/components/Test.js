import React, { Component } from 'react'

// import logo from '../img/logo.png';
// import group from '../img/image/group.png'
export default class Header extends Component {
  render() {
    return (
      <div>
     <>

    <div className=" container">
      <div className="row">
        <div className="col-sm-1">
          {/* <img src={logo}  alt="" height="49px" className="asb" /> */}
        </div>
        <div className="col-sm-11 inline_div">
          <div className="menu">
            <ul>
              <li>
                <a href="">Course</a>
              </li>
              <li>
                <a href="">Corporate Training</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <button id="enroll">
                <a href="enroll.html">Enroll Now</a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  <section id="banner" className="container-fluid">
    <div className="row">
      <div className="col-sm-6">
        <h1 className="banner_heading">We’re Listening – Connect with Us! </h1>
        <h4 className="little">
          We’re All Ears And Ready To Engage In Meaningful Conversations. Let’s
          Build A Stronger Bond Together!
        </h4>
        <button id="get"> Get in Touch</button>
      </div>
      <div className="col-sm-6">
        <div className="girlpic">
          {/* <img
            src={group}
            alt=""
            height="800px"
            width="600px"
            className="girlpic"
          /> */}
        </div>
      </div>
    </div>
    <h1 style={{ textAlign: "center" }}>Our STRENGTH</h1>
    <p style={{ textAlign: "center" }}>
      Are you ready to dive into the exciting world of blockchain and learn
      blockchain programming?
      <br />
      <br />
      At Antier School of Blocktech, we’ve crafted unique programs in
      collaboration with top-notch universities, ensuring you get the best of
      both worlds.
      <br />
      <br />
      With access to India’s Largest Blockchain Talent Pool, we are at the
      forefront of the blockchain revolution. Our parent company, Antier
      Solutions, stands as a<br />
      pioneer in blockchain development, utilizing the incredible potential of
      decentralization and smart contracts to craft scalable, asset agnostic
      applications
    </p>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img src="image/aboutgirl.png" height="500px" />
        </div>
        <div className="col-sm-6">
          <h1>MISSION</h1>
          <p>
            Are you ready to dive into the exciting world of blockchain and
            learn blockchain programming?
            <br />
            <br />
            At Antier School of Blocktech, we’ve crafted unique programs in
            <br />
            collaboration with top-notch universities, ensuring you get the best
            of
            <br />
            both worlds.
            <br />
            <br />
            With access to India’s Largest Blockchain Talent Pool, we are at the{" "}
            <br />
            forefront of the blockchain revolution. Our parent company, Antier
            <br /> Solutions, stands as a pioneer in blockchain development,
            utilizing the
            <br />
            incredible potential of decentralization and smart contracts to
            craft
            <br />
            scalable, asset agnostic applications
          </p>
        </div>
      </div>
    </div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 about1">
            <img
              src="icon/bulb.png"
              height="40px"
              style={{ marginLeft: 100, marginTop: 30 }}
            />
            <p style={{ textAlign: "center", marginTop: 40 }}>
              Innovation We encourage creative thinking and groundbreaking ideas
              to push the boundaries of blockchain technology.
            </p>
          </div>
          <div className="col-sm-4 about1">
            <img
              src="icon/excellcn.png"
              height="40px"
              style={{ marginLeft: 100, marginTop: 30 }}
            />
            <p style={{ textAlign: "center", marginTop: 40 }}>
              Excellence We uphold the highest standards of academic and
              professional excellence in all our endeavors.
            </p>
          </div>
          <div className="col-sm-4 about1">
            <img
              src="icon/collab.png"
              height="40px"
              style={{ marginLeft: 100, marginTop: 30 }}
            />
            <p style={{ textAlign: "center", marginTop: 40 }}>
              Collaboration We believe in the power of collaboration and
              teamwork, fostering a supportive community of blockchain
              enthusiasts.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 about1">
            <img
              src="icon/integrity.png"
              height="40px"
              style={{ marginLeft: 100, marginTop: 30 }}
            />
            <p style={{ textAlign: "center", marginTop: 40 }}>
              Innovation We encourage creative thinking and groundbreaking ideas
              to push the boundaries of blockchain technology.
            </p>
          </div>
          <div className="col-sm-4 about1">
            <img
              src="icon/impact.png"
              height="40px"
              style={{ marginLeft: 100, marginTop: 30 }}
            />
            <p style={{ textAlign: "center", marginTop: 40 }}>
              Excellence We uphold the highest standards of academic and
              professional excellence in all our endeavors.
            </p>
          </div>
          <div className="col-sm-4 about1">
            <img
              src="icon/empower.png"
              height="40px"
              style={{ marginLeft: 100, marginTop: 30 }}
            />
            <p style={{ textAlign: "center", marginTop: 40 }}>
              Collaboration We believe in the power of collaboration and
              teamwork, fostering a supportive community of blockchain
              enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h1 style={{ textAlign: "center" }}>Our Leaders</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card" style={{ width: 250 }}>
              <img
                className="card-img-top"
                src="image/vrs.png"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Vikram Raj Singh</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ width: 250 }}>
              <img
                className="card-img-top"
                src="image/vs.png"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Vishal Sharma</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ width: 250 }}>
              <img
                className="card-img-top"
                src="image/sp.png"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Shasi Pal</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ width: 250 }}>
              <img
                className="card-img-top"
                src="image/kb.webp"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Karan Bhai</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        className="container"
        style={{ backgroundColor: "antiquewhite", borderRadius: 40 }}
      >
        <div className="row">
          <div className="col-sm-5" style={{ marginTop: 200 }}>
            <img src="logo.png" height="30px" />
            <br />
            Antier School Of Blocktech (ASB) The Leading Institution <br />
            That Offers The Ideal Platform To Embark On A <br />
            Transformative Journey Via Programs Like Certified
            <br /> Blockchain Professional And Certified Blockchain
            <br /> Developer.
          </div>
          <div className="col-sm-2" style={{ marginTop: 200 }}>
            <h6>Links</h6>
            <ul>
              <li>Courses</li>
              <li>Resources</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-sm-5" style={{ marginTop: 70 }}>
            <div className="row">
              <div
                className="card"
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  height: 160,
                  borderRadius: 25
                }}
              >
                <img
                  src="icon/LocationIcon.png"
                  height="50px"
                  width="30px"
                  style={{ marginTop: 20 }}
                />
                <p>
                  E22,Phase 8B,Industrial area,Sector 74
                  <br />
                  Sahibzada Ajit Singh Nagar,Punjab 160059
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: 30 }}>
              <div className="col-sm-6">
                <div
                  className="card"
                  style={{
                    height: 120,
                    borderRadius: 25,
                    textAlign: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src="icon/PhoneIcon.png"
                    height="40px"
                    width="40px"
                    style={{ marginTop: 20 }}
                  />
                  <p>+917404481044</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="card"
                  style={{
                    height: 120,
                    borderRadius: 25,
                    textAlign: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src="icon/mailIcon.png"
                    height="40px"
                    width="40px"
                    style={{ marginTop: 20 }}
                  />
                  <p>info@asb.guru</p>
                </div>
              </div>
            </div>
            <div className="row">
              <h6>Find us on social media</h6>
            </div>
            <div className="row" style={{ marginTop: 20 }}>
              <div className="col-sm-2">
                <img src="icon/facebookIcon.png" height="40px" width="40px" />
              </div>
              <div className="col-sm-2">
                <img src="icon/TwitterIcon.png" height="40px" width="40px" />
              </div>
              <div className="col-sm-2">
                <img src="icon/InstagramIcon.png" height="40px" width="40px" />
              </div>
              <div className="col-sm-2">
                <img src="icon/LinkedinIcon.png" height="40px" width="40px" />
              </div>
              <div className="col-sm-2">
                <img src="icon/pinterIcon.png" height="40px" width="40px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</>

      </div>
    )
  }
}