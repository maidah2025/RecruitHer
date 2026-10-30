/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  Calendar,
  Check,
  Clock,
  Headphones,
  Languages,
  Layers,
  Menu,
  Monitor,
  Phone,
  Puzzle,
  Scale,
  Users,
  X,
} from 'lucide-react';
import { BrandMark, SparkleSeparator } from './components/BrandMark';
import { TalentShowcase } from './components/TalentShowcase';
import {
  AssessmentAreaItem,
  BOOKING_HIRING_HREF,
  CONTACT_CONFIG,
  IndustryItem,
  ServiceCardItem,
  SITE_CONTENT,
} from './content/siteContent';

function IndustryIcon({ type }: { type: IndustryItem['iconType'] }) {
  switch (type) {
    case 'scale':
      return <Scale className="w-5 h-5 stroke-[1.8]" />;
    case 'calculator':
      return <Calculator className="w-5 h-5 stroke-[1.8]" />;
    case 'building':
      return <Building2 className="w-5 h-5 stroke-[1.8]" />;
    case 'briefcase':
      return <Briefcase className="w-5 h-5 stroke-[1.8]" />;
    case 'layers':
      return <Layers className="w-5 h-5 stroke-[1.8]" />;
  }
}

function ServiceIcon({ type }: { type: ServiceCardItem['iconType'] }) {
  switch (type) {
    case 'scale':
      return <Scale className="w-5 h-5 stroke-[1.8]" />;
    case 'calculator':
      return <Calculator className="w-5 h-5 stroke-[1.8]" />;
    case 'users':
      return <Users className="w-5 h-5 stroke-[1.8]" />;
    case 'calendar':
      return <Calendar className="w-5 h-5 stroke-[1.8]" />;
    case 'headset':
      return <Headphones className="w-5 h-5 stroke-[1.8]" />;
  }
}

