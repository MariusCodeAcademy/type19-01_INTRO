type ButtonProps = {
  children: string;
};


export default function Button({ children }: ButtonProps) {
  return (
    <button className="">
      {children}
    </button>
  );
}
