import "./header.css";

let Header = () => {
  return (
    <div id="navbar1">
      <nav>
        <div id="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h2>GeekFoods</h2>
        </div>
        <div id="navitems">
          <ul type="none">
            <li>Home</li>
            <li>Quote</li>
            <li>Resturants</li>
            <li>Foods</li>
            <li>Contact</li>
          </ul>
        </div>
        <div id="getstarted">
          <button id="get">Get Started</button>
        </div>
      </nav>
   <br />
     
    </div>
  );
};
export default Header;
