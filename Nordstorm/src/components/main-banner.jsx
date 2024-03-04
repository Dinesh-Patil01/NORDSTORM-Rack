import './main-banner.css'
import banner1 from "../assets/banner1/great-DP.webp"
import banner2 from "../assets/banner2/banner2.webp"
import banner3 from "../assets/banner3/banner3.mp4"
import banner41 from "../assets/banner4/banner4 -1.webp"
import banner42 from "../assets/banner4/banner4 -2.webp"
import banner43 from "../assets/banner4/banner4 -3.webp"
import banner44 from "../assets/banner4/banner4 -4.webp"
import banner45 from "../assets/banner4/banner4 -5.webp"
import banner5 from "../assets/banner5/banner5.webp"
import banner6 from "../assets/banner6/banner6.webp"
import banner71 from "../assets/banner7/banner7-1.webp"
import banner72 from "../assets/banner7/banner7-2.webp"
import banner73 from "../assets/banner7/banner7-3.webp"
import banner82 from "../assets/banner8/banner8-2.webp"
import banner10 from "../assets/banner10/banner10.webp"
import banner111 from "../assets/banner11/banner11-1.webp"
import banner112 from "../assets/banner11/banner11-2.webp"
import banner113 from "../assets/banner11/banner11-3.webp"
import banner114 from "../assets/banner11/banner11-4.webp"
import banner115 from "../assets/banner11/banner11-5.webp"
import banner121 from "../assets/banner12/banner12-1.webp"
import banner122 from "../assets/banner12/banner12-2.webp"
import banner123 from "../assets/banner12/banner12-3.webp"
import banner124 from "../assets/banner12/banner12-4.webp"
import banner125 from "../assets/banner12/banner12-5.webp"
import banner141 from "../assets/banner14/banner14-1.webp"
import banner142 from "../assets/banner14/banner14-2.webp"
import banner143 from "../assets/banner14/banner14-3.webp"
import banner144 from "../assets/banner14/banner14-4.webp"
import banner145 from "../assets/banner14/banner14-5.webp"
import banner17 from "../assets/banner17/banner17.webp"

