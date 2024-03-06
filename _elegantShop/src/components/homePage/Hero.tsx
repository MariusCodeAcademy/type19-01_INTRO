import Button from "../UI/Button"

function Hero() {
  return (
<div className="relative h-screen">
  <img src="/public/img/man-full.png" alt="laughing man" className="w-full h-full object-cover hidden md:h-[820px] sm:block" />
  <div className="absolute top-0 left-0 right-0 text-center">
    <div className="w-[311px] ml-auto mr-auto sm:mr-0 md:text-left">
      <h1 className="text-[40px] font-medium leading-[44px] pt-11 mb-2 md:text-[80px] md:leading-[84px]">Listen to <br /> the <span className="text-blue-500">amazing</span> music sound.</h1>
    <p className="text-base sm:text-sm font-normal leading-[26px] mb-3 md:text-[20px] md:leading-[32px]">Experience music like never before</p>
    <Button>Shopping Now</Button>
    </div>

  </div>
  <img src="/img/man.png" alt="laughing man" className="w-full h-full object-left md:hidden" style={{ minWidth: '375px', minHeight: '692px'}} />
</div>

  )
}

export default Hero