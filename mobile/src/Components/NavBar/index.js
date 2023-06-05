import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import logo from "../../../assets/images/logo.png";
import arrow from "../../../assets/icons/Arrow.png";

const Nav = ({ onPress }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Image source={arrow} style={styles.arrow} />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Nav;