import react from "react";

function Footer() {
    return(
        <footer>
            <section className="footer-top">
                <img src="/assets/img/footer-top.png" />
                <div></div>
                <h2>WHAT ARE YOU WAITING <br />FOR? BECOME A VOXEL</h2>
            </section>
            <div className="footer-link">
                <a href="#"><img src="/assets/img/logo.png" alt="logo" /></a>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#roadmap">ROADMAP</a>
                        </li>
                        <li>
                            <a href="#team">TEAM</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li>
                            <a href=""><img src="/assets/img/social-twitter.svg" alt="twitter" /></a>
                        </li>
                        <li>
                            <a href=""><img src="/assets/img/social-instagram.svg" alt="isntagram" /></a>
                        </li>
                        <li>
                            <a href=""><img src="/assets/img/social-discord.svg" alt="discord" /></a>
                        </li>
                        <li>
                            <a href=""><img src="/assets/img/social-telegram.svg" alt="telegram" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© 2022 Wealth Cyborg Club. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer