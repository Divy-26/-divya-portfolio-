import AppPhone from './AppPhone';
import { ArrowRight, Search, Heart } from 'lucide-react';

export default function CoffeeShowcase1() {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-12 flex-wrap">
          {/* Splash Screen - Dark */}
          <AppPhone>
            <div className="h-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-8 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=600&fit=crop"
                  alt="Coffee splash"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 text-center">
                <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
                  Find Your<br />Perfect Brew
                </h2>
                <p className="text-gray-300 text-sm mb-12 max-w-xs mx-auto">
                  Crafted coffee, rich aroma, and smooth taste—all made for your palate
                </p>
                <button className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center mx-auto shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </AppPhone>

          {/* Home Screen - Light */}
          <AppPhone>
            <div className="h-full bg-gray-50 flex flex-col">
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-bold mb-2">Good Morning 👋</h2>
                <p className="text-sm text-gray-500 mb-4">Grab your cup of coffee, and check out the way ahead</p>

                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm border border-gray-200"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold">All Categories</h3>
                    <a href="#" className="text-sm text-primary">See All →</a>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium">All</button>
                    <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium border border-gray-200">Espresso</button>
                    <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium border border-gray-200">Milk Coffee</button>
                  </div>
                </div>
              </div>

              <div className="px-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm relative">
                  <div className="w-full aspect-square bg-gray-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-amber-100"></div>
                  </div>
                  <Heart className="absolute top-6 right-6 w-5 h-5 text-red-500 fill-red-500" />
                  <h4 className="text-sm font-semibold mb-1">Classic Italian</h4>
                  <p className="text-xs text-gray-500 mb-2">Espresso</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">$4.00</span>
                    <span className="text-xs text-gray-500">⭐ 4.8</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm relative">
                  <div className="w-full aspect-square bg-gray-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-amber-100"></div>
                  </div>
                  <Heart className="absolute top-6 right-6 w-5 h-5 text-gray-300" />
                  <h4 className="text-sm font-semibold mb-1">Caramel Milk</h4>
                  <p className="text-xs text-gray-500 mb-2">Latte</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">$4.50</span>
                    <span className="text-xs text-gray-500">⭐ 4.5</span>
                  </div>
                </div>
              </div>
            </div>
          </AppPhone>

          {/* Product Detail Screen */}
          <AppPhone>
            <div className="h-full bg-white flex flex-col">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop"
                  alt="Coffee"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  ←
                </button>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs">☕ 12 min</span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs">🔥 5.4 Kcl</span>
                </div>
              </div>

              <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-2">Caramel Latte Supreme</h2>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  Smooth espresso blended with steamed milk and rich caramel syrup...
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Price</div>
                    <div className="font-bold text-lg">$16.00</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Rating</div>
                    <div className="font-bold text-lg">⭐ 4.5</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Quantity</div>
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">-</button>
                      <span className="font-bold">1</span>
                      <button className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">+</button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3">Extras</div>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Syrup</span>
                      <span className="text-sm">+$0.50</span>
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Vanilla Syrup</span>
                      <span className="text-sm">+$0.50</span>
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Caramel Drizzle</span>
                      <span className="text-sm">+$0.80</span>
                    </label>
                  </div>
                </div>

                <button className="w-full bg-accent text-white py-4 rounded-xl font-semibold">
                  Add to Cart - $9.00
                </button>
              </div>
            </div>
          </AppPhone>
        </div>
      </div>
    </section>
  );
}
