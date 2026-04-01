Product Requirements Document
OG Automotive Website
Version: 1.0 Date: March 2026 Status: Ready for Development Prepared for:
Developer / Agency
Table of Contents
1. Project Overview
2. Goals & Success Criteria
3. Target Audience
4. Design Philosophy & Aesthetic Direction
5. Design System
6. Animation Specification
7. Site Architecture & Page Sections
8. Component Specifications
9. Copy Direction & Tone
10. Technical Requirements
11. Performance Requirements
12. Accessibility Requirements
13. Responsive & Breakpoint Behavior
14. Acceptance Criteria
15. Out of Scope
16. Open Questions

1. Project Overview
Client: OG Automotive Location: White River Junction, Vermont 05001 Business
Type: Independent auto repair and service shop — full service, all makes and models
Project: Design and build a full marketing website that functions as the shop’s primary
digital presence
Problem Being Solved
OG Automotive currently lacks a professional digital presence that matches the quality
and reputation of the actual shop. Potential customers searching for local mechanics
either cannot find them or land on a weak or non-existent page, leading to lost business
that goes to chains or larger shops. This site needs to establish credibility, communicate
the shop’s identity clearly, and convert visitors into booked appointments.
What This Site Is Not
This is not a generic, template-looking “local mechanic” site. It is a handcrafted, design-
forward marketing site that feels like it was built by a boutique studio specifically for this
shop. It should look and feel noticeably better than every competitor in the Upper Valley.
A visitor should feel the weight, craft, and confidence of the shop the moment they land
on the page.
2. Goals & Success Criteria
Primary Goals
Goal Metric
Increase service bookings User submits the contact/booking form
Communicate shop
Visitor understands what OG is within 5 seconds of landing
identity
Build trust with new Testimonials, stats, and “Why Us” section visible before the
customers fold break
Drive phone calls Phone number prominently accessible on mobile
Success Criteria
Page load time under 2.5 seconds on a standard 4G mobile connection

Mobile usability score above 90 on Google Lighthouse
All animations run at 60fps on modern browsers without jank
Zero use of stock-looking template components — every element should feel
intentionally designed
Form submissions successfully delivered to the shop’s email or CRM
Site passes WCAG 2.1 AA accessibility standards
3. Target Audience
Primary User
Local driver in the Upper Valley (Vermont/New Hampshire border area)
Age range: 25–65
Needs their car to work — it’s not a luxury, it’s transportation
Skeptical of chain shops and upselling
Values honesty, speed, and being treated like a person
Often searching on mobile, either actively looking for a mechanic or responding to a
recommendation
Decision trigger: “A friend told me to go here” or “I Googled mechanic near White
River Junction”
Secondary User
New resident or visitor to the area
No existing mechanic relationship
Relies heavily on the website to make a trust decision
Will read reviews, look for social proof, and check hours/location
User Goals by Visit Type
Visit Intent What They Need Immediately
Emergency (broke down, warning Phone number, hours, address — within 2

light) scrolls
Research / comparing shops Services list, reviews, “Why Us” section
Returning customer Quick access to contact/booking form
Confirmation the shop looks legit and
Referral (“my friend said go here”)
trustworthy
4. Design Philosophy & Aesthetic Direction
Core Aesthetic: Industrial Craft
The visual language of this site should feel like the shop itself — gritty-yet-refined.
Think: worn leather work gloves, a clean engine bay, a handwritten estimate on a real
piece of paper. Not flashy. Not corporate. Earned.
The single thing a visitor should feel: “These people know what they’re doing and they
won’t waste my time.”
Reference Points
The design should feel informed by (not copied from) the following sensibilities:
Heavy editorial typography found in industrial design magazines
The restraint and materiality of premium workwear brands (Carhartt, Filson)
The spatial confidence of Japanese auto workshop aesthetics — negative space
used intentionally
Gritty but elevated: think a shop that’s been around for years and doesn’t need to try
hard
What to Avoid
These are explicit prohibitions — if any of these appear in a design review, they should
be flagged as defects:
Purple or blue gradient backgrounds
Sans-serif fonts like Inter, Roboto, Poppins, or Montserrat as the primary display
face
Generic “hero with a stock photo of a mechanic smiling” layout

