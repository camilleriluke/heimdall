import React from 'react';
import './Help.scss';

const hotkeys = [
    { key: 'Cmd+?', description: 'Open this help.' },
    { key: 'Cmd+N', description: 'Add a new item.' },
    { key: 'Cmd+L', description: 'Lock the password manager.' },
    { key: 'Cmd+F', description: 'Search.' },
    { key: 'Esc', description: 'Close a dialog / Close single item page / Clear search' }
];

export default function Help () {
    return (
        <div className='help'>
            <p>Here is some help, yo.</p>
            <h1>Hotkeys</h1>
            <Hotkeys />
        </div>
    );
}

function Hotkeys () {
    return (
        <table className='hotkeys'>
            <tbody>
            { hotkeys.map((hotkey, i) => <Hotkey key={ `hotkey-${ i }` } hotkey={ hotkey } />) }
            </tbody>
        </table>
    );
}

function Hotkey ({ hotkey }) {
    return (
        <tr className='hotkey'>
            <td className='hotkey-key'>{ hotkey.key }</td>
            <td className='hotkey-description'>{ hotkey.description }</td>
        </tr>
    );
}
