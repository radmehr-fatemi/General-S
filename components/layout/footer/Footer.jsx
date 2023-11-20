//Style
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={ styles.footer } >
            <a href="https://radmehr-weblog.vercel.app" target="_blank">
                Radmehr | General Store &copy;
            </a>
        </div>
    );
};

export default Footer;