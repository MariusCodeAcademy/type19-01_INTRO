type OneBrandProps = {
  src: string;
  alt: string;
};

function OneBrand({ src, alt }: OneBrandProps) {
  return <img className='h-10 w-auto lg:h-16' src={src} alt={alt} />;
}

export default OneBrand;
