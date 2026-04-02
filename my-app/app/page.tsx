import Dashboard from "./molecules/Dashborad/Dashboard";
import Wheel from "./molecules/Wheel/wheel";
import Provenimpact from "./organisms/provenimpact";
    
const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--Surface-Black,#121019)]">
      <div className="w-full justify-center items-center flex">
        <Provenimpact />
      </div>
      <div className="w-full">
        <Wheel />
      </div>
      <Dashboard /> 
    </div>
  );
};

export default Page;