import { Bell, ChevronDown, LayoutGrid, Maximize, Text  } from 'lucide-react'
import Image from "next/image"

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-[#e9ebec] flex items-center justify-between px-6 py-10">
      <button className="text-[#878a99]">
        <Text  size={20} />
      </button>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-[#878a99]">
          <Image src="/Flag.png" width={20} height={20} alt="US Flag" className="rounded" />
          <ChevronDown size={16} />
        </button>
        
        <button className="text-[#878a99]">
          <LayoutGrid size={20} />
        </button>
        
        <button className="text-[#878a99]">
          <Maximize size={20} />
        </button>
        
        <div className="relative">
          <button className="text-[#878a99] relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-[#f06548] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-100 overflow-hidden">
            <Image src="/User.png" width={32} height={32} alt="User" />
          </div>
          <div className="text-sm">
            <div className="font-medium text-[#212529]">Anna Adame</div>
            <div className="text-xs text-[#878a99]">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  )
}
