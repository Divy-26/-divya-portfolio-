interface PhoneMockupProps {
  children?: React.ReactNode;
  label?: string;
}

export default function PhoneMockup({ children, label }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="w-[280px] h-[570px] bg-card rounded-[36px] shadow-[0_20px_60px_-15px_rgba(92,61,46,0.15)] border-[12px] border-[#1A1410] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1410] rounded-b-2xl"></div>
          <div className="w-full h-full bg-background overflow-hidden">
            {children || (
              <div className="w-full h-full flex items-center justify-center opacity-30">
                <div className="text-center px-8">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10"></div>
                  <p className="text-sm">Screen Preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {label && (
        <p className="text-sm opacity-50">{label}</p>
      )}
    </div>
  );
}
