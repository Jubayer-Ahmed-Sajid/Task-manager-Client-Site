import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    
                    <p>Task management site <br />Providing seamless task managing experience</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid text-4xl grid-flow-col gap-4">
                        <a href="https://web.facebook.com">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a href="https://www.linkedin.com/in/jobayer-ahmed-sajid"><FaLinkedin></FaLinkedin></a>
                        <a href="https://github.com/Jubayer-Ahmed-Sajid"><FaGithub></FaGithub></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;