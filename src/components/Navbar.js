function Navbar()
{
  return(
    <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
      </div>
      <div className="navbar__s2">
        <i className="fa-solid fa-magnifying-glass" style={{ color: "#000000" }}></i>
        <input placeholder="search for anything here.Tech, Business, Art..." />
      </div>
      <div className="navbar__s3">
        <p>Courses</p>
        <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>
        <i className="fa-solid fa-cart-shopping" style={{ color: "#00060f" }}></i>
        <i className="fa-solid fa-bell" style={{ color: "#000714" }}></i>
        <i className="fa-solid fa-user" style={{ color: "#01060e" }}></i>
      </div>
      <div className="navbar__s4">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
export default Navbar;