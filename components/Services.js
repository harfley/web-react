import ServicesItem from "./ServiceItem"
import React from 'react';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

class Services extends React.Component {
   render () {
    return (
        <div className="section1 bg-dark text-light"> 
        <div className="container">
            <h1> Project </h1>
            <div className="row">
                 <ServicesItem 
                    judul = "Project 1"
                    deskripsi = "Membuat UI/UX Web di Figma."
                    penjelasan = "Saya membuat desain website pertama kali saya, pada project ini. Dan ini sangat berharga untuk saya kedepan nya."
                    link = "https://www.figma.com/file/Ii8QztDucR51teihNG6NlR/Untitled?type=design&t=2hj5cxFLfLT0ZANz-6"
                 />

                 <ServicesItem 
                    judul = "Project 2"
                    deskripsi = "Membuat UI/UX Web Design untuk lomba."
                    penjelasan = "Saya membuat desain website pertama kali saya, pada project ini saya membuat itu untuk mengikuti lomba pertama kali saya."
                    link = "https://www.figma.com/file/f7OEhTTrqqntgjbB9Hui1e/Prototype?type=design&t=2hj5cxFLfLT0ZANz-6"
                 />

                 <ServicesItem 
                    judul = "Project 3"
                    deskripsi = "Pengerjaan Tugas Coding selama kelas 10."
                    penjelasan = "Saya menyimpan segala tugas coding saya pada akun Github saya, sebagai penyimpan segala macam projek saya selama bangku smk."
                    link = "https://github.com/harfley/Assignment"
                 />

                 <ServicesItem 
                    judul = "Project 4"
                    deskripsi = "Membuat desain kelompok untuk MIC."
                    penjelasan = "Saya dengan tim membuat aplikasi mobile untuk ide bisnis MIC kami, MIC adalah salah satu bentuk event yang ada di SMK Telkom Malang."
                    link = "https://www.figma.com/file/FFYDDRedFjqoTBK8Fbllwg/MIC_Keluarga_Cemara?type=design&t=2hj5cxFLfLT0ZANz-6"
                 />
            </div>
        </div>
    </div>
    );
   }
}

export default Services