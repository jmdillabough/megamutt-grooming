import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
      <Link href="/home">
        <div className="flex items-center justify-center h-screen flex-col">
          <Image src="/404.svg" width={400} height={200} alt="Megamutt Logo" />
          <h2 className="text-3xl font-bold">404 - This Page Does Not Exist</h2>
        </div>
      </Link>
  );
}
