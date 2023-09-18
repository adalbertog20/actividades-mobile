import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

export default function Table() {
    const [isShow, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Username</th>
                    <th scope='col'>Password</th>
                    <th scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <th scope='row'>Adalberto</th>
                    <th scope='row'>1234</th>
                    <th scope='row'>adalbertog_20@alu.uabcs.mx</th>
                </tr>
            </tbody>
        </table>
    )
}