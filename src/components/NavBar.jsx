import { useContext } from "react";
import { ThemeContext, ThemeDispatchContext, CHANGE_COLOR, CHANGE_FONT_SIZE } from "../contexts/ThemeContext";

export default function NavBar({changeCurrentPage}) {
    const {color, fontSize} = useContext(ThemeContext);
    const dispatch = useContext(ThemeDispatchContext);

    function handleChangeBackgroundColor(e) {
        dispatch({ type: CHANGE_COLOR, color: e.target.value });
        localStorage.setItem('backgroundColor', e.target.value);
    }

    return (
        <nav className='bg-indigo-500 p-4'>
            <div className="flex justify-between md:container md:mx-auto">
                <ul className='flex space-x-4'>
                    <li>
                        <a href='#' className='text-white' onClick={() => changeCurrentPage('home')}>Home</a>
                    </li>
                    <li>
                        <a href='#' className='text-white' onClick={() => changeCurrentPage('about')}>About</a>
                    </li>
                    <li>
                        <a href='#' className='text-white' onClick={() => changeCurrentPage('contact')}>Contact</a>
                    </li>
                </ul>
                <div className='flex space-x-4'>
                    <input type="color" value={color} onChange={handleChangeBackgroundColor} />
                    <select value={fontSize} onChange={e => dispatch({ type: CHANGE_FONT_SIZE, fontSize: e.target.value })}>
                        <option value="16">16</option>
                        <option value="24">24</option>
                        <option value="32">32</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}