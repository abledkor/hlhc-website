import { Clock, MapPin, Navigation, Phone, Church } from 'lucide-react';

export function WorshipInfo() {
  return (
    <section id="worship" className="bg-slate-100 px-6 py-16 lg:px-40 dark:bg-slate-900">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h3 className="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-slate-100">
            <Clock className="text-primary" /> 예배 안내
          </h3>
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-sm dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800">
            {[
              { title: "주일 1부 예배", loc: "본당 3층", time: "오전 09:00" },
              { title: "주일 2부 예배 (대예배)", loc: "본당 3층 / 온라인 생중계", time: "오전 11:00" },
              { title: "수요 기도회", loc: "소예배실", time: "오후 07:30" },
              { title: "금요 성령 집회", loc: "본당 3층", time: "오후 08:00" },
              { title: "주일학교 (유치/초등/청소년)", loc: "각 교육관", time: "오전 11:00" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-5">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-800 dark:text-slate-200">{item.title}</span>
                  <span className="text-sm text-slate-500">{item.loc}</span>
                </div>
                <span className="font-bold text-primary">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-slate-100">
            <MapPin className="text-primary" /> 오시는 길
          </h3>
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700">
            <div 
              className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRa9n_f84A6o__NpLe2NH0rO-vEDufllSkhzjJEPAwG_qByEMetJhTzVWf7e3199WccIzRRA1OXcDBHh731ad87EODetRH9fkFZkFwB5w2P8XOUeSwouoL4ZgbRTcbSnAvkrYGofXj1TUtfyxiS_5rgegHLF9eEndB6bQj1fFs-YzKmilyuZstmSx1DTaelNRNYFMSdsWTBdWqg08J2mDAKQO2RdzYi_Ek22OxYFUsU6c1SmY5X14NnQUu6kOMDgSJWrt9oEbAZvM')`
              }}
            >
              <div className="rounded-full bg-primary p-3 text-white shadow-lg">
                <Church className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-slate-800 dark:text-slate-200">서울특별시장 은혜구 평강동 123-45</p>
            <p className="text-slate-600 dark:text-slate-400">지하철 2호선 평강역 3번 출구 도보 5분</p>
            <div className="mt-2 flex gap-4">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                <Navigation className="h-4 w-4" /> 길찾기
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                <Phone className="h-4 w-4" /> 전화문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
