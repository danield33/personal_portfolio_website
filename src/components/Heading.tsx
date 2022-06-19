import React from 'react';
import NavBar from "./NavBar";

export function Heading() {
    return (
        <div style={{
            background: 'linear-gradient(310deg, ' +
                'rgb(72,156,187)' +
                ' 10%, ' +
                'rgb(13,84,145)' +
                ' 100%)',
            minHeight: 600,
            flex: 1,
            backgroundRepeat: "repeat-x",
            padding: 20,
        }}>

            <NavBar/>

            <p style={{
                alignSelf: 'center',
                fontSize: 100,
                color: 'white',
                fontWeight: '800'
            }}>
                Daniel Dawit
                <p style={{fontSize: 50, fontWeight: '500'}}>
                    Developer
                </p>
            </p>


        </div>
    );
};
