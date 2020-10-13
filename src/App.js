import React from "react";
import Header from "./header";
import Services from "./services";
import About from "./about";
import Team from "./team"

import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      <Header />
      <Services />
      <div class="d-flex justify-content-center mt-5 mb-3">
        <h3 class="rcorners3 text-white text-center">About</h3>
      </div>
      <About />
      <Team />
    </ThemeProvider>
  );
}

export default App;

// return (
//   <div className="App" id="page-top">
//     <nav class="navbar navbar-expand-md navbar-dark bg-d fixed-top">
//       <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//         <a class="navbar-brand js-scroll-trigger" href="#page-top">

//           <img src="/group2.png" height="80" />
//         </a>
//       </div>
//       <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
//         <ul class="navbar-nav ml-auto">
//           <li class="nav-item">
//             <a class="nav-link text-white js-scroll-trigger" href="#services">Services</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-white js-scroll-trigger" href="#about">About</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-white js-scroll-trigger" href="#team">Team</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-white js-scroll-trigger" href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>

//     <div class="container-fluid  main-section">

//       <div class="row section-part">
//         <div class="col-md-12">
//           <h1 class="float-left">Welcome To Our Creativity Hub!</h1>
//         </div>
//         <div class="col-md-12">
//           <p class="float-left">
//             IT'S NICE TO MEET YOU
//       </p>
//         </div>
//         <div class="col-md-12">
//           <button class="btn btn-light">What do we do?</button>
//         </div>
//       </div>
//       <i class="fa fa-angle-double-down blink" aria-hidden="true"></i>
//     </div>
//     <div class="container-fluid ">


//       <section id="services">

        // <div class="d-flex justify-content-center mt-5 mb-3">
        //   <h3 class="rcorners3 text-white text-center">Services</h3>
        // </div>

//         <div class="row  mt-5">

//           <div class="col-md-4">
//             <div class="row">
//               <div class="col-md-2 mr-5">
//                 <img src="/mobile.PNG" alt="" />
//               </div>
//               <div class="col-md-8">
//                 <h4>Mobile Applications</h4>
//                 <p>
//                   We create elegant mobile applications with stunning features
//                   that will give you are wider reach and show your clients how
//                   far you are willing to go to serve them better.
//               </p>
//               </div>
//             </div>
//           </div>


//           <div class="col-md-4">
//             <div class="row">
//               <div class="col-md-2 mr-5">
//                 <img src="/Annotation 2020-09-21 163901.png" alt="" />
//               </div>
//               <div class="col-md-8">
              //   <h4>Responsive Web Design</h4>
              //   <p>
              //     We design, develop, commission and maintain fast, beautiful and websites that will look
              //     great on any
              //     screen and keep your visitors coming back.
              // </p>
//               </div>
//             </div>
//           </div>


//           <div class="col-md-4">
//             <div class="row">
//               <div class="col-md-2 mr-5">
//                 <img src="/Annotation 2020-09-21 164340.png" alt="" />
//               </div>
//               <div class="col-md-8">

              //   <h4>Security</h4>
              //   <p>
              //     We carry out through penetration tests and identify potential vulnerabitity in your network
              //     infrastructure; hardware, software and dependent resources inclusive. Our team of security
              //     experts
              //     will plug these weaknesses, and provide continuous guidance on how to minimize creating
              //     others as
              //     your resources grow.
              // </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="row mt-5">
//           <div class="col-md-4">
//             <div class="row">
//               <div class="col-md-2 mr-5">
//                 <img src="/Annotation 2020-09-21 170012.png" alt="" />
//               </div>
//               <div class="col-md-8">
              //   <h4>Scalability & Performance</h4>
              //   <p>
              //     We pride ourselves in being able to make your application handle millions of user requests
              //     as
              //     quickly and efficiently as it handles a single user. This is vital in creating a pleasant
              //     user
              //     experience, and keep them loyal to you.
              // </p>
//               </div>
//             </div>
//           </div>
//           <div class="col-md-4">
//             <div class="row">
//               <div class="col-md-2 mr-5">
//                 <img src="/Annotation 2020-09-21 171708.png" alt="" />
//               </div>
//               <div class="col-md-8">
              //   <h4>System & Database Administration</h4>
              //   <p>
              //     We will manage your server installation, topology and configuration, minimize your downtimes
              //     making
              //     your services available at user convenience and keep your clientelle happy.
              // </p>
//               </div>
//             </div>
//           </div>
//           <div class="col-md-4">
//             <div class="row">
//               <div class="col-md-2 mr-5">
//                 <img src="/Annotation 2020-09-21 171752.png" alt="" />
//               </div>

