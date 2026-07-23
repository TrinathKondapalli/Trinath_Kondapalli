import { motion } from 'framer-motion';

export default function PlatformStrategy() {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12 bg-[#F8F7F3] text-[#1C3621] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-bosan font-extrabold text-4xl md:text-6xl tracking-tight mb-6">
            Two Users. Two Contexts.
          </h2>
          <p className="font-manrope text-lg md:text-xl text-[#1C3621]/80 max-w-2xl mx-auto font-light">
            We couldn't build a one-size-fits-all solution. The kitchen staff needed a high-speed tool on the floor, while the property owner needed a birds-eye view from their desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Mobile Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-full aspect-[4/3] bg-white border border-[#1C3621]/5 rounded-[2rem] p-8 flex items-center justify-center mb-8 relative shadow-2xl overflow-hidden">
              <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(230,167,67,0.1),transparent_50%)]"></div>
              <img 
                src="/Mobile_Home_page.png" 
                alt="Mobile Strategy Mockup" 
                className="w-48 h-auto object-cover rounded-3xl border-8 border-[#1C3621] shadow-2xl rotate-[-5deg] transform origin-bottom" 
              />
            </div>
            <h3 className="font-bosan font-extrabold text-3xl mb-4 text-[#1C3621]">Mobile: Speed (Kitchen Staff)</h3>
            <p className="font-manrope text-[#1C3621]/70 leading-relaxed max-w-md">
              Speed-focused application for kitchen managers on the go.
            </p>
          </motion.div>

          {/* Desktop Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center md:mt-24"
          >
            <div className="w-full aspect-[4/3] bg-white border border-[#1C3621]/5 rounded-[2rem] p-8 flex items-center justify-center mb-8 relative shadow-2xl overflow-hidden">
              <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(230,167,67,0.1),transparent_50%)]"></div>
              <img 
                src="/govigi/Govigi_Users_List.png" 
                alt="Desktop Strategy Mockup" 
                className="w-[120%] max-w-none h-auto object-cover rounded-xl border-4 border-[#1C3621] shadow-2xl translate-x-8" 
              />
            </div>
            <h3 className="font-bosan font-extrabold text-3xl mb-4 text-[#1C3621]">Desktop: Control (Admins)</h3>
            <p className="font-manrope text-[#1C3621]/70 leading-relaxed max-w-md">
              Control-focused dashboard for reception admins to manage subscriptions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

