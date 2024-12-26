import Image from "next/image";
import { IoShareSocialOutline } from "react-icons/io5";
import { parseDate } from "@/lib/utils";
import ShareDialogue from "@/components/ShareDialogue";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import data from "../../../demo_data.json";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ recipientId: string }>;
}) {
  const recipientId = (await params).recipientId;

  const recipientData =
    data.filter((el) => el.recipientId == recipientId)[0] || {};

  if (!recipientData.recipientId) {
    return (
      <div className="flex items-center justify-center h-[100vh] text-2xl">
        Invalid Recipient ID!
      </div>
    );
  }

  return (
    <div className="bg-[url('/hero.jpg')] bg-center bg-cover">
      <div className="flex bg- w-[100vw] h-[100vh] items-center p-8 gap-6">
        {/* Certificate Preview */}
        <div className="w-[70%]  pl-8 h-[100%] flex items-center justify-center">
          {recipientData && (
            <Image
              src={recipientData.previewLink}
              alt={"certificate"}
              width={700}
              height={700}
              className="object-contain rounded-lg"
            />
          )}
        </div>

        <div className="w-[50%] rounded-lg">
          {/* User info */}
          {/* Name, Id, Type  */}
          <div className="bg-[rgba(255,255,255,0.1)] gap-4 backdrop-blur-sm mb-8 rounded-lg">
            <div className="text-white py-4 px-6 rounded-lg mb-4">
              <h1 className="text-white text-2xl text-center font-bold mb-4">
                Certificate Recipient
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold ">
                  <p>Recipient Name</p>
                  <p>{recipientData ? recipientData.recipientName : "N/A"}</p>
                </div>
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold">
                  <p>Recipient ID</p>
                  <p>{recipientData ? recipientData.recipientId : "N/A"}</p>
                </div>
                <div className="flex items-start justify-between border-b border-white pb-2 font-bold">
                  <p>Issue Date</p>
                  <p>
                    {recipientData
                      ? parseDate(recipientData?.issueDate)
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <Link
              target="_blank"
              href={recipientData.downloadLink}
              className="w-[100%] block p-4 bg-blue-500 font-bold text-white rounded-b-lg text-center cursor-pointer"
            >
              Download
            </Link>
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
            <CopyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
