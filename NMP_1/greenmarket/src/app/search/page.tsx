import { ProductCard } from "@/components/ui/ProductCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { MOCK_PRODUCTS, CATEGORIES } from "@/lib/mock-data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = typeof searchParams?.q === 'string' ? searchParams.q : '';
  const activeCategory = typeof searchParams?.category === 'string' ? searchParams.category : 'All Produce';

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.seller.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'All Produce' || product.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black mb-2">
            {query ? `Search results for "${query}"` : 'Browse Markets'}
          </h1>
          <p className="text-slate-500">
            Showing {filteredProducts.length} results {activeCategory !== 'All Produce' && `in ${activeCategory}`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
              <h3 className="font-bold mb-4 text-lg">Categories</h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`/search?category=${encodeURIComponent(cat)}${query ? `&q=${query}` : ''}`}
                      className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat
                        ? 'bg-primary/20 text-primary dark:text-primary'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold mb-4 mt-8 text-lg">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="Min" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary" />
                  <span>-</span>
                  <input type="number" placeholder="Max" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary" />
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-sm rounded-lg transition-colors">
                  Apply Filter
                </button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <a key={product.id} href={`/product/${product.id}`} className="block">
                  <ProductCard {...product} />
                </a>
              ))}

              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">search_off</span>
                  <h3 className="text-xl font-bold mb-2">No products found</h3>
                  <p className="text-slate-500 max-w-sm">Try adjusting your search or filter to find what you're looking for.</p>
                  <a href="/search" className="mt-6 px-6 py-2 bg-primary text-slate-900 font-bold rounded-lg hover:brightness-110 transition-all">
                    Reset Search
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
