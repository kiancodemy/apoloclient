import { TypeAnimation } from "react-type-animation";
import Imgcarousel from "./Imagecarousel/Imgcarousel";
export default function Home() {
  return (
    <div className="py-10 grow  container shadow-md mt-20  md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:flex-row p-8">
        <div className="h-[150px]">
          <TypeAnimation
            sequence={[
              "this is for performance testing of ApoloServer and  ApoloClient",
            ]}
            wrapper="h1"
            speed={30}
            style={{
              fontSize: "2em",
              display: "block",
              textTransform: "capitalize",
            }}
            repeat={1}
          />
        </div>

        <Imgcarousel></Imgcarousel>
      </div>
    </div>
  );
}
