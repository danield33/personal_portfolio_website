import React from 'react';

function NavBar() {

    return (
        <ul style={{...styles.listContainer}} className={styles.listClassName}>


            <li style={{
            }}>Home</li>

            <li onCopy={() => console.log(1)}>Portfolio</li>


        </ul>
    );
}

export default NavBar;


const styles = {
    listContainer: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'flex-end',
    },
    listClassName: //{
        `'& li:hover': {
            textDecoration: 'underline'
        }`
    //}
}
