type OnPictureSpanProps = {
  title?: string;
};

export default function OnPictureSpan({ title }: OnPictureSpanProps) {
  return (
    <span className='bg-white rounded-md absolute top-3 left-3  py-1 px-4 text-sm font-bold  leading-4  '>
      {title}
    </span>
  );
}
