import ImageFooter from "./../assets/ppq-w.png";
import ImageBsi from "./../assets/logo-bsi.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img
                            style={{ width: "10rem" }}
                            src={ImageFooter}
                            alt=""
                        />
                        <p className="py-3">
                            PPQIT Al Mahir adalah pondok pesantren tahfidzul
                            quran dan pendidikan IT. Mencetak hafidz quran,
                            mandiri, profesional, dan mahir dalam teknologi
                            informasi.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut sed mauris quam. Mauris interdum facilisis
                            lectus, eu condimentum mauris condimentum a.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h3>Contact Us</h3>
                        <p>
                            Jl.Adi Sumarmo, Gawanan RT 001 RW 07 Colomadu,
                            KarangAnyar, Jawa Tengah
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h3>Donasi</h3>
                        <p>
                            <i
                                class="ri-account-circle-line"
                                style={{ paddingRight: "3px" }}></i>
                            Konfirmasi donasi
                            <p style={{ fontWeight: "900" }}>
                                +62 812-3210-4431
                            </p>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h3>Lokasi</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.376928395929!2d110.75908037436645!3d-7.533804174358472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a147e46eda873%3A0xd2f585378cd3f5e3!2sPPQ%20AL-MAHIR!5e0!3m2!1sen!2sid!4v1687405279216!5m2!1sen!2sid"
                            width="300"
                            height="300"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p>Copyright &copy; 2023 Pondok Pesantren Quran Al Mahir</p>
            </div>
        </footer>
    );
}

export default Footer;
