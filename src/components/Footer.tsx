import { Church, Globe, PlayCircle, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 text-slate-400 lg:px-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center gap-2 text-white">
              <Church className="h-8 w-8 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">하늘빛힐링교회</h2>
            </div>
            <p className="mb-6 max-w-md leading-relaxed">
              예수 그리스도의 사랑으로 세상을 치유하고, 복음의 기쁜 소식을 전하며, 다음 세대를 세우는 생명의 공동체입니다.
            </p>
            <div className="flex gap-4">
              {[Globe, PlayCircle, MessageCircle].map((Icon, idx) => (
                <a key={idx} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-primary hover:text-white">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold text-white">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4" />
                <span>서울특별시장 은혜구 평강동 123-45</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>02-1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@ourchurch.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs md:flex-row">
          <p>© 2026 HLH Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
