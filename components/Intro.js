import ButtonSaya from "./ButtonSaya"
import React from 'react';
import { Link } from 'react-router-dom';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
    footer: {
        textAlign: 'center',
        marginTop: '40px',
        borderTop: '1px solid #ccc',
        paddingTop: '20px',
      },
      footerText: {
        fontSize: '14px',
        color: '#666',
      },
    };

class Intro extends React.Component {
    render () {
    return (
        <div className="intro text-light">
            <div className="container text-center">
                <img 
                    className="avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgrc9A77noxl54MhKrIFzkeXUMbfZwLigJA&usqp=CAU"
                />
                <h1> Alyssa Ishma Naurahma </h1>
                <p> siswa </p>
                <a target="_blank" href="https://wa.me/6281553470865" className="sosial-media">
                   <i class="bi bi-whatsapp"></i>
                </a>
                
                <a target="_blank" href="#" className="sosial-media">
                   <i class="bi bi-instagram"></i>
                </a>

                <a target="_blank" href="https://github.com/harfley" className="sosial-media">
                   <i class="bi bi-github"></i>
                </a>

                <div className="row">
                    <div className="col">
                       <ButtonSaya 
                       text = "Hire Me"
                       link = ""
                       warna = "dark"
                       />
                </div>

               </div>
               
            </div>
{/* 
            <footer style={styles.footer}>
          <p style={styles.footerText}>© 2023 Portofolio Saya</p>
        </footer> */}
            
        </div>
        
    );
    }
}

export default Intro;
