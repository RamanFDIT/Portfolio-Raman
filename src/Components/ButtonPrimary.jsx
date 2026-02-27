
const ButtonPrimary = ({label}) => {
  return (
    <button className={`bg-secondary max-w-100 h-8 text-textSecondary font-main text-lg sm:text-base md:text-lg flex items-center justify-center px-6 py-1 border-none transition-colors ease-out duration-300 hover:bg-hoverColor hover:text-textPrimary cursor-pointer`}>
      {label}
    </button>
    );
};
export default ButtonPrimary;