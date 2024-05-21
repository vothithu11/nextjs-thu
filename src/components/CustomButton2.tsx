import styles from "@/app/styles";

interface CustomButtonProps {
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title }) => {
  return (
    <button className="relative border-2 rounded-full border-[#003da5] bg-white py-2.5 px-5 font-medium text-[#003da5] transition-colors overflow-hidden hover:text-white hover:border-white before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:bg-[#003da5] before:rounded-full before:scale-x-0 before:origin-center before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100">
      <span className="relative z-10">{title}</span>
    </button>
  );
}

export default CustomButton;

