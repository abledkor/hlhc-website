import { Megaphone, ChevronRight, Image as ImageIcon } from 'lucide-react';

export function NewsGallery() {
  return (
    <section id="news" className="px-6 py-16 lg:px-40">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-3">
        {/* Announcements */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex items-end justify-between">
            <h3 className="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-slate-100">
              <Megaphone className="text-primary" /> 교회 소식
            </h3>
            <a href="#" className="text-sm text-slate-500 hover:text-primary">전체보기</a>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { type: "중요", typeColor: "text-red-500", title: "2024년 상반기 학습, 세례 신청 안내", date: "2024.05.20" },
              { type: "공지", typeColor: "text-primary", title: "여름 단기 선교 모집 (캄보디아)", date: "2024.05.15" },
              { type: "일반", typeColor: "text-slate-500", title: "교회 주차장 보수 공사 일정 안내", date: "2024.05.10" }
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center justify-between rounded-xl border-b border-slate-100 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-bold ${item.typeColor}`}>{item.type}</span>
                  <h5 className="font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">{item.title}</h5>
                  <p className="text-xs text-slate-400">{item.date}</p>
                </div>
                <ChevronRight className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="flex flex-col gap-6">
          <h3 className="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-slate-100">
            <ImageIcon className="text-primary" /> 최근 활동
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBJPA0WB26wPJ8GCgTDxuhysH_pQa9-1PS9PkdflXcDoujVqcm2LcD8iMD_wRSUVz9JqxeY38UoAfdigE6g3IZQPZheMIj6tCVES-uLZIT3RQP1KOXIxbN03BuvORZTRfg9BqFx2WlirWis5qeQEZAabfqi1j3T6mPN4LEnZ8ugnGffydTDLsiC8bj2CP0k_MzPaBt1cBDiuETH3pIcMGwfa73fjpQ_HRP3Ytfc6qlSHG5r7751i3ljYP1PwMCE9F8-wkDkCcOOG1Y",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDBbUfJII_ZayHGxK9IJHDdpq88WcTC806ce1iGeBvTEEGOmXNqQogWwduvP4iWqJJ-C6dokKGGBqdgU92igxyOdnjJLRrnXbTG2Fxe3lXR4NmKrI1HhN3-8WQ0HGqKYAL2WnzjmVZ8WDc0ordo-i1QsLDo0c0NNivObflKDteF6zL5Hst3v27R6XWX5q-15jwKz20fO0RlY0sMsVMAZugCw0j5ZLeGmjUR10gukhA4rCD1_SrQpT1ETIz7hPu8HXfzJUfwA9Th9Xg",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBIfMcZ49c-Isguxm8m4LIZQNZvYHaLOm1D8c0VPHWx5OZIj-vmr3eUGiizhYRvh_pr4zPkZw78J9AYVPYWsyRHCoIcD4HTm9d5DHue1gDjTm3GgLyE52olnFQsmrZXxojz7yKlwKCEYzKoxj8nqlX88_HDV7ugE3hKBeQmIHf-TRXR6zc4Am2Jf5UUZG1a86mx5CkVbEgxNTXzeQ7W9IaYy53XjAYevJuy2v_3X-MPrcvqxuHXAUscI6U66S8y578mnk-2MjSSqr8",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBGy-zzYuHmX2AD1EvvuLZwC_nHL33rm2Aa-RP578-rx-8260FnyeQiDrUxRU9COt2NSs-aFFdlQfqjCIGLONWxPd6jd9oaRdPb-3FCu6UXdW2pJusyCAZlSnO47mPpQqHzgVAsQxu69XAGiP-d3HyyU_WSXNwZXQcnPCIvhV-ZoxYCWnj7oL-O9c3a-DW8dXvsoU5Uty8-XCL8iodQHnk8fohTydwD3DQBtkb6_MYbrrGFrgBjt9jXuhOtWqXC4G7xGS89eiv6MX8"
            ].map((url, idx) => (
              <div 
                key={idx}
                className="aspect-square overflow-hidden rounded-lg bg-slate-200"
                style={{ backgroundImage: `url('${url}')`, backgroundSize: 'cover' }}
              />
            ))}
          </div>
          <button className="w-full rounded-xl border border-primary/20 py-3 font-bold text-primary transition-colors hover:bg-primary/5">
            갤러리 더보기
          </button>
        </div>
      </div>
    </section>
  );
}