Cards with rounded corners and drop shadows that look like a SaaS dashboard
Animated loading spinners or skeleton screens
Any icon set that looks like it came from Flaticon
Pastel or muted “modern minimal” color palettes
Layouts that could belong to any other local business (dentist, plumber, realtor)
5. Design System
Color Palette
Token Hex Usage
Primary background, deepest
--color-black #0a0908
surface
--color-charcoal #111210 Secondary background
--color-steel #1c1c1a Card and section backgrounds
Primary accent — CTAs, highlights,
--color-amber #e07b2a
active states
--color-amber-
#f0a050 Hover state for amber elements
light
--color-rust #9b3a1a Deep accent, gradient terminus
--color-cream #e8e0d4 Primary body text
--color-muted #8a8070 Secondary text, labels, metadata
--color-white #f5f0e8 Headlines, high-contrast text
--color-border rgba(255,255,255,0.07) Dividers, card borders
--color-border-
rgba(224,123,42,0.25) Accent borders
amber
Color usage rules:

Never use pure #ffffff — use --color-white or --color-cream for warmth
Amber should feel like a reward, not a wallpaper — use it sparingly and with purpose
Backgrounds should never be flat — use subtle radial gradients and grain overlay
(see Section 6)
Typography
Display Font: Bebas Neue
Source: Google Fonts ( Bebas Neue )
Usage: Hero headline, section titles, oversized decorative numbers
Letter spacing: 0.02em to 0.08em depending on size
Never use below 2rem
Never use for body copy or UI labels
UI / Subheading Font: Barlow Condensed
Source: Google Fonts ( Barlow Condensed , weights 300, 500, 600, 700)
Usage: Section labels, navigation, button text, card titles, form labels
All caps with letter-spacing: 0.15em–0.35em for labels and tags
Sentence case for subheadings and card headings
Body Font: Barlow
Source: Google Fonts ( Barlow , weights 300, 400; italic 300)
Usage: Paragraph text, testimonials, form inputs, descriptions
Base size: 1rem (16px)
Line height: 1.75–1.85 for reading comfort
Weight 300 preferred for body — feels lighter and more editorial
Type Scale
Role Font Size Weight Notes

Hero Title Bebas Neue clamp(5rem, 14vw, 400 Line height 0.88
13rem)
Section clamp(2.8rem, 6vw,
Bebas Neue 400 Line height 0.92
Title 6rem)
Section Barlow ALL CAPS, 0.4em
0.68rem 600
Label Condensed tracking
Barlow Uppercase, 0.05em
Card Title 1.2–1.4rem 600
Condensed tracking
Body Text Barlow 1rem 300 1.8 line height
Small / Barlow 400– Uppercase, 0.2em
0.7–0.78rem
Meta Condensed 500 tracking
Barlow Uppercase, 0.22em
Button 0.78rem 600
Condensed tracking
Spacing System
Base unit: 8px
Token Value Common Usage
--space-xs 8px Tight internal padding
--space-sm 16px Form field padding, small gaps
--space-md 24px Card internal padding baseline
--space-lg 40–48px Component padding
--space-xl 80px Section vertical padding (mobile)
--space-2xl 120px Section vertical padding (desktop)
--space-3xl 180px Hero bottom padding
Texture & Atmosphere
Every background surface must have depth. This is non-negotiable.
Grain overlay (global): Apply a fixed-position SVG noise texture as a ::before
pseudo-element on body at opacity: 0.03–0.04 . This gives the site an analog, printed

