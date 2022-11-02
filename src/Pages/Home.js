
import { ControlledCarousel } from "../Components/Carousel/Carousel"

export const Home = () => {
    return (
        <div className="home">
            {/* <ControlledCarousel /> */}
            <div className="card bg-dark text-white border-0">
                <img src="assets/img-marketing.jpg" className="card-img" alt="Marketing" height="675px" />
                {/* <div className="card-img-overlay">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                        <p className="card-text fs-2">CHECK OUT ALL THE NEW TRENDS</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}