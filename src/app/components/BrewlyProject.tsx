import { Coffee, ShoppingCart, Award, MapPin, Heart } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function BrewlyProject() {
  return (
    <section id="work" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="mb-6 opacity-40 tracking-wide uppercase text-[13px]">
            Case Study
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Brewly
          </h2>
          <p className="text-[clamp(1.125rem,2vw,1.5rem)] max-w-3xl opacity-50 leading-relaxed">
            A mobile app designed to simplify coffee ordering while enhancing user engagement through a seamless loyalty experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32 max-w-5xl">
          <div>
            <div className="mb-6 opacity-40 tracking-wide uppercase text-[13px]">
              Problem
            </div>
            <p className="text-lg leading-relaxed opacity-60">
              Users experience friction in ordering coffee and lack engaging loyalty systems that keep them connected to their favorite cafes.
            </p>
          </div>

          <div>
            <div className="mb-6 opacity-40 tracking-wide uppercase text-[13px]">
              Solution
            </div>
            <p className="text-lg leading-relaxed opacity-60">
              Design a clean, intuitive mobile app with integrated rewards, personalized recommendations, and fast checkout.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <div className="mb-16 opacity-40 tracking-wide uppercase text-[13px]">
            Key Screens
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            <PhoneMockup label="Home">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-8">
                  <div className="text-xs opacity-40 mb-2">Good morning</div>
                  <div className="text-sm">Divya</div>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
                    <Coffee className="w-8 h-8 mb-2 opacity-60" />
                    <div className="text-xs opacity-60">Latte</div>
                  </div>
                  <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
                    <Coffee className="w-8 h-8 mb-2 opacity-60" />
                    <div className="text-xs opacity-60">Cappuccino</div>
                  </div>
                  <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
                    <Coffee className="w-8 h-8 mb-2 opacity-60" />
                    <div className="text-xs opacity-60">Espresso</div>
                  </div>
                </div>
              </div>
            </PhoneMockup>

            <PhoneMockup label="Product Detail">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1 bg-secondary/30 rounded-2xl mb-6 flex items-center justify-center">
                  <Coffee className="w-16 h-16 opacity-30" />
                </div>
                <div className="mb-4">
                  <div className="text-sm mb-1">Caramel Latte</div>
                  <div className="text-xs opacity-40">$4.50</div>
                </div>
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 bg-card border border-border rounded-lg py-2 text-center text-xs">S</div>
                  <div className="flex-1 bg-primary text-primary-foreground rounded-lg py-2 text-center text-xs">M</div>
                  <div className="flex-1 bg-card border border-border rounded-lg py-2 text-center text-xs">L</div>
                </div>
                <div className="bg-primary text-primary-foreground rounded-xl py-3 text-center text-xs">
                  Add to Cart
                </div>
              </div>
            </PhoneMockup>

            <PhoneMockup label="Cart">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-8">
                  <div className="text-sm mb-6">Your Order</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center">
                        <Coffee className="w-6 h-6 opacity-40" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs mb-1">Latte</div>
                        <div className="text-xs opacity-40">Medium</div>
                      </div>
                      <div className="text-xs">$4.50</div>
                    </div>
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center">
                        <Coffee className="w-6 h-6 opacity-40" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs mb-1">Cappuccino</div>
                        <div className="text-xs opacity-40">Small</div>
                      </div>
                      <div className="text-xs">$3.75</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between mb-4 text-xs">
                    <span className="opacity-60">Total</span>
                    <span>$8.25</span>
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-xl py-3 text-center text-xs">
                    Checkout
                  </div>
                </div>
              </div>
            </PhoneMockup>

            <PhoneMockup label="Loyalty Rewards">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-8">
                  <div className="text-xs opacity-40 mb-2">Your Rewards</div>
                  <div className="text-sm mb-6">850 Points</div>
                </div>
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 mb-6 text-primary-foreground">
                  <Award className="w-10 h-10 mb-4 opacity-90" />
                  <div className="text-xs mb-1 opacity-80">Gold Member</div>
                  <div className="text-xs opacity-60">150 pts to Platinum</div>
                </div>
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center">
                        <Coffee className="w-5 h-5 opacity-60" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs mb-1">Free Drink</div>
                        <div className="text-xs opacity-40">200 pts</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 opacity-60" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs mb-1">50% Off</div>
                        <div className="text-xs opacity-40">150 pts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMockup>

            <PhoneMockup label="Order Tracking">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-8">
                  <div className="text-xs opacity-40 mb-2">Order Status</div>
                  <div className="text-sm mb-6">Being Prepared</div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-border"></div>
                    <div className="space-y-6">
                      <div className="relative flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                          <div className="w-3 h-3 rounded-full bg-primary-foreground"></div>
                        </div>
                        <div>
                          <div className="text-xs mb-1">Order Confirmed</div>
                          <div className="text-xs opacity-40">2:30 PM</div>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                          <div className="w-3 h-3 rounded-full bg-primary-foreground"></div>
                        </div>
                        <div>
                          <div className="text-xs mb-1">Being Prepared</div>
                          <div className="text-xs opacity-40">2:35 PM</div>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary border-2 border-border flex items-center justify-center z-10"></div>
                        <div>
                          <div className="text-xs mb-1 opacity-40">Ready for Pickup</div>
                          <div className="text-xs opacity-40">2:45 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="bg-card border border-border rounded-xl py-3 text-center text-xs">
                    View Details
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>

        <div className="bg-secondary/30 rounded-3xl p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl mb-6 tracking-tight">Final UI</h3>
            <p className="opacity-60 leading-relaxed">
              The final design creates a seamless experience from browsing to checkout, with an emphasis on clarity, speed, and delightful micro-interactions that keep users engaged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
