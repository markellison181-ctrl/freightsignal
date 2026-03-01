'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReferralCard from "./ReferralCard";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showConfetti, setShowConfetti] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    setShowConfetti(true);
    if (sessionId) setUserEmail('user@example.com');
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [sessionId]);

  const shareText = "Just subscribed to @FreightSignal — finally, real intel on freight rates and supply chains. 🚛";
  const shareUrl = "https://freightsignal.io";

  return (
    <>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti-animation">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: Math.random() > 0.5 ? '#e87c3e' : '#0d1b2a',
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }} />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="relative mx-auto mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange via-orange-400 to-orange rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-orange/50 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-16 h-16 text-darkblue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="absolute inset-0 w-32 h-32 border-4 border-orange/30 rounded-full animate-ping mx-auto"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-orange via-yellow-300 to-orange bg-clip-text text-transparent">
              🎉 You&apos;re In!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Welcome to FreightSignal Pro</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Your subscription is active and your 14-day free trial has begun. 
              Get ready for daily freight intelligence, rate tracking, and supply chain insights that optimize your logistics.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium">Subscription Active</span>
              </div>
              <div className="flex items-center gap-2 bg-orange/20 border border-orange/30 rounded-full px-4 py-2">
                <span className="text-orange font-medium">14-Day Free Trial</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-10 mb-16 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-orange to-white bg-clip-text text-transparent">What happens next?</h2>
            <p className="text-gray-300 mb-10">Your FreightSignal Pro journey begins now</p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { num: 1, color: 'green', title: 'Daily Rate Digest Starts Tomorrow', desc: 'Your first daily digest arrives at 7 AM EST with overnight rate changes, capacity shifts, and market intelligence.' },
                { num: 2, color: 'blue', title: 'Rate Database Unlocked', desc: 'Search and filter our complete freight rate database, export data to CSV/Excel, and track lane-level trends.' },
                { num: 3, color: 'purple', title: 'Premium Features Activated', desc: 'Disruption alerts, carrier scorecards, lane analytics, and priority email support are now live.' },
              ].map((step) => (
                <div key={step.num} className="group text-center hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-darkblue font-bold text-xl">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-darkblue-500/80 to-darkblue-500/40 border border-orange/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Help spread the word</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#1DA1F2] text-white px-6 py-3 rounded font-semibold hover:bg-[#1a8cd8] transition-colors">Share on X</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#0077B5] text-white px-6 py-3 rounded font-semibold hover:bg-[#005885] transition-colors">Share on LinkedIn</a>
            <button onClick={() => { navigator.clipboard.writeText(shareUrl); alert('Link copied!'); }} className="flex items-center justify-center gap-3 border border-orange text-orange px-6 py-3 rounded font-semibold hover:bg-orange hover:text-darkblue transition-colors">Copy Link</button>
          </div>
        </div>

        <ReferralCard userEmail={userEmail} />

        <div className="text-center">
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center">
            <Link href="/archive" className="block sm:inline-block bg-orange text-darkblue px-8 py-3 rounded font-semibold hover:bg-orange-300 transition-colors">Browse Archive</Link>
            <Link href="/" className="block sm:inline-block border border-orange text-orange px-8 py-3 rounded font-semibold hover:bg-orange hover:text-darkblue transition-colors">Return Home</Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">Questions? Email us at <a href="mailto:support@freightsignal.io" className="text-orange hover:underline">support@freightsignal.io</a></p>
        </div>
      </div>

      <style jsx>{`
        .confetti-animation { position: absolute; width: 100%; height: 100%; overflow: hidden; }
        .confetti-piece { position: absolute; width: 8px; height: 8px; animation: confetti-fall 3s linear forwards; }
        @keyframes confetti-fall { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
      `}</style>
    </>
  );
}
