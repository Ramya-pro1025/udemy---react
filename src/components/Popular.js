import pc5 from "../assets/images/c5.jpg";
import pc6 from "../assets/images/c6.jpg";
import pc7 from "../assets/images/c7.jpg";
import pc8 from "../assets/images/c8.jpg";
import pc9 from "../assets/images/c9.jpg";
import pc10 from "../assets/images/c10.jpg";
import rc4 from "../assets/images/c4.jpg";
import pc12 from "../assets/images/c12.jpg";

function Popular()
{
  return(
    <div className="popular">
<h1 className="popular__title">Most Popular</h1>
<p className="popular__subtitle">Pick the best fit</p>

<div className="popular__container">

    <div className="course-card">
        <img src={pc5} alt="Master data analysis and visualization with Python"/>
        <h3>Master data analysis and visualization with Python</h3>
        <p>4.3 ⭐⭐⭐⭐ </p>
        <p>800 <del>1999</del> </p>
      </div>

      <div className="course-card">
        <img src={pc6} alt="Cybersecurity Essentials"/>
        <h3>Cybersecurity Essentials</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>500 <del>700</del></p>
    </div>

    <div className="course-card">
        <img src={pc7} alt="Programming Fundamentals with Python and JavaScript"/>
        <h3>Programming Fundamentals with Python and JavaScript</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>2500 <del>5000</del></p>
    </div>

    <div className="course-card">
        <img src={pc8} alt="AI fundamentals and deep learning"/>
        <h3>AI fundamentals and deep learning</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>900 <del>2000</del></p>
    </div>

    <div className="course-card">
        <img src={pc9} alt="VR Essentials using platform like unity"/>
        <h3>VR Essentials using platform like unity </h3>
        <p>Col Steele</p>
        <p>4.3 ⭐⭐⭐⭐ </p>
        <p>800 <del>1999</del> </p>
      </div>

      <div className="course-card">
        <img src={pc10} alt="Fundamentals of Machine learning by using data modelling"/>
        <h3>Fundamentals of Machine learning by using data modelling</h3>
        <p>Col Steele</p>
        <p>4.3 ⭐⭐⭐⭐ </p>
        <p>800 <del>1999</del> </p>
      </div>

      <div className="course-card">
        <img src={rc4} alt="Cloud computing Essentials using platform AWS"/>
        <h3>Cloud computing Essentials using platform AWS</h3>
        <p>Col Steele</p>
        <p>4.3 ⭐⭐⭐⭐ </p>
        <p>800 <del>1999</del> </p>
      </div>

     <div className="course-card">
        <img src={pc12} alt="Android app Essentials from UI design to integrating API"/>
        <h3>Android app Essentials from UI design to integrating API</h3>
        <p>Col Steele</p>
        <p>4.3 ⭐⭐⭐⭐ </p>
        <p>800 <del>1999</del> </p>
      </div>
</div>
</div>  

  )
}
export default Popular;