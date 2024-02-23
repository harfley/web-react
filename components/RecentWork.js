import React from "react"

    const daftarGambar = [
        "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661412938808-a0f7be3c8cf1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    class RecentWork extends React.Component {
        render () {
    return (
    <div className="section2 py-5 bg-dark text-light"> 
        <div className="container">
             <h1> RecentWork </h1>
             <div className="row mt-5">
                {
                    daftarGambar.map(function (gambar) {
                        return (
                         <div className="col-6 mt-3 gambarku">
                            <img className="img-fluid" src={gambar}></img>
                        </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
         
    )
}
    }

export default RecentWork