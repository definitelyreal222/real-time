import React from 'react';
import './ComicPage.css'; // Custom styles

const ComicPage = ({ children }) => {
    return (
        <div className="comic-page-wrapper">
            <div className="container comic-page">
                {children}
            </div>
        </div>
    );
};

export default ComicPage;
