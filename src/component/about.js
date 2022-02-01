import react from "react";

function About() {
    return(
        <section id="about" className="about">
            <h3>ABOUT</h3>
            <h2>WELCOME TO THE<br /><span>VOXEL APE</span></h2>
            <p>10,000 Wealthy Cyborgs straight out of the Metaverse ready to make their Club members richer. Our goal is to create a community of investors and entrepreneurs gathered around Web 3.0 opportunities.</p>
            <div className="about-link">
                <a>OPENSJOIN OUR DISCORD</a>
                <a>OPENSEA</a>
            </div>
            
            <div className="about-animation">
                <div id="logoSlide" className="MS-content">
                    <div className="item"><img src="/assets/img/team1.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team2.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team3.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team4.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team1.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team2.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team3.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team4.jpg" alt="" /></div>
                </div>
                <div className="MS-content" style={{paddingTop:"10px"}}>
                    <div className="item"><img src="/assets/img/team1.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team2.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team3.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team4.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team1.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team2.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team3.jpg" alt="" /></div>
                    <div className="item"><img src="/assets/img/team4.jpg" alt="" /></div>
                </div>
            </div>
            <br /><br />
        </section>
    )
}

export default About