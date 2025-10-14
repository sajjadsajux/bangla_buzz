export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} BanglaBuzz. All rights reserved.</p>
      </div>
    </footer>
  );
}
