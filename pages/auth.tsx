import Input from "@/components/input";

function Auth() {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-12 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign IN</h2>
            <div className="flex flex-clo-gap">
              <Input id="djf" onChange={""} value="" label="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
