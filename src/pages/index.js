import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center bg-black">  {/* Added bg-black for dark background */}
            
            {/* Logo at the top */}
            <div className="mt-10 md:mt-20">
                <Image src="/lynk_logo.png" alt="Lynk Logo" width={150} height={50} />
            </div>

            <div className="flex-1 flex items-center justify-center">
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <Image src="/down_apple.svg" alt="Download on the App Store" width={200} height={60} />
                </a>
            </div>

            {/* Links at the bottom */}
            <div className="mb-10 md:mb-20 flex flex-col items-center gap-2">
                <a href="/privacy-policy" className="text-white hover:underline">
                    Privacy Policy
                </a>
                <a href="/terms" className="text-white hover:underline">
                    Terms
                </a>
            </div>
        </div>
    );
}

