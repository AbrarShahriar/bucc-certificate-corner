import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* BG */}

      <div className="bg-[url('/hero.jpg')] bg-center bg-cover w-[100vw] h-[100vh] flex flex-col gap-4 items-center justify-center">
        {/* Text */}
        <div className="mb-6 ">
          <h1 className="text-5xl text-white text-center font-bold mb-4">
            Welcome to BUCC Certification Corner
          </h1>

          <p className="text-center text-white w-[60%] m-auto ">
            Here, members can easily access and download their certificates for
            various events and accomplishments. Simply enter your student ID in
            the field below to retrieve your certificates in a secure and
            convenient way. Celebrate your achievements and showcase your
            participation with just a few clicks!
          </p>
        </div>

        {/* Input */}
        {/* Button */}
        <div className="bg-[rgba(255,255,255,0.1)] gap-4 backdrop-blur-sm  p-8 w-[60%] flex flex-col rounded-lg ">
          <div className="flex flex-row">
            <input
              placeholder="Write your ID"
              type="text"
              className="focus-within:outline-none px-4 py-2 w-[70%] rounded-l-lg"
            />
            <Link
              href={"/certificate/dgwrg-3245-fwg"}
              className="w-[30%] bg-blue-600 rounded-r-lg font-semibold text-white flex items-center justify-center"
            >
              <div>Submit</div>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-center text-white font-semibold">
            If you face any issues feel free to reach out to us.{" "}
          </p>
          <p className="text-center w-[100%]">
            <Link
              className="text-blue-400 text-center font-semibold"
              href={"/contact"}
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
