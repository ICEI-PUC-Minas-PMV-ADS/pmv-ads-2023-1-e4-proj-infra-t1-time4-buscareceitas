import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import arrow from "../../assets/logo.png";
import logo from "../../assets/logo.png";

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
