import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Calculator,
  Check,
  Headphones,
  Scale,
  Users,
} from 'lucide-react';
import { BOOKING_HIRING_HREF } from '../content/siteContent';

interface TalentRoleCard {
  id: string;
  title: string;
  department: string;
  badge: string;
  icon: 'scale' | 'calculator' | 'users' | 'headphones';
  capabilities: [string, string, string];
}

const TALENT_ROLES: TalentRoleCard[] = [
  {
    id: 'legal-assistant',
    title: 'Legal Assistant',
    department: 'Legal Support',
    badge: 'IN DEMAND',
    icon: 'scale',
    capabilities: [
      'Legal research',
      'Document preparation',
      'Case management',
    ],
  },
  {
    id: 'accounting-assistant',
    title: 'Accounting Assistant',
    department: 'Finance & Accounting',
    badge: 'IN DEMAND',
    icon: 'calculator',
    capabilities: [
      'Bookkeeping',
      'Invoicing',
      'Financial reporting',
    ],
  },
  {
    id: 'hr-coordinator',
    title: 'HR Coordinator',
    department: 'HR & Administration',
    badge: 'IN DEMAND',
    icon: 'users',
    capabilities: [
      'Scheduling',
      'Employee records',
      'Recruitment support',
    ],
  },
  {
    id: 'customer-support-specialist',
    title: 'Customer Support Specialist',
    department: 'Client Support',
    badge: 'IN DEMAND',
    icon: 'headphones',
    capabilities: [
      'Client communication',
      'Email support',
      'CRM management',
    ],
  },
];

function RoleIcon({
  type,
  active,
}: {
  type: TalentRoleCard['icon'];
  active: boolean;
}) {
  const iconClass = active
    ? 'w-5 h-5 sm:w-6 sm:h-6 text-[#FF73B9] stroke-[2]'
    : 'w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C2ABFF] stroke-[1.8]';

  switch (type) {
    case 'scale':
      return <Scale className={iconClass} />;
    case 'calculator':
      return <Calculator className={iconClass} />;
    case 'users':
      return <Users className={iconClass} />;
    case 'headphones':
      return <Headphones className={iconClass} />;
  }
}

