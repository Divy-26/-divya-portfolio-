import { Layout, ArrowRight, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export default function DesignSection() {
  return (
    <section className="py-32 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <span className="text-indigo-700 text-sm font-medium">Design</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Core UX work
          </h2>
        </div>

        {/* Information Architecture */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">Information Architecture</h3>
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-8 overflow-x-auto">
              {['Sign Up', 'Risk Profile', 'Recommendations', 'Portfolio', 'Funding'].map((step, i, arr) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    <span className="text-sm font-medium text-center">{step}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-4 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <p className="text-green-800 font-medium">✓ Simplified onboarding flow • Reduced from 8 to 5 steps</p>
            </div>
          </div>
        </div>

        {/* Wireframes */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">Wireframes → UI Progression</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Low Fidelity */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
              <div className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">Low Fidelity</div>
              <div className="bg-gray-100 rounded-xl p-6 mb-4 aspect-[3/4]">
                <div className="space-y-3">
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  <div className="mt-6 space-y-2">
                    <div className="h-8 bg-gray-300 rounded"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="mt-6 h-10 bg-gray-400 rounded"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Exploring layouts and flows</p>
            </div>

            {/* Mid Fidelity */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
              <div className="text-xs font-semibold text-blue-600 mb-4 uppercase tracking-wider">Mid Fidelity</div>
              <div className="bg-slate-50 rounded-xl p-6 mb-4 aspect-[3/4] border border-slate-200">
                <div className="space-y-3">
                  <div className="h-4 bg-slate-700 rounded w-3/4 font-semibold"></div>
                  <div className="h-3 bg-slate-400 rounded w-1/2"></div>
                  <div className="mt-6 space-y-3">
                    <div className="bg-white border-2 border-slate-300 rounded-lg p-3">
                      <div className="h-2 bg-slate-300 rounded w-1/3 mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                    <div className="bg-white border-2 border-slate-300 rounded-lg p-3">
                      <div className="h-2 bg-slate-300 rounded w-1/3 mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="mt-6 h-11 bg-blue-500 rounded-lg"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Refining interactions</p>
            </div>

            {/* High Fidelity */}
            <div className="bg-white rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
              <div className="text-xs font-semibold text-indigo-600 mb-4 uppercase tracking-wider">High Fidelity</div>
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-6 mb-4 aspect-[3/4] text-white">
                <div className="space-y-3">
                  <div className="text-lg font-bold">What's your risk profile?</div>
                  <div className="text-sm text-blue-200">Help us understand your comfort level</div>
                  <div className="mt-6 space-y-3">
                    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="text-sm font-semibold">Conservative</div>
                          <div className="text-xs text-blue-200">Lower risk, stable returns</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-500/20 backdrop-blur border-2 border-blue-400 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-blue-300" />
                        <div>
                          <div className="text-sm font-semibold">Balanced</div>
                          <div className="text-xs text-blue-200">Moderate risk & growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 h-11 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center font-semibold">
                    Continue
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Final polished UI</p>
            </div>
          </div>
        </div>

        {/* UI Design Principles */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">UI Design Principles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Layout className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Clean, data-driven interface</h4>
              <p className="text-sm text-gray-600">Prioritize clarity over decoration</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Trust-building visuals</h4>
              <p className="text-sm text-gray-600">Professional, secure aesthetic</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Clear CTAs</h4>
              <p className="text-sm text-gray-600">Guide users confidently</p>
            </div>
          </div>
        </div>

        {/* Design System */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Design System</h3>
          <div className="bg-white rounded-3xl p-10 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold mb-6">Components</h4>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-sm hover:shadow-md transition-shadow">
                    Primary Button
                  </button>
                  <button className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:border-gray-400 transition-colors">
                    Secondary Button
                  </button>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Input Field</label>
                    <input
                      type="text"
                      placeholder="Enter value"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-6">Tokens</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-3">Colors</div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <div className="w-full h-12 bg-blue-600 rounded-lg mb-2"></div>
                        <div className="text-xs text-gray-600">Primary</div>
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-12 bg-indigo-600 rounded-lg mb-2"></div>
                        <div className="text-xs text-gray-600">Secondary</div>
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-12 bg-slate-900 rounded-lg mb-2"></div>
                        <div className="text-xs text-gray-600">Text</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-3">Typography</div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold">Heading</div>
                      <div className="text-base">Body text</div>
                      <div className="text-sm text-gray-600">Caption</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-3">Spacing</div>
                    <div className="flex items-end gap-2">
                      {[4, 8, 12, 16, 24].map(size => (
                        <div key={size} className="flex flex-col items-center gap-1">
                          <div className="w-4 bg-blue-500 rounded" style={{ height: `${size}px` }}></div>
                          <span className="text-xs text-gray-600">{size}px</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
