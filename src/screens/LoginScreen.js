import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const LoginScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <LinearGradient colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)"]} style={styles.container}>
      <Image source={require("../../assets/background.png")} style={styles.backgroundImage} />

      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>AgriConnect</Text>
        <Text style={styles.subtitle}>Connect with agriculture and industry{"\n"}in one place.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.farmerLogin} onPress={() => navigation.navigate("FarmerDashboard")}>
          <Text style={styles.farmerLoginText}>Farmer Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.industryLogin} onPress={() => navigation.navigate("IndustryDashboard")}>
          <Text style={styles.industryLoginText}>Industry Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
