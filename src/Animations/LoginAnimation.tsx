import Lottie from "react-lottie";
import * as animationData from "./json/Login.json";

function LoginAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width="50%" height="auto"/>;
}

export default LoginAnimation;
