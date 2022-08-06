import React from 'react'
import LottieView from "lottie-react-native";
const LottieAnimation = ({ source, style, loop = true, autoPlay = true,onAnimationFinish }) => {
    const lottieRef = React.useRef(null);
    const [lottieSpeed, setLottieSpeed] = React.useState(1);
  
    React.useEffect(() => {
      setLottieSpeed(0.9);
  
      if (lottieRef.current) {
        lottieRef.current.play();
        setTimeout(() => {
          setLottieSpeed(1);
        }, 250);
      }
    }, [lottieRef.current]);
  
    return (
      <LottieView ref={lottieRef} onAnimationFinish={onAnimationFinish} source={source} style={style} loop={loop} autoPlay={autoPlay} speed={lottieSpeed} />
    );
  };
  
  export default LottieAnimation;