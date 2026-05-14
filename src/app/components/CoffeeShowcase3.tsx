import AppPhone from './AppPhone';
import { Heart, Plus, Minus, X } from 'lucide-react';

export default function CoffeeShowcase3() {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-12 flex-wrap">
          {/* Home Screen */}
          <AppPhone>
            <div className="h-full bg-gray-50 flex flex-col p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  🔍
                </button>
              </div>

              <h2 className="text-3xl font-bold mb-8 leading-tight">
                Good morning,<br />Jennifer!
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm relative">
                    <div className="absolute -top-3 -left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium -rotate-90" style={{ transformOrigin: 'left bottom' }}>
                      Recommended
                    </div>
                    <div className="w-full aspect-square bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
                        alt="Latte"
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Classic Latte</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          ☕
                        </button>
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Heart className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">$ 3.45</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm relative">
                    <div className="w-full aspect-square bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=200&h=200&fit=crop"
                        alt="Mocha"
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Iced Caramel</h3>
                    <h4 className="text-xs text-gray-500 mb-3">Mocha</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          ☕
                        </button>
                        <button className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">$ 4.50</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="text-xs text-gray-500 mb-1 tracking-wide">Coffee</div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm">
                    <div className="w-full aspect-square bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=200&fit=crop"
                        alt="Latte"
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Classic Latte</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          ☕
                        </button>
                        <button className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">$ 3.45</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm">
                    <div className="w-full aspect-square bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop"
                        alt="Mocha"
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Iced Caramel</h3>
                    <h4 className="text-xs text-gray-500 mb-3">Mocha</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          ☕
                        </button>
                        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <Heart className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">$ 4.50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-around">
                <button className="flex flex-col items-center gap-1 text-primary">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <Plus className="w-5 h-5" />
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <div className="w-5 h-5 flex items-center justify-center">🛒</div>
                </button>
              </div>
            </div>
          </AppPhone>

          {/* Product Detail Modal */}
          <AppPhone>
            <div className="h-full bg-gray-50 flex flex-col p-6 relative">
              <div className="flex-1"></div>

              <div className="bg-white rounded-t-[2rem] shadow-2xl p-6 absolute bottom-0 left-0 right-0" style={{ height: '85%' }}>
                <button className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
                      alt="Classic Latte"
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>

                  <h2 className="text-3xl font-bold text-center mb-2">Classic Latte</h2>
                  <div className="text-xl font-bold text-center mb-6">$ 4.50</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Size</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Large</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Flavor</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Caramel</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Topping</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Whipped Cream</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 mb-6">
                  <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold">2</span>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold">
                  ADD TO CART
                </button>
              </div>
            </div>
          </AppPhone>
        </div>
      </div>
    </section>
  );
}
