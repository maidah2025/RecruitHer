import React from 'react';

interface BrandMarkProps {
  className?: string;
  /**
   * 'logo' matches Image 3 (Complete official logo symbol where the pink lobe meets the purple right pillar).
   * 'decorative' matches Image 2 (Enlarged decorative brand symbol used in Hero & Final CTA artwork with the crescent gap).
   */
  variant?: 'logo' | 'decorative';
}

/**
 * Faithful vector reproduction of the official RecruitHer symbol (Images 2 & 3)
 * using exact official brand colors: Primary Purple (#672CFF) and Primary Pink (#FF2C5B).
 */
export const BrandMark: React.FC<BrandMarkProps> = ({
  className = 'w-8 h-8',
  variant = 'logo',
}) => {
  return (
    <svg
      viewBox="0 0 1054 1280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top-left Primary Purple (#672CFF) ascender with top serif and curved diagonal cut */}
      <path
        d="M0 126C148 102 284 58 405 0V384C316 488 204 574 76 640V205C76 164 52 144 0 144V126Z"
        fill="var(--brand-primary-purple, #672CFF)"
      />

      {variant === 'decorative' ? (
        /* Decorative variant (Image 2): Crescent gap between the pink bulb and lower-right purple pillar */
        <>
          <path
            d="M615 910C670 950 732 970 795 970C858 970 920 950 974 910V1185C974 1236 998 1262 1054 1262V1280H533V1262C589 1262 615 1236 615 1185V910Z"
            fill="var(--brand-primary-purple, #672CFF)"
          />
          <path
            d="M76 640C196 608 308 560 405 496V676C486 566 598 492 730 492C872 492 974 584 974 710C974 824 880 906 772 906C666 906 615 832 615 732C615 642 586 584 538 584C494 584 446 632 405 706V1185C405 1236 430 1262 481 1262V1280H0V1262C52 1262 76 1236 76 1185V640Z"
            fill="var(--brand-primary-pink, #FF2C5B)"
          />
        </>
      ) : (
        /* Complete Official Logo Symbol (Image 3): Lower-right purple pillar meets the pink lobe seamlessly */
        <>
          <path
            d="M615 720C632 828 692 904 794 904C892 904 958 834 974 720V1185C974 1236 998 1262 1054 1262V1280H533V1262C589 1262 615 1236 615 1185V720Z"
            fill="var(--brand-primary-purple, #672CFF)"
          />
          <path
            d="M76 640C196 608 308 560 405 496V676C486 566 598 492 730 492C872 492 974 584 974 712C974 826 888 906 786 906C680 906 615 828 615 724C615 640 586 584 538 584C494 584 446 632 405 706V1185C405 1236 430 1262 481 1262V1280H0V1262C52 1262 76 1236 76 1185V640Z"
            fill="var(--brand-primary-pink, #FF2C5B)"
          />
        </>
      )}
    </svg>
  );
};

export const SparkleSeparator: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6 text-[#FF2C5B]',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C12.9 7.4 16.6 11.1 24 12C16.6 12.9 12.9 16.6 12 24C11.1 16.6 7.4 12.9 0 12C7.4 11.1 11.1 7.4 12 0Z" />
  </svg>
);
