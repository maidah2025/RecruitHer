import React, { useEffect, useState } from 'react';
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
    ? 'w-6 h-6 sm:w-7 sm:h-7 text-[#FF73B9] drop-shadow-[0_0_8px_rgba(255,44,91,0.55)] stroke-[1.9]'
    : 'w-4 h-4 sm:w-5 sm:h-5 text-[#C2ABFF] stroke-[1.8]';

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
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
    if (isPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TALENT_ROLES.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  const activeRole = TALENT_ROLES[activeIndex];

  // Compute relative slot for layered 3D preview cards on desktop:
  // 0 = active center, -1 = inner left, +1 = right, -2 = far left
  const getRelativeSlot = (index: number): number => {
    const total = TALENT_ROLES.length;
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 0;
    if (diff === 1) return 1; // right preview card
    if (diff === 2) return -2; // far-left preview card
    return -1; // inner-left preview card
  };

  return (
    <div
      className="relative w-full max-w-[560px] lg:max-w-[600px] rounded-[28px] bg-[#080414] border border-[#672CFF]/35 p-5 sm:p-7 lg:p-8 shadow-[0_24px_70px_rgba(47,25,140,0.45)] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Ambient Animated Purple & Pink Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-6 w-64 h-64 rounded-full bg-[#672CFF]/30 blur-[76px] animate-hero-aurora-a"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 -left-16 w-64 h-64 rounded-full bg-[#FF2C5B]/25 blur-[76px] animate-hero-aurora-b"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#672CFF]/20 blur-[85px]"
      />

      {/* Top Section: Network Pill, Heading, Subtitle + Tilted Pricing Callout */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-3">
        <div className="max-w-[330px]">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#672CFF]/45 bg-[#190B38]/80 px-3 py-1 mb-3.5 shadow-[0_0_16px_rgba(103,44,255,0.25)]">
            <svg
              viewBox="0 0 24 24"
              className="w-3 h-3 text-[#FF73B9] shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2 C12.8 7.6 16.4 11.2 22 12 C16.4 12.8 12.8 16.4 12 22 C11.2 16.4 7.6 12.8 2 12 C7.6 11.2 11.2 7.6 12 2 Z" />
            </svg>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase text-[#EDE6FF]">
              RECRUITHER TALENT NETWORK
            </span>
          </div>

          {/* Main Showcase Heading */}
          <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-bold tracking-[-0.03em] leading-[1.08] text-white">
            <span className="block">The right talent.</span>
            <span className="block mt-0.5">
              <span>For </span>
              <span className="bg-gradient-to-r from-[#FF2C5B] via-[#FF5E9E] to-[#A64DFF] bg-clip-text text-transparent">
                every role.
              </span>
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-[13px] text-[#C2ABFF]/85 leading-relaxed mt-2.5 max-w-[290px]">
            Explore the professional support RecruitHer can help you hire.
          </p>
        </div>

        {/* Pricing Badge ("Remote Staffing From $8/hour") + Decorative Curved Arrow */}
        <div className="relative self-start sm:self-auto shrink-0 sm:mt-2">
          <div
            aria-label="Remote Staffing From $8/hour"
            className="rounded-2xl p-[1.5px] bg-gradient-to-br from-[#FF2C5B] via-[#A61F3A] to-[#672CFF] sm:-rotate-3 shadow-[0_12px_32px_rgba(255,44,91,0.22)]"
          >
            <div className="rounded-[14px] bg-[#14072B]/95 px-4 py-2.5 sm:px-4 sm:py-3 backdrop-blur-md">
              <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#FF73B9]">
                REMOTE
              </p>
              <p className="text-[11px] sm:text-xs text-[#EDE6FF]/90 font-medium leading-tight mt-0.5">
                Staffing from
              </p>
              <p className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-none mt-1">
                $8<span className="text-sm sm:text-base font-bold">/hour.</span>
              </p>
            </div>
          </div>

          {/* Decorative Pink Curved Arrow pointing toward Active Card on sm+ */}
          <svg
            viewBox="0 0 64 56"
            className="hidden sm:block w-11 h-10 text-[#FF2C5B] ml-auto mr-3 mt-1.5 drop-shadow-[0_0_8px_rgba(255,44,91,0.5)]"
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

      {/* ================= LAYERED 3D ROLE CARDS DECK ================= */}
      {/* Desktop / Tablet 3D Layered Deck */}
      <div className="hidden sm:block relative z-10 h-[275px] mt-4">
        {TALENT_ROLES.map((role, index) => {
          const slot = getRelativeSlot(index);
          const isActive = slot === 0;

          // Position and 3D transform per slot matching the reference layout
          let slotStyles = '';
          if (slot === 0) {
            // Center-front Active Card
            slotStyles =
              'left-1/2 -translate-x-1/2 top-0 w-[265px] z-30 scale-100 opacity-100';
          } else if (slot === -1) {
            // Inner-left preview card
            slotStyles =
              'left-[13%] top-6 w-[185px] z-20 -rotate-3 scale-[0.9] opacity-85 hover:opacity-100 cursor-pointer';
          } else if (slot === -2) {
            // Far-left preview card
            slotStyles =
              'left-0 top-11 w-[165px] z-10 -rotate-6 scale-[0.82] opacity-65 hover:opacity-90 cursor-pointer';
          } else {
            // Right preview card (slot === 1)
            slotStyles =
              'right-0 top-6 w-[190px] z-20 rotate-3 scale-[0.9] opacity-85 hover:opacity-100 cursor-pointer';
          }

          return (
            <div
              key={role.id}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={`${role.title} — ${role.department}`}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIndex(index);
                  setIsPaused(true);
                }
              }}
              className={`absolute transition-all duration-500 ease-out rounded-[22px] ${slotStyles} focus-visible:outline-2 focus-visible:outline-[#FF2C5B]`}
            >
              {isActive ? (
                /* Active Highlighted Glassmorphism Card */
                <div className="relative rounded-[22px] p-[1.5px] bg-gradient-to-br from-[#C2ABFF] via-[#672CFF] to-[#FF2C5B] shadow-[0_0_38px_rgba(103,44,255,0.55)]">
                  <div className="relative rounded-[20.5px] bg-gradient-to-b from-[#23114B]/95 via-[#14092E]/98 to-[#0E0622] p-5 overflow-hidden">
                    {/* Decorative bottom-right pink/purple wave accent inside active card */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-8 -right-6 w-28 h-28 rounded-tl-[42px] bg-gradient-to-tl from-[#FF2C5B] via-[#FF2C5B]/75 to-[#672CFF]/30 opacity-90 blur-[1px]"
                    />

                    {/* Top Row: Icon + IN DEMAND Pill */}
                    <div className="relative z-10 flex items-start justify-between gap-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#2F198C]/75 border border-[#C2ABFF]/35 shadow-[0_0_20px_rgba(103,44,255,0.5)] flex items-center justify-center">
                        <RoleIcon type={role.icon} active={true} />
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF2C5B]/60 bg-[#2A0B26]/85 px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] uppercase text-[#FF9EC2]">
                        <span className="w-3 h-3 rounded-full bg-[#FF2C5B] text-black flex items-center justify-center">
                          <Check className="w-2 h-2 stroke-[3.5]" />
                        </span>
                        {role.badge}
                      </span>
                    </div>

                    {/* Role Title & Department */}
                    <div className="relative z-10 mt-3.5">
                      <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                        {role.title}
                      </h3>
                      <p className="text-xs text-[#C2ABFF]/85 mt-0.5">
                        {role.department}
                      </p>
                    </div>

                    {/* Capabilities List */}
                    <ul className="relative z-10 space-y-2 mt-4">
                      {role.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-xs text-white/95 font-medium"
                        >
                          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#FF2C5B] to-[#C81D77] text-black flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(255,44,91,0.55)]">
                            <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                /* Subtle Layered Preview Card */
                <div className="rounded-[20px] p-[1px] bg-gradient-to-b from-[#672CFF]/40 to-[#FF2C5B]/20">
                  <div className="rounded-[19px] bg-[#120829]/90 backdrop-blur-md p-4">
                    <div className="w-9 h-9 rounded-xl bg-[#24124D]/80 border border-[#672CFF]/35 flex items-center justify-center">
                      <RoleIcon type={role.icon} active={false} />
                    </div>

                    <h3 className="text-xs font-bold text-white/90 leading-snug mt-3 line-clamp-2">
                      {role.title}
                    </h3>
                    <p className="text-[10px] text-[#C2ABFF]/70 mt-0.5 truncate">
                      {role.department}
                    </p>

                    <ul className="space-y-1.5 mt-3">
                      {role.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[10px] text-white/75 truncate"
                        >
                          <span className="w-3.5 h-3.5 rounded-full border border-[#FF2C5B]/70 text-[#FF2C5B] flex items-center justify-center shrink-0">
                            <Check className="w-2 h-2 stroke-[3]" />
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

      {/* Mobile View: Single Prominent Active Card + Quick Role Selector Tabs */}
      <div className="sm:hidden relative z-10 mt-5">
        {/* Role Quick Selector Pills */}
        <div className="grid grid-cols-2 gap-1.5 mb-3.5">
          {TALENT_ROLES.map((role, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setIsPaused(true);
                }}
                className={`text-left px-3 py-2 rounded-xl text-[11px] font-semibold transition-all truncate border ${
                  isSelected
                    ? 'bg-[#251252] text-white border-[#FF2C5B]/70 shadow-[0_0_14px_rgba(103,44,255,0.45)]'
                    : 'bg-[#120829]/80 text-[#C2ABFF]/75 border-[#672CFF]/25 hover:text-white'
                }`}
              >
                {role.title}
              </button>
            );
          })}
        </div>

        {/* Active Card with Layered Back-Card Depth Illusion */}
        <div className="relative pt-2">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 -top-0.5 h-full rounded-[22px] bg-[#1A0C3B]/70 border border-[#672CFF]/30 scale-[0.96]"
          />
          <div className="relative rounded-[22px] p-[1.5px] bg-gradient-to-br from-[#C2ABFF] via-[#672CFF] to-[#FF2C5B] shadow-[0_0_30px_rgba(103,44,255,0.45)] transition-all duration-300">
            <div className="relative rounded-[20.5px] bg-gradient-to-b from-[#23114B] via-[#14092E] to-[#0E0622] p-5 overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-6 w-28 h-28 rounded-tl-[42px] bg-gradient-to-tl from-[#FF2C5B] via-[#FF2C5B]/75 to-[#672CFF]/30 opacity-90"
              />

              <div className="relative z-10 flex items-start justify-between gap-2">
                <div className="w-11 h-11 rounded-2xl bg-[#2F198C]/80 border border-[#C2ABFF]/35 flex items-center justify-center">
                  <RoleIcon type={activeRole.icon} active={true} />
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF2C5B]/60 bg-[#2A0B26]/85 px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] uppercase text-[#FF9EC2]">
                  <span className="w-3 h-3 rounded-full bg-[#FF2C5B] text-black flex items-center justify-center">
                    <Check className="w-2 h-2 stroke-[3.5]" />
                  </span>
                  {activeRole.badge}
                </span>
              </div>

              <div className="relative z-10 mt-3.5">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {activeRole.title}
                </h3>
                <p className="text-xs text-[#C2ABFF]/85 mt-0.5">
                  {activeRole.department}
                </p>
              </div>

              <ul className="relative z-10 space-y-2 mt-4">
                {activeRole.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-white/95 font-medium"
                  >
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#FF2C5B] to-[#C81D77] text-black flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PAGINATION DOTS ================= */}
      <div
        className="relative z-10 flex items-center justify-center gap-3 mt-5"
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
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
              }}
              className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2C5B] ${
                isCurrent
                  ? 'w-3.5 h-3.5 bg-white border-[3px] border-[#FF2C5B] shadow-[0_0_12px_#FF2C5B]'
                  : 'w-2.5 h-2.5 bg-[#8B8B94]/45 hover:bg-[#C2ABFF]'
              }`}
            />
          );
        })}
      </div>

      {/* ================= GRADIENT CTA BUTTON ================= */}
      <div className="relative z-10 mt-5">
        <a
          href={BOOKING_HIRING_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#672CFF] via-[#8C2CFF] to-[#FF2C5B] hover:brightness-110 text-white text-sm sm:text-base font-bold py-3.5 sm:py-4 px-6 shadow-[0_12px_30px_rgba(103,44,255,0.45)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