export function TalentShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const resumeTimerRef = useRef<number | null>(null);
  const [manualPause, setManualPause] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isHovered || manualPause || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TALENT_ROLES.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isHovered, manualPause, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handleSelectRole = (index: number) => {
    setActiveIndex(index);
    setManualPause(true);
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setManualPause(false);
    }, 5000);
  };

  // Relative slot for the 4 cards:
  // 0 = active center-front card
  // -1 = inner-left layered preview card
  // +1 = right layered preview card
  // -2 = far-left layered preview card
  const getRelativeSlot = (index: number): number => {
    const total = TALENT_ROLES.length;
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === 2) return -2;
    return -1;
  };

  return (
    <div
      style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
      className="relative w-full max-w-[560px] lg:max-w-[600px] rounded-[28px] bg-[#080414] border border-[#672CFF]/40 p-4 sm:p-7 lg:p-8 shadow-[0_20px_55px_rgba(47,25,140,0.45)] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scroll-Safe Ambient Radial Glows (No CSS filter blur to prevent mobile scroll flicker) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-12 w-80 h-80 rounded-full animate-hero-aurora-a"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 w-80 h-80 rounded-full animate-hero-aurora-b"
      />
      <div
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(103,44,255,0.28) 0%, rgba(255,44,91,0.14) 45%, rgba(0,0,0,0) 72%)',
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full"
      />

      {/* Top Section: Network Pill, Heading, Subtitle + Tilted Pricing Callout */}
      <div className="relative z-10 flex items-start justify-between gap-2.5 sm:gap-4">
        <div className="min-w-0 flex-1">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#672CFF]/50 bg-[#190B38] px-2.5 sm:px-3 py-1 mb-3">
            <svg
              viewBox="0 0 24 24"
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF73B9] shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2 C12.8 7.6 16.4 11.2 22 12 C16.4 12.8 12.8 16.4 12 22 C11.2 16.4 7.6 12.8 2 12 C7.6 11.2 11.2 7.6 12 2 Z" />
            </svg>
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase text-[#EDE6FF] truncate">
              RECRUITHER TALENT NETWORK
            </span>
          </div>

          {/* Main Showcase Heading */}
          <h2 className="text-[22px] sm:text-[31px] lg:text-[34px] font-bold tracking-[-0.03em] leading-[1.08] text-white">
            <span className="block">The right talent.</span>
            <span className="block mt-0.5">
              <span>For </span>
              <span className="bg-gradient-to-r from-[#FF2C5B] via-[#FF5E9E] to-[#A64DFF] bg-clip-text text-transparent">
                every role.
              </span>
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-[11px] sm:text-[13px] text-[#C2ABFF]/85 leading-relaxed mt-2 max-w-[270px] sm:max-w-[295px]">
            Explore the professional support RecruitHer can help you hire.
          </p>
        </div>

        {/* Pricing Badge ("Remote Staffing From $8/hour") + Decorative Curved Arrow */}
        <div className="relative shrink-0 mt-1">
          <div
            aria-label="Remote Staffing From $8/hour"
            className="rounded-2xl p-[1.5px] bg-gradient-to-br from-[#FF2C5B] via-[#A61F3A] to-[#672CFF] -rotate-3 shadow-[0_10px_25px_rgba(255,44,91,0.22)]"
          >
            <div className="rounded-[14px] bg-[#14072B] px-3 py-2 sm:px-4 sm:py-3">
              <p className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] uppercase text-[#FF73B9]">
                REMOTE
              </p>
              <p className="text-[10px] sm:text-xs text-[#EDE6FF]/90 font-medium leading-tight mt-0.5">
                Staffing from
              </p>
              <p className="text-base sm:text-xl font-extrabold text-white tracking-tight leading-none mt-1 whitespace-nowrap">
                $8<span className="text-xs sm:text-base font-bold">/hour.</span>
              </p>
            </div>
          </div>

          {/* Decorative Pink Curved Arrow pointing toward Active Card */}
          <svg
            viewBox="0 0 64 56"
            className="w-9 h-8 sm:w-11 sm:h-10 text-[#FF2C5B] ml-auto mr-2 sm:mr-3 mt-1"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M36 4 C44 18, 34 36, 12 48"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M21 48 L10 49 L16 39"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ================= UNIFIED 3D LAYERED ROLE CARDS STAGE (Mobile & Desktop) ================= */}
      <div className="relative z-10 h-[250px] sm:h-[275px] mt-2 sm:mt-4">
        {TALENT_ROLES.map((role, index) => {
          const slot = getRelativeSlot(index);
          const isActive = slot === 0;

          // GPU-composited translate3d + scale + rotate positioning for all 4 slots
          let positionClass = '';
          let transformStyle: React.CSSProperties = {};

          if (slot === 0) {
            // Active Card (Center Front)
            positionClass = 'w-[224px] sm:w-[265px] z-30 opacity-100';
            transformStyle = {
              transform: 'translate3d(-50%, 0px, 0px) scale(1) rotate(0deg)',
            };
          } else if (slot === -1) {
            // Inner-Left Preview Card
            positionClass =
              'w-[160px] sm:w-[190px] z-20 opacity-85 hover:opacity-100 cursor-pointer';
            transformStyle = {
              transform:
                'translate3d(-96%, 22px, 0px) scale(0.88) rotate(-4deg)',
            };
          } else if (slot === 1) {
            // Right Preview Card
            positionClass =
              'w-[160px] sm:w-[190px] z-20 opacity-85 hover:opacity-100 cursor-pointer';
            transformStyle = {
              transform:
                'translate3d(-4%, 22px, 0px) scale(0.88) rotate(4deg)',
            };
          } else {
            // Far-Left Preview Card (slot === -2)
            positionClass =
              'w-[148px] sm:w-[175px] z-10 opacity-55 sm:opacity-65 hover:opacity-90 cursor-pointer';
            transformStyle = {
              transform:
                'translate3d(-122%, 38px, 0px) scale(0.78) rotate(-7deg)',
            };
          }

          return (
            <div
              key={role.id}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={`${role.title} — ${role.department}`}
              onClick={() => handleSelectRole(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelectRole(index);
                }
              }}
              style={{
                left: '50%',
                top: 0,
                willChange: 'transform, opacity',
                WebkitBackfaceVisibility: 'hidden',
                ...transformStyle,
              }}
              className={`absolute transition-all duration-500 ease-out rounded-[22px] ${positionClass} focus-visible:outline-2 focus-visible:outline-[#FF2C5B]`}
            >
              {isActive ? (
                /* Active Highlighted Card */
                <div className="relative rounded-[22px] p-[1.5px] bg-gradient-to-br from-[#C2ABFF] via-[#672CFF] to-[#FF2C5B] shadow-[0_14px_36px_rgba(103,44,255,0.5)]">
                  <div className="relative rounded-[20.5px] bg-gradient-to-b from-[#23114B] via-[#14092E] to-[#0E0622] p-4 sm:p-5 overflow-hidden">
                    {/* Decorative bottom-right pink/purple wave accent inside active card */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-8 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-tl-[42px] bg-gradient-to-tl from-[#FF2C5B] via-[#FF2C5B]/75 to-[#672CFF]/30 opacity-90"
                    />

                    {/* Top Row: Icon + IN DEMAND Pill */}
                    <div className="relative z-10 flex items-start justify-between gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#2F198C] border border-[#C2ABFF]/40 flex items-center justify-center">
                        <RoleIcon type={role.icon} active={true} />
                      </div>

                      <span className="inline-flex items-center gap-1 rounded-full border border-[#FF2C5B]/60 bg-[#2A0B26] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[9px] font-bold tracking-[0.1em] uppercase text-[#FF9EC2]">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF2C5B] text-black flex items-center justify-center">
                          <Check className="w-1.5 h-1.5 sm:w-2 sm:h-2 stroke-[3.5]" />
                        </span>
                        {role.badge}
                      </span>
                    </div>

                    {/* Role Title & Department */}
                    <div className="relative z-10 mt-3 sm:mt-3.5">
                      <h3 className="text-[15px] sm:text-lg font-bold text-white tracking-tight leading-snug">
                        {role.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#C2ABFF]/85 mt-0.5">
                        {role.department}
                      </p>
                    </div>

                    {/* Capabilities List */}
                    <ul className="relative z-10 space-y-1.5 sm:space-y-2 mt-3.5 sm:mt-4">
                      {role.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[11px] sm:text-xs text-white/95 font-medium"
                        >
                          <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#FF2C5B] to-[#C81D77] text-black flex items-center justify-center shrink-0">
                            <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3.2]" />
                          </span>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                /* Layered Side Preview Card */
                <div className="rounded-[20px] p-[1px] bg-gradient-to-b from-[#672CFF]/45 to-[#FF2C5B]/25">
                  <div className="rounded-[19px] bg-[#13082C] p-3.5 sm:p-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#24124D] border border-[#672CFF]/35 flex items-center justify-center">
                      <RoleIcon type={role.icon} active={false} />
                    </div>

                    <h3 className="text-[11px] sm:text-xs font-bold text-white/90 leading-snug mt-2.5 sm:mt-3 truncate">
                      {role.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-[#C2ABFF]/70 mt-0.5 truncate">
                      {role.department}
                    </p>

                    <ul className="space-y-1.5 mt-2.5 sm:mt-3">
                      {role.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-white/75 truncate"
                        >
                          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-[#FF2C5B]/70 text-[#FF2C5B] flex items-center justify-center shrink-0">
                            <Check className="w-1.5 h-1.5 sm:w-2 sm:h-2 stroke-[3]" />
                          </span>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= PAGINATION DOTS ================= */}
      <div
        className="relative z-10 flex items-center justify-center gap-3 mt-3 sm:mt-4"
        role="tablist"
        aria-label="Select talent role category"
      >
        {TALENT_ROLES.map((role, index) => {
          const isCurrent = index === activeIndex;
          return (
            <button
              key={role.id}
              type="button"
              role="tab"
              aria-selected={isCurrent}
              aria-label={`Show ${role.title}`}
              onClick={() => handleSelectRole(index)}
              className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2C5B] ${
                isCurrent
                  ? 'w-3.5 h-3.5 bg-white border-[3px] border-[#FF2C5B] shadow-[0_0_10px_#FF2C5B]'
                  : 'w-2.5 h-2.5 bg-[#8B8B94]/45 hover:bg-[#C2ABFF]'
              }`}
            />
          );
        })}
      </div>

      {/* ================= GRADIENT CTA BUTTON ================= */}
      <div className="relative z-10 mt-4 sm:mt-5">
        <a
          href={BOOKING_HIRING_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#672CFF] via-[#8C2CFF] to-[#FF2C5B] hover:brightness-110 text-white text-sm sm:text-base font-bold py-3.5 sm:py-4 px-6 shadow-[0_10px_28px_rgba(103,44,255,0.45)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span>Find Your Talent</span>
          <span className="w-6 h-6 rounded-full bg-black/30 flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.6]" />
          </span>
        </a>
      </div>
    </div>
  );
}
