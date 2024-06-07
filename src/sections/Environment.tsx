import CustomButton from "@/components/CustomButton";
import Image from "next/image"
const Environment = () => {
  return (
    <div className="grid grid-cols-2 space-x-8 animate-slideInRight" name="environment">
      <img className="rounded-full " width={1400} height={500} src="/image/env3.png" />
      <img className="rounded-full" width={1400} height={500} src="/image/env1.png"/>
    </div>
  );
}

export default Environment