type ContactUsOneCardProps = {
  src: string;
  alt: string;
  title: string;
  bottomText: string;
};
function ContactUsOneCard({
  src,
  alt,
  title,
  bottomText,
}: ContactUsOneCardProps) {
  return (
    <div className='flex flex-col items-center gap-2 bg-slate-100 py-4 px-8'>
      <img className='mb-2' src={src} alt={alt} />
      <h2 className='uppercase font-bold text-slate-500'>{title}</h2>
      <p className='font-bold text-center'>{bottomText}</p>
    </div>
  );
}

export default ContactUsOneCard;
