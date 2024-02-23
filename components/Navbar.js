import React from "react";
import { Link } from "react-router-dom";

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
  navbar: {
    justifyContent: "center",
    width: "100%",
    margin: "auto",
    display: "flex",
    lineHeight: "80px",
    position: "sticky",
    top: "0",
    background: "#000000",
    zIndex: "100",
    fontFamily: "Poppins, sans-serif", 
  },
  logo: {
    fontFamily: "Poppins, sans-serif", 
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#000000",
  },
  navLinks: {
    display: "flex",
    gap: "50px",
  },
  link: {
    textDecoration: "none",
    color: "#D7E4C0",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif", 
  },
};

class Header extends React.Component {
  render() {
    return (
      <div style={styles.navbar}>
        
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>
            Beranda
          </Link>
          <Link to="/AboutMe" style={styles.link}>
            Tentang Saya
          </Link>
          <Link to="/RecentWork" style={styles.link}>
            Recent Work
          </Link>
          <Link to="/Services" style={styles.link}>
            Project
          </Link>
          </div>

        </div>
    );
  }
}

export default Header



// function Navbar () {
//     return (
//     <div>
//         <nav class="navbar navbar-expand-lg navbar-light bg-dark">
//   <div class="container">
//     <a class="navbar-brand" href="#"> Portofolio </a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">

//       <ul class="navbar-nav ms-auto">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/AboutMe">About Me</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/ServicesItem">Project</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/RecentWork">Recent Work</a>
//         </li>
//         {/* /* <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li> */ }
//       </ul>
//     </div>
//   </div>
// </nav>

// </div>
//     )
// }

// export default Navbar