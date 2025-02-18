import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="py-10 grow  container shadow-md mt-20  md:py-20">
      <div className=" flex flex-col md:flex-row p-4">
        <div className="basis-1/2">
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

        <div className=" self-start basis-1/2">d</div>
      </div>
    </div>
  );
}
