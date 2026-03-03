import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

const sermons = [
  {
    title: "끝까지 견디는 자는 구원을 얻으리라",
    date: "2024.05.19",
    scripture: "마태복음 24:1-14",
    type: "주일 대예배",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjWhb1hGUOwgW_9IHIpZFRPLWxdhxSA5T6YxE_8M38BzLqsrpclPrbATZrrZnZH2dKMe8u8iFXTxHklzbz2FS5UVK_Y25dsOan1e43MY4htGJrCH9UCQ9-gXxZ1jv4VDwbr0qGupVQxsMCOFpMQGk0f2DxsGO1zKkOGu1F03xcHomcZdKDsRr8s3hicAIuwrUbpBTL8LGSEk8lrkfatlZjOOfKS8RIDlUaiR-GKdox-G1VeaII7Y-j1zH1mQ7999YM1TFcf0Yhv90"
  },
  {
    title: "참된 평안은 어디에 있는가",
    date: "2024.05.12",
    scripture: "요한복음 14:27",
    type: "주일 대예배",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5G2dI-h5WtrMk-jjfTg1E_U2t5UMjVSkC9rQb2V3diU7BWydAJfTvZGh3nXn2XFuThcqlH-YkdDAXPkAqhfAJj2n2rzbteoe9Ifj5Rgr5XHJv1OecxU0qyvJgNaSwuC5azGZcutZePJJmPy4ZZL2t6kF0hZ9sgF28339GD2EQMktpSUPKKSgPalDcSifK8sdRtN25V4BQnEncBahEQy_OqZIa025mrIBy9F_wj5hWyxBRx6yfGeYEtMUaCs1XCowuzmbGIyLEVfk"
  },
  {
    title: "성령의 바람이 불어오는 곳",
    date: "2024.05.10",
    scripture: "사도행전 2:1-4",
    type: "금요 기도회",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm7XWhWiWcQ_7Ol0C4cs2FmOJe-XKxd0UacuAI9_ODOZ5HnFobIWqxeomZr0fV5FwGDzJQGDG0yoqZq4jJU3Op2jI__FPlUIswYuJXhz8vr3Urpb8hISUaifnO3AJYBvP-W7KWwYNDGwxTxjf59w6eatCac09wOBwsjfGO85RhCnhQChgG_N4Li6QUzwuUAlVH5p235G93I78xO4_jKMlqwKUbfzCCUUd8Fsgnbvo4I-w5Fnp1O6ZMNKTvb6FU6lFU6blJMxC33Ww"
  }
];

export function Sermons() {
  return (
    <section id="sermon" className="px-6 py-16 lg:px-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">최신 설교</h3>
          </div>
          <a href="#" className="flex items-center gap-1 font-bold text-primary hover:underline">
            더보기 <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div 
                className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-slate-200"
                style={{ backgroundImage: `url('${sermon.image}')`, backgroundSize: 'cover' }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/40">
                  <PlayCircle className="h-12 w-12 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
              <span className="rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{sermon.type}</span>
              <h4 className="mt-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                {sermon.title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {sermon.date} | {sermon.scripture}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
