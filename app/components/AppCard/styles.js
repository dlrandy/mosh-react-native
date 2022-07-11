import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,

  },
  detailContainer:{
    padding: 20,

  },
  title:{
    marginBottom: 7,
    color: 'gold',
  },
  subTitle:{
   color: colors.secondary,
   fontWeight: 'bold',
  },
});

export default styles;
