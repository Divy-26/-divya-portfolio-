import AppPhone from './AppPhone';

export default function RewardsShowcase() {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop"
          alt="Coffee beans"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center">
          <AppPhone>
            <div className="h-full bg-gradient-to-b from-orange-50 to-white flex flex-col p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-400">9:41 AM</div>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                </div>
                <div className="text-gray-400">100%</div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="relative inline-block">
                  {/* Coffee bean decorations */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-4 bg-amber-900 rounded-full opacity-20"
                      style={{
                        top: `${Math.sin((i * Math.PI * 2) / 8) * 100 + 50}%`,
                        left: `${Math.cos((i * Math.PI * 2) / 8) * 100 + 50}%`,
                        transform: 'translate(-50%, -50%) rotate(25deg)'
                      }}
                    />
                  ))}
                  <span className="text-sm text-accent tracking-wider font-medium">☕ REWARDS ☕</span>
                </div>
              </div>

              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <svg className="w-48 h-48 -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#E5E5E5"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#8B5E3C"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(7 / 10) * 502.4} 502.4`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border-8 border-white shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-2">☕</div>
                        <div className="text-sm text-gray-500">7/10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-accent mb-2">3</div>
                <div className="text-gray-600">Beans until<br />next reward</div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 mb-6 border border-amber-200">
                <h3 className="text-accent font-bold text-lg mb-4">Weekly Rewards Challenge</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded flex-shrink-0 mt-0.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">Make a purchase 7 days in a row</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded flex-shrink-0 mt-0.5"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">Earn 10 bonus beans as thanks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg mb-4 tracking-wide">REWARDS HISTORY</h3>

                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm">Ground(s) Level</span>
                    <span className="text-accent font-semibold">18/30</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">12 beans to reach Brewmaster</div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      ☕
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm">Bean Earned</h4>
                      <p className="text-xs text-gray-500 truncate">1st Ave & 4th St</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-sm">$5.39</div>
                      <div className="text-xs text-gray-400">Feb 12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AppPhone>
        </div>
      </div>
    </section>
  );
}
