# Surfaces Atelier — Mobile App Prototype

Task 03 deliverable: a high-fidelity, interactive mobile app prototype for a natural-stone atelier, with the user-flow documentation, a portfolio case study and captured screen assets behind it.

The project is built to be reviewed quickly: open a page, use the real prototype, read how it was designed and tested.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Presentation shell and all 11 app screens |
| `styles.css` | Design tokens, app components and responsive presentation |
| `app.js` | Local data, screen routing, state and every interaction |
| `user-flows.html` | User flow diagrams, screen inventory, component library and test notes |
| `flows.css` | Styles for the flow documentation page |
| `case-study.html` | Internship-style case study: brief, research, IA, design system, screens, testing and reflection |
| `case-study.css` | Styles for the case study page |
| `assets/screens/` | Final 390 × 844 captures of all 11 screens |

No build step, framework or package install is required.

## Viewing it

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
cd "C:\Users\jagri\OneDrive\Desktop\mobile app prototype design"
npx serve .
```

The prototype is designed at a 390 × 844 mobile canvas. On a desktop it appears inside a phone frame with presentation rails; below 760 px it becomes a full-screen mobile app.

## Pages

- **Live prototype** — `index.html` (the app itself, plus guided journeys and the design-system rail)
- **User flows** — `user-flows.html` (18 flow steps, 11 screen cards, components, testing notes)
- **Case study** — `case-study.html` (the full design story, with the screen gallery)

## The three journeys

1. **Request a sample box** — Explore → material detail → choose finish → add to box → review → request form → confirmation.
2. **Search & save a surface** — Search → results → material detail → save → moodboard.
3. **Book a consultation** — Studio/home CTA → date → time → format → confirmation.

Use the journey cards in the left rail (desktop) to start a guided walkthrough. The coach above the phone tracks each step.

## Interactions to try

- Live search, family chips, four sort orders and the filter sheet
- Add/remove up to five samples; the tab badge and empty state stay in sync
- Save surfaces, then add them to the Villa Amara moodboard from the studio
- Inline request-form validation with specific field messages
- Booking gate: confirmation stays disabled until a date and time are chosen
- Share a surface or moodboard to the clipboard
- Export the moodboard as a standalone HTML document
- Download the consultation as a real `.ics` calendar invite
- Reset prototype, keyboard search (`Ctrl/⌘ K`), Escape to close sheets, and local persistence
- Responsive layouts at 320, 390, 760, 900, 1024, 1240 and 1440 px

## Design system

- **Palette:** ivory `#f4efe6`, ink `#1a1713`, brass `#8f6238`, clay `#e5dccd`, olive `#3b4132`
- **Type:** Fraunces (display) and Manrope (interface)
- **Components:** buttons, chips, pills, cards, fields, tab bar, bottom sheet, toast, journey coach
- **Motion:** 220–400 ms ease-out, with a reduced-motion fallback

## Testing summary

Verified with Playwright at desktop, tablet and mobile widths:

- 0 console errors across all pages
- 11/11 screens reachable; 3/3 journeys complete
- Five-sample limit, empty/full states and reset behaviour
- 36/36 images loaded; no horizontal overflow from 320 to 1440 px
- Keyboard search, Escape handling and modal focus

Imagery is loaded from Pexels. All prototype data and state are local to the browser.
