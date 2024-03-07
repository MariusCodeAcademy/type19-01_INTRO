type ButtonProps = {
  children: string;
};


export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-slate-950 text-white py-4 px-14 sm:text-xs sm:px-14 sm:py-4 rounded-lg md:py-3 md:px-12">
      {children}
    </button>
  );
}
