import Navbar from "../../components/Navbar/Navbar";
import styles from "./Products.module.css";

export default function Products() {

    return (
        <div className={styles.container}>
            <Navbar />
            <h1>Products page</h1>
        </div>
    )
}
