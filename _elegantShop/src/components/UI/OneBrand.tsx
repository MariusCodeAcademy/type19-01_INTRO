type OneBrandProps = {
  src: string;
  alt: string;
};

function OneBrand({ src, alt }: OneBrandProps) {
  return <img className='h-10 w-auto' src={src} alt={alt} />;
}

export default OneBrand;
