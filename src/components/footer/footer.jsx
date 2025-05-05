import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="column brand">
                <h2>آسا مدار</h2>
                <p>
                    طراحی و تولید برد مدارچاپی (یک‌رو، دو‌رو و آلومینیوم) با کیفیت، در کمترین زمان و قیمت مناسب.
                </p>
            </div>
            <div className="column links">
                <h3>لینک‌های سریع</h3>
                <ul>
                    <li>خانه</li>
                    <li>سفارش آنلاین</li>
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                    <li>سؤالات متداول</li>
                </ul>
            </div>
            <div className="column contact">
                <h3>ارتباط با ما</h3>
                <p>نام: قانی اردکانی</p>
                <p> 09212834635 | 09123548783</p>
                <p >021-88241009</p>
                <p>کارخانه: تهران، رباط کریم،...</p>
                <p>دفتر: تهران، ستارخان...</p>
                <p>mostafaghanei3334@gmail.com</p>
            </div>
            <div className="column follow">
                <h3>ما را دنبال کنید</h3>
            </div>
            <div className="copyright">
                <p>© 2025 تمام حقوق متعلق به آسا مدار است.</p>
            </div>
        </footer>
    );
}

export default Footer;
