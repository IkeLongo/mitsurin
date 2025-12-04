import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  href: string;
  label: string;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface FooterProps {
  companyName?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  copyright?: string;
  className?: string;
}

const defaultSections: FooterSection[] = [
  {
    title: "Our Beef",
    links: [
      { href: "/our-beef", label: "Premium Cuts & Options" },
      { href: "/why-wagyu", label: "Why Wagyu?" },
      { href: "/availability", label: "Check Availability", badge: "New" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy-policy", label: "Privacy Policy & Cookie Consent" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "tel:+12108270658", label: "Hondo, Texas Ranch" },
      { href: "mailto:michael@mitsurinwagyu.com", label: "michael@mitsurinwagyu.com" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  {
    href: "#",
    label: "Twitter",
    icon: (
      <svg className="fill-current" width="100%" height="100%" viewBox="0 0 24 24">
        <path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg className="fill-current" width="100%" height="100%" viewBox="0 0 24 24">
        <path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg className="fill-current" width="100%" height="100%" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="12" r="12" />
          <path
            d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938 -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125 0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813 -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068 -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204 -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068 0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204 0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
            fill="white"
          />
        </g>
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg className="fill-current" width="100%" height="100%" viewBox="0 0 24 24">
        <path d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z" />
      </svg>
    ),
  },
];

export default function Footer({
  companyName = "Mitsurin Wagyu Beef",
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyright = "© Copyright 2025. Rivercity Creatives, All Rights Reserved.",
  className = "",
}: FooterProps) {
  return (
    <footer className={`bg-white-50 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        {/* Company Logo */}
        <div className="p-5">
          <Image
            src="/mitsurin-stacked-multicolor-logo.webp"
            alt={companyName}
            width={150}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <div key={index} className="p-5">
            <div className="text-sm uppercase text-accent-dark font-bold mb-3">
              {section.title}
            </div>
            {section.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="my-3 block text-gray-700 hover:text-primary-800 transition-colors duration-200"
              >
                {link.label}
                {link.badge && (
                  <span className="text-accent-dark text-xs p-1 ml-1">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Section with Social Links */}
      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          {/* Social Icons */}
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-6 mx-1 cursor-pointer text-gray-500 hover:text-primary-800 transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Text Row */}
          <div className="mt-3 text-gray-600 text-center">
            Grown on Texas soil. Told through thoughtful design.
          </div>

          {/* Copyright Row */}
          <div className="my-2 text-gray-600 text-center">
            © Copyright {new Date().getFullYear()}.{' '}
            <Link 
              href="https://rivercitycreatives.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-800 hover:text-yellow-600 transition-colors duration-200"
            >
              Rivercity Creatives
            </Link>
            , All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}