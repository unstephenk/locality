import React from 'react';

interface HeaderProps {
    navLinks: { name: string, url: string, position: string, order: number }[];
}

export const Header: React.FC<HeaderProps> = (
    {navLinks}
) => {
    const leftLinks = navLinks
        .filter(link => link.position === 'left')
        .sort((a, b) => a.order - b.order);
    const rightLinks = navLinks
        .filter(link => link.position === 'right')
        .sort((a, b) => a.order - b.order);

    return (
        <header className="position-sticky top-0 bg-light p-3">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">Locality</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {leftLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a className="nav-link" href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        {rightLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a className="nav-link" href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>


    );
};