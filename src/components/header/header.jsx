import '../header/header.css';

function Header() {
    return (
        <header className="header">
            <div className="left-section">
                <button className="start-btn">شروع کنید</button>
                <div className="social-icons">
                    <a href="#"><img src="/linkedin.png" alt="LinkedIn" /></a>
                    <a href="#"><img src="/whatsapp.png" alt="WhatsApp" /></a>
                </div>
            </div>
            <nav className="nav-links">
                <a href="https://google.com">خانه</a>
                <a href="#">درباره ما</a>
                <a href="#">سفارش مدار چاپی</a>
                <a href="#">ارتباط با ما</a>
            </nav>
            <div className="logo">
                <img src="src/assets/asamadar.png" alt="Logo" />
                <img src="src/assets/ASASABZ.png" alt="Logo" />
            </div>
        </header>
    );
}

export default Header;
