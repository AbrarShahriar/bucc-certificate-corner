import Image from "next/image";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { parseDate } from "@/lib/utils";
import ShareDialogue from "@/components/ShareDialogue";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const data = {
  username: "John Doe",
  id: "12345678",
  issueDate: "2024-03-25",
  imageLink: "csd",
  pdfLink: "cegrte",
};

export default function CertificatePage() {
  return (
    <div className="bg-[url('/hero.jpg')] bg-center bg-cover">
      <div className="flex bg- w-[100vw] h-[100vh] items-center p-8 gap-6">
        {/* Certificate Preview */}
        <div className="w-[70%]  pl-8 h-[100%] flex items-center justify-center">
          <Image
            src={"/certificate.png"}
            alt={"certificate"}
            width={700}
            height={700}
            className="object-contain rounded-lg w-[100%]"
          />
        </div>

        <div className="w-[50%] rounded-lg">
          {/* User info */}
          {/* Name, Id, Type  */}
          <div className="bg-[rgba(255,255,255,0.1)] gap-4 backdrop-blur-sm mb-8 rounded-lg">
            <div className="text-white py-4 px-6 rounded-lg mb-4">
              <h1 className="text-white text-2xl text-center font-bold mb-6">
                Certificate Recipient
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold ">
                  <p>Recipient Name</p>
                  <p>{data.username}</p>
                </div>

                <div className="flex items-start justify-between border-b border-white pb-2 font-bold">
                  <p>ID</p>
                  <p>{data.id}</p>
                </div>
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold">
                  <p>Issue Date</p>
                  <p>{parseDate(data.issueDate)}</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="p-4 bg-blue-500 font-bold text-white rounded-b-lg text-center cursor-pointer">
              Download
            </div>
          </div>

          <div className="w-[100%] flex items-center justify-center gap-8">
            <ShareDialogue
              trigger={
                <div className="p-4 bg-[rgba(255,255,255,0.1)] w-[50%] flex items-center justify-center gap-4 backdrop-blur-sm font-bold text-white rounded-lg text-center cursor-pointer  hover:bg-blue-500 duration-100">
                  <IoShareSocialOutline size={24} /> Share
                </div>
              }
            >
              <div className="flex items-center justify-center w-[100%] gap-6 pt-6">
                <Link href={""} className="p-2 bg-blue-500 rounded-lg">
                  <FaFacebookF size={30} color="white" />
                </Link>
                <Link href={""} className="p-2 bg-blue-500 rounded-lg">
                  <FaLinkedinIn size={30} color="white" />
                </Link>
              </div>
            </ShareDialogue>
            <div className="p-4 bg-[rgba(255,255,255,0.1)] w-[50%] flex items-center justify-center gap-4 backdrop-blur-sm font-bold text-white rounded-lg text-center cursor-pointer hover:bg-blue-500 duration-100">
              <MdContentCopy size={24} /> Copy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
