import { useState } from 'react'
import profilepic from '../src/assets/imgs/profile.jpeg'
import '../src/assets/css/johndoe.css'

function portfolio() {

  return (
    <>
          <header className="header">
              <div className="container">
                  <div className="header-content">
                      <h4 className="header-subtitle" >Hello, I am</h4>
                      <h1 className="header-title">Chai Chee Chiet</h1>
                      <h6 className="header-mono" >Fresh Graduate | AI </h6>
                  </div>
              </div>
          </header>
          <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
              <div className="container">
                  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                              <a href="#about" className="nav-link">About</a>
                          </li>
                      </ul>
                      <ul className="navbar-nav brand">
                          <img src={profilepic} alt="" className="brand-img"></img>
                              <li className="brand-txt">
                                  <h5 className="brand-title">Chai Chee Chiet</h5>
                                  <div className="brand-subtitle">Fresh Graduate | AI</div>
                              </li>
                      </ul>
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a href="#resume" className="nav-link">Resume</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div className="container-fluid">
              <div id="about" className="row about-section">
                  <div className="col-lg-4 about-card">
                      <h3 className="font-weight-light">Who am I ?</h3>
                      <span className="line mb-5"></span>
                      <h5 className="mb-3">A fresh graduate who looking for a job</h5>
                      <p className="mt-20">I am willing to apply any job related to software engineer, machine learning engineer or backend developer</p>
                  </div>
                  <div className="col-lg-4 about-card">
                      <h3 className="font-weight-light">Personal Info</h3>
                      <span className="line mb-5"></span>
                      <ul className="mt40 info list-unstyled">
                          <li><span>Birthdate</span> : 03/05/2000</li>
                          <li><span>Email</span> : cheechiet530@gmail.com</li>
                          <li><span>Phone</span> : + (60) 17-7145692</li>
                          <li><span>Address</span> :  88, Jalan Jaya 13, Taman Pontian Jaya, 82000, Pontian, Johor, Malaysia</li>
                      </ul>
                  </div>
                  <div className="col-lg-4 about-card">
                      <h3 className="font-weight-light">My Expertise</h3>
                      <span className="line mb-5"></span>
                      <div className="row">
                          <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                          <div className="col-10 ml-auto mr-3">
                              <h6>AI Model Design</h6>
                              <p className="subtitle">Fundamentals of designing AI models and hyper-parameter tuning for experiments.</p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                          <div className="col-10 ml-auto mr-3">
                              <h6>Web Development</h6>
                              <p className="subtitle">Concept of web development, but the concept of MVC is limited.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section className="section" id="resume">
              <div className="container">
                  <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
                  <div className="row">
                      <div className="col-md-6 col-lg-4">
                          <div className="card">
                              <div className="card-header">
                                  <div className="mt-2">
                                      <h4>Experience</h4>
                                      <span className="line"></span>
                                  </div>
                              </div>
                              <div className="card-body">
                                  <h6 className="title text-danger">11/2022 - 11/2023</h6>
                                  <p>Technical Writing | Multimedia University (Malacca)</p>
                                  <p className="subtitle">AI Deep learning (Python, TensorFlow, OpenCV, Deep learning
                                      models) <a href="https://journals.mmupress.com/index.php/jiwe/article/view/771/449">PDF link</a></p>
                                  <ol>
                                      <li>Conduct transfer learning on lung cancer detection.</li>
                                      <li>Recognise disease features with machine learning
                                          methods such as OpenCV, TensorFlow, and deep
                                          learning.</li>
                                      <li>Contribute a performance summary of various models to
                                          detect lung cancer with imagery data.</li>
                                  </ol>
                                  <hr />
                                  <h6 className="title text-danger">05/2022 - 07/2022</h6>
                                  <p>IT Analyst (Internship) | Shimano Components (M) Sdn. Bhd.  </p>
                                  <p className="subtitle">Responsive frontend design (HTML5, CSS, and JavaScript)</p>
                                  <ol>
                                      <li>Learned basic responsive design according to the
                                          company needs.</li>
                                  </ol>
                                  <p className="subtitle">Safety helmet detection (Python, YOLO, and Excel)</p>
                                  <ol>
                                      <li>Contribute to data collection from the company’s CCTV.</li>
                                      <li>Filter useful images and use AI tools such as labelimg to
                                          label those people without safety helmets to perform
                                          training.</li>
                                      <li>Conducted YOLO model training with training data to
                                          detect people without helmets from the image data.</li>
                                      <li>Create an Excel alert record after the YOLO model
                                          detection with Python programming.</li>
                                  </ol>
                                  <hr />
                                  <h6 className="title text-danger">05/2020 - 07/2020</h6>
                                  <p>IT Support Assistant (Internship) | Sea To Table Sdn. Bhd.</p>
                                  <p className="subtitle">Dummy website (WordPress and SEO)</p>
                                  <ol>
                                      <li>Learn basic design and content creation with WordPress
                                          in order to understand concepts and interact with users.</li>
                                      <li>Modify the product content with SEO standards to make
                                          the product more detailed.</li>
                                  </ol>
                                  <p className="subtitle">Barcode Printing System (Excel Macro)</p>
                                  <ol>
                                      <li>Created a product price adjustment tool according to
                                          the client’s needs to save their time in finding product
                                          codes and price adjustments.</li>
                                      <li>Created a barcode printing system to record the number
                                          of prints into Excel and generate the barcode according
                                          to the company's requests.</li>
                                  </ol>
                                </div>
                              </div>
                       </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="card">
                                  <div className="card-header">
                                      <div className="mt-2">
                                          <h4>Education</h4>
                                          <span className="line"></span>
                                      </div>
                                  </div>
                                  <div className="card-body">
                                          <h6 className="title text-danger">11/2020 - 7/2023</h6>
                                          <p>Bachelor of Computer Science: Artificial Intelligence | Multimedia University (Malacca)</p>
                                          <p className="subtitle">CGPA 3.86 – Academic Achievement Award</p>
                                          <p className="subtitle">Proposed pre-trained Lung Cancer Detection with Machine Learning</p>
                                  </div>
                                  <div className="card-body">
                                      <h6 className="title text-danger">7/2018 - 7/2020</h6>
                                      <p>Diploma in Information Technology | Multimedia University (Malacca)</p>
                                      <p className="subtitle">CGPA 3.92</p>
                                      <p className="subtitle">FYP - Hotel Booking System (Explore in Admin Role)</p>
                                  </div>
                                  <div className="card-body">
                                      <h6 className="title text-danger">2013 - 2017</h6>
                                      <p>Secondary School | Sekolah Dato' Ali Haji Ahmad</p>
                                      <p className="subtitle">SPM 1A,3B,3C,3D</p>
                                  </div>
                                  
                              </div>
                          </div> 
                           <div className="col-md-6 col-lg-4">
                               <div className="card">
                           
                                   <div className="card-header">
                                     <div className="pull-left">
                                         <h4 className="mt-2">Skills</h4>
                                         <span className="line"></span>
                                     </div>
                                   </div>
                                   <div className="card-body pb-2">
                                       <h5>Intermediate Level</h5>
                                       <h6>Teachnical Writing</h6>
                                       <h6>Python</h6>
                                       <h6>Machine Learning</h6>
                                       <h6>Tensorflow, Keras, OpenCV, Pandas</h6>
                                       <h6>C/C++</h6>
                                       <h6>Excel Marco</h6>
                                       <h6>HTML5 &amp; CSS3</h6>
                                       <h6>JavaScript,</h6>
                                       <h6>PHP</h6>
                                       <h6>MySQL, PhpmyAdmin, Apache</h6>
                                       <hr/>
                                       <h5>Beginner Level</h5>
                                       <h6>C#</h6>
                                       <h6>MVC</h6>
                                       <h6>React, JQuery, Boostrap</h6>
                                       <h6>SEO</h6>
                                       <h6>Laravel</h6>
                                   </div>
                                   <hr />
                                   <div className="card-header">
                                       <div className="pull-left">
                                           <h4 className="mt-2">Languages</h4>
                                           <span className="line"></span>
                                       </div>
                                   </div>
                                   <div className="card-body pb-2">
                                       <h6>Mandarin  (Native)</h6>
                                       <h6>English (Intermediate Level)</h6>
                                       <h6>Malay (Intermediate Level)</h6>
                                   </div>
                               </div>
                           </div> 
                        </div>
                      </div>
                  </section>
         

    </>
  )
}

export default portfolio
