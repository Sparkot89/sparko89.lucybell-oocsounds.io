import '../App.css';
import Button from './Button';
import sounds from '../sounds';

function Header() {
    debugger;
    let soundsMapped = sounds.map((sound, index) => {
        return <Button key={index} sound={sound} />
    });

    return (
        <div className="buttons-grid">
            {soundsMapped}
        </div>
    );
}

export default Header;