import ButtonSaya from "./ButtonSaya"
import React from "react";

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

class AboutMe extends React.Component {
    render () {
    return (
     <div className="section"> 
        <div className="row align-items-center text-light" >
            <div className="col-6 text-center">
            <img className="avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgrc9A77noxl54MhKrIFzkeXUMbfZwLigJA&usqp=CAU"
                /> </div>
       
             <div className="col-6"> 
             <h1> About me </h1>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </p>

             <ButtonSaya 
             text="Download CV" 
             warna= "light"
             link="https://www.canva.com/design/DAF8YBbVm9I/jFlC90pxAmVPaDbzkxF2iA/edit"
                /> </div>
        </div> 
    </div>

       );
    }
}


export default AboutMe;