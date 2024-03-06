type ButtonProps = {
  children: string;
};


export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-slate-950 text-white text-xs px-14 py-4 rounded-lg">
      {children}
    </button>
  );
}
