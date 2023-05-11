import { Image } from "react-native";
import logo from "../../../src/assets/logo.png";
import styles from "./styles";

const Logo = () => {
  return <Image source={logo} style={styles.logo} />;
};

export default Logo;