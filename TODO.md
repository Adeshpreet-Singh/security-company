# TODO: security-company

## Bugs
- [BUG] Form(s) missing onSubmit handler — DONE
- [BUG] scrollTo() function reference errors — DONE (fixed to scrollToSection)
- [BUG] Mobile menu button onClick handler broken — DONE (fixed to setMenuOpen)
- [BUG] Invalid style attributes on SVG path elements — DONE (removed)
- [BUG] Excessive px-4 md:px-8 classes on every element — DONE (cleaned up)

## Missing Sections
- [SECTIONS] Add gallery/portfolio/work showcase section — DONE

## SEO
- [SEO] Add FAQ section - DONE (good for SEO)
- [SEO] Add structured data - DONE (JSON-LD)
- [SEO] Add favicon.ico — DONE
- [SEO] Add OG/Twitter meta tags — DONE

## UX Improvements
- [UX] Add loading states - DONE (form submission feedback) for form submission
- [UX] Add success/error toast - DONE (inline message) after form submit

## New Features
- [FEATURE] Web3Forms integration — DONE (contact form with access key placeholder)
- [FEATURE] WhatsApp link — DONE (contact section + CTA)
- [FEATURE] Google Maps embed — DONE (map section)
- [FEATURE] tel: links — DONE (phone numbers clickable)
- [FEATURE] mailto: links — DONE (email clickable)
- [FEATURE] Social media links — DONE (Facebook, Twitter, LinkedIn, Instagram in footer)
- [FEATURE] Business hours — DONE (contact section)
- [FEATURE] Certifications section — DONE (about section)
- [FEATURE] Emergency banner — DONE (top of page with tel: link)
- [FEATURE] 4-column footer with sitemap — DONE

## Build
- [BUILD] npm run build — PASSING

## Review Fixes
- [FIX] Navigation responsive improvements - better touch targets (44px+ min), mobile menu items enlarged
- [FIX] Typography consistency - removed conflicting CSS font-size rules with !important
- [FIX] Contrast improvement - slate-text changed from #a0a0a0 to #b0b0b0 for better WCAG contrast
- [FIX] Colors - improved text-secondary contrast ratio
- [FIX] Layout - removed CSS nav/display/button overrides that conflicted with Tailwind responsive classes
- [FIX] Button consistency - all CTA buttons now have min-h-[48px] for consistent touch targets
- [FIX] Mobile touch targets - hamburger button, nav links, form buttons all enlarged to 44px+
- [FIX] Mobile overflow - cleaned up conflicting CSS rules that broke responsive layout
- [FIX] Mobile readability - hero heading uses responsive text-4xl/sm:text-5xl/md:text-6xl
- [FIX] Mobile layout - stats section uses flex-wrap and responsive gaps
