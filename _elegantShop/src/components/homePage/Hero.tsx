import Button from "../UI/Button"

function Hero() {
  return (
<div className="relative">
  <img src="/public/img/man-full.png" alt="laughing man" className="w-full h-full object-cover hidden sm:block" />
  <div className="absolute top-0 left-0 right-0 text-center">
    <div className="w-[311px] ml-auto mr-auto sm:mr-0 md:text-left md:w-[538px] md:absolute md:top-[100px] md:left-[50%] md:pt-[20px] xl:top-[160px]">
      <h1 className="text-[40px] font-medium leading-[44px] pt-11 mb-2 md:text-[80px] md:leading-[84px]">Listen to <br /> the <span className="text-blue-500">amazing</span> music sound.</h1>
    <p className="text-base sm:text-sm font-normal leading-[26px] mb-3 md:text-[20px] md:leading-[32px]">Experience music like never before</p>
    <Button>Shopping Now</Button>
    </div>

  </div>
  <img src="/img/man.png" alt="laughing man" className="w-full h-full object-cover max-h-[500px] sm:hidden " style={{ minWidth: '375px', minHeight: '692px'}} />
</div>

  )
}

export default Hero