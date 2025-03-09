import { Button } from "@/components/ui/button"

export default function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col items-center space-y-6 max-w-md">
        {/* Success Icon */}
        <div className="text-[#0ab39c] w-32 h-32">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="75" stroke="currentColor" strokeWidth="10" />
            <circle cx="55" cy="80" r="7.5" fill="currentColor" />
            <rect x="95" y="70" width="30" height="10" rx="5" fill="currentColor" />
            <path d="M55 110C55 110 65 125 105 110" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </div>

        {/* Success Text */}
        <h1 className="text-[#000000] text-4xl font-bold">Success</h1>

        {/* Subtitle */}
        <p className="text-[#878a99] text-xl">Change the Success Role</p>

        {/* Button */}
        <Button className="bg-[#0ab39c] hover:bg-[#0ab39c]/90 text-white font-medium px-10 py-2 rounded-md mt-4">
          Oke
        </Button>
      </div>
    </div>
  )
}

