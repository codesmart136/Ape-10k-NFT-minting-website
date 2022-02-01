import react from "react";

function Team() {
    return(
        <section id="team" className="team">
            <h3>TEAM</h3>
            <h2>Experts from<br /><span>VoxEl APE</span></h2>
            <div className="container">
                <div className="team-container">
                    <div className="team-card">
                        <img src="/assets/img/team1.jpg" />
                        <h4>ADAM ALLY</h4>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-card">
                        <img src="/assets/img/team2.jpg" />
                        <h4>ADAM ALLY</h4>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-card">
                        <img src="/assets/img/team3.jpg" />
                        <h4>ADAM ALLY</h4>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-card">
                        <img src="/assets/img/team4.jpg" />
                        <h4>ADAM ALLY</h4>
                        <p>Founder & CEO</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team