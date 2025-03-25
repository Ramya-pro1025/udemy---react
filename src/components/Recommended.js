import rc1 from "../assets/images/c1.jpg";
import rc2 from "../assets/images/c2.jpg";
import rc3 from "../assets/images/c3.jpg";
import rc4 from "../assets/images/c4.jpg";

function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>

      <div className="recommended__container">
        <div className="course-card">
          <img src={rc1} alt="2023 Python Data Visualisation Masterclass course" />
          <h3>2023 Python Data Visualisation Masterclass</h3>
          <p>Col Steele</p>
          <p>4.3 ⭐⭐⭐⭐ </p>
          <p>800 <del>1999</del> </p>
        </div>

        <div className="course-card">
          <img src={rc2} alt="Web Development Bootcamp 2023 course" />
          <h3>Web Development Bootcamp 2023</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>500 <del>700</del></p>
        </div>

        <div className="course-card">
          <img src={rc3} alt="Master UI/UX Designing with Figma course" />
          <h3>Master UI/UX Designing with figma</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>2500 <del>5000</del></p>
        </div>

        <div className="course-card">
          <img src={rc4} alt="Machine Learning Algorithms Python & R Course for Beginners" />
          <h3>Machine Learning Algorithms, Python & R Course for Beginners</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>900 <del>2000</del></p>
        </div>
      </div>
    </div>
  );
}
export default Recommended;