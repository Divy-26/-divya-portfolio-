interface AppPhoneProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AppPhone({ children, className = '' }: AppPhoneProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[300px] h-[610px] bg-black rounded-[50px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] border-[14px] border-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20"></div>
        <div className="w-full h-full bg-white overflow-hidden rounded-[36px]">
          {children}
        </div>
      </div>
    </div>
  );
}