function AssessmentIcon({ type }: { type: AssessmentAreaItem['iconType'] }) {
  switch (type) {
    case 'languages':
      return <Languages className="w-6 h-6 stroke-[1.8]" />;
    case 'puzzle':
      return <Puzzle className="w-6 h-6 stroke-[1.8]" />;
    case 'clock':
      return <Clock className="w-6 h-6 stroke-[1.8]" />;
    case 'monitor':
      return <Monitor className="w-6 h-6 stroke-[1.8]" />;
  }
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div id="top" className="min-h-screen bg-black text-black flex flex-col scroll-mt-24">
      {/* ================= HEADER ================= */}
      <header className="bg-black text-white sticky top-0 z-50 border-b border-[#3D3D4A]/40">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-3 sm:gap-8">
          {/* Brand Logo */}
          <a
            href="#top"
            className="inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#672CFF] rounded-md"
            aria-label="RecruitHer Home"
          >
            <BrandMark variant="logo" className="w-6 h-7 shrink-0" />
            <span className="text-lg sm:text-xl tracking-tight text-white">
              <span className="font-bold">Recruit</span>
              <span className="font-medium">Her</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-10 text-sm font-medium text-white/85"
          >
            {SITE_CONTENT.header.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#672CFF] rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Right: Get Started Button + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href={BOOKING_HIRING_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#672CFF] hover:bg-[#2F198C] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-2.5 rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2C5B]"
            >
              {SITE_CONTENT.header.ctaLabel}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#3D3D4A] text-white hover:bg-[#3D3D4A]/40 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#672CFF]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden bg-black border-b border-[#3D3D4A]/60 px-5 pt-3 pb-6 space-y-3"
          >
            {SITE_CONTENT.header.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="block py-2 text-base font-medium text-white/90 hover:text-white border-b border-[#3D3D4A]/30"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={BOOKING_HIRING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center bg-[#672CFF] hover:bg-[#2F198C] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
              >
                {SITE_CONTENT.header.ctaLabel}
              </a>
              <a
                href={CONTACT_CONFIG.emailHref}
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center border border-[#3D3D4A] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
              >
                Email us
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* ================= 1. HERO SECTION ================= */}
        <section className="bg-black text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 xl:col-span-6 relative isolate">
                {/* Animated Background strictly behind the Hero text block (black base preserved, no dots) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 sm:-inset-6 z-0 overflow-hidden rounded-3xl bg-black"
                >
                  {/* Continuously flowing brand grid */}
                  <div className="absolute inset-0 animate-hero-grid [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_98%)]" />

                  {/* Alternating Purple <-> Pink Aurora Wave A */}
                  <div className="absolute -top-16 -left-16 w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full animate-hero-aurora-a" />

                  {/* Alternating Pink <-> Purple Aurora Wave B */}
                  <div className="absolute -bottom-16 -right-12 w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full animate-hero-aurora-b" />

                  {/* Diagonal sweeping light shimmer */}
                  <div className="absolute inset-y-0 -left-1/4 w-2/3 animate-hero-sweep" />
                </div>

                {/* Foreground Content (unchanged) */}
                <div className="relative z-10">
                  {/* Subheading Badge */}
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#3D3D4A] bg-black p-1.5 pr-5 mb-8">
                    <span className="bg-[#FF2C5B] text-black text-xs font-bold px-3.5 py-1 rounded-full tracking-tight">
                      Remote
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-white/90">
                      {SITE_CONTENT.hero.subheading}
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-[42px] sm:text-[58px] lg:text-[64px] xl:text-[70px] font-bold tracking-[-0.03em] leading-[1.04] text-white">
                    <span className="block">{SITE_CONTENT.hero.headlineLine1}</span>
                    <span className="block mt-1">
                      <span>{SITE_CONTENT.hero.headlineLine2Prefix}</span>
                      <span className="font-serif-italic font-semibold text-[#FF2C5B]">
                        {SITE_CONTENT.hero.headlineLine2Italic}
                      </span>
                    </span>
                  </h1>

                  {/* Prominent Subheading */}
                  <p className="text-lg sm:text-xl lg:text-[22px] font-semibold text-white tracking-tight mt-5">
                    {SITE_CONTENT.hero.subheading}
                  </p>

                  {/* Description */}
                  <p className="text-base sm:text-lg lg:text-[18px] text-[#8B8B94] leading-[1.6] mt-4 max-w-[510px] font-normal">
                    {SITE_CONTENT.hero.description}
                  </p>

                  {/* Primary & Secondary CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-9">
                    <a
                      href={BOOKING_HIRING_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#672CFF] hover:bg-[#2F198C] text-white text-sm sm:text-[15px] font-semibold px-7 py-4 rounded-xl transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2C5B]"
                    >
                      <span>{SITE_CONTENT.hero.primaryCta}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>

                    <a
                      href={CONTACT_CONFIG.emailHref}
                      className="inline-flex items-center justify-center border border-[#3D3D4A] hover:border-[#8B8B94] bg-transparent text-white text-sm sm:text-[15px] font-semibold px-9 py-4 rounded-xl transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#672CFF]"
                    >
                      {SITE_CONTENT.hero.secondaryCta}
                    </a>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="border-t border-[#3D3D4A]/50 mt-10 pt-5 max-w-[560px]">
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-[13px] text-white/85 font-medium">
                      {SITE_CONTENT.hero.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="inline-flex items-center gap-2 whitespace-nowrap"
                        >
                          <Check className="w-3.5 h-3.5 text-[#FF2C5B] stroke-[3] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column — Interactive Talent Showcase */}
              <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
                <TalentShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Primary Purple Service Strip */}
        <section aria-label="Core Services" className="bg-[#672CFF] text-white py-5 sm:py-6">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 lg:gap-x-10 gap-y-3 text-center">
              {SITE_CONTENT.serviceStrip.map((service, index) => (
                <React.Fragment key={service}>
                  <span className="text-base sm:text-xl lg:text-[22px] font-bold tracking-tight text-white whitespace-nowrap">
                    {service}
                  </span>
                  {index < SITE_CONTENT.serviceStrip.length - 1 && (
                    <SparkleSeparator className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF2C5B] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 2. TRUSTED BY ================= */}
        <section
          aria-label="Trusted By Client Brands"
          className="bg-white border-b border-[#EFEFF1] py-7 sm:py-8"
        >
          <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B8B94] whitespace-nowrap shrink-0">
                {SITE_CONTENT.trustedBy.label}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center gap-4 sm:gap-5 w-full md:flex-1 max-w-[940px]">
                {SITE_CONTENT.trustedBy.clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={client.name}
                    title={client.name}
                    className="h-14 sm:h-16 rounded-xl border border-[#EFEFF1] hover:border-[#672CFF] bg-white hover:bg-[#EDE6FF]/20 flex items-center justify-center px-4 py-2.5 transition-colors"
                  >
                    <img
                      src={client.logoSrc}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className={
                        client.imgClassName || 'max-h-8 w-auto object-contain'
                      }
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. WHO WE HELP ================= */}
        <section id="who-we-help" className="bg-white py-20 lg:py-28 scroll-mt-24">
          <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
            <div className="relative rounded-[24px] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-sm border border-[#EFEFF1]">
              {/* Background Image for WHO WE HELP header block */}
              <img
                src="/assets/who-we-help-bg.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-center z-0"
              />
              {/* Light translucent veil so the background picture stays vibrant while text is easy to read */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/45 z-0"
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 [text-shadow:0_1px_12px_rgba(255,255,255,0.95)]">
                <div className="max-w-[600px]">
                  <p className="text-[11px] font-bold tracking-[0.15em] text-[#672CFF] uppercase mb-3">
                    {SITE_CONTENT.whoWeHelp.eyebrow}
                  </p>
                  <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold text-black tracking-[-0.025em] leading-[1.08]">
                    {SITE_CONTENT.whoWeHelp.headingPrefix}
                    <span className="font-serif-italic font-semibold text-[#672CFF]">
                      {SITE_CONTENT.whoWeHelp.headingItalic}
                    </span>
                    {SITE_CONTENT.whoWeHelp.headingSuffix}
                  </h2>
                </div>

                <p className="text-sm sm:text-[15px] text-black font-semibold leading-relaxed max-w-[440px]">
                  {SITE_CONTENT.whoWeHelp.paragraph}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs sm:text-sm font-bold text-black mb-5">
                {SITE_CONTENT.whoWeHelp.industriesLabel}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {SITE_CONTENT.whoWeHelp.industries.map((industry, index) => {
                  const isPink = index % 2 === 1;
                  return (
                    <div
                      key={industry.id}
                      className="relative overflow-hidden rounded-[20px] border border-[#EFEFF1] bg-white p-6 flex flex-col justify-between gap-5 min-h-[148px] hover:border-[#C2ABFF] transition-colors"
                    >
                      {industry.bgImage && (
                        <>
                          <img
                            src={industry.bgImage}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-right z-0"
                          />
                          {/* Covers the baked-in left icon in the source image while keeping the right-side artwork 100% sharp and unblurred */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-y-0 left-0 w-[34%] bg-gradient-to-r from-white via-white/95 to-transparent z-0"
                          />
                        </>
                      )}

                      <div
                        className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center ${
                          isPink
                            ? 'bg-[#FFEEF2] text-[#FF2C5B]'
                            : 'bg-[#EDE6FF] text-[#672CFF]'
                        }`}
                      >
                        <IndustryIcon type={industry.iconType} />
                      </div>
                      <h3 className="relative z-10 text-sm sm:text-[15px] font-bold text-black leading-snug [text-shadow:0_1px_10px_rgba(255,255,255,0.95)]">
                        {industry.name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. HOW WE HELP ================= */}
        <section id="how-we-help" className="bg-[#EDE6FF] py-20 lg:py-28 scroll-mt-24">
          <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
            <div className="relative rounded-[24px] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-sm border border-[#C2ABFF]/50">
              {/* Background Image for HOW WE HELP header block */}
              <img
                src="/assets/how-we-help-bg.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-center z-0"
              />
              {/* Light translucent veil so the background picture stays vibrant while text is easy to read */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/45 z-0"
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 [text-shadow:0_1px_12px_rgba(255,255,255,0.95)]">
                <div className="max-w-[600px]">
                  <p className="text-[11px] font-bold tracking-[0.15em] text-[#672CFF] uppercase mb-3">
                    {SITE_CONTENT.howWeHelp.eyebrow}
                  </p>
                  <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold text-black tracking-[-0.025em] leading-[1.1]">
                    {SITE_CONTENT.howWeHelp.heading}
                  </h2>
                </div>

                <p className="text-sm sm:text-[15px] text-black font-semibold leading-relaxed max-w-[420px]">
                  {SITE_CONTENT.howWeHelp.paragraph}
                </p>
              </div>
            </div>

            {/* Five Service Cards + Closing Custom Role Card in 3-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {SITE_CONTENT.howWeHelp.services.map((service) => {
                const iconBoxClasses =
                  service.iconAccent === 'purple'
                    ? 'bg-[#EDE6FF] text-[#672CFF]'
                    : 'bg-[#FFEEF2] text-[#FF2C5B]';

                return (
                  <div
                    key={service.id}
                    className="rounded-[22px] p-7 bg-white text-black border border-[#C2ABFF]/40 flex flex-col justify-between min-h-[250px]"
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${iconBoxClasses}`}
                      >
                        <ServiceIcon type={service.iconType} />
                      </div>

                      <h3 className="text-lg font-bold text-black tracking-tight leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-[#3D3D4A] leading-relaxed mt-2.5">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6">
                      <a
                        href={BOOKING_HIRING_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#672CFF] hover:text-[#2F198C] transition-colors whitespace-nowrap"
                      >
                        <span>{SITE_CONTENT.howWeHelp.closingCtaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* 6th Card — Dark Closing Card with Verbatim Closing Text */}
              <div className="rounded-[22px] p-7 bg-black text-white flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 bg-[#3D3D4A]/30 border border-[#3D3D4A] text-[#FF2C5B]">
                    <Briefcase className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <p className="text-base sm:text-lg font-bold text-white leading-snug">
                    {SITE_CONTENT.howWeHelp.closingText}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={BOOKING_HIRING_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2C5B] hover:text-[#FFABBD] transition-colors whitespace-nowrap"
                  >
                    <span>{SITE_CONTENT.howWeHelp.closingCtaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. BETTER TALENT PROMISE ================= */}
        <section className="bg-black text-white py-20 lg:py-28">
          <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5">
                <p className="text-[11px] font-bold tracking-[0.15em] text-[#FF2C5B] uppercase mb-3">
                  {SITE_CONTENT.betterTalentPromise.eyebrow}
                </p>
                <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-bold text-white tracking-[-0.025em] leading-[1.1]">
                  <span className="block">
                    {SITE_CONTENT.betterTalentPromise.headingLine1}
                  </span>
                  <span className="block mt-1">
                    <span className="font-serif-italic font-semibold text-[#FF2C5B]">
                      {SITE_CONTENT.betterTalentPromise.headingLine2Italic}
                    </span>
                    {SITE_CONTENT.betterTalentPromise.headingLine2Suffix}
                  </span>
                </h2>

                <p className="text-sm sm:text-[15px] text-[#8B8B94] leading-relaxed mt-5">
                  {SITE_CONTENT.betterTalentPromise.paragraph}
                </p>

                <div className="mt-6 pt-6 border-t border-[#3D3D4A]/60 space-y-3">
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {SITE_CONTENT.betterTalentPromise.closingLine1}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8B8B94] leading-relaxed">
                    {SITE_CONTENT.betterTalentPromise.closingLine2}
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={BOOKING_HIRING_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#FF2C5B] hover:bg-[#A61F3A] hover:text-white text-black text-xs sm:text-sm font-bold px-6 py-3.5 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {SITE_CONTENT.betterTalentPromise.ctaLabel}
                  </a>
                </div>
              </div>

              {/* Right Column — Introduction + 2x2 Bordered Assessment Grid */}
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-semibold text-[#C2ABFF] mb-4">
                  {SITE_CONTENT.betterTalentPromise.introduction}
                </p>

                <div className="rounded-[24px] border border-[#3D3D4A]/60 bg-black grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
                  {SITE_CONTENT.betterTalentPromise.assessments.map((item, idx) => {
                    const borderClasses =
                      idx === 0
                        ? 'border-b border-[#3D3D4A]/60 sm:border-r'
                        : idx === 1
                        ? 'border-b border-[#3D3D4A]/60'
                        : idx === 2
                        ? 'border-b sm:border-b-0 border-[#3D3D4A]/60 sm:border-r'
                        : '';

                    const iconColor =
                      item.accent === 'purple' ? 'text-[#672CFF]' : 'text-[#FF2C5B]';

                    return (
                      <div key={item.id} className={`p-8 sm:p-9 ${borderClasses}`}>
                        <div className={`${iconColor} mb-4`}>
                          <AssessmentIcon type={item.iconType} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. LOVED BY FOUNDERS ================= */}
        <section className="bg-[#EDE6FF] py-20 lg:py-28">
          <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
            <p className="text-[11px] font-bold tracking-[0.15em] text-[#672CFF] uppercase mb-3">
              {SITE_CONTENT.lovedByFounders.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold text-black tracking-[-0.025em] leading-[1.1] max-w-[520px]">
              {SITE_CONTENT.lovedByFounders.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {SITE_CONTENT.lovedByFounders.testimonials.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-[22px] p-7 sm:p-8 border border-[#C2ABFF]/40 flex flex-col justify-between"
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className={`block text-4xl font-bold leading-none mb-4 ${
                        card.accent === 'purple' ? 'text-[#672CFF]' : 'text-[#FF2C5B]'
                      }`}
                    >
                      &ldquo;
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#3D3D4A] leading-relaxed">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#EFEFF1]">
                    <p className="text-xs sm:text-sm font-bold text-black">
                      {card.name}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#3D3D4A] mt-0.5">
                      {card.roleCompany}
                    </p>
                    <p className="text-[11px] text-[#8B8B94] mt-0.5">
                      {card.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 7. OUR MISSION ================= */}
        <section
          id="our-mission"
          className="bg-white py-20 lg:py-28 border-b border-[#EFEFF1] scroll-mt-24"
        >
          <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
            <div className="max-w-[880px] mx-auto text-center">
              {/* OUR MISSION Text Block with Background Picture */}
              <div className="relative rounded-[28px] overflow-hidden px-5 py-10 sm:px-10 sm:py-14 shadow-sm border border-[#EFEFF1]">
                <img
                  src="/assets/our-mission-bg.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-top z-0"
                />
                {/* Balanced light veil (no blur) so the background photo is sharp and text is easy to read */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-white/45 z-0"
                />

                <div className="relative z-10 [text-shadow:0_1px_14px_rgba(255,255,255,0.98)]">
                  <p className="text-[11px] font-bold tracking-[0.15em] text-[#FF2C5B] uppercase mb-4">
                    {SITE_CONTENT.ourMission.eyebrow}
                  </p>
                  <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-bold text-black tracking-[-0.025em] leading-[1.15]">
                    <span className="block">{SITE_CONTENT.ourMission.headingLine1}</span>
                    <span className="block mt-1">
                      <span className="font-serif-italic font-semibold text-[#672CFF]">
                        {SITE_CONTENT.ourMission.headingLine2Italic}
                      </span>
                      {SITE_CONTENT.ourMission.headingLine2Suffix}
                    </span>
                  </h2>

                  <div className="mt-8 space-y-5 text-sm sm:text-base text-black font-semibold leading-relaxed max-w-[720px] mx-auto">
                    <p>{SITE_CONTENT.ourMission.paragraph1}</p>
                    <p>{SITE_CONTENT.ourMission.paragraph2}</p>
                  </div>
                </div>
              </div>

              {/* Guaranteed Result Animated Block (matches reference video) */}
              <div className="mt-14 flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#FF2C5B] tracking-tight mb-5">
                  Guaranteed Result
                </h3>

                <div className="w-full max-w-[310px] sm:max-w-[340px] aspect-square rounded-[24px] bg-[#2F198C] flex items-center justify-center shadow-[0_18px_45px_rgba(47,25,140,0.22)] overflow-hidden">
                  <svg
                    viewBox="0 0 240 240"
                    className="w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] overflow-visible"
                    aria-label="Guaranteed Result Animation"
                  >
                    <defs>
                      <linearGradient id="topDotDropTrail" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#672CFF" stopOpacity="0" />
                        <stop offset="45%" stopColor="#672CFF" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#FF4D94" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>

                    {/* Spin Motion Trail Layer 2 (furthest lag during spin) */}
                    <g
                      style={{ transformOrigin: '120px 120px' }}
                      className="animate-guaranteed-trail-2"
                    >
                      <circle cx="120" cy="64" r="15" fill="#FF4D94" />
                      <circle cx="159.6" cy="80.4" r="15" fill="#9E1B46" />
                      <circle cx="176" cy="120" r="15" fill="#FF3B7F" />
                      <circle cx="159.6" cy="159.6" r="15" fill="#FF2C79" />
                      <circle cx="120" cy="176" r="15" fill="#9E1B46" />
                      <circle cx="80.4" cy="159.6" r="15" fill="#FF55A3" />
                      <circle cx="64" cy="120" r="15" fill="#8A183E" />
                      <circle cx="80.4" cy="80.4" r="15" fill="#A61F4C" />
                    </g>

                    {/* Spin Motion Trail Layer 1 (closer lag during spin) */}
                    <g
                      style={{ transformOrigin: '120px 120px' }}
                      className="animate-guaranteed-trail-1"
                    >
                      <circle cx="120" cy="64" r="15" fill="#FF4D94" />
                      <circle cx="159.6" cy="80.4" r="15" fill="#9E1B46" />
                      <circle cx="176" cy="120" r="15" fill="#FF3B7F" />
                      <circle cx="159.6" cy="159.6" r="15" fill="#FF2C79" />
                      <circle cx="120" cy="176" r="15" fill="#9E1B46" />
                      <circle cx="80.4" cy="159.6" r="15" fill="#FF55A3" />
                      <circle cx="64" cy="120" r="15" fill="#8A183E" />
                      <circle cx="80.4" cy="80.4" r="15" fill="#A61F4C" />
                    </g>

                    {/* Primary 8-Dot Rotating Ring */}
                    <g
                      style={{ transformOrigin: '120px 120px' }}
                      className="animate-guaranteed-ring"
                    >
                      {/* Top Dot Vertical Drop Trail + Top Dot */}
                      <g className="animate-guaranteed-top-trail">
                        <rect
                          x="103"
                          y="24"
                          width="34"
                          height="44"
                          rx="17"
                          fill="url(#topDotDropTrail)"
                        />
                      </g>
                      <g className="animate-guaranteed-top-dot">
                        <circle cx="120" cy="64" r="15" fill="#FF4D94" />
                      </g>

                      {/* Remaining 7 Dots */}
                      <circle cx="159.6" cy="80.4" r="15" fill="#9E1B46" />
                      <circle cx="176" cy="120" r="15" fill="#FF3B7F" />
                      <circle cx="159.6" cy="159.6" r="15" fill="#FF2C79" />
                      <circle cx="120" cy="176" r="15" fill="#9E1B46" />
                      <circle cx="80.4" cy="159.6" r="15" fill="#FF55A3" />
                      <circle cx="64" cy="120" r="15" fill="#8A183E" />
                      <circle cx="80.4" cy="80.4" r="15" fill="#A61F4C" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 8. OUR PROCESS (HOW IT WORKS) ================= */}
        <section
          id="our-process"
          className="relative overflow-hidden bg-[#FDF9FC] py-8 sm:py-12 lg:py-16 scroll-mt-20 border-b border-[#F3E8F8]"
        >
          {/* Subtle Pastel Corner Shapes matching reference */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 -left-14 sm:-top-20 sm:-left-20 w-[140px] h-[140px] sm:w-[240px] sm:h-[240px] rounded-full bg-[#FFEAF2]/80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -right-14 sm:-top-16 sm:-right-20 w-[130px] h-[130px] sm:w-[220px] sm:h-[220px] rounded-full bg-[#EDE3FF]/75"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 -right-16 sm:top-16 sm:-right-24 w-[110px] h-[110px] sm:w-[190px] sm:h-[190px] rounded-full bg-[#E1D2FF]/65"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 sm:-bottom-24 sm:-left-16 w-[130px] h-[130px] sm:w-[220px] sm:h-[220px] rounded-full bg-[#EAE0FF]/75"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-12 sm:-bottom-24 sm:-right-16 w-[140px] h-[140px] sm:w-[230px] sm:h-[230px] rounded-full bg-[#FFE8F0]/80"
          />

          <div className="relative z-10 max-w-[1040px] mx-auto px-3.5 sm:px-8">
            {/* Top Header Row: Always Side-by-Side like Screenshot */}
            <div className="grid grid-cols-12 items-end gap-2 sm:gap-6">
              <div className="col-span-7 sm:col-span-7">
                <div className="inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-[#F99BBC] bg-white/90 px-3 py-1 sm:px-5 sm:py-2 shadow-[0_2px_8px_rgba(255,31,90,0.06)] mb-2 sm:mb-3.5">
                  <span className="text-[8.5px] sm:text-[11px] lg:text-xs font-bold tracking-[0.04em] text-[#0E0B16] uppercase">
                    {SITE_CONTENT.ourProcess.eyebrow}
                  </span>
                </div>

                <h2 className="text-[19px] sm:text-3xl lg:text-[42px] font-extrabold tracking-[-0.03em] leading-[1.08]">
                  <span className="block whitespace-nowrap">
                    <span className="text-[#0A0614]">
                      {SITE_CONTENT.ourProcess.headingLine1Black}
                    </span>
                    <span className="text-[#FF1F5A]">
                      {SITE_CONTENT.ourProcess.headingLine1Pink}
                    </span>
                  </span>
                  <span className="block text-[#6528FF] mt-0.5 whitespace-nowrap">
                    {SITE_CONTENT.ourProcess.headingLine2Purple}
                  </span>
                </h2>
              </div>

              <div className="col-span-5 sm:col-span-5 pb-0.5 sm:pb-2">
                <p className="text-[9px] sm:text-[13px] lg:text-[15px] font-normal text-[#3B354A] leading-snug">
                  {SITE_CONTENT.ourProcess.rightSubtitleLine1}
                </p>
                <div className="mt-1 sm:mt-1.5 inline-block w-full">
                  <p className="text-[9px] sm:text-[13px] lg:text-[15px] font-medium text-[#FF1F5A] leading-snug">
                    {SITE_CONTENT.ourProcess.rightSubtitleLine2}
                  </p>
                  <div className="h-[1.5px] sm:h-[2px] w-[72%] bg-[#FF1F5A] mt-1 sm:mt-1.5 rounded-full" />
                </div>
              </div>
            </div>

            {/* 3-Step Flow: Always 3 Columns Side-by-Side with Horizontal Dashed Connectors */}
            <div className="relative mt-6 sm:mt-11 lg:mt-12">
              {/* Horizontal Dashed Connectors + Center Dots (Visible on ALL screens) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[28px] sm:top-[40px] lg:top-[46px] left-[16.666%] right-[16.666%] z-0"
              >
                <div className="grid grid-cols-2 items-center w-full">
                  {/* Connector 1 -> 2 (Pink Dashed + Pink Dot) */}
                  <div className="relative flex items-center justify-center px-6 sm:px-11 lg:px-14">
                    <div className="w-full border-t-[1.5px] sm:border-t-2 border-dashed border-[#FF3B72]/65" />
                    <span className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF1F5A] ring-2 sm:ring-4 ring-[#FDF9FC]" />
                  </div>

                  {/* Connector 2 -> 3 (Purple Dashed + Purple Dot) */}
                  <div className="relative flex items-center justify-center px-6 sm:px-11 lg:px-14">
                    <div className="w-full border-t-[1.5px] sm:border-t-2 border-dashed border-[#6528FF]/65" />
                    <span className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#6528FF] ring-2 sm:ring-4 ring-[#FDF9FC]" />
                  </div>
                </div>
              </div>

              {/* 3 Steps Grid (Always 3 columns side-by-side) */}
              <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-5 lg:gap-8">
                {SITE_CONTENT.ourProcess.steps.map((step, idx) => {
                  const isPurple = step.accent === 'purple';

                  const cardBoxClasses = isPurple
                    ? 'bg-gradient-to-b from-[#F5F0FF] to-[#EBE0FF] border-[#D8C4FF] shadow-[0_10px_24px_rgba(101,40,255,0.13)]'
                    : 'bg-gradient-to-b from-[#FFF5F8] to-[#FFE8F0] border-[#FFD2E1] shadow-[0_10px_24px_rgba(255,31,90,0.12)]';

                  const badgeClasses = isPurple
                    ? 'bg-[#6528FF] shadow-[0_4px_10px_rgba(101,40,255,0.35)]'
                    : 'bg-[#FF1F5A] shadow-[0_4px_10px_rgba(255,31,90,0.35)]';

                  return (
                    <div key={step.number} className="flex flex-col items-center text-center">
                      {/* Rounded Square Icon Box + Bottom Number Pill */}
                      <div className="relative">
                        <div
                          className={`w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] lg:w-[92px] lg:h-[92px] rounded-[15px] sm:rounded-[20px] lg:rounded-[22px] border flex items-center justify-center ${cardBoxClasses}`}
                        >
                          {idx === 0 && (
                            /* Step 01: Phone with Signal Waves (Pink-Red) */
                            <svg
                              viewBox="0 0 64 64"
                              className="w-7 h-7 sm:w-10 sm:h-10 lg:w-11 lg:h-11"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M35.5 15.5C41.8 16.4 46.8 21.4 47.7 27.7"
                                stroke="#FF1F5A"
                                strokeWidth="4.2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M34.8 23.2C38.1 23.8 40.7 26.4 41.3 29.7"
                                stroke="#FF1F5A"
                                strokeWidth="4.2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M21.2 15.2C19.6 15.2 18.1 15.9 17 17.1C14.7 19.6 13.8 23.6 15.6 28.8C17.8 35.2 22.8 41.7 29.1 45.9C33.8 49 38.4 50.1 42.1 48.9C44.2 48.2 46.2 46.5 47.2 44.5C48.1 42.8 47.6 40.7 46 39.6L40.3 35.6C38.8 34.6 36.8 34.9 35.6 36.2L33.9 38.1C30.2 36.2 26.9 32.9 25 29.2L26.9 27.5C28.2 26.3 28.5 24.3 27.5 22.8L23.5 17.1C22.9 15.9 22.1 15.2 21.2 15.2Z"
                                fill="#FF1F5A"
                              />
                            </svg>
                          )}

                          {idx === 1 && (
                            /* Step 02: 3 Vetted Specialists + Checkmark Badge (Purple) */
                            <svg
                              viewBox="0 0 64 64"
                              className="w-7 h-7 sm:w-10 sm:h-10 lg:w-11 lg:h-11"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle cx="32" cy="18.5" r="6.5" fill="#6528FF" />
                              <circle cx="19" cy="22.5" r="5" fill="#6528FF" />
                              <circle cx="45" cy="22.5" r="5" fill="#6528FF" />
                              <path
                                d="M10.5 38.5C10.5 33.8 14.2 30 18.8 30C20.5 30 22.1 30.5 23.4 31.4C21.4 33.4 20.1 36.1 19.9 39.2H11.5C10.9 39.2 10.5 38.9 10.5 38.5Z"
                                fill="#6528FF"
                              />
                              <path
                                d="M53.5 38.5C53.5 33.8 49.8 30 45.2 30C43.5 30 41.9 30.5 40.6 31.4C42.6 33.4 43.9 36.1 44.1 39.2H52.5C53.1 39.2 53.5 38.9 53.5 38.5Z"
                                fill="#6528FF"
                              />
                              <path
                                d="M22 38.5C22 32.7 26.5 28 32 28C37.5 28 42 32.7 42 38.5V40.5H22V38.5Z"
                                fill="#6528FF"
                              />
                              <circle
                                cx="32"
                                cy="44.5"
                                r="8.5"
                                fill="#6528FF"
                                stroke="#EFE7FF"
                                strokeWidth="2.5"
                              />
                              <path
                                d="M28.5 44.5L31 47L36 42"
                                stroke="#FFFFFF"
                                strokeWidth="2.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}

                          {idx === 2 && (
                            /* Step 03: Magnifying Glass with Person Inside (Pink-Red) */
                            <svg
                              viewBox="0 0 64 64"
                              className="w-7 h-7 sm:w-10 sm:h-10 lg:w-11 lg:h-11"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                cx="29"
                                cy="28"
                                r="14.5"
                                stroke="#FF1F5A"
                                strokeWidth="4.5"
                              />
                              <circle cx="29" cy="24" r="4.2" fill="#FF1F5A" />
                              <path
                                d="M21.5 35.2C22.4 31.8 25.4 29.6 29 29.6C32.6 29.6 35.6 31.8 36.5 35.2C34.4 37.1 31.8 38.2 29 38.2C26.2 38.2 23.6 37.1 21.5 35.2Z"
                                fill="#FF1F5A"
                              />
                              <path
                                d="M40.2 39.2L49.5 48.5"
                                stroke="#FF1F5A"
                                strokeWidth="6"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Overlapping Number Badge (01, 02, 03) */}
                        <span
                          className={`absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-md text-white text-[9px] sm:text-[10px] lg:text-[11px] font-bold flex items-center justify-center ${badgeClasses}`}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-[11px] sm:text-[15px] lg:text-[18px] font-extrabold text-[#0A0614] tracking-tight mt-4 sm:mt-5 leading-tight">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-[8.5px] sm:text-xs lg:text-[13.5px] text-[#4A4458] leading-snug mt-1 sm:mt-1.5 max-w-[230px]">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA Buttons: Side-by-Side on All Screens */}
            <div className="mt-6 sm:mt-10 lg:mt-12 flex flex-row items-center justify-center gap-2.5 sm:gap-4">
              <a
                href={BOOKING_HIRING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#5B21FF] to-[#7C3AED] hover:from-[#4C16E0] hover:to-[#6626D9] text-white text-[10px] sm:text-xs lg:text-[14px] font-bold px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl shadow-[0_8px_20px_rgba(101,40,255,0.28)] transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF1F5A]"
              >
                <span>{SITE_CONTENT.ourProcess.primaryCtaLabel}</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.4]" />
              </a>

              <a
                href="#who-we-help"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white hover:bg-[#FFF5F8] text-[#FF1F5A] border sm:border-[1.5px] border-[#FF1F5A] text-[10px] sm:text-xs lg:text-[14px] font-bold px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl shadow-[0_4px_14px_rgba(255,31,90,0.08)] transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6528FF]"
              >
                <span>{SITE_CONTENT.ourProcess.secondaryCtaLabel}</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.4]" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= 9. THE INVESTMENT ================= */}
        <section className="bg-[#EDE6FF] py-20 lg:py-28">
          <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
            <div className="max-w-[680px]">
              <p className="text-[11px] font-bold tracking-[0.15em] text-[#672CFF] uppercase mb-3">
                {SITE_CONTENT.theInvestment.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold text-black tracking-[-0.025em] leading-[1.1]">
                {SITE_CONTENT.theInvestment.headingPrefix}
                <span className="font-serif-italic font-semibold text-[#672CFF]">
                  {SITE_CONTENT.theInvestment.headingItalic}
                </span>
                {SITE_CONTENT.theInvestment.headingSuffix}
              </h2>
            </div>

            {/* Side-by-Side Comparison Cards (Stacked on Mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-12 items-stretch">
              {/* LEFT SIDE: Recruit Her */}
              <div className="bg-[#672CFF] text-white rounded-[26px] p-8 sm:p-11 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {SITE_CONTENT.theInvestment.recruitHerSide.title}
                    </h3>
                    <span className="bg-[#FF2C5B] text-black text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {SITE_CONTENT.theInvestment.recruitHerSide.priceBadge}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mt-6">
                    {SITE_CONTENT.theInvestment.recruitHerSide.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-white">
                        <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#FF2C5B] stroke-[3]" />
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT SIDE: Traditional Local Hiring */}
              <div className="bg-white text-black rounded-[26px] p-8 sm:p-11 border border-[#C2ABFF]/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-6">
                    {SITE_CONTENT.theInvestment.traditionalSide.title}
                  </h3>

                  <ul className="space-y-4 mt-6">
                    {SITE_CONTENT.theInvestment.traditionalSide.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#3D3D4A]"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#EFEFF1] flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 text-[#8B8B94] stroke-[2.5]" />
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Below the Comparison: Closing Difference & Action in Final CTA Styling */}
            <div className="mt-10 bg-black text-white rounded-[32px] p-8 sm:p-12 lg:px-16 lg:py-14 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-[-0.02em] leading-[1.2]">
                    {SITE_CONTENT.theInvestment.closingHighlight}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3.5 mt-8">
                    <a
                      href={BOOKING_HIRING_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#672CFF] hover:bg-[#2F198C] text-white text-xs sm:text-sm font-semibold px-7 py-4 rounded-xl transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2C5B]"
                    >
                      <span>{SITE_CONTENT.theInvestment.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>

                    <a
                      href={CONTACT_CONFIG.emailHref}
                      className="inline-flex items-center justify-center border border-[#3D3D4A] hover:border-[#8B8B94] text-white text-xs sm:text-sm font-semibold px-7 py-4 rounded-xl transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672CFF]"
                    >
                      Email us
                    </a>
                  </div>
                </div>

                {/* Right Decorative Brand Graphic */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <BrandMark
                    variant="decorative"
                    className="w-32 sm:w-40 lg:w-44 h-auto select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= 10. FOOTER ================= */}
      <footer className="bg-black text-white pt-16 pb-12 border-t border-[#3D3D4A]/40">
        <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D3D4A]/40">
            {/* Brand + Short Description */}
            <div className="md:col-span-6 lg:col-span-7">
              <a
                href="#top"
                className="inline-flex items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#672CFF] rounded-md"
              >
                <BrandMark variant="logo" className="w-5 h-6 shrink-0" />
                <span className="text-lg tracking-tight text-white">
                  <span className="font-bold">Recruit</span>
                  <span className="font-medium">Her</span>
                </span>
              </a>
              <p className="text-xs sm:text-[13px] text-[#8B8B94] leading-relaxed mt-4 max-w-[360px]">
                {SITE_CONTENT.footer.description}
              </p>
            </div>

            {/* Company Navigation */}
            <div className="md:col-span-3 lg:col-span-2">
              <h3 className="text-[11px] font-bold tracking-[0.14em] text-white uppercase mb-4">
                COMPANY
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#8B8B94]">
                {SITE_CONTENT.header.navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-3 lg:col-span-3">
              <h3 className="text-[11px] font-bold tracking-[0.14em] text-white uppercase mb-4">
                CONTACT US
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#8B8B94]">
                <li>
                  <a
                    href={CONTACT_CONFIG.emailHref}
                    className="hover:text-white transition-colors break-all"
                  >
                    {CONTACT_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_CONFIG.phoneHref}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    title={CONTACT_CONFIG.internationalPhone}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF2C5B] shrink-0" />
                    <span>{CONTACT_CONFIG.displayPhone}</span>
                  </a>
                </li>
                {CONTACT_CONFIG.linkedinUrl.trim() !== '' && (
                  <li>
                    <a
                      href={CONTACT_CONFIG.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8B8B94]">
            <p>{SITE_CONTENT.footer.getCopyright()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
