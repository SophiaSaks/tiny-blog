import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';


function Navbar() {
    const navigate = useNavigate();

    const handler = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const tag = e.target as HTMLElement;
        if (tag.className === 'Navbar__tags') {
            return;
        }
        navigate(`/${tag.innerHTML}`);
    }

  return (
    <nav className='Navbar'>
        <h1 className='Navbar__title'>Sophias Blog</h1>
        <div className='Navbar__tags' onClick={handler}>
            <h3 className='Navbar__all'>All</h3>
            <h3 className='Navbar__crime'>Crime</h3>
            <h3 className='Navbar__magical'>Magical</h3>
            <h3 className='Navbar__mystery'>Mystery</h3>
        </div>
    </nav>
  );
}

export default Navbar;