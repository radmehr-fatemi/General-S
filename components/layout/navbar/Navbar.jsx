import Link from "next/link";
import { VscSearch } from "react-icons/vsc";

//Style
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={ styles.navbar } >
            <div className={ styles.field1 } >
                <Link href={`/`} > <h3>General_S</h3> </Link>
            </div>
            <div className={ styles.field2 } >
                <span></span>
                <Link href={`/menu`} >Categories</Link>
                <Link href={`/search`} > <VscSearch className={ styles.searchIcon } /> </Link>
            </div>
        </div>
    );
};

export default Navbar;
