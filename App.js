
import { StyleSheet, Platform, StatusBar,Text, View, Image, SafeAreaView, Alert,TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, Button } from "react-native";


export default function App() {
  const handlePress = () => console.log("text clicked");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button color={'orange'} title="Click me"
      //  onPress={()=>alert('button clicked')}/>
       onPress={()=>Alert.alert('title','button clicked',[
        {text: 'yes', onPress:()=>console.log('yes')},
        {text: 'No', onPress:()=>console.log('yes')},
       ])}
       />
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World! This is a very long long long text.I wanna show you!{" "}
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableOpacity onPress={()=>console.log('touchable')}>

      <Image
       blurRadius={10}
       fadeDuration={1000}
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        }}
      />
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={()=>console.log('native touchable')}>
        <View style={{width: 34,height:56,backgroundColor: 'gray'}}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: 'green'}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    // justifyContent: "center",
    // alignItems: "center",
  },
});
