# Design Guidelines: Romantic Journey Landing Page

## Design Approach
**Reference-Based**: Drawing inspiration from modern storytelling sites like Apple's product launches and Airbnb Experiences, combined with romantic wedding/couples photography sites. Focus on cinematic scroll experiences with dramatic reveals and parallax effects.

## Core Design Principles
1. **Emotional Storytelling**: Each section reveals a chapter of the journey
2. **Progressive Disclosure**: Content and images reveal as user scrolls
3. **Intimate Scale**: Personal moments deserve breathing room and focus
4. **Cinematic Motion**: Smooth, purposeful animations that enhance emotion

## Typography System

**Primary Font**: Google Fonts - Playfair Display (elegant serif for headlines)
**Secondary Font**: Google Fonts - Montserrat (clean sans-serif for body)

Hierarchy:
- Hero Title: text-6xl md:text-7xl lg:text-8xl font-bold (Playfair)
- Section Headers: text-4xl md:text-5xl lg:text-6xl font-semibold (Playfair)
- Subheadings: text-2xl md:text-3xl font-medium (Montserrat)
- Body Text: text-base md:text-lg leading-relaxed (Montserrat)
- Captions: text-sm md:text-base italic (Montserrat)

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Component spacing: gap-8 md:gap-12
- Content margins: mb-8 md:mb-12
- Micro spacing: p-4, gap-4

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6
- Text-focused content: max-w-3xl mx-auto
- Image galleries: w-full with strategic breakouts

## Page Structure & Components

### 1. Hero Section (Full Viewport)
- Large romantic hero image of the couple with subtle parallax
- Centered overlay with main title and subtitle
- Subtle down arrow indicator with gentle bounce animation
- Image treatment: Slight gradient overlay for text readability
- Height: min-h-screen with natural flow

### 2. Opening Statement Section
- Single column, centered text (max-w-2xl)
- Personal message introducing the journey
- Height: auto with py-24 spacing

### 3. Interactive Timeline (Vertical)
- Left-right alternating layout (desktop), stacked (mobile)
- Each milestone includes:
  - Date/period indicator
  - Title of the moment
  - Short description (2-3 sentences)
  - Featured image (rounded corners, shadow)
- Scroll-triggered fade-in and slide animations
- Timeline connector line running through center

Timeline Milestones:
- First meeting/encounter
- First date
- Becoming official (namoro)
- Memorable moments (2-3 key events)
- The proposal (featured prominently)

### 4. Photo Gallery Section
- Masonry-style grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Images with varied aspect ratios for visual interest
- Scroll animations: scale-in, fade-up, parallax depth
- Gap: gap-4 md:gap-6

### 5. Love Counter Section
- Centered, single focus component
- Large numbers showing days/months together
- Animated counter using JavaScript
- Minimal layout with emphasis on the numbers

### 6. The Proposal Highlight
- Full-width dramatic section with large proposal photo
- Parallax effect with layered elements
- Detailed story of the moment
- 2-column layout (desktop): image + story text

### 7. Message/Future Section
- Centered content with romantic quote or future vision
- Minimal design with focus on typography
- Optional small gallery of engagement celebration photos

## Animation Specifications

**Scroll-Triggered Effects** (using Intersection Observer):
1. Fade & Slide Up: Opacity 0→1, translateY(40px)→0
2. Scale In: Scale 0.9→1 with opacity 0→1
3. Parallax Images: translateY based on scroll position (slower than content)
4. Stagger Delays: Sequential animations with 100-200ms delays

**Image Treatments**:
- Depth Effect: Transform scale and z-axis translation
- Parallax Layers: Background images move slower than foreground
- Blur-to-Focus: Filter blur on initial load, sharp on reveal

**Performance**: Use transform and opacity only for animations. Apply will-change sparingly.

## Component Library

**Navigation**: Minimal fixed header with smooth background transition on scroll
**Buttons**: Rounded buttons (rounded-full) with subtle shadows, glass-morphism effect when over images
**Cards**: Timeline cards with rounded-2xl, shadow-lg, backdrop-blur when needed
**Dividers**: Decorative elements between major sections (hearts, subtle patterns)

## Images Section

**Hero Image**: Large, high-quality couple photo (romantic setting - sunset, embrace, or meaningful location)

**Timeline Images**: 4-6 photos representing each milestone (square or portrait orientation, minimum 800x800px)

**Gallery Images**: 9-12 candid photos from throughout the relationship (varied compositions and settings)

**Proposal Image**: Hero-worthy photo of the proposal moment or celebration (landscape, high-resolution)

**Image Placement Strategy**:
- Hero: Full viewport background with center focus
- Timeline: Accompanying each milestone entry, alternating sides
- Gallery: Masonry grid filling container width
- Proposal: Full-width feature with text overlay capability

## Accessibility & Polish

- Smooth scroll behavior with scroll-padding-top
- Reduced motion media query for users who prefer less animation
- Semantic HTML5 sections with proper heading hierarchy
- Focus states for all interactive elements
- Alt text for all images (meaningful descriptions)