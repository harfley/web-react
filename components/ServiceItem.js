import "../styles/ServiceItem.css"

function ServicesItem (props) {
  
    const classCard = "card-body" + props.warna
    return (
      <div className="col-6 mt-3">
        <div class="card text-dark p-4">
            <div class={classCard}>
                <h5 class="card-title">{props.judul}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.deskripsi}</h6>
                    <p class="card-text">{props.penjelasan}</p>
                    <a href={props.link} class="card-link">Click This</a>
             </div>
        </div>
      </div>

    )
}

export default ServicesItem