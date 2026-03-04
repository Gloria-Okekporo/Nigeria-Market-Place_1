import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation Bar */}
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="max-w-[1280px] mx-auto px-6 py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">Direct from Nigerian Farms</span>
                  <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                    Fresh Groceries from Local Markets to Your <span className="text-primary">Doorstep</span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-[540px]">
                    Experience the finest Nigerian produce — from Mile 12 to Oyingbo — delivered directly from local markets to your home. Quality guaranteed.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/search" className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-slate-900 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                    Start Shopping
                  </Link>
                  <Link href="/seller-onboarding" className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-transparent border-2 border-slate-200 dark:border-slate-700 text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    Sell on GreenMarket
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl"></div>
                <div className="relative w-full aspect-[4/3] bg-center bg-cover rounded-3xl shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800"
                  style={{ backgroundImage: 'url("/images/hero.png")' }}>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works Section */}
          <section className="bg-white dark:bg-slate-900/50 py-20">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-black">How it Works</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-[600px]">Getting your weekly groceries has never been easier, more reliable, or more transparent.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl">storefront</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Browse Local Sellers</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Discover verified vendors from your favorite local Nigerian markets across the country.</p>
                </div>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl">shield</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Secure Payment</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Pay with absolute confidence using our integrated secure payment gateways like Paystack.</p>
                </div>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl">local_shipping</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Receive your fresh produce at your doorstep in record time with our logistics network.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Categories */}
          <section className="py-20 max-w-[1280px] mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-black">Featured Categories</h2>
                <p className="text-slate-600 dark:text-slate-400">The best of Nigerian agriculture, sorted for you.</p>
              </div>
              <Link className="text-primary font-bold flex items-center gap-1 hover:underline" href="/search">
                View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Tubers & Grains", count: "120+ Items", img: "/images/tubers.png" },
                { title: "Fresh Vegetables", count: "85+ Items", img: "/images/veggies.png" },
                { title: "Proteins (Meat & Fish)", count: "200+ Items", img: "/images/proteins.png" },
                { title: "Oils & Spices", count: "150+ Items", img: "/images/spices.png" }
              ].map((cat, i) => (
                <Link key={i} href={`/search?category=${encodeURIComponent(cat.title)}`} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("${cat.img}")` }}></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-xl font-bold">{cat.title}</p>
                    <p className="text-primary text-sm font-medium">{cat.count}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Trust & Security */}
          <section className="bg-primary/5 dark:bg-slate-900 py-16 border-y border-primary/10">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="flex flex-col gap-6 max-w-[500px]">
                  <h2 className="text-3xl font-black">Shop with Peace of Mind</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">We&apos;ve built a platform that prioritizes your security and the quality of your produce above all else.</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <span className="font-semibold">Verified Sellers with Physical Market Stalls</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <span className="font-semibold">Secure Payments via Paystack &amp; Flutterwave</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <span className="font-semibold">Money-back Quality Guarantee</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm flex flex-col items-center gap-4 text-center">
                    <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                    <p className="font-bold">100% Secure</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm flex flex-col items-center gap-4 text-center">
                    <span className="material-symbols-outlined text-4xl text-primary">payments</span>
                    <p className="font-bold">Escrow Pay</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm flex flex-col items-center gap-4 text-center">
                    <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
                    <p className="font-bold">24/7 Help</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm flex flex-col items-center gap-4 text-center">
                    <span className="material-symbols-outlined text-4xl text-primary">star</span>
                    <p className="font-bold">Top Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
