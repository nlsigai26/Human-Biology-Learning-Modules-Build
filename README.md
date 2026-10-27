# Cell Structure · Learn

A full-screen Human Biology presentation with 39 focused teaching slides, integrated checkpoints, feedback and results. Desktop slides use a wide layout; phones use a portrait layout. Previous/Next buttons and arrow keys move between slides without page scrolling.

![Presentation](docs/preview.png)

[Portrait phone](docs/phone.png) · [Connected map](docs/mindmap.png) · [Matching exercise](docs/matching.png) · [Portrait matching exercise](docs/matching-phone.png)

## Open

Open **`dist/index.html`** in a modern browser, or run `python3 -m http.server 4173 --directory dist` and visit `http://localhost:4173`. The committed HTML embeds the required images, fonts, styles, teaching, questions and scoped reference. No account, backend, installation or network connection is needed for the standalone file.

Progress stays in the current browser. A stable web origin provides consistent persistence; local-file storage varies between browsers. Saved first attempts and corrected grades survive the revised slide order and the change to whole-board matching.

## Scope and teaching

The active module follows the requested specification scope. Excluded ER content is absent from teaching, questions, feedback, reference pages and the reference download. Its labels and image regions are masked in every active diagram view. The untouched input archive and original images remain in the repository as original resources.

`resources/content-coverage.json` maps 55 in-scope coverage entries to the 39 teaching slides. Supporting details include nuclear pores and mRNA, the chromosome-organisation cross-reference, protein transport and destinations, ATP demand, and amino acids attaching to tRNA in the cytoplasm.

Teaching states the provided academic content directly, without outside additions or attribution lead-ins. Relationships are explained through connected maps and flow diagrams. Organelle names head the relevant slides; function statements have an animated underline, immediately visible with reduced motion.

Diagram views use the two original images, retaining printed labels and arrows. Plain rectangles cover unrelated labels, excluded regions and quiz answer labels. No replacement labels, arrows or letter markers are added. Original image files remain unchanged.

The diagrams are schematics. Real-micrograph identification is not assessed; recognition knowledge, schematic identification and structure–function performance are reported separately.

## Matching interactions

- Matching exercises with up to four choices use radio-button options, one term per slide.
- Larger exercises show all terms and blank answer rectangles together. The six-term final matching question offers seven answer cards, including one spare function already covered in the lesson.
- Mouse/touch dragging, tap-to-place and keyboard selection are supported. Answers can move between rectangles, swap positions or return to the bank. Backspace/Delete clears a focused rectangle.
- Every rectangle needs an answer before the matching board is checked. Feedback marks every pair and provides review links. Next remains available after incorrect feedback.
- Each correct pair earns one point. The spare answer adds no points or denominator. First attempts and corrected answers stay separate, including across retries and reloads.

Practice has 16 available auto-marked points; the final check has 9. Written explanations are compared with a model and two self-check statements, separately from the auto-marked score. Results use actual correct/attempted counts.

## Source and build

| File | Purpose |
| --- | --- |
| `src/content.js` | In-scope teaching, questions, reference pages and migration map |
| `src/app.js` | Slides, image masks, radio choices, drag matching, grading and persistence |
| `src/styles.css` | Full-screen layouts, portrait layout and separated outline labels/lines |
| `src/reference.html` | Scoped downloadable academic reference |
| `assets/` | Original images, archived crops, fonts and licences |
| `resources/` | Original input archive, coverage and validation reports |
| `AGENTS.md` | User-defined content, image and interaction rules |
| `build.py` | Standard-library Python builder for the single-file module |

Run `python3 build.py` after editing and commit the rebuilt `dist/index.html`. The application runtime has no JavaScript package dependencies. Newsreader and Hanken Grotesk are bundled with SIL Open Font Licences. Hanken Grotesk substitutes for the supplied “Hansen Grotesk” name.

The scoped reference has paginated screens and a standalone HTML download. Both use the same image masks and content exclusions. The original input pack is preserved separately in `resources/source-pack.zip`.

## Integration and hosting

Serve `dist/` from a static host or use the HTML in a viewport-sized iframe. Scope the CSS when integrating the source into a larger application. Browser storage uses `learn-cell-structure-deck-v2`, with migration by content revision and stable slide IDs. No student data leaves the browser.

`.openai/hosting.json` retains the existing private Sites identity. GitHub and Sites receive the same committed source state.

## Validation

Install test dependencies with `npm install`, install Chromium with `npx playwright install chromium`, serve `dist/` on port 4173, and run `npm test`. `PLAYWRIGHT_MODULE`, `CHROMIUM_PATH` and `TEST_URL` optionally select existing installations and an alternative test origin. Test browser contexts are isolated; screenshots go to ignored `work/`.

Tests cover the full learning journey, scoring and retries, scoped content, diagram masks, original images, reference downloads, mouse/touch matching, tap/keyboard alternatives, spare answers, occupied-slot swaps, saved progress migration, card text fit, no-scroll layouts and section-label clearance at 100% zoom across desktop and portrait sizes. Reports are stored in `resources/`.

Rights to supplied academic content and illustrations remain with their respective owners.
