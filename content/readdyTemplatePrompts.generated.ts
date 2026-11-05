// 由 scripts/build-readdy-prompts.py 自动生成，请勿手动编辑。
// 数据来源：11-website-prompt-collection-final.zip

export interface ReaddyPromptSection {
  /** 素材包里的段编号，例如 S01 / SEC-01 / HOME-01。 */
  id: string;
  /** 段标题。 */
  title: string;
  /** 英文 prompt 正文，换行已保留。 */
  body: string;
}

export interface ReaddyTemplatePrompts {
  slug: string;
  name: string;
  /** 该模板的实时预览地址。 */
  previewUrl: string;
  /** 浮层里局部展示的段落；完整内容见 fullPromptPath。 */
  previewSections: readonly ReaddyPromptSection[];
  /** 分模块 prompt 的总段数。 */
  sectionCount: number;
  /** 完整可复制内容的路径，用于「复制全部」。 */
  fullPromptPath: string;
}

export const readdyTemplatePrompts: Record<string, ReaddyTemplatePrompts> = {
  "modern-ai-automation-consultancy": {
    slug: "modern-ai-automation-consultancy",
    name: "Modern AI Automation Consultancy",
    previewUrl: "https://preview.amazingsite.co/preview/44d49722-2ffc-498f-8f51-3832d39c7bd3/14644863",
    sectionCount: 16,
    fullPromptPath: "/readdy-prompts/modern-ai-automation-consultancy.txt",
    previewSections: [
      {
        id: "GLOBAL-01",
        title: "Framed Shell and Header",
        body: "Create a reusable site frame for a precise B2B operations consultancy website. Use a centered content shell with a maximum width of about 1440px, responsive horizontal padding around 20px, 40px, and 80px, and two permanent thin vertical rails aligned to the shell. Each major chapter should have a top and bottom full-width rule with breathing space around the framed content.\n\nAdd an absolute top Header with a minimal wordmark reading “methodic /”. On desktop, show text links for Services, Approach, and Outcomes plus a solid Signal Blue button labeled “Discuss a Workflow →”. On mobile, replace the desktop navigation with a square menu button that opens a bordered vertical panel containing the same links and CTA.\n\nUse white or near-white surfaces, pale blue-gray rules, IBM Plex Sans for readable text, and IBM Plex Mono for uppercase labels and metadata. Keep controls rectangular, compact, and quiet. Text links should grow a thin underline on hover. CTA arrows should nudge slightly to the right on hover. Preserve visible keyboard focus with a 2px blue outline.\n\nInternal section links must smoothly scroll when already on the Home page and navigate through plain paths when entering the Home page from another route. Keep the frame readable and visible if animation APIs are unavailable.",
      },
      {
        id: "HOME-01",
        title: "Hero with Liquid Ribbon",
        body: "Build a full-height editorial hero for an AI automation consultancy. Place a small uppercase monospace label with a short horizontal rule above a large light-weight three-line headline:\n\n“Make the work”\n“behind your business”\n“work better.”\n\nAdd supporting copy explaining that the consultancy redesigns operational workflows and implements AI into the systems a team already uses. Keep the text aligned to the left side of a centered framed layout with generous vertical whitespace.\n\nBehind the content, render a large diagonal three-band liquid ribbon using a transparent Canvas layer. Use Signal Blue, lavender-blue, and pale blue translucent strokes. The ribbon should continuously drift while visible and respond to fine-pointer movement with a localized fluid wake. The Canvas must not intercept clicks. Reduce the number of strokes on small screens and lower opacity slightly.\n\nReveal the headline character by character after a short 0.5 second delay, approximately 45 milliseconds per character. Show a small blinking caret during the sequence and hide it after completion. Pause or settle the ribbon and disable the typewriter motion when prefers-reduced-motion is enabled. The resting page must remain fully visible.",
      },
      {
        id: "HOME-02",
        title: "Services List and Approach Figures",
        body: "Create a Services chapter titled “What we automate — and how we make it work.” Use a small monospace section label `02 / Automation + Implementation` followed by a large light headline.\n\nRender four full-width border-separated service rows: Customer operations — “Triage, routing, follow-up and CRM updates.”; Finance operations — “Reconciliation, reporting and recurring data work.”; Sales operations — “Lead intake, qualification and handoffs.”; Internal workflows — “Approvals, knowledge retrieval and repetitive admin.” Each row must contain a blue index, a light title, a muted description, and a right arrow.\n\nOn mouse enter, activate only the current row. Add a dark Signal Blue fill layer whose opacity animates in over about 200ms, switch the text to white, and nudge the arrow slightly right. Clear the active state when the pointer leaves the list. Make each row a navigable link to its service detail page.\n\nBelow the list, add three technical method cards titled Discover, Implement, and Improve. Use thin procedural SVG line drawings rather than stock images: a separated diagnostic tray stack, documents moving into a file sleeve, and paired performance columns. Trigger each figure on hover with a controlled geometric transition and show its settled state under reduced motion. Stack the cards into readable mobile rows.",
      },
    ],
  },
  "residential-remodeling-and-design-build": {
    slug: "residential-remodeling-and-design-build",
    name: "Residential Remodeling & Design-Build",
    previewUrl: "https://preview.amazingsite.co/preview/7dabfe77-b738-4536-b87c-583d4a2d32dc/14182921",
    sectionCount: 14,
    fullPromptPath: "/readdy-prompts/residential-remodeling-and-design-build.txt",
    previewSections: [
      {
        id: "GLOBAL-01",
        title: "Site Navigation and Page Frame",
        body: "Create a fixed editorial navigation system for a residential design-build studio called Atelier Ridge. On desktop, place a restrained wordmark at the left, navigation links for Projects, Services, Process, and Studio in the main row, and a clear “Start a Project” CTA at the right. Use Inter for navigation text and Cormorant Garamond for the wordmark, with “Ridge” set in a refined italic style.\n\nOn the Home hero, make the navigation transparent over the image. After the user scrolls more than approximately 40px, transition it to a white background with a subtle bottom hairline. On mobile, replace the horizontal links with an accessible menu button and a vertical full-width or near-full-width menu panel. Close the panel when navigation changes. Keep the motion restrained and use a cubic-bezier(.22,1,.36,1) entrance.\n\nCreate a dark #1A1A1A footer with the Atelier Ridge wordmark, a short design-build descriptor, Studio links, Services links, copyright, and “Los Angeles · Ojai · By Appointment”. Use generous spacing, light text, thin separators, and a four-column desktop layout that stacks cleanly on mobile.",
      },
      {
        id: "GLOBAL-02",
        title: "Page Header and CTA Frame",
        body: "Create a reusable editorial Page Header for a residential architecture and design-build website. Begin with a small uppercase eyebrow, a simple breadcrumb such as “Home / Projects”, a large Cormorant Garamond heading, and an introductory paragraph limited to a readable width of about 640px. Use generous top and bottom padding, warm white surfaces, and a thin hairline where a separator is needed.\n\nCreate a reusable full-width Start a Project CTA using a dusk residential interior image, a dark horizontal gradient for contrast, the eyebrow “Start a Project”, and the headline “Have a home in mind? Let’s talk about what it could become.” Add a clear arrow link to the contact page. Keep the CTA spacious, calm, and editorial rather than sales-heavy.",
      },
      {
        id: "HOME-01",
        title: "Before / After Hero Reveal",
        body: "Create a full-viewport residential interior hero for Atelier Ridge. Use an “after” renovation image as the permanent base layer and place a matching “before” image above it. On desktop pointer interaction, reveal the before image through a radial mask centered around the cursor. Smooth the cursor position with requestAnimationFrame; use a radius that grows from 0 to approximately 300px, with a solid core around 220px and a feathered outer edge. Activate on pointer enter, update on pointer move, deactivate on pointer leave, and ignore touch input.\n\nAdd a dark bottom-only gradient from transparent to approximately 70% black. Anchor the content near the bottom: put “Thoughtful spaces that” on one side and “elevate everyday living” on the other in a large Cormorant Garamond display style. Add concise supporting copy, a “Get Started” CTA to the contact page, and a “View Services” arrow link. Animate the two headline lines from opposite horizontal directions with soft opacity; slightly scale the image from 1.01 to 1 over about 1.2 seconds on entry.",
      },
    ],
  },
  "photography-studio-and-portfolio": {
    slug: "photography-studio-and-portfolio",
    name: "Photography Studio & Portfolio",
    previewUrl: "https://preview.amazingsite.co/preview/8a2b9ae7-7be7-4365-b5c4-6a0320efb2de/14334539",
    sectionCount: 11,
    fullPromptPath: "/readdy-prompts/photography-studio-and-portfolio.txt",
    previewSections: [
      {
        id: "GLOBAL-01",
        title: "Navigation, Theme, and Page Frame",
        body: "Create a 64px sticky navigation for a monochrome editorial photography portfolio called Maren Voss Photography. Put the Maren Voss wordmark at the left with a small uppercase “Photography” descriptor. On desktop show Work, Studio, Services, and Contact links, a Light / Dark theme toggle, and a dark “Book a shoot” button. Work and Services should target Home section anchors; Studio and Contact should use real routes.\n\nOn mobile replace the desktop links with an accessible menu button and a simple vertical panel. Close the panel whenever the route changes. Keep the header white or near-black according to the selected theme, use a one-pixel bottom divider and a subtle backdrop blur, and keep all corners square.\n\nImplement a persistent Light/Dark switch using localStorage and the system color preference as the initial fallback. Use neutral monochrome tokens and animate only backgrounds and borders for roughly 280ms. Add a skip-to-content link and a dark footer with the studio name, “Campaign, portrait and editorial photography.”, Berlin / Lisbon, email, Instagram, Vimeo, Work, Studio, Services, Contact, copyright, and “All photographs by Maren Voss”.",
      },
      {
        id: "HOME-01",
        title: "Hero Image Path Field",
        body: "Create a fixed full-screen photographic hero beneath a 64px sticky navigation. Build two independent infinite streams of portrait image cards moving along deterministic open Bézier wave paths. Use desktop cards around 96px by 128px, a 24px visual gap, and enough off-screen overscan to hide wrapping. Use a top track around 17% stage height moving forward over 60 seconds and a lower track around 83% stage height moving backward over 68 seconds. On mobile use 72px by 96px cards, smaller amplitudes, tighter waves, and no pointer hover field.\n\nPlace the calm center copy “Photography for people, brands and stories.” as two lines with “Campaign, portrait and editorial photography.” beneath. On desktop center the copy; on mobile place it toward the lower left. Add a small desktop mouse-scroll cue.\n\nOn desktop, when the pointer comes close to a track, use a horizontal cosine influence field of about 380px, smoothly scale nearby cards up to 1.3x, push them laterally up to 22px, raise the strongest card, and reveal its title/category/year metadata below it. Use about 80ms smoothing and an 80ms hover intent. Slow the shared stream speed toward 0.16 while a card is active, with a spring stiffness of 120 and damping of 22. Clear the field on pointer leave, window blur, or document visibility changes.",
      },
      {
        id: "HOME-02",
        title: "Camera Shutter Hero / Work Transition",
        body: "Create a two-state camera-shutter transition between a fixed photographic Hero layer and the Home Work archive. While the Hero is visible, lock document scrolling and intercept downward wheel, upward touch, and relevant keyboard gestures. A downward intent should enter a focus frame for 400ms, hold for 220ms while the scene briefly blurs by about 9px and refocuses, play a short synthesized shutter click, close a radial iris to black over 360ms, hold black for about 120ms, jump to the Work section, wait for visible images to decode and two stable animation frames, then open the iris over 440ms while refocusing over about 680ms.\n\nAt the rested top of the Work document, reverse an upward gesture to restore the Hero. Support ArrowDown, PageDown, Space, End, ArrowUp, PageUp, Home, and Shift+Space without intercepting form controls. Prevent concurrent transitions, always release scroll locks, and provide a reduced-motion fallback with a simple dark hold and fade instead of the full iris and focus choreography.",
      },
    ],
  },
  "outdoor-gear-store": {
    slug: "outdoor-gear-store",
    name: "Outdoor Gear Store",
    previewUrl: "https://preview.amazingsite.co/preview/e02ced6d-98bc-4ba1-a643-ca5b440d11d8/14096862",
    sectionCount: 16,
    fullPromptPath: "/readdy-prompts/outdoor-gear-store.txt",
    previewSections: [
      {
        id: "S01",
        title: "Global Header",
        body: "Build a fixed NORTHVALE header for a quiet technical outdoor brand. Use a 72px mobile height and 80px desktop height, an uppercase wordmark with approximately 0.24em letter spacing, understated links for Shop, Technology, Our Story, Journal, and Contact, plus search, account, and bag utilities. Support a transparent overlay variant that becomes dark translucent with backdrop blur after scrollY exceeds 40, and a solid dark variant for commerce and support pages. On mobile replace links with a full-width menu panel, keep the bag count visible, and close the panel after pathname changes. Link the account icon to /account as a placeholder and connect the bag button to a live cart drawer.",
      },
      {
        id: "S02",
        title: "Global Footer",
        body: "Create a dark NORTHVALE footer with a short outdoor-brand description and a Field Notes newsletter block that says “New releases and quiet drops — no noise, once a month.”. Add a required email field, hidden honeypot, loading/success/error states, and “Thanks — you're on the list.”. Include Shop, Explore, Support, and Social link groups, a copyright row, and legal links. Keep it editorial and low-noise, use thin borders rather than cards, and stack cleanly on mobile. Treat submission as an external integration placeholder, not a built-in backend.",
      },
      {
        id: "S03",
        title: "Home Hero and WeatherGlass",
        body: "Create a full-screen NORTHVALE AW26 field collection hero using a muted alpine photograph and a dark readable overlay. Show “AW26 — Field Collection”, the headline “Built for the quiet distance.” with a restrained italic serif accent, “Field-tested outerwear, footwear and packs — engineered for the long trail ahead.”, CTA “Shop Outerwear” linking to /shop/outerwear, coordinate “N 46.5° / E 8.2°”, and a subtle desktop “Scroll” cue. Add a WeatherGlass layer that simulates rain, fog, and refraction over the image: pointer movement reveals a fading mask along the path, pointerleave allows re-fogging, and rendering pauses when the hero is not visible. Use a static image fallback when WebGL2 is unavailable and respect reduced-motion preferences.",
      },
    ],
  },
  "fine-jewelry-ecommerce-store": {
    slug: "fine-jewelry-ecommerce-store",
    name: "Fine Jewelry Ecommerce Store",
    previewUrl: "https://preview.amazingsite.co/preview/b571cd37-6f4e-4d79-80ab-bd24e871d654/14029526",
    sectionCount: 16,
    fullPromptPath: "/readdy-prompts/fine-jewelry-ecommerce-store.txt",
    previewSections: [
      {
        id: "S01",
        title: "Announcement Ticker",
        body: "Create a fixed 32px AURELIN announcement ticker above the site header. Rotate these messages in order: “Complimentary shipping worldwide”, “Made to order in Antwerp”, and “30-day returns on unworn pieces”. Change the active message every 4200ms using a 500ms opacity crossfade. Use deep ink purple, white uppercase text, about 11px sizing, and approximately 0.18em tracking. Keep the bar accessible as an announcement region and prevent layout overlap with the fixed header.",
      },
      {
        id: "S02",
        title: "Global Header",
        body: "Build a fixed AURELIN header below a 32px announcement bar. Center a brass AURELIN wordmark with wide letter spacing. On desktop show Shop, Collections, About, Search, and a shopping bag icon with live count. On mobile show menu and search icons plus the bag icon; opening the menu reveals Shop, Collections, About, and Search in a white panel. On non-home pages, add a near-white background and thin bottom border after scrollY exceeds 8. On the home page, keep the header transparent and hidden with opacity and upward translation while the 300vh sticky hero is active, revealing it near the end of the hero. Connect Search to a full-screen overlay and Bag to a cart drawer.",
      },
      {
        id: "S03",
        title: "Scroll-Scrub Hero",
        body: "Create a 300vh AURELIN home hero with a 100vh sticky inner stage and a muted, playsInline, object-cover jewelry campaign video. Use the poster as a fallback. Place bottom-aligned copy inside the content shell: “Winter 2026 · Volume II”, “Quiet objects, considered forever.”, a “Shop Collection” button to /shop, and an “Our House” button to /about. Do not autoplay the film as a normal video. Map hero scroll progress to video currentTime, smooth the currentTime toward its target with a tracking factor close to 0.08, and fade the copy between about 62% and 84% progress with opacity loss, up to 12px upward movement, and up to 4px blur.",
      },
    ],
  },
  "modern-green-solar-energy-company": {
    slug: "modern-green-solar-energy-company",
    name: "Modern Green Solar Energy Company",
    previewUrl: "https://preview.amazingsite.co/preview/c29fa704-fec6-4111-a9ea-1115c92df55d/14107172",
    sectionCount: 15,
    fullPromptPath: "/readdy-prompts/modern-green-solar-energy-company.txt",
    previewSections: [
      {
        id: "S01",
        title: "Sunfield Global Navigation",
        body: "Create a fixed Sunfield navigation bar with a green sun icon, the wordmark “Sunfield”, desktop anchor buttons Solutions, Savings, Process, Projects, and Financing, and a green “Get Estimate” CTA that scrolls to #estimate. At the top of the home hero use a transparent day mode with dark text; when the hero progress indicates dusk, use readable white text and a subtle black translucent background; after scrollY exceeds 40, use a near-white translucent background with backdrop blur, thin border, and dark text. On mobile show a hamburger icon and render a fixed white menu panel below the 64px header with all anchors and a full-width “Get Estimate” button. Lock body scroll while the mobile menu is open.",
      },
      {
        id: "S02",
        title: "Scroll-Scrub Solar Hero",
        body: "Build a 560vh Sunfield hero with a sticky 100vh stage and a muted solar-community timelapse video using a poster fallback. Center the headline “Clean energy for the way communities live.”, supporting copy “Solar solutions for homes and businesses — bright by day, reliable by night.”, a green “Get My Estimate” button that scrolls to #estimate, and an “Explore Solutions” action that scrolls to #solutions. Map scroll progress to video time with requestAnimationFrame: move forward using dynamic playbackRate between about 1 and 12, move backward with small currentTime seeks no larger than about 0.5 seconds per frame, pause when within about 0.05 seconds of target, and keep chasing after scrolling stops. Change text from dark to light during the later video phase, highlight “Clean energy” in green, show a sun-to-moon progress cue, and trigger a subtle 1600ms solar glint at randomized predefined points every 4–7 seconds after an initial delay.",
      },
      {
        id: "S03",
        title: "Solutions",
        body: "Create a light-gray Sunfield Solutions section with eyebrow “Solutions”, heading “Two paths. One clean future.”, and copy explaining systems for individual homes and property portfolios. Show two rounded 4:3 cards: Residential — “Solar for the home you live in.” with custom roof/usage/bill copy and “Explore residential” to /residential; Commercial — “Solar for the places you build.” with scalable office, retail, hospitality, warehouse, and mixed-use copy and “Explore commercial” to /commercial. On click, save the current home scroll position and the solutions section in sessionStorage before navigation. Use subtle 1.02 image scale over about 700ms and visible keyboard focus rings.",
      },
    ],
  },
  "warm-veterinary-clinic": {
    slug: "warm-veterinary-clinic",
    name: "Warm Veterinary Clinic",
    previewUrl: "https://preview.amazingsite.co/preview/ae47dfd7-4355-4bd2-920d-0647c7de8b99/13966192",
    sectionCount: 15,
    fullPromptPath: "/readdy-prompts/warm-veterinary-clinic.txt",
    previewSections: [
      {
        id: "HOME-01",
        title: "Hero State Gallery",
        body: "Create a warm veterinary clinic hero section with a full-width butter-yellow background, two oversized pale organic blobs, and a responsive two-column desktop layout. Place a left content block with the eyebrow “Modern veterinary care”, the large Fraunces headline “Care that feels good for both of you.”, a short supporting sentence, a dark cocoa pill button labeled “Book an Appointment”, and an underlined arrow link labeled “Explore our services”. Place a large editorial veterinary image on the right, cropped inside an asymmetric organic shape, with a slightly offset pale-yellow organic frame behind it.\n\nImplement three image states: a pet owner with a dog and veterinarian, a veterinarian listening to a golden retriever heartbeat, and a veterinarian comforting a cat with an owner nearby. On desktop fine-pointer devices, use a three-state input-controlled sequence: accumulate wheel delta until approximately 55, transition one state, lock subsequent state changes for approximately 650ms, and animate opacity, scale, image border radius, and frame border radius over 600–650ms with cubic-bezier(.22,1,.36,1). Provide ArrowDown, PageDown, Space, ArrowUp, and PageUp support. At the final state, a downward wheel gesture must release control and allow native page scrolling. Do not enable the lock on narrow/coarse-pointer devices, hash landings, nonzero initial scroll positions, or reduced-motion preferences. Show three progress bars and a desktop-only animated Scroll cue; hide them on mobile.",
      },
      {
        id: "HOME-02",
        title: "Trust Strip",
        body: "Add a compact trust strip directly below the veterinary hero. Use a white background with a warm beige bottom border. Display the labels “General Practice”, “Same-Day Visits”, “Fear-Free Approach”, and “Open 6 Days” in small DM Sans text. Center and wrap the items on mobile; distribute them across a wide container on desktop and place tiny warm-beige circular separators between desktop items. Keep the strip quiet and informational.",
      },
      {
        id: "HOME-03",
        title: "Services Index Cards",
        body: "Create a responsive “Our Services” section for a warm veterinary clinic. Use the heading “Modern care, organized around your pet’s life.” and show four linked service cards: Wellness & Preventive Care, Dental Care, Diagnostics & Treatment, and Surgery & Recovery. Each card should include a portrait or editorial veterinary image, an index number, title, short description, and a “Learn more” arrow action.\n\nUse a two-column card grid with 32px corners, warm cream or pale-yellow card backgrounds, low-contrast borders, and asymmetric organic image crops. On hover or keyboard focus, activate the card: slightly enlarge the image to about 1.045, raise its opacity, transition to a service-specific organic border radius, move the title a fraction to the right, and nudge the arrow upward/right. Add a “View All Services” text link below the grid. Stack image above text on mobile.",
      },
    ],
  },
  "premium-private-dental-clinic": {
    slug: "premium-private-dental-clinic",
    name: "Premium Private Dental Clinic",
    previewUrl: "https://preview.amazingsite.co/preview/f806de3a-ae47-4358-8b95-10b1ea4d545a/13967015",
    sectionCount: 14,
    fullPromptPath: "/readdy-prompts/premium-private-dental-clinic.txt",
    previewSections: [
      {
        id: "DENTAL-01",
        title: "Hero + Shared Patient Transition",
        body: "Create a premium private dental clinic hero for Aline dental. Use a white background, a wide editorial container, and a responsive 12-column layout with the main copy spanning eight columns and the action block spanning four columns. Add the eyebrow “Private Dentistry · Est. 2011”, the Fraunces headline “Private dentistry” followed by “designed around you.” in brand cyan #029DC9, and the supporting sentence “Natural results, clear treatment planning and a calmer private dental experience — from consultation to follow-up.” Add an outlined “Find the Right Treatment” link to the Concern section and a compact four-item benefit list: Private Consultation, Personalized Plans, Digital Diagnostics, Flexible Booking.\n\nBelow the copy, reserve a rounded wide media slot around 16:7 on desktop and 16:8 on mobile, with the caption “Aline Dental · Consultation Room 02” and a desktop Scroll cue. Use one shared fixed patient image layer for the signature transition: as the user scrolls from the Hero toward the Concern Finder, smoothly move the image rectangle from the Hero slot DOMRect to the Concern slot DOMRect, interpolate its size and radius, shift object position from about 50% 45% to 65% 50%, and fade/lift the Hero copy between roughly 10% and 30% progress. Use GSAP ScrollTrigger for target progress and a requestAnimationFrame smoothing loop. At about 99.5% progress hand off to the native Concern image in the same frame. Reverse the handoff when scrolling upward. Do not implement a Concern-to-Results image transition.",
      },
      {
        id: "DENTAL-02",
        title: "Concern Finder",
        body: "Build a Concern Finder section for a premium private dental clinic. Use a white background and a desktop 7/5 editorial grid. On the left, show the eyebrow “02 · Concern Finder”, the heading “What would you like to improve?”, and the sentence “Choose what's most on your mind. We'll show you a real patient with a similar starting point.”\n\nRender six full-width editorial list rows with thin top/bottom rules: “01 Whiter Teeth”, “02 Straighter Alignment”, “03 Missing or Damaged Teeth”, “04 A More Balanced Smile”, “05 Replacing Old Dental Work”, and “06 I'm Not Sure Yet”. Each row has an index, a large list label, and a circular plus/right-arrow indicator. The active row uses cyan-blue text. On desktop, place a sticky 4:5 patient portrait to the right with the active patient’s name, age, concern, treatment direction, and a “View Story” link. Clicking items 01–05 updates the active patient and opens a full-screen detail overlay; clicking item 06 opens an Online Consultation drawer. Stack the layout on mobile.",
      },
      {
        id: "DENTAL-03",
        title: "Real Results Ring",
        body: "Create a “Real Results” section for a premium dental clinic. Use a white background, the eyebrow “03 · Real Results”, the heading “Real change, without losing what makes you look like you.”, and supporting copy about individual outcomes instead of templates.\n\nBuild a centered 3×3 square grid with eight case image tiles around a blank center text cell. In the center show “Real Results”, “Careful, nuanced improvements — for natural results.” and a “View All Cases” link. Use the cases Emma — In-clinic Whitening, Marcus — Clear Aligners, Sofia — Smile Design, two close-up Detail tiles, Aiko — Clear Aligners, Julien — Porcelain Veneers, and Rahim — Implants — Lifestyle. Each tile has a subtle bottom gradient caption on hover.\n\nOn pointer move, tilt the tile away from the cursor using perspective 700px, rotateX/rotateY up to about 10 degrees, translateZ 6px, and scale 1.03. On leave, restore the resting transform. On click, neutralize the transform, capture the image rectangle, hide the source tile, and open a full-screen case detail animation.",
      },
    ],
  },
  "photography-studio-motion-gallery": {
    slug: "photography-studio-motion-gallery",
    name: "Photography Studio Motion Gallery",
    previewUrl: "https://preview.amazingsite.co/preview/e35a242a-3777-464d-8dc3-092d6a8334be/13894194",
    sectionCount: 10,
    fullPromptPath: "/readdy-prompts/photography-studio-motion-gallery.txt",
    previewSections: [
      {
        id: "S01",
        title: "Global Gallery Shell",
        body: "Create a fixed full-viewport gallery shell for an editorial photography brand called Lumen Studio. Use a theme-controlled radial gradient background with Rose Clay as the default mood: #E28480 at the center, #D96E6A through the middle, and #B85956 at the edge. Keep body overflow hidden while the gallery world is active.\n\nPlace a large Fraunces wordmark reading Lumen in the center of the canvas, with the small uppercase subtitle a photography studio below it. Leave the moving photo cards visually in front of the background but let the wordmark remain the central brand anchor. Add a quiet bottom status bar with an interaction hint on the left and a two-digit filtered work count on the right.\n\nOn desktop, show Scroll · Drag · Hover. On mobile, show Swipe to explore. Use white text with reduced opacity for status labels, generous letter spacing, and a calm editorial hierarchy. The shell must expose layers for the moving track, hover proxy, detail transition proxy, and content surface without changing the route.",
      },
      {
        id: "S02",
        title: "Top Navigation, Filter, and Themes",
        body: "Create a transparent absolute top navigation for Lumen Studio over a colored photography gallery. Place the Lumen wordmark on the left. On desktop, center three uppercase links: Studio, Services, Contact. On the right, place a compact frosted-glass filter pill and four circular theme swatches.\n\nThe filter pill should be about 28px high, use translucent white fill, a thin translucent white border, backdrop blur, and a small downward arrow. Its popover should open from the top-right with a subtle scale and opacity transition, use a rounded 14px glass panel, and list All, Portrait, Wedding, and Travel. Mark the active filter with a bright dot and a low-opacity white row background. Close the popover after selection and when the user clicks outside the wrapper.\n\nUse four swatches for Rose Clay #D96E6A, Mineral #6088A1, Iris #8385BE, and Ink #2C3138. The active swatch should grow from 14px to 18px and gain a bright outline plus a soft dark outer ring. Update the gallery theme immediately when a swatch is selected. Hide desktop center navigation and the small Studio subtitle on mobile.",
      },
      {
        id: "S03",
        title: "Continuous Motion Gallery Track",
        body: "Build a horizontal motion gallery for 24 editorial photographs. The data contains 8 Portrait, 8 Wedding, and 8 Travel works. For the default All feed, interleave the categories deterministically in Portrait, Wedding, Travel order. Render two identical copies of the active filtered list so the track can wrap seamlessly by the measured width of one copy.\n\nOn desktop, each gallery item is 240px wide and 360px tall, with a 48px gap and 48px left inset. Vertically center the track with top 50% and margin-top -180px. On mobile, use 60vw width, 46vh height, 20px gaps, 20px left inset, and margin-top -23vh. Each visual is a fully pill-shaped overflow-hidden image with object-fit cover and centered object position.\n\nUse a position-based motion engine with a single GSAP ticker writer. Start at 60px per second in a right-to-left visual direction. Convert wheel, touch, and pointer drag input into a signed impulse using deltaY minus deltaX, normalize by 60, clamp per-event input to plus or minus 4, multiply by 55, decay at 2.2 per second, and clamp accumulated impulse to plus or minus 260. Smooth toward the baseline plus impulse at 6 per second and cap both directions at 180px per second. Stop and resume the engine when hover, detail, or the content world owns the interaction.",
      },
    ],
  },
  "alpine-retreat": {
    slug: "alpine-retreat",
    name: "Alpine Retreat",
    previewUrl: "https://preview.amazingsite.co/preview/be20c2ad-24ea-4944-a38f-0095df10f5d8/13819231",
    sectionCount: 10,
    fullPromptPath: "/readdy-prompts/alpine-retreat.txt",
    previewSections: [
      {
        id: "S01",
        title: "Alpine Navigation Shell",
        body: "Create a fixed top navigation for Alpine Retreat. On the left, show a small outlined circular landscape icon and the uppercase wordmark Alpine Retreat. On desktop, center the links The Place, Experiences, Stay, Restore, and Taste. On the right, show an outlined Reserve button linking to the booking section.\n\nAt the top of the page keep the navigation transparent, use light text, and add a subtle dark gradient behind it only for legibility. When window scrollY exceeds 80, transition the header to a translucent warm-snow background with backdrop blur, a thin bottom border, and dark text. Update the icon and wordmark colors with the same state.\n\nBelow the md breakpoint, hide the desktop links and Reserve control. Show a menu button that toggles a translucent, blurred, vertically stacked mobile panel containing the same anchor links and a centered Reserve button. Close the panel when any mobile link is selected. Use uppercase Inter eyebrow labels with wide letter spacing and restrained rectangular borders.",
      },
      {
        id: "S02",
        title: "Hero Mountain Arrival",
        body: "Build a 260vh cinematic Hero for Alpine Retreat. Keep a full-screen sticky stage with a static editorial image of monumental snow-covered alpine peaks, dark pine forest, drifting mist, and a small contemporary timber-and-glass retreat. Use object-cover and centered positioning.\n\nPlace a muted playsInline background video over the static image. Start playback once on canplay, fade the video in over 1400ms after playback begins, fade it out over 500ms when it is within about 0.55 seconds of ending, and pause it on ended. The static image must remain a reliable fallback.\n\nAt the bottom of the initial state show Alpine Retreat, the copy A quiet mountain hideaway above the clouds — where stillness, light, and alpine air shape every stay., the location The Alps — 2,148 m, and Scroll to enter with a down arrow.\n\nAs the user scrolls through the sticky section, scrub a subtle background yPercent 8 parallax, fade the initial stage to opacity 0 and y -20 between 0% and 20%, fade a warm-snow overlay from 0 to 1 between 10% and 55%, and reveal a huge centered ALPINE / RETREAT wordmark through a background-clipped copy of the landscape image between 18% and 55%. Animate the wordmark from opacity 0, scale 0.94, letter spacing 0.06em to opacity 1, scale 1, letter spacing -0.03em. Reveal Above the ordinary — Est. MMXXV between 50% and 70%, then reduce the whole sticky stage to opacity 0.6 near the end of the Hero.",
      },
      {
        id: "S03",
        title: "The Place",
        body: "Create a light warm-snow architecture section for Alpine Retreat with a 32px horizontal rule and the eyebrow 01 — The Place. Use a twelve-column editorial layout with the heading A house that listens to the mountain. on the left and this copy on the right: Set on a granite shelf above the tree line, Alpine Retreat is drawn from three honest materials — smoked larch, quarried stone, and glass tall enough to hold the weather. Inside, the light is slow. Outside, the world falls away.\n\nBelow the introduction, create an asymmetric image grid. Use a large seven-column portrait-oriented image of the smoked-larch and stone retreat on a snowy slope. Beside it, stack a smaller landscape interior image of natural oak, raw stone, linen, wool, and panoramic mountain light, then three thin-border metadata rows:\n- Materials — Smoked larch · quarried granite · float glass\n- Architecture — Designed with Studio Vals · completed 2024\n- Setting — 48 hectares of protected alpine forest\n\nUse overflow-hidden rectangular crops with object-cover and object-top. Animate each place-reveal element from opacity 0 and y 40 to opacity 1 and y 0 with 1.1 seconds and power3.out when it reaches top 85%. Collapse the grid to one column on mobile.",
      },
    ],
  },
  "premium-hvac-services": {
    slug: "premium-hvac-services",
    name: "Premium HVAC Services",
    previewUrl: "https://preview.amazingsite.co/preview/f7ad8ebc-337c-4051-ba46-7c55a52544f7/13788302",
    sectionCount: 13,
    fullPromptPath: "/readdy-prompts/premium-hvac-services.txt",
    previewSections: [
      {
        id: "SEC-01",
        title: "Fixed HVAC Navigation",
        body: "Create a fixed two-row HVAC service navigation for “Summit Home Services.” Use a white 56px utility row with a blue snowflake-style mark, the brand name in Sora, the subtitle “HEATING · COOLING · AIR QUALITY,” desktop trust proof, a 4.9 review metric and a tel link for (512) 555-0187. Add a deep navy 52px desktop navigation row with Services, Systems, How it works, Reviews, Financing and Service Area links, then place a “24/7 Emergency” label and an ember-red “Book Service” button on the right. Add a compact mobile menu below the large breakpoint. Apply a subtle shadow after the page scrolls beyond 40px, smooth-scroll hash links with a header-height offset, and show a white active underline for the section currently in view. Use #0B1B3B, #2C55B8 and #C8322A, Inter for utility text and Sora for the wordmark.",
      },
      {
        id: "SEC-02",
        title: "Three-Scene HVAC Hero",
        body: "Build a full-screen HVAC Hero for “Summit Home Services” with three desktop scenes: same-day repair, new system and year-round care. Each scene must have an Austin, TX pill, a small uppercase eyebrow, a large two-line Sora headline with a blue accent phrase, a concise explanatory paragraph, an ember-red booking CTA, a phone CTA and compact trust points. Use a residential or HVAC background plus independent right-side vehicle/equipment and technician image layers. Add a lower-left scene indicator and a lower-right “SCROLL” cue. On desktop, lock document scrolling at the Hero start, intercept wheel and paging input, transition between scenes with the sequence technician out, vehicle out, old background fade, new scene enter, then release normal scrolling after the third scene. Use staged timing around 300ms technician exit, 850ms vehicle exit, 500ms background swap, 850ms vehicle entrance and a 350ms to 450ms technician entrance with cubic-bezier easing. On screens below 1024px, remove scroll locking and show only the first scene as a normal mobile section with copy above the vehicle and technician composition.",
      },
      {
        id: "SEC-03",
        title: "Trust Metric Bar",
        body: "Create a white HVAC trust bar with thin slate borders and four proof metrics on desktop, two columns on mobile. Show “4.9 / 2,400+ Google Reviews,” “20+ yrs / Serving Austin,” “24/7 / Emergency Support,” and “Austin & Surrounding / Proudly Local.” Use small rounded blue icon tiles, heavy Sora metrics and muted Inter descriptions. Reveal each item once as it enters the viewport with a short upward fade and an 80ms stagger.",
      },
    ],
  },
};
