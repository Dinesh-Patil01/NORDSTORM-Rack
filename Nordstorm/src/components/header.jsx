import './header.css'
import logo from "../assets/logo/nord-logo.png";
import { useAuth0 } from "@auth0/auth0-react";


const Header = () =>{
    const { loginWithRedirect, logout ,isAuthenticated} = useAuth0();
    return(
        <div className="header-container">
            <div className="header-parent">
                <div className="header-text">
                    <h3>Free shipping on most orders over $89. Shop online or pick up select orders at a Nordstrom Rack or Nordstrom store. <a className='head-a' href="https://www.nordstromrack.com/ship-return-policy">Learn More</a></h3>
                </div>
            </div>


            <div className="head-main-container">
                <div className="head-main-parent">
                    <div className="head-logo">
                        <img className='head-img' src={logo} alt="" />
                    </div>
                    <div className="main-search-parent">
                        <div className="search-logo">
                            <i  class="fa-solid fa-magnifying-glass h-10"></i>
                        </div>
                        <div className="search-box">
                            <input className='search-input' type="text"  placeholder='Search For Products Or Brands'/>
                        </div>
                    </div>
                    <div className="head-options">
                        <div>
                            {isAuthenticated ?(
                                 <button className='mybtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                 Log Out
                             </button>
                            ): (
                                <button className='mybtn' onClick={() => loginWithRedirect()}>Sign In</button>
                            )}
                             {/* <a className='opt1' href="">Sign In</a> */}
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-store"></i>
                            <a className='opt2' href="">Stores</a>
                        </div>
                        <div>
                            <i class="fa-solid fa-box"></i>
                            <a className='opt3' href="">Purchases</a>
                        </div>
                        <div>
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>


            <div className="break-line">
                <hr  className='line'/>
            </div>


            <div className="shop-options-container">
                <div className="shop-option-parent">
                    <div className="shop-option">
                        <a className='options' href="">New</a>
                        <a className='options' href="">Clearance</a>
                        <a className='options' href="">Women</a>
                        <a className='options' href="">Men</a>
                        <a className='options' href="">Kids</a>
                        <a className='options' href="">Shoes</a>
                        <a className='options' href="">Bags & Accessories</a>
                        <a className='options' href="">Home</a>
                        <a className='options' href="">Beauty</a>
                        <a className='options' href="">Gift Guide</a>
                        <a className='options' href="">Flash Events</a>
                    </div>
                </div>
            </div>


            <div className="sign-account-container">
                <div className="sign-account-parent">
                    <div className="sign-account-text">
                        <h1>More to Rack, easier and faster.</h1>
                    </div>
                    <div className="sign-account-btn">
                        <div >
                           <button className="sign-btn">Sign In or Create an Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;