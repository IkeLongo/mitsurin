import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center text-center max-w-4xl px-8">
        {/* Placeholder Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-semibold text-sm">LOGO</span>
          </div>
        </div>

        {/* H2 Subtitle */}
        <h2 className="text-lg md:text-xl text-gray-600 mb-4 font-medium">
          Welcome to Our Platform
        </h2>

        {/* H1 Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build Something Amazing Today
        </h1>

        {/* Small Description Text */}
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Transform your ideas into reality with our powerful tools and intuitive design. 
          Join thousands of creators who are already building the future.
        </p>

        {/* Call to Action Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
          Get Started
        </button>
      </main>
    </div>
  );
}
