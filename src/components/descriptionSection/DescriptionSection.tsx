import { motion } from "framer-motion";
import styles from "./DescriptionSection.module.scss";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function DescriptionSection({ children }: IProps): JSX.Element {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={styles.container}
    >
      {children}
    </motion.section>
  );
}

export default DescriptionSection;
