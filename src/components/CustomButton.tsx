import styles from "@/app/styles";

interface CustomButtonProps {
  title: string;
  handleClear: () => void; // Include the handleClear prop
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handleClear }) => {
  return (
    <button
      onClick={handleClear}
      className="relative top-4 border-2 rounded-full border-[#003da5] bg-transparent py-2.5 px-5 font-medium text-[#003da5] transition-colors before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:transform before:-translate-x-1/2 before:scale-x-0 before:bg-[#003da5] before:rounded-full before:transition before:duration-300 before:content-[''] hover:text-white hover:font-medium before:hover:scale-x-100 max-md:hidden max-lg:hidden"
    >
      {title}
    </button>
  );
}

export default CustomButton;
