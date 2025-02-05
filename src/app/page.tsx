import Link from "next/link";

export default function Home() {
  return (
    <div className="text-black text-center">
        <h1><b>Home Page</b></h1><br/>
        <Link href="/admin" className="hover:text-red-600">
            <button className="mt-10">Goto Dashboard</button>
        </Link>
    </div>
  );
}
