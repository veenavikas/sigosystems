export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
          <div className="absolute w-[800px] h-[800px] -top-96 -right-96 bg-[#1E5FE0] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-[#1E5FE0]"></div>
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-400">Our Company</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            We build intelligent systems <br className="hidden md:block" />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1E5FE0]">vision, analytics</span> and <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5FE0] to-indigo-400">technology</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-[#1E5FE0] pl-6 mt-12">
            Helping organizations see, know and act faster.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Title */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Why we exist
                </h2>
                <div className="w-12 h-1 bg-[#1E5FE0]"></div>
              </div>
            </div>
            
            {/* Right Column: Content */}
            <div className="lg:col-span-8 space-y-12 text-lg md:text-xl text-slate-600 leading-relaxed">
              
              <p>
                Every organization today sits on more data than it can use. Sensors, transactions, satellite imagery, field reports, operational logs: the raw material for better decisions is everywhere. What's missing isn't data. It's the system that turns that data into value an organization can actually act on, in time for it to matter.
              </p>
              
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1E5FE0]"></div>
                <div className="absolute -right-10 -bottom-10 text-[#1E5FE0] opacity-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <p className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug relative z-10">
                  That gap is what SIGO Systems was built to close.
                </p>
              </div>
              
              <p>
                We don't think of "seeing," "knowing," and "acting" as three separate capabilities bolted together. We think of them as one continuous system. Intelligent sensors let an organization see what's happening, in real time, across physical and digital environments. Predictive analytics let it know what that means is what's likely to happen next, what's at risk, where the opportunity is.
              </p>
              
              <p>
                And because we build for deployment, not demonstration, our technology lets organizations act while there's still time to change the outcome.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Philosophy Closing Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <svg className="w-12 h-12 text-[#1E5FE0] mx-auto mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.714 4.135-10.518 9.983-10.518V10.15c-3.134 0-5.698 1.488-6.953 3.513v7.337h-3.03zm-11 0v-7.391c0-5.714 4.135-10.518 9.983-10.518V10.15c-3.134 0-5.698 1.488-6.953 3.513v7.337h-3.03z"></path>
          </svg>
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            That's the philosophy behind everything we build: intelligence is only valuable if it arrives in time to be useful.
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1E5FE0] to-blue-400 mx-auto rounded-full"></div>
        </div>
      </section>

    </div>
  );
}
