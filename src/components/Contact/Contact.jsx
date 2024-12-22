import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.contact}>
    <div className={styles.contactInfo}>
      <div className={styles.name}>
        <FaUser style={{ color: "black", marginRight: "8px" }} />
        <span>{name}</span>
      </div>
      <div className={styles.number}>
        <FaPhone style={{ color: "black", marginRight: "8px" }} />
        <span>{number}</span>
      </div>
    </div>
    <button className={styles.deleteButton} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

export default Contact;
