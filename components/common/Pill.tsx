import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] border-1 rounded-full">
      <p className="text-[10px] text-gray-900">{title}</p>
    </div>
  );
};

export default Pill;
