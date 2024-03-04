import './footer.css'

const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="footer-parent">
                <div className="footer-details">
                    <section className='dtls'>
                        <h3>Customer Service</h3>
                        <ul className="no-bullets">
                            <li><a className="clr" href="https://www.nordstromrack.com/my-account/order-lookup">Order Status</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/my-account/blank-return">Guest Returns</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/ship-return-policy">Shipping & Return Policy</a></li>
                            <li><a className="clr" href="https://rack.giftcard.nordstrom.com/store/recipient?locale=en-us">Gift Cards</a></li>
                            <li><a className="clr" href="https://www.nordstrom.com/browse/customer-service/product-recalls">Product Recalls</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/faq">FAQ</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/faq#anchor-link-customer-care">Contact Us</a></li>
                        </ul>
                    </section>
                    <section className='dtls'>
                        <h3>About Us</h3>
                        <ul className="no-bullets">
                            <li><a className="clr" href="https://www.nordstromrack.com/about">About Our Brand</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/nordyclub">The Nordy Club</a></li>
                            <li><a className="clr" href="https://stores.nordstromrack.com/search">Store Locator</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/brands">All Brands</a></li>
                            <li><a className="clr" href="https://careers.nordstrom.com/#/home/rack">Careers</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/my-account/marketing-email-opt-in/">Get Email Updates</a></li>
                            <li><a className="clr" href="https://www.nordstrom.com/browse/content/style-guides?origin=footer">Nordstrom Blog</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/promo/nordy-podcast?origin=footer">Nordy Podcast</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/promo/new-store-openings">Store Openings</a></li>
                        </ul>
                    </section>
                    <section className='dtls'>
                        <h3>Nordstrom Rack & The Community</h3>
                        <ul className="no-bullets">
                            <li><a className="clr" href="https://www.nordstromrack.com/promo/nordstrom-cares">Corporate Social Responsibility</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/promo/diversity-at-nordstrom">Diversity, Equity, Inclusion & Belonging</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/bbbs">Big Brothers Big Sisters</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/promo/donateclothes">Donate Clothes</a></li>
                        </ul>
                    </section>
                    <section className='dtls'>
                        <h3>Nordstrom Card</h3>
                        <ul className="no-bullets">
                            <li><a className="clr" href="https://www.nordstromrack.com/creditcard/entry?cc=RA1001">Apply for a Nordstrom Card</a></li>
                            <li><a className="clr" href="https://www.nordstromcard.com/auth/payments/pay-bill-now/edit">Pay My Bill</a></li>
                            <li><a className="clr" href="https://www.nordstromcard.com/?origin=footer">Manage my Nordstrom Card</a></li>
                        </ul>
                    </section>
                    <section className='dtls'>
                        <h3>Nordstrom, Inc.</h3>
                        <ul className="no-bullets">
                            <li><a className="clr" href="https://www.nordstrom.com/">Nordstrom</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/promo/hautelook">HauteLook</a></li>
                            <li><a className="clr" href="https://press.nordstrom.com/investor-relations">Investor Relations</a></li>
                            <li><a className="clr" href="http://press.nordstrom.com/phoenix.zhtml?c=211996&p=irol-overview&origin=footer">Press Releases</a></li>
                            <li><a className="clr" href="https://www.nordstromrack.com/promo/nordstrom-media-network?origin=footer">Nordstrom Media Network</a></li>
                        </ul>
                    </section>
                </div>
                <div className="social-logos">
                    <div className="logos">
                        <section className='logs'>
                            <i class="fa-solid fa-download "></i>
                            <a id='l' className='l' href="">Download Our Apps</a>
                        </section>
                        <section className='log'>
                            <a className='l' href=""><i class="fa-brands fa-facebook"></i></a>
                            <a className='l' href=""><i class="fa-brands fa-x-twitter"></i></a>
                            <a className='l' href=""><i class="fa-brands fa-pinterest"></i></a>
                            <a className='l' href=""><i class="fa-brands fa-instagram"></i></a>
                        </section>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                    <div className="footer-base">
                        <ul className="footer-bases">
                            <li><a className='clr' href="https://nordstrom.com/browse/customer-service/policy/privacy">Privacy</a></li>
                            <li><a className='clr' href="https://www.nordstrom.com/browse/customer-service/policy/privacy#anchor-link-your-options">Your Privacy Rights</a></li>
                            <li><a className='clr' href="https://www.nordstromrack.com/terms">Terms & Conditions</a></li>
                            <li><a className='clr' href="https://www.nordstrom.com/browse/nordstrom-cares">California Supply Chain Act</a></li>
                            <li>©2024 Nordstrom Rack</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Footer;