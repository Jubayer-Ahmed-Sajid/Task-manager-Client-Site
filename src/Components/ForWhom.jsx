const ForWhom = () => {
    return (
        <div>
            <section className="user-segments-section ">
                <h2>Who Can Benefit?</h2>
                <div className="user-segment-cards">
                    <div className="user-segment-card">
                        <img src="https://i.ibb.co/BqdRs75/html-system-website-concept.jpg" className="w-full h-[80vh] object-cover" alt="Developer Icon" />
                        <h3>Developers</h3>
                        <p>Efficiently manage coding tasks and project deadlines. Collaborate with team members seamlessly.</p>
                    </div>

                </div>
                <div className="cta-container">
                    <a href="/signup" className="cta-button">Start Managing Tasks</a>
                </div>
            </section>

        </div>
    );
};

export default ForWhom;