import saleimage from "../assets/images/sale-image.jpg";  // Import the image

function SaleImage()
{
  return (
    <div className="sale-image">
        <img src={saleimage} alt="Sale"/>
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale, 24hours to save.</h2>
            <p>Get the top courses for just 499. Just one day to save but lifetime to learn.</p>
        </div>
    </div>
  )
}
export default SaleImage;