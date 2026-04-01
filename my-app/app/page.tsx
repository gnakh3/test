import Wheel from "./wheel";
import Provenimpact from "./provenimpact";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--Surface-Black,#121019)]">
      <div className="w-full justify-center items-center flex">
        <Provenimpact />
      </div>
      <div className="w-full">
        <Wheel />
      </div>
    </div>
  );
};

export default Page;