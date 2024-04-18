import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Привет, мир</h1>
      <Link href='/blog' className="text-blue-500 underline">Зацените блог</Link>
    </main>
  );
}
