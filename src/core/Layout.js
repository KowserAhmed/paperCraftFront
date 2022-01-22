import React from 'react';
import Menu from './Menu';
import '../styles.css';
 

const Layout = ({description = 'Description', className, children }) => (
   
    <div>
        <div >

            <p>{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);
export default Layout;