const Banners = () =>{
    return(
        <div className='main-bannner-container'>
            <div className="bannner1">
                <div className="main-banner-parent1">
                    <a href="https://www.nordstromrack.com/c/easter-shop?campaign=eastershop">
                        <img className='set1' src={banner1} alt="" />
                    </a>
                </div>
                {/* <div className="main-banner1-text">
                    <ul className='banner1-text'>
                        <li><a href="/c/easter-shop?campaign=eastershop"><span>Easter Deals & Gifts</span></a></li>
                        <li><a href="/promo/store-details"><span></span>Find Your Rack</a></li>
                    </ul>
                </div> */}
            </div>


            <div className="bannner2">
                <div className="main-banner-parent2">
                    <img className='set2' src={banner2} alt="" />
                </div>
            </div>


            <div className="bannner3">
                <div className="main-banner-parent3">
                    <video  className='set3' src={banner3}></video>
                </div>
            </div>


            <div className="bannner4">
                <div className="main-banner-parent4">
                    <div className="banner-heading">
                        <h1>New From Brands You Love</h1>
                        <div className='b4-options-parent'>
                            <div className="b4-options">
                                <div className="b4opt">
                                    <div className="b4opt-pic">
                                        <img className="set4" src={banner41} alt="" />
                                    </div>
                                    <div className="b4opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$169.97 (75% off)</h3>
                                        <h4>$700.00</h4>
                                    </div>
                                </div>
                                <div className="b4opt">
                                    <div className="b4opt-pic">
                                        <img className="set4" src={banner42} alt="" />
                                    </div>
                                    <div className="b4opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                    
                                </div>
                                <div className="b4opt">
                                    <div className="b4opt-pic">
                                        <img className="set4" src={banner43} alt="" />
                                    </div>
                                    <div className="b4opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                </div>
                                <div className="b4opt">
                                    <div className="b4opt-pic">
                                        <img className="set4" src={banner44} alt="" />
                                    </div>
                                    <div className="b4opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                   
                                </div>
                                <div className="b4opt">
                                    <div className="b4opt-pic">
                                        <img className="set4" src={banner45} alt="" />
                                    </div>
                                    <div className="b4opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (33% off)</h3>
                                        <h4>$223.97</h4>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bannner5">
                <div className="main-banner-parent5">
                    <img className='set5' src={banner5} alt="" />
                </div>
            </div>


            <div className="bannner6">
                <div className="main-banner-parent6">
                    <img className='set6' src={banner6}></img>
                </div>
            </div>


            <div className="bannner7">
                <div className="main-banner-parent7">
                   <img className='set7' src={banner71} alt="" />
                   <img className='set7' src={banner72} alt="" />
                   <img className='set7' src={banner73} alt="" />
                </div>
            </div>


            <div className="bannner8">
                <div className="main-banner-parent8">
                    <img  className='set8' src={banner82}></img>
                </div>
            </div>


            {/* <div className="bannner9">
                <div className="main-banner-parent9">
                    
                </div>
            </div> */}


            <div className="bannner10">
                <div className="main-banner-parent10">
                    <img className='set10' src={banner10} alt="" />
                </div>
            </div>


            <div className="bannner11">
                <div className="main-banner-parent11">
                    <div className="banner-heading">
                        <h1>Trending Now</h1>
                        <div className='b11-options-parent'>
                            <div className="b11-options">
                                <div className="b11opt">
                                    <div className="b11opt-pic">
                                        <img className="set11" src={banner111} alt="" />
                                    </div>
                                    <div className="b11opt-details">
                                        <p>New Balance</p>
                                        <h3>$62.97 – $69.97</h3>
                                        <h4>(Up to 37% off)</h4>
                                    </div>
                                </div>
                                <div className="b11opt">
                                    <div className="b11opt-pic">
                                        <img className="set11" src={banner112} alt="" />
                                    </div>
                                    <div className="b11opt-details">
                                        <p>KUT from the Kloth</p>
                                        <h3>$44.97 (52% off)</h3>
                                        <h4>$94.00</h4>
                                    </div>
                                    
                                </div>
                                <div className="b11opt">
                                    <div className="b11opt-pic">
                                        <img className="set11" src={banner113} alt="" />
                                    </div>
                                    <div className="b11opt-details">
                                        <p>BY DESIGN</p>
                                        <h3>$39.97 (54% off)</h3>
                                        <h4>$88.00</h4>
                                    </div>
                                </div>
                                <div className="b11opt">
                                    <div className="b11opt-pic">
                                        <img className="set11" src={banner114} alt="" />
                                    </div>
                                    <div className="b11opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                   
                                </div>
                                <div className="b11opt">
                                    <div className="b11opt-pic">
                                        <img className="set11" src={banner115} alt="" />
                                    </div>
                                    <div className="b11opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (33% off)</h3>
                                        <h4>$223.97</h4>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bannner12">
                <div className="main-banner-parent12">
                    <div className="banner-heading">
                        <h1>Easter Looks for the Little Ones</h1>
                        <div className='b12-options-parent'>
                            <div className="b12-options">
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner121} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$169.97 (75% off)</h3>
                                        <h4>$700.00</h4>
                                    </div>
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner122} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                    
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner123} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner124} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                   
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner125} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>Alton Lane</p>
                                        <h3>$149.97 (33% off)</h3>
                                        <h4>$223.97</h4>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bannner14">
                <div className="main-banner-parent14">
                    <div className="banner-heading">
                        <h1>Easter Looks for the Little Ones</h1>
                        <div className='b14-options-parent'>
                            <div className="b14-options">
                                <div className="b14opt">
                                    <div className="b14opt-pic">
                                        <img className="set14" src={banner141} alt="" />
                                    </div>
                                    <div className="b14opt-details">
                                        <p>American Dior</p>
                                        <h3>$169.97 (75% off)</h3>
                                        <h4>$700.00</h4>
                                    </div>
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner142} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>Dior Lane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                    
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner143} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>AltonL ane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner144} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p> ALFane</p>
                                        <h3>$149.97 (25% off)</h3>
                                        <h4>$199.97</h4>
                                    </div>
                                   
                                </div>
                                <div className="b12opt">
                                    <div className="b12opt-pic">
                                        <img className="set12" src={banner145} alt="" />
                                    </div>
                                    <div className="b12opt-details">
                                        <p>talyo</p>
                                        <h3>$149.97 (33% off)</h3>
                                        <h4>$223.97</h4>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="bannner16">
                <div className="main-banner-parent16">
                    <div className="banner-heading">
                        <h1>Recently Viewed</h1>
                    </div>
                </div>
            </div> */}

            <div className="bannner17">
                <div className="main-banner-parent17">
                    <img  className='set17' src={banner17}></img>
                </div>
            </div>


            <div className="get-mail">
                <div className="update">
                    <h3>Get Email Updates:</h3>
                    <input className='inp' type="email" name="" id="" placeholder='Email Address'/>
                    <button className='btns'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Banners;