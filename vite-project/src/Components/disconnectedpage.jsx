import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className=" flex flex-col items-center w-screen h-screen bg-cover bg-center fixed z-[120] bg-[url('/public/assets/images/bg.jpg')]">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="w-[353px] h-[108px]  mt-[136px]"
        />

        <h2 className="font-sora text-[36px] font-semibold leading-[44px] mt-[40px] text-black ">
          You have been disconnected
        </h2>

        <p className="font-sora text-[28px] font-semibold leading-[36px]  mt-[52px] text-[#4F5C72] ">
          The page has expired!
        </p>

        <Link
          to="/login"
          className="flex items-center justify-center font-sora w-[144px] h-[44px] text-[18px] font-semibold text-center  mt-[30px] bg-blue-500 text-white rounded-lg "
        >
          Sign in
        </Link>

        <img
          src="/assets/images/image.png"
          alt="image"
          className="w-[709px] h-[450px] relative mt-[32px]"
        />
      </div>
    </>
  );
}

export default Home;
