# Portfolio images

Drop files into the project folder — **no code changes** unless you add new image slots.

## Cover (home + case hero)

| Project | Folder | Filename |
|---------|--------|----------|
| Ignite | `ignite/` | `cover.jpg`, `cover.png`, or `cover.webp` |
| AI Co-Pilot | `ai-copilot/` | same |
| CMB Private Cloud | `cmb-cloud/` | same |

## Process images (case study body)

Filenames are defined in `content/images.json`. Use the exact name (extension can be `.png`, `.jpg`, or `.webp`).

### Ignite (`public/images/ignite/`)

| File | Section |
|------|---------|
| `journey.png` | Research |
| `competitive-audit.jpg` | Research |
| `problem-statement.png` | Research |
| `lofi-prototype.png` | Research |
| `onboarding-old.png` / `onboarding-new.png` | Craft (before/after) |
| `homepage-old.png` / `homepage-new.png` | Craft |
| `purchase-old.png` / `purchase-new.png` | Craft |
| `customer-old.png` / `customer-new.png` | Craft |
| `design-system.png` | Craft |
| `grow-module.png` | Iteration (grid) |
| `recruitment-module.png` | Iteration |
| `contest-module.png` | Iteration |
| `in-app-survey.png` | Iteration |
| `usage-tracking.jpg` | Iteration |

### AI Co-Pilot (`public/images/ai-copilot/`)

| File | Section |
|------|---------|
| `interaction-model.png` | Strategy |
| `command-center.png` | Strategy |
| `customer-profile.png` | Strategy (grid) |
| `strategy-partner.png` | Strategy |
| `comparative-advisor.png` | Strategy |
| `automated-scribe.png` | Strategy |
| `design-with-ai.png` | Practice |

### CMB Private Cloud (`public/images/cmb-cloud/`)

| File | Section |
|------|---------|
| `dashboard.png` | Foundation |
| `interactive-tables.png` | Foundation |
| `onboarding-tour.png` | Onboarding |
| `onboarding-tooltips.png` | Onboarding |
| `inline-docs.png` | Onboarding |
| `dark-mode.png` | Craft |
| `design-system.png` | Craft |

Missing files are skipped automatically (section layout stays intact).

To add a **new** image slot: add an entry to `content/images.json` and wire it in `content/case-study-galleries.ts`.
