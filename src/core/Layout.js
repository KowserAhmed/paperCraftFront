import React from 'react';
import Menu from './Menu';
import '../styles.css';
 

const Layout = ({ title ='Title', description = 'Description', className, children }) => (
   
    <div>
        <div className="p-5 bg-light ref">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);
export default Layout;