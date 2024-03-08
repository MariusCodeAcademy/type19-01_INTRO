type ButtonProps = {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function Button({ children, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} bg-slate-950 text-white py-4 px-14 sm:text-xs sm:px-14 sm:py-4 rounded-lg md:py-3 md:px-12`}
    >
      {children}
    </button>
  );
}
