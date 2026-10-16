import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-32 px-4 text-center bg-[#faf7f2]">
      <h1 className="font-serif text-6xl mb-4 text-[#062045]">404</h1>
      <p className="text-lg mb-8 text-[#1a1a1a]">Page not found</p>
      <Link
        to="/"
        className="bg-[#062045] text-[#f5f1ea] px-6 py-3 rounded-full hover:bg-[#c9a227] hover:text-[#062045] transition inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}
