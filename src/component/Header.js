import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div class="header p-5">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <div id="logo">
              <Link to="/" >
                <img src={require('../assets/images/logo.png')} alt="nVpn logo" width={330} height={200} data-xblocker="passed" />
              </Link>
            </div>
            <div id="topmenu" class="items-end">
              <div>
                <ul class="flex gap-1 text-white item-center">
                  <li class=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">24/7 Support</li>
                  <li class=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/members" className=" no-underline" ><span>Client Area</span></Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul id="nav" class="flex gap-1 text-white item-center">
                  <li class=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/" className=" no-underline" ><span>Home</span></Link>
                  </li>
                  <li class=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/order" className=" no-underline"  ><span>Order Now</span></Link>
                  </li>
                  <li class=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/questionList" className=" no-underline" ><span>F.A.Q</span></Link>
                  </li>
                  <li class=" px-6 py-2 font-medium text-[#7E8186] hover:text-[#f6d12b]">
                    <Link to="/submit" className=" no-underline" ><span>Contact Us</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
