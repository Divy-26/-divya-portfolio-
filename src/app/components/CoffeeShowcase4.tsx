import AppPhone from './AppPhone';
import { Search, Heart, ShoppingBag } from 'lucide-react';

export default function CoffeeShowcase4() {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-12 flex-wrap">
          {/* Dark Splash Screen */}
          <AppPhone>
            <div className="h-full bg-gray-900 flex flex-col items-center justify-center px-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-900 to-amber-950 mb-12 flex items-center justify-center overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop"
                    alt="Latte art"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <h2 className="text-white text-3xl font-bold text-center mb-8 leading-tight">
                  FIND THE BEST<br />COFFEE FOR YOU
                </h2>
                <button className="px-12 py-4 bg-white text-gray-900 rounded-xl font-semibold">
                  Proceed
                </button>
              </div>
            </div>
          </AppPhone>

          {/* Dark Favorites List */}
          <AppPhone>
            <div className="h-full bg-gray-900 flex flex-col">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white text-2xl font-bold">Your Favorites</h2>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-2xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <img
                        src="https://images.unsplash.com/photo-1585375799317-68e957e07c07?w=200&h=200&fit=crop"
                        alt="Leaves"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10 flex gap-4">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
                          alt="Cappuccino"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold mb-1">Cappuccino</h3>
                        <p className="text-gray-400 text-sm mb-3">With Chocolate</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary text-xl font-bold">₱ 120.00</span>
                          <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Plus className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-2xl p-4">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
                          alt="Cappuccino"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold mb-1">Cappuccino</h3>
                        <p className="text-gray-400 text-sm mb-3">With Chocolate</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary text-xl font-bold">₱ 120.00</span>
                          <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Plus className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold">Popular Now</h3>
                  </div>
                  <div className="flex gap-4 overflow-x-auto">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-gray-800 rounded-2xl p-3 min-w-[140px]">
                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
                          <img
                            src={i === 1
                              ? "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop"
                              : "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
                            }
                            alt="Coffee"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-white text-sm font-semibold mb-1">
                          {i === 1 ? 'Latte' : 'Cappuccino'}
                        </h4>
                        <p className="text-gray-400 text-xs mb-2">
                          {i === 1 ? 'Espresso' : 'Espresso'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AppPhone>

          {/* Dark Product Detail */}
          <AppPhone>
            <div className="h-full bg-gray-900 flex flex-col">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1585375799317-68e957e07c07?w=400&h=400&fit=crop"
                  alt="Coffee beans"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <button className="absolute top-4 left-4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  ←
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop"
                      alt="Cappuccino"
                      className="w-40 h-40 rounded-full object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-white text-2xl font-bold">Cappuccino</h2>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-white font-semibold">4.8</span>
                      <span className="text-gray-400 text-sm">(230)</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">With Chocolate</p>
                  <div className="text-primary text-3xl font-bold mt-4">₱ 120.00</div>
                </div>

                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Description</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    Smooth Espresso blended with steamed milk, chocolate and...
                  </p>
                  <button className="text-primary text-sm font-medium">Read More</button>
                </div>

                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Size</h3>
                  <div className="flex gap-3">
                    {['S', 'M', 'L'].map((size, i) => (
                      <button
                        key={size}
                        className={`flex-1 py-2 rounded-xl border-2 ${
                          i === 1
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-700 text-gray-400'
                        } font-semibold`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold mb-2">
                  Add to cart
                </button>
                <button className="w-full bg-gray-800 text-white py-4 rounded-xl font-semibold">
                  Buy now
                </button>
              </div>
            </div>
          </AppPhone>
        </div>
      </div>
    </section>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
