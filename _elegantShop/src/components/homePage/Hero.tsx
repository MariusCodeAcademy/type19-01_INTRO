import Button from "../UI/Button"

function Hero() {
  return (
<div className="text-center">
        <h1 className="text-[40px] font-medium leading-[44px]">Listen to the <span className="text-blue-500">amazing</span> music sound</h1>
        <p className="text-base sm:text-sm font-normal">Experience music like never before</p>
        <Button>Shopping Now</Button>
        <img src="/public/img/man.png" alt="laughing man" className="w-full h-full object-cover hidden sm:block" />
      <img src="/public/img/man.png" alt="laughing man" className="w-full h-full object-cover block sm:hidden mx-auto" style={{ maxWidth: '375px' }} />
    </div>
  )
}

export default Hero