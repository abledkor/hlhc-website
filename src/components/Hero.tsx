import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="@container">
      <div className="p-4 lg:p-10">
        <div 
          className="relative flex min-h-[520px] flex-col items-center justify-center gap-6 overflow-hidden rounded-xl bg-cover bg-center p-6 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCElEz_6y8k8vtet6HM-5Vec_sIC_XWxlF8srRGO21AWDlnqgzseJTv9jSW1kO61NQPe5NqbXHgeHLT1Z_12WgAJQ5bvS5lLtIzHq9Ua6uC-Rr7QwlCVCOYZgZMpGgGC_5GWvSTYs3ABr4LiLUvJJXKUFDK9PjuNzt_hZWO9ZH2kWgcfj6XiAI9nduAk2UjbML5mg4svn-RI20Hpzk1CgY_2F-PJS9G1mcImTcVRvi-Uyf-qAQVYMqw2Od0mDSewpsRtytWXU5SUMY")`
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 flex max-w-2xl flex-col gap-4"
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              은혜와 평강이 가득한 우리교회
            </h1>
            <p className="text-lg font-normal text-slate-200 md:text-xl">
              주님의 사랑 안에서 함께 성장하고 지역사회를 섬기는 믿음의 공동체입니다.
            </p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
