import { BookOpen, Heart, Globe, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-16 lg:px-40 dark:bg-slate-900/50">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-4">
          <h3 className="text-3xl font-black text-slate-900 md:text-4xl dark:text-slate-100">교회 소개</h3>
          <div className="h-1 w-20 rounded-full bg-primary"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video overflow-hidden rounded-2xl bg-slate-200 shadow-xl"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhXYXvIqPEJnqaiYhIySrG2BOgyYzqJ_7W7R90XvlhQOqSaFtn9v7J4hzriqlsym_egXa9b9tsTeAUy5_lZW_Uq2r9kFOu9gB2hUBzg-5ZIg1y7wjRabXBKA7SPWeK6_MHiOdZZ89-v4Dha2sV85Jhq9J23kuOSoooj3CnW8XBMuVmJ3iKEI5iHqHbJ0jreYyC9ak5IN_nxkld9GWF1ymz3hGfkW32vzdYxRn2K9G6HwiZGGHKFD1O_5xOp2oeYr1ZFmwWmhjK13Y')`,
              backgroundSize: 'cover'
            }}
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              "환영합니다. 하늘빛힐링교회는 당신을 기다리고 있었습니다."
            </h4>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              하늘빛힐링교회는 하나님의 말씀을 중심으로 세워진 공동체입니다. 길 잃은 영혼들이 쉼을 얻고, 믿음의 가정이 세워지며, 다음 세대가 꿈을 꾸는 곳이 되기를 소망합니다. 모든 성도가 세상의 빛과 소금이 되어 주님의 사랑을 전하는 삶을 살 수 있도록 돕겠습니다.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">담임목사 $$$</p>
                <p className="text-sm text-slate-500">하늘빛힐링교회</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
