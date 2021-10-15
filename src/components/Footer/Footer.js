import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="text-muted">© 2021 Tanzim</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="https://www.facebook.com/tanzim077/" target="_blank" className="text-muted">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://twitter.com/tanzim077" target="_blank" className="text-muted">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.github.com/tanzim077/" target="_blank" className="text-muted">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/ahmedtanzim077/" target="_blank" className="text-muted">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;