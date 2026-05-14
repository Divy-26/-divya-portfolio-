import AppPhone from './AppPhone';
import { Heart, Plus, ShoppingCart, User } from 'lucide-react';

export default function CoffeeShowcase2() {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-amber-100 via-orange-50 to-lime-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-12 flex-wrap">
          {/* Onboarding Screen */}
          <AppPhone>
            <div className="h-full bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-between p-8 py-16">
              <div className="flex-1 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop"
                    alt="Coffee splash"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-4">Get Started</div>
                <h2 className="text-3xl font-bold mb-8 leading-tight">
                  Find the best coffee<br />for you
                </h2>
                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-transparent text-accent rounded-xl font-medium border border-accent">
                    Skip Now
                  </button>
                  <button className="flex-1 px-6 py-3 bg-accent text-white rounded-xl font-medium">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </AppPhone>

          {/* Home with Categories */}
          <AppPhone>
            <div className="h-full bg-orange-50 flex flex-col p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Enjoy your<br /><span className="text-accent">Morning Coffee!!</span></h2>
                  <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    🔔
                  </button>
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search somthing"
                    className="w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm shadow-sm"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2">🔍</span>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">⚙️</span>
                  </button>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">Catagories</h3>
                    <a href="#" className="text-xs text-gray-500">See all</a>
                  </div>
                  <div className="flex gap-4">
                    {['All Menu', 'Latte', 'Mocha', 'Doppio'].map((cat, i) => (
                      <div key={cat} className="flex flex-col items-center">
                        <div className={`w-14 h-14 rounded-full ${i === 0 ? 'bg-accent' : 'bg-white'} flex items-center justify-center mb-2 shadow-sm`}>
                          <span className={i === 0 ? 'text-white text-xl' : 'text-xl'}>☕</span>
                        </div>
                        <span className="text-xs">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">Special Coffee</h3>
                    <a href="#" className="text-xs text-gray-500">See all</a>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                      <div className="w-full aspect-square bg-gray-100 rounded-xl mb-2 relative overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop"
                          alt="Coffee"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xs font-semibold mb-1">Choclato Coffee</h4>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span className="mr-1">⭐ 4.5</span>
                        <span>(120 reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400 line-through mr-1">$120</span>
                          <span className="font-bold text-sm">$80</span>
                        </div>
                        <button className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                      <div className="w-full aspect-square bg-gray-100 rounded-xl mb-2 relative overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
                          alt="Coffee"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xs font-semibold mb-1">Doppio Coffee</h4>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span className="mr-1">⭐ 4.9</span>
                        <span>(320 reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400 line-through mr-1">$100</span>
                          <span className="font-bold text-sm">$70</span>
                        </div>
                        <button className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-around bg-white rounded-2xl p-3 shadow-lg">
                <button className="flex flex-col items-center gap-1 text-accent">
                  <Heart className="w-5 h-5 fill-accent" />
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AppPhone>

          {/* Product Detail */}
          <AppPhone>
            <div className="h-full bg-gradient-to-b from-orange-50 to-lime-50 flex flex-col p-6">
              <div className="bg-white rounded-3xl p-4 mb-4 shadow-sm">
                <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-3 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop"
                    alt="Chocolate Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold">Choclate Coffee</h2>
                  <div className="text-lg font-bold">$250</div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                  <span>With Milk</span>
                  <span>☕ 2</span>
                  <span>⏱️</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 flex-1 shadow-sm">
                <h3 className="font-semibold mb-2">Discription</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  It's a simple drink that combines creamy dark chocolate and freshly brewed coffee for a luscious blend of flavors you enjoy. Just...
                </p>
                <a href="#" className="text-xs text-accent font-medium">See More</a>

                <div className="mt-6 mb-4">
                  <h3 className="font-semibold mb-3">Type of Coffee</h3>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-accent/10 text-accent rounded-lg text-xs font-medium border border-accent">
                      ☕ Hot
                    </button>
                    <button className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                      🧊 Cold
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-3">Sugar</h3>
                  <div className="flex gap-2">
                    {['30%', '40%', '60%'].map((sugar) => (
                      <button key={sugar} className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                        {sugar}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Ice</h3>
                  <div className="flex gap-2">
                    {['30%', '40%', '60%'].map((ice) => (
                      <button key={ice} className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                        {ice}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-accent text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </AppPhone>
        </div>
      </div>
    </section>
  );
}
