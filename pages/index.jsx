const home= ()=>{
    return(

        <main className="page_home">
           <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://picsum.photos/seed/43/500" height="400"className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/seed/45/500" height="400"className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/seed/48/500" height="400"className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </a>
</div>

        </main>
    )
}

export default home