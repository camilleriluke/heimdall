import React from 'react';
import './Icon.scss';

export default function Icon ({ icon, className }) {
    return (
        <span className={`icon ${ icon } ${ className }`}></span>
    );
}