quality and prevents backgrounds from looking digitally sterile.
body::before {
content: '';
position: fixed;
inset: 0;
z-index: 1000;
pointer-events: none;
opacity: 0.035;
background-image: url("data:image/svg+xml,...feTurbulence noise filter...");
background-size: 200px 200px;
}
Hero background: Multi-layer radial gradient — deep rust glow at upper-right, subtle
amber warmth at lower-left, on top of near-black base. Never a solid color.
Grid texture overlay: Subtle 1px line grid (80px spacing) on the hero background,
masked with a radial gradient so it fades at center. Gives depth without competing with
type.
Iconography
All icons must be custom SVG inline elements
Stroke-based, stroke-width: 1.2–1.4
No fill icons, no icon libraries
Icons used only in services section and contact details — do not overuse
Size: 20–40px depending on context
6. Animation Specification
All animations should feel weighted, purposeful, and human. Nothing should bounce.
Nothing should feel like a CSS tutorial. The animations serve the content — they don’t
perform for their own sake.
Animation Library
Primary: GSAP 3.12+ with ScrollTrigger plugin CDN:
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js Fallback: CSS
transitions for hover states (no JS dependency for micro-interactions)

Never use animate.css , wow.js , or basic CSS @keyframes for scroll-triggered reveals.
Custom Cursor
Required on desktop only. Two-layer system:
Dot layer: 6px amber circle, follows exact mouse position with no lag
Ring layer: 36px circle with 1px amber-tinted border, follows mouse with 0.12 lerp
factor (smooth lag)
Ring expands to 56px and border brightens on hover over interactive elements
Hidden on touch/mobile devices
// Lerp-based cursor — implement exactly like this
let rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function loop() {
rx += (mx - rx) * 0.12;
ry += (my - ry) * 0.12;
ring.style.left = rx + 'px';
ring.style.top = ry + 'px';
requestAnimationFrame(loop);
})();
Page Load Sequence (Hero)
Triggered immediately on DOMContentLoaded . The sequence should feel like the site is
waking up, not loading.
Step Element Animation Duration Ease Delay
Eyebrow Fade in, y: 0 from
1 0.7s power3.out 0.2s
label 20px
y: 0% from 110% (clip
Hero title stagger
2 reveal, one word at a 1.1s expo.out
words 0.08s
time)
Hero Fade in, y: 0 from overlaps
3 0.8s power3.out
description 20px step 2
CTA Fade in, y: 0 from overlaps
4 0.8s power3.out
buttons 20px step 3

after
5 Scroll hint Fade in 0.6s power2.out
step 4
Title word clip technique: Each word must be wrapped in an overflow: hidden
container. The word itself transforms translateY(110%) on load and animates to 0% .
This creates a “rising through a slot” reveal effect that is not a fade.
Scroll-Triggered Reveals
Applied to all section content. Rules:
Trigger point: top 88% of viewport
Elements animate from opacity: 0, y: 36px to opacity: 1, y: 0
Duration: 0.85s , ease: power3.out
Multiple elements in the same section should stagger at 0.08–0.12s intervals
once: true — do not re-trigger on scroll up
Never use toggleClass approaches — use GSAP .fromTo() directly
Marquee / Ticker
A continuously scrolling horizontal band between the hero and the About section.
Content: List of services separated by diamond ◆ symbols
Background: --color-amber
Text: --color-black , Bebas Neue, 0.95rem , 0.18em tracking
Animation: CSS @keyframes infinite linear scroll, 22s duration
Two full copies of the content side by side so the loop is seamless
No JavaScript required for this element
Parallax
Hero background layers move at different scroll speeds to create depth:
Hero background gradient: yPercent: 25 over hero scroll distance
Implemented via GSAP ScrollTrigger with scrub: true
Background elements only — never apply parallax to text or interactive elements

