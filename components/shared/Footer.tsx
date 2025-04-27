import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className=" gap-4 text-center sm:flex-row flex-col max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex justify-between items-center ">
        <Link href="/">
          <Image
            src="/assets/images/photo1.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2025 GatherEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