//               <div class="col-md-8">

              //   <h4>IT Consultancy</h4>

              //   <p>
              //     Need guidance on how to handle problems in the computer technology sphere? Talk to us. We
              //     will put
              //     all the knowledge and years of experience to use to help you in the right direction.
              // </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>




//       <section id="about">

        // <div class="d-flex justify-content-center mt-5 mb-3">
        //   <h3 class="rcorners3 text-white text-center">About</h3>
        // </div>

//         <div class="d-flex justify-content-center mt-5 mb-3">
//           <h5>A few facts about Apps On Point LTD.</h5>
//         </div>

//         <div class="row">
//           <div class="col-md-6">
//             <div class="card box">
//               <div class="card-body">
              //   <h4 class="text-center">WHY APPS ON POINT?</h4>
              //   <h5 class="text-center">We keep your applications on point</h5>

              //   <p>
              //     Our expertise reach covers all the areas that are needed to keep consumer applications
              //     running optimaly and flawlessly. We handle application design, development, debugging,
              //     installation, maintainance, documentation, upgrading, security, database management, system
              //     tuning and scaling. In addition, the term 'Apps' shows that we are modern and aware of the
              //     changing trends in both the software technology and user circles.
              // </p>
//               </div>
//             </div>
//           </div>
//           <div class="col-md-6" height="400">
//             <div class="card box">
//               <div class="card-body">
//                 <h4 class="text-center">MISSION</h4>
//                 <h5 class="text-center">Client satisfaction</h5>
//                 <p>
//                   At Apps On Point limited, we strive to keep you happy to work with us, by being exceptional
//                   at our work, exceeding your expectations and providing excellent customer relations.
//                   <br />
//                   <br />
//                   <br />
//                   <br />
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>



//       <section id="team">

//         <div class="d-flex justify-content-center  mt-5 mb-3 ">
//           <h3 class="rcorners3 text-white text-center">Team</h3>
//         </div>

//         <div class="row ml-5">
          // <div class="col-md-3">
          //   <img src="/avataaars.png" height="200" width="200" alt="" />
          //   <h4 class="justify-content-center mt-5">CEO</h4>
          //   <h5 class="justify-content-center">Joe Doe</h5>
          // </div>
          // <div class="col-md-3">
          //   <img src="/avataaars.png" height="200" width="200" alt="" />
          //   <h4 class="justify-content-center mt-5">CTO</h4>
          //   <h5 class="justify-content-center">John Walker</h5>
          // </div>
          // <div class="col-md-3">
          //   <img src="/avataaars.png" height="200" width="200" alt="" />
          //   <h4 class="justify-content-center mt-5">COO</h4>
          //   <h5 class="justify-content-center">Mary Marks</h5>
          // </div>
          // <div class="col-md-3">
          //   <img src="/avataaars.png" height="200" width="200" alt="" />
          //   <h4 class="justify-content-center mt-5">HIRING MANAGER</h4>
          //   <h5 class="justify-content-center ">Pauline Kalxya</h5>
          // </div>
//         </div>
//       </section>

//       <section id="contact">

//         <div class="d-flex justify-content-center mt-5 mb-3">
//           <h3 class="rcorners3 text-white text-center">Contact</h3>
//         </div>



//         <footer class="bg-dark text-white mt-4">
//           <div class="row">
//             <div class="col-md-4 mt-5 p-5">
//               <h1>Contact Info</h1>
//               <h4>info@AppsOnPoint.com</h4>
//               <h4>0733 330 395</h4>

//               <h1 class="mt-5">Address</h1>
//               <h4>P.O. BOX 1302</h4>
//               <h4>Nairobi, Kenya</h4>

//               <h1 class="mt-5">Location</h1>
//               <h4>Hurlingham, Nairobi</h4>

//             </div>
//             <div class="col-md-4 mt-5 p-5">
//               <h1 class="mt-5">Navigation</h1>
//               <h4>
//               <a class="text-white js-scroll-trigger" href="#page-top">Home</a>

//               </h4>
//               <h4>
//                 <a class="text-white js-scroll-trigger" href="#about">About</a>
//               </h4>
//               <h4>
//                 <a class="text-white js-scroll-trigger" href="#services">Services</a>
//               </h4>
//               <h4>
//                 <a class="text-white js-scroll-trigger" href="#team">Our Team</a>
//               </h4>
//               <h4>
//                 <a class="text-white js-scroll-trigger" href="#contact">Contact</a>
//               </h4>

//             </div>
//             <div class="col-md-4 mt-5 p-5">
//               <img src="/Annotation 2020-09-21 234646_1.png" alt="" />
//             </div>
//           </div>
//         </footer>
//       </section>
//     </div>
//   </div>
// );