Hover States
All hover states must feel physical and intentional, not just color swaps.
Element Hover Behavior
Primary
Black fill sweeps in from left ( translateX(-101% → 0 ), text color inverts
Button
to amber. Duration 0.4s , ease cubic-bezier(0.76, 0, 0.24, 1)
(CTA)
Ghost /
Color shifts to --color-white , arrow icon translates +4px on X axis
Text Link
Service Background darkens to --color-charcoal ; 2px amber underline bar
Card draws from left to right along card bottom
Navigation
Color shifts to --color-amber , 0.3s ease
Links
Form
Border color shifts to --color-amber , background shifts to faint amber
Inputs
tint rgba(224,123,42,0.04)
(focus)
Testimonial
Nav Border brightens to amber, background gets faint amber fill
Buttons
Counting Statistics
In the About section, numbers count up from 0 to their target value when they first
enter the viewport.
Library: GSAP gsap.to() on a plain object’s val property
Duration: 1.8s , ease: power2.out
Triggered once via ScrollTrigger once: true
Numbers should use toLocaleString() for comma-separated formatting where
appropriate
Navigation Behavior on Scroll
On load: Nav is transparent with a gradient overlay fading downward
After 80px scroll: Nav transitions to rgba(10, 9, 8, 0.95) with backdrop-filter:

blur(12px) and reduced padding
Transition: all 0.4s ease
7. Site Architecture & Page Sections
This is a single-page site with anchor-based navigation. No routing required.
Section Order
[Navigation — Fixed]
[01] Hero
[Marquee Ticker]
[02] About
[03] Services
[04] Why Us
[05] Testimonials
[06] Contact / Booking
[Footer]
URL / Anchor Map
Section Anchor ID
Hero #hero
About #about
Services #services
Why Us #why
Testimonials #testimonials
Contact #contact
8. Component Specifications
8.1 Navigation

Behavior: Fixed, full-width, z-index above all content.
Desktop layout (≥900px):
Left: Logo — “OG AUTO” in Bebas Neue. “AUTO” in amber.
Center: Navigation links — About, Services, Why Us, Reviews, Contact
Right: “Book Service” CTA button — amber background, black text, Barlow
Condensed
Mobile layout (<900px):
Left: Logo only
Right: Hamburger icon (optional — simplified mobile nav acceptable for v1)
CTA button hidden or condensed
Scroll behavior: See Section 6 — Navigation Behavior.
8.2 Hero Section
Layout: Full viewport height ( 100vh , minimum 700px ). Content anchored to bottom-
left. Background fills entire section.
Elements:
1. Eyebrow label — “White River Junction, Vermont · Est. Since Day One” — Barlow
Condensed, uppercase, amber, with a 40px amber line to the left
2. Primary headline — “OG AUTOMOTIVE” broken across three lines in Bebas Neue at
maximum display size. The word “OG” renders as an outlined/stroked version
(transparent fill, rgba white stroke) — this creates visual contrast and hierarchy. The
words “AUTO” and “MOTIVE” are solid white.
3. Description text — One or two short sentences, max 15 words each. Barlow 300,
muted color. Max width 360px .
4. CTA row — Primary button (“Book a Service”) + Ghost text link (“Our Services →”)
5. Scroll hint — “SCROLL” in vertical Barlow Condensed at bottom-right, with an
animated amber line below it pulsing downward
Background layers (bottom to top):
1. Near-black base #0a0908

2. Radial glow — rust/amber warm light at upper-right, opacity: 0.18
3. Subtle amber warmth at lower-left, opacity: 0.08
4. Grid line texture — fades to transparent at center via radial mask
5. Global grain overlay (see Section 5)
8.3 Marquee Ticker
Purpose: Visual transition between Hero and About. Communicates breadth of
services. Creates energy and momentum.
Spec:
Full-width band, amber background
Content: Oil Change · Brakes & Rotors · Engine Diagnostics · Transmission ·
Suspension · Tire Service · AC & Heat · Exhaust · (repeats)
Separator: ◆ diamond glyph
Font: Bebas Neue, 0.95rem , 0.18em letter spacing, black
Padding: 14px 0 vertically
Animation: Continuous CSS scroll, 22s linear, no pause
Two copies side-by-side for seamless loop
8.4 About Section
Layout: Two-column grid (desktop). Left column: text + stats. Right column: decorative
image frame.
Left column elements:
1. Section label — “About the Shop”
2. Section title — “Built on Honest Work” in Bebas Neue, 3 lines
3. Amber horizontal line ( 60px × 2px ) as visual divider
4. Two body paragraphs — see copy direction in Section 9
5. Stats grid — 2×2, separated by hairline borders

Stats:
Number Label
15+ Years in the Valley
4,800+ Cars Serviced
100% Honest Quotes
1 Location. 1 Standard.
All numbers animate up from 0 on scroll entry (see Section 6).
Right column elements:
1. Portrait-orientation frame ( aspect-ratio: 3/4 ) — placeholder/image container
2. Corner bracket accents (amber 2px lines, top-right and bottom-left)
3. Location tag — small amber pill overlapping bottom-left of frame: “White River Jct,
VT 05001”
4. Image frame has a gradient overlay fading to charcoal at bottom and left edges
Note to developer: The right column image frame is designed to accept a real
photograph of the shop or team. For launch without a photo, use a dark gradient
background with a large faint gear/wrench icon as a placeholder. Do not use stock
photography.
8.5 Services Section
Layout: Section header row + 3×2 card grid below.
Header row:
Left: Section label + title (“Full-Service Repair Shop”)
Right: Short subtext, max 2 sentences, right-aligned, max width 280px
Card grid:
3 columns desktop, 2 columns tablet, 1 column mobile
Cards separated by 1px grid lines (not box shadows)
Background: --color-black

Service Card spec:
Each card contains:
1. Card number — “01” through “06”, Bebas Neue, amber, 0.78rem
2. Icon — custom SVG, 40px , amber stroke
3. Service name — Barlow Condensed, uppercase, 1.3rem , white
4. Description — 2 sentences max, Barlow 300, muted, 0.88rem
5. Arrow glyph → — bottom-right, hidden by default, fades in on hover
On hover:
Background shifts to --color-charcoal
Amber bar draws across bottom of card (width animates 0% → 100% , 0.5s )
Arrow appears at bottom-right
Services to include:
# Name Description
01 Oil & Filter Full synthetic, conventional, or high-mileage. Fast, done right.
02 Brakes & Rotors We inspect and advise. Only replace what actually needs it.
Engine
03 We read codes, dig deeper, explain clearly. No upselling.
Diagnostics
Tires & Rotations, balancing, new tires, alignment. Vermont roads are
04
Alignment rough.
05 AC & Heating Full climate system — refrigerant, compressors, heater cores.
Shocks, struts, control arms, tie rods. If it pulls or bounces,
06 Suspension
we fix it.
8.6 Why Us Section
Layout: Two-column (desktop). Left: text content and list. Right: decorative card stack.
Left column elements:

1. Section label — “Why OG”
2. Title — “No Games. No Guessing. Just Fixed.” — Bebas Neue, 3 lines
3. Pull quote — italicized, Barlow 300, bordered on the left with an amber 2px vertical
line, padding-left 24px
4. Feature list — 4 items
Feature list items:
Title Body
Transparent You get a quote before we touch anything. No surprises when you pick
Pricing up your keys.
Local & We’re not a chain with a quota. Your car gets a real technician who
Independent gives a damn.
Fast Most jobs are done same day. We know your car isn’t a luxury — it’s
Turnaround how you get to work.
All Makes &
Domestic, import, old, new. If it drives, we work on it.
Models
Each item has a small 32×32 amber-tinted square icon with a checkmark stroke.
Right column: card stack visual
Three cards overlapping at slight rotations to simulate a stack of cards/notes:
Bottom card: rotated +2.5deg , empty, charcoal background
Middle card: rotated -1deg , black background
Top card: 0deg , features a customer quote, label, and attribution
Top card content:
Label: “Customer Review” (uppercase, amber, Barlow Condensed)
Quote: A short testimonial in Bebas Neue, large
Attribution: Customer name and location
On hover over the stack, cards gently animate to rotation: 0 to “flatten” the stack.

8.7 Testimonials Section
Layout: Header row with navigation controls + horizontal slider below.
Header row:
Left: Section label + title (“What People Are Saying”)
Right: Previous / Next navigation buttons — square, bordered, with arrow icons
Slider behavior:
Cards slide horizontally using GSAP gsap.to(track, { x: ... })
Easing: power3.inOut , duration 0.75s
Card width: calc(50% - 12px) desktop, ~ 90vw mobile
Auto-advances every 5 seconds
No dots or progress indicators required for v1
Testimonial Card spec:
1. Large opening quote mark " — Bebas Neue, 5rem , amber, opacity: 0.2
2. Review text — Barlow 300 italic, 1.05rem , cream, 1.8 line height
3. Hairline divider
4. Author row: avatar circle (initials, amber-to-rust gradient) + name (uppercase,
Barlow Condensed) + 5-star rating (amber ★)
Testimonials to include:
Author Initials Review
“Brought my truck in with a noise I’d been ignoring for two months.
Dave
DK They found it in twenty minutes, gave me a straight number, and
K.
had it done by 3pm. Never going anywhere else.”
“Fair prices. Good work. They didn’t try to sell me anything I didn’t
Sarah
SR need — which, after years of dealing with other shops, felt like a
R.
miracle.”
“My check engine light came on right before a road trip. OG
Jason
JM squeezed me in last minute, diagnosed it fast, and got me back on
M.
the road same afternoon.”

Linda LB “Honest, fast, and local. The way a mechanic shop is supposed to
B. be. I’ve sent my whole family here.”
8.8 Contact / Booking Section
Layout: Two-column grid (desktop). Left: contact info. Right: booking form.
Left column:
1. Section label — “Get In Touch”
2. Title — “Come Find Us in WRJ”
3. Amber line divider
4. Three contact detail rows — each with an inline SVG icon, label (uppercase amber),
and value
Icon Label Value
Map pin Address White River Junction, VT 05001
Phone Phone [Client to provide]
Clock Hours Mon–Fri 7:30am–5:30pm / Sat 8am–2pm / Sun Closed
Right column — Booking Form:
Form fields:
1. First Name + Last Name (side by side, 50/50)
2. Phone Number (full width)
3. Vehicle (full width) — placeholder: “2018 Toyota Tacoma”
4. Service Needed (full-width <select> ) — options match services list
5. Details / Message (textarea, optional)
6. Submit button — full width, amber, “Send Request →”
Form styling:
No rounded corners — all form elements are square
Inputs: dark charcoal background, very subtle border, no box-shadow

On focus: border color transitions to amber, background gets faint amber tint
Labels: uppercase Barlow Condensed, 0.68rem , muted color, above the field
Submit behavior:
On click: button text changes to “Request Sent ✓” and background shifts to a muted
success green
Resets after 3 seconds
Actual form submission: developer to connect to preferred endpoint (email,
FormSpree, or CRM)
8.9 Footer
Layout: Single row, space-between (desktop). Stacked on mobile.
Elements:
Left: Logo — “OG AUTO” in Bebas Neue, “AUTO” in amber
Center: Copyright line — “© 2026 OG Automotive · White River Junction, VT · All
Rights Reserved” — Barlow Condensed, muted, uppercase, small
Right: Footer links — About, Services, Contact
Border: 1px hairline top border at rgba(255,255,255,0.06) Background: --color-
charcoal
9. Copy Direction & Tone
Voice Principles
The copy on this site should sound like a person who has been under cars for 20 years —
not a marketing team.
Direct. Short sentences. Subject-verb-object. No filler words.
Confident, not arrogant. The shop doesn’t need to hype itself. It lets the work
speak.
Working-class pride. Language that respects the customer’s intelligence and their
need to get back on the road.

Honest. If something sounds like a car dealership ad, rewrite it.
Examples
Don’t write Write instead
“We are proud to offer a comprehensive
“We fix cars. All makes, all models.”
range of automotive solutions…”
“Our certified technicians leverage cutting- “We read the codes, dig deeper, and tell
edge diagnostic tools…” you what’s actually going on.”
“Experience the OG Automotive difference
“Come in. We’ll take a look.”
today!”
“Serving the White River Junction “White River Junction’s shop. Been here.
community with excellence” Still here.”
Section-Specific Copy Notes
Hero tagline: Should be 8 words or fewer. Hard-hitting. Present tense. Examples: “Real
mechanics. Real work.” / “We fix it right the first time.”
About body copy: Two paragraphs max. First paragraph: who the shop is and where.
Second paragraph: what the customer can expect. Use “we” and “you” — never third
person.
Services descriptions: 1–2 sentences each. Lead with what the problem is, follow with
what OG does about it. No technical jargon unless unavoidable.
Why Us points: Headline in 2–4 words. Body in 1–2 sentences. No bullets within the
body sentence.
10. Technical Requirements
Stack Preferences
The following stack is recommended. Developer may propose alternatives with written
justification before build begins.
Concern Recommendation Notes
If React, all styles in one CSS file — no
Base Vanilla HTML/CSS/JS OR React

CSS-in-JS
Animations GSAP 3.12+ (CDN or npm) ScrollTrigger plugin required
Fonts Google Fonts Self-host for production performance
Icons Inline SVG only No icon libraries
Form FormSpree / EmailJS / custom
Client to confirm preferred method
submission endpoint
Hosting Netlify / Vercel / static host No WordPress, no page builders
Browser Support
Browser Version Level
Chrome Last 2 Full support
Firefox Last 2 Full support
Safari Last 2 (macOS + iOS) Full support
Edge Last 2 Full support
Mobile Safari (iOS 15+) — Full support
Chrome Android — Full support
IE 11 — Not supported
Dependencies
Library Version Source Required
cdnjs /
GSAP 3.12.5 Yes
npm
Same
GSAP ScrollTrigger 3.12.5 Yes
bundle
Google
Google Fonts (Bebas Neue,
Current Fonts Yes
Barlow Condensed, Barlow)
API

No others — — No jQuery, no Bootstrap, no
frameworks unless justified
File Structure (recommended)
og-automotive/
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── main.js
├── assets/
│ ├── images/ ← shop photos go here
│ └── icons/ ← any exported SVGs
└── README.md
11. Performance Requirements
Metric Target Priority
Lighthouse Performance ≥ 85 (mobile) High
Lighthouse Accessibility ≥ 90 High
First Contentful Paint < 1.5s High
Total Blocking Time < 200ms Medium
Cumulative Layout Shift < 0.1 High
Total page weight (no images) < 400KB Medium
With optimized images < 1.2MB Medium
Performance Rules
All fonts must be loaded with font-display: swap
GSAP loaded from CDN or bundled — never block rendering
All images must be webp format with jpg fallback, served at correct size
No unused CSS or JavaScript shipped to production

Grain texture must use an inline SVG data URI — no external image request
Lazy-load all images below the fold
12. Accessibility Requirements
All interactive elements must be keyboard navigable ( Tab order logical)
All images must have meaningful alt attributes
All form fields must have associated <label> elements — no placeholder-only labels
Color contrast ratios must meet WCAG AA minimums:
Normal text on dark bg: ≥ 4.5:1
Large text / display: ≥ 3:1
Note: Amber #e07b2a on black #0a0908 must be tested — may need to use
#f0a050 for small text
Custom cursor must not interfere with system cursor on focus states
Animations must respect prefers-reduced-motion media query — disable or simplify
all GSAP animations when set
Form submit button must have visible focus state
Testimonial slider must be operable with keyboard (prev/next buttons are focusable)
@media (prefers-reduced-motion: reduce) {
/* Disable all GSAP animations — set elements to final visible state */
/* Remove marquee animation */
/* Remove parallax */
}
13. Responsive & Breakpoint Behavior
Breakpoint Width Name
Desktop ≥ 1024px Full layout
Tablet 768–1023px Adjusted grids

Mobile < 768px Single column
Small Mobile < 480px Reduced type scale
Key Layout Changes by Section
Section Desktop Tablet Mobile
Navigation Full links + CTA Full links + CTA Logo + CTA button only
Full type scale, Type scales down via clamp,
Hero Reduced type
full layout sub items stack
2-column (text 1-column, image frame
About 2-column
+ frame) hidden
Services 3×2 grid 2×3 grid 1-column stack
1-column (card
Why Us 2-column 1-column
stack hidden)
Testimonials 2 visible cards 1.2 visible cards 1 card, ~90vw wide
Contact 2-column 2-column 1-column (info above form)
Footer Row layout Row layout Stacked, centered
Typography Responsive Rules
All display headlines use clamp() — no media query type changes needed:
Hero title: clamp(5rem, 14vw, 13rem)
Section titles: clamp(2.8rem, 6vw, 6rem)
Contact title: clamp(3rem, 7vw, 6.5rem)
14. Acceptance Criteria
The following must all be true before the site is considered complete and ready for client
handoff.
Visual

Site looks materially different from any template or generator output
No rounded corners on any UI component (cards, buttons, inputs, images)
No drop shadows used anywhere
Amber accent color appears in all sections but never feels overused
Grain overlay visible on all backgrounds
All fonts rendering correctly from Google Fonts (Bebas Neue, Barlow Condensed,
Barlow)
Right column of About section accepts a real photo without layout breakage
Animation
Hero title words clip-reveal on load with no visible flash of unstyled content
Custom cursor visible and smooth on desktop — ring follows with visible lag
Marquee ticker scrolls continuously with no jump or pause at loop point
All scroll-triggered elements reveal only once — they do not re-animate on scroll-up
Stat counters animate from 0 on first viewport entry only
Service card hover: amber bottom bar draws across in a single smooth motion
CTA button hover: black fill sweeps from left, text inverts to amber
Testimonial slider transitions with power3.inOut easing — not linear, not bouncy
All animations disabled or reduced when prefers-reduced-motion is active
Functional
All navigation anchor links scroll to the correct section
Testimonial slider auto-advances every 5 seconds
Testimonial prev/next buttons work correctly and wrap around
Form submission triggers visual feedback state (“Request Sent ✓”)
Form connects to actual email delivery (endpoint TBD by client)
Mobile: phone number in contact section is a tel: link (tappable)
Performance & Compatibility

Lighthouse Performance ≥ 85 on mobile
Lighthouse Accessibility ≥ 90
No console errors on Chrome, Firefox, or Safari
No layout shifts above CLS 0.1
Site renders correctly on iPhone Safari 15+ and Android Chrome
15. Out of Scope (v1)
The following are explicitly excluded from this engagement unless a separate scope and
budget is agreed upon:
CMS or content management system of any kind
Blog or news section
Online appointment scheduling system (Calendly embed or similar) — form
submission only for v1
Multi-page routing
E-commerce or parts purchasing
Live chat widget
Google Maps embed (address text only for v1)
Social media feed integration
Customer portal or login
Analytics setup (GA4 or similar) — developer should add placeholder <script> tag
only
16. Open Questions
The following items require client input before or during development:
# Question Owner Priority
1 What is the shop’s full street address? Client High

2 What is the primary phone number? Client High
Does the client have photography of the shop, team, or
3 Client High
vehicles?
What email address should form submissions be delivered
4 Client High
to?
Is there a preferred booking/scheduling tool to link to
5 Client Medium
(Calendly, etc.) or is email-based booking sufficient for v1?
Are there any brand colors, logos, or existing assets from the
6 Client Medium
client?
Does the client want Google Analytics or any tracking
7 Client Low
installed?
Is there a domain already registered? If so, where is it
8 Client Medium
hosted?
9 Are the testimonials real (with permission) or placeholder? Client Medium
10 What is the exact business name for legal/footer use? Client Low
End of Document — OG Automotive Website PRD v1.0 All design decisions herein reflect
the goal of producing a site that looks and feels handmade, premium, and entirely
specific to OG Automotive. Developer discretion is encouraged in execution — but the
visual and animation specifications above are the benchmark, not a suggestion.

