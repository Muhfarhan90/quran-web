type ButtonProps = {
  name: string;
};

function Button({ name = "Button" }: ButtonProps) {
  return (
    <button className="px-6 py-3 rounded-full text-lg font-bold flex items-center justify-center text-[#322D4C] bg-white w-full cursor-pointer">{name}</button>
  );
}

export default Button;
