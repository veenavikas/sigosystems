---
name: Sigo Deep-Tech System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cadbf9'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d4e3ff'
  on-surface: '#0a1c32'
  on-surface-variant: '#434654'
  inverse-surface: '#213148'
  inverse-on-surface: '#ebf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0354d6'
  primary: '#0047b8'
  on-primary: '#ffffff'
  primary-container: '#1e5fe0'
  on-primary-container: '#e2e7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#485d93'
  on-secondary: '#ffffff'
  secondary-container: '#aec2ff'
  on-secondary-container: '#3a4f84'
  tertiary: '#005388'
  on-tertiary: '#ffffff'
  tertiary-container: '#036cae'
  on-tertiary-container: '#d9e9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa5'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001848'
  on-secondary-fixed-variant: '#2f457a'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9bcbff'
  on-tertiary-fixed: '#001d34'
  on-tertiary-fixed-variant: '#004a79'
  background: '#f9f9ff'
  on-background: '#0a1c32'
  surface-variant: '#d4e3ff'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 24px
  unit-xl: 48px
---

## Brand & Style

The design system is engineered for a high-stakes deep-tech environment, balancing enterprise stability with cutting-edge innovation. The brand personality is **Precise, Confident, and Visionary**, targeting C-suite executives and technical architects who require clarity in complex data.

The visual style is a fusion of **Corporate Modernism** and **Tactile Tech**. It utilizes expansive whitespace, glass-like surfaces, and technical textures (topography lines, dot grids) to evoke a "Mission Control" aesthetic. The interface should feel spacious and institutional, yet energized by vibrant blue light-sources and high-fidelity isometric visualizations.

## Colors

This design system utilizes a sophisticated monochromatic blue scale to convey depth and technical hierarchy. 

- **Primary Axis:** Uses a deep navy (#0B2559) for structural elements and headers, transitioning to a vivid tech-blue (#1E5FE0) for primary actions and highlights.
- **Accents:** Light cyan-blue (#A9D6FF) is reserved for data visualizations, active states, and "glowing" interface elements.
- **Neutrals:** Soft grey-blue (#5B6B85) is used exclusively for secondary text and metadata to maintain a cool temperature throughout the UI. Surfaces use a layered approach with #F4F7FC and #EDF2FA to differentiate content zones without the use of heavy borders.

## Typography

The system relies on **Inter** for its neutral, systematic clarity and excellent legibility in data-heavy contexts. 

- **Headlines:** Use high weights (600-700) with tight negative letter-spacing to create a "locked-in," authoritative feel. Large display type should be used sparingly to anchor major sections.
- **Body:** Standard reading text should maintain generous line-height (1.5-1.6) to ensure the interface feels breathable despite the technical density.
- **Labels:** Small labels and captions use increased letter-spacing and semi-bold weights to maintain legibility against colored or tinted backgrounds.

## Layout & Spacing

This design system follows a **Fixed-Fluid hybrid grid**. Layouts are centered within a 1440px max-width container for desktop, utilizing a 12-column structure with 24px gutters.

- **Rhythm:** An 8px linear scale governs all padding and margin decisions. 
- **Spaciousness:** Large section headers should be padded with `unit-xl` (48px) to reinforce the premium, enterprise tone. 
- **Mobile Adaptivity:** On mobile devices, margins shrink to 20px, and the 12-column grid collapses to a single-column vertical stack. 
- **Sidebars:** Enterprise dashboards should use a fixed 280px left-navigation rail, with the main content area expanding fluidly to fill the remaining viewport.

## Elevation & Depth

Hierarchy is established through **Soft Ambient Shadows** and **Tonal Layering** rather than harsh lines.

- **The Base:** The primary background is #FFFFFF. 
- **The Surface:** Tertiary information and dashboard containers sit on #F4F7FC (Level 0).
- **The Card:** Elevated components use white backgrounds with a specific "Deep-Tech Shadow": `0 8px 30px rgba(20,60,150,0.08)`. This shadow should have a slight blue tint to harmonize with the primary color palette.
- **Interactions:** On hover, cards should subtly lift by increasing the shadow spread and shifting 4px upward.
- **Overlays:** Modals and dropdowns use a 12px backdrop blur (Glassmorphism) with a 60% white opacity to maintain context of the underlying data.

## Shapes

The shape language is **Refined and Modern**. 

- **Cards & Panels:** Use 16px to 20px corner radii (`rounded-lg` and `rounded-xl`) to soften the "industrial" feel of the tech stack and provide a contemporary, approachable silhouette.
- **Buttons:** Primary buttons should use either a full pill-shape or a substantial 12px radius to contrast against the structural grid of the layout.
- **Visual Elements:** Use subtle 1px strokes in #EDF2FA for internal card dividers to maintain a clean, organized appearance without adding visual weight.

## Components

### Buttons
- **Primary:** Solid blue gradient (#0B2559 to #1E5FE0) with white text. High-contrast, no border.
- **Secondary:** White background with a 1.5px solid blue border (#1E5FE0) and blue text.
- **Tertiary/Ghost:** No background or border. Blue text with a subtle background tint on hover.

### Inputs & Fields
- **Text Inputs:** Light grey background (#F4F7FC) with a 12px border-radius. On focus, the border transitions to Primary Blue with a soft 4px glow.
- **Checkboxes/Radios:** Custom geometric styling using Primary Blue for selected states. No rounded corners for checkboxes to maintain a technical feel.

### Cards & Data
- **Dashboard Cards:** White background, 20px radius, soft blue-tinted shadow. 
- **Lists:** Clean rows separated by 1px #EDF2FA lines. Use `label-sm` for metadata and timestamps.

### Iconography & Graphics
- **Icons:** 24px grid, 1.5px stroke width. Use dual-tone styling: Primary Navy for the main shape and Tech-Blue for secondary details.
- **Data Viz:** Use the primary blue gradient for chart fills. Integrate 10% opacity blue "area glows" under line charts to simulate a futuristic radar or topographic interface.
