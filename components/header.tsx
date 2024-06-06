import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row justify-between p-4 sm:p-10 items-center">
      <Image alt="logo" width={80} height={80} src={"/logo.png"} />
      <div className="flex gap-4 sm:gap-10 my-4">
        <Link href={"/"}>
          <p className="text-sm">HOME</p>
        </Link>
        <Link href={"/addtask"}>
          <p className="text-sm">ADD-TASK</p>
        </Link>
        <Link href={"/completetask"}>
          <p className="text-sm">COMPLETED</p>
        </Link>
        <Link href={"/pendingtask"}>
          <p className="text-sm">PENDING</p>
        </Link>
      </div>
    </header>
  );
}
