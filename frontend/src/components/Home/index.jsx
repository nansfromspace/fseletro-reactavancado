import Banner1 from '../../assets/banner.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';

const Home = () => {
    return(
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img className="d-block w-100" src={Banner1} alt="Primeiro Slide"/>
        </div>
        <div className="carousel-item">
        <img className="d-block w-100" src={Banner2} alt="Segundo Slide"/>
        </div>
        <div className="carousel-item">
        <img className="d-block w-100" src={Banner3} alt="Terceiro Slide"/>
        </div>
    </div>
</div>
    )
}

export default Home;