"use client";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Vasilina Gultai. All rights
          reserved.
        </div>
        <div className="text-xs text-white/20">
          Personal Trainer &middot; S&C Coach &middot; Prague
        </div>
      </div>
    </footer>
  );
}
