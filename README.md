# Cell Structure · Learn

A full-screen presentation for Human Biology. It has 43 focused teaching slides, integrated checkpoints, feedback and results. Desktop slides use a wide layout; phones use a vertical portrait layout. The module occupies the viewport with no page scrolling. Previous/Next buttons and arrow keys move between slides.

![Desktop presentation](docs/preview.png)

[Portrait phone preview](docs/phone.png) · [Connected learning map](docs/mindmap.png)

## Open

Open **`dist/index.html`** in a modern browser, or run `python3 -m http.server 4173 --directory dist` and visit `http://localhost:4173`. The committed HTML embeds all biology images, fonts, styles, lesson content, accepted answers and reference material. No account, backend, installation or network connection is needed to use the standalone HTML.

Progress is stored in the current browser when local storage is available. A stable web origin provides the most consistent persistence; browsers vary in how they handle local-file storage. Existing version-1 checkpoint answers are migrated into the new presentation without changing their first-attempt results. The new slide progress starts with the revised sequence.

## Learning experience

- Organelle names are slide titles; structure, function and recognition appear on separate slides.
- Key terms are emphasised. Function statements have an animated underline, shown immediately when reduced motion is enabled.
- Teaching figures retain the labels and arrows printed in the two original images. CSS crops focus the image, and plain rectangular masks hide unrelated labels. Assessment figures cover answer labels; no new names, arrows or letter markers are added.
- A connected cell mindmap and labelled relationship chains explain structure–function links.
- The horizontal outline stays quiet until hover or keyboard focus. On phones, “Sections” reveals the same outline for touch navigation.
- The original question bank is retained. Matching questions use one pair per slide, with independently shuffled pair order and descriptions. Scores remain one point per pair.
- Incorrect attempts reveal feedback and the relevant teaching point. Students can review and return, retry, or select Next. First attempts and corrected answers remain separate.
- Practice has 16 available auto-marked points. The final check has 9, unaffected by practice retries. The written response has a separate model answer and two self-check statements.
- Results report actual correct/attempted counts by skill and provide teaching-slide links based on errors.
- The complete academic reference is available as 14 paginated screens, including both original images and the original comparison table. “Download source” exports the original transcript with both images embedded.

Both supplied images are **schematics**. Real-micrograph identification is not assessed; outcome 1.1 is only partially assessed. Recognition knowledge, schematic identification and structure–function performance are reported separately.

## Academic coverage

`resources/content-coverage.json` maps 60 coverage entries to the 43 teaching slides. Every point in the Part B transcript appears in the teaching sequence, including nuclear pores and mRNA, the chromosome-organisation cross-reference, vesicle transport and protein destinations, the high-energy-demand example, tRNA attachment in the cytoplasm and the energy-transfer clarification.

The ER teaching also includes cisternae, the connection with the nuclear envelope, lipid synthesis, detoxification, Ca²⁺ storage and the image’s broad protein/lipid synthesis labels. Ribosomal polypeptide assembly, ER processing/transport and the ER image’s function labels are taught directly. The original assessment scope remains unchanged.

`src/reference.html` is the unchanged original Part B transcript. `resources/source-pack.zip` preserves the original supplied archive. Both complete original images remain unchanged in `assets/`.

## Edit and rebuild

| File | Purpose |
| --- | --- |
| `src/content.js` | Teaching slides, question bank, reference pages and coverage IDs |
| `src/app.js` | Deck, annotations, grading, feedback, results and saved progress |
| `src/styles.css` | Full-viewport layouts, portrait layouts, typography and motion |
| `src/index.html` | Application shell, source-reference template and dialogs |
| `src/reference.html` | Complete original Part B academic transcript |
| `assets/` | Original images, crops, fonts and licences |
| `resources/` | Original source pack, content coverage and validation results |
| `build.py` | Standard-library Python builder for the single-file module |

Run `python3 build.py` after editing, then commit the updated `dist/index.html` along with source changes. The runtime has no JavaScript package dependencies.

Newsreader and Hanken Grotesk are bundled with their SIL Open Font Licences. Hanken Grotesk substitutes for the supplied “Hansen Grotesk” name; exact Hansen font files were not supplied.

The active diagram views use CSS crop windows into the two untouched original images. Mask coordinates are stored with the printed labels in `src/app.js`. Crops from earlier revisions remain in the asset archive; active teaching and quiz views preserve the printed labels or cover them for assessment. No replacement biological illustrations are generated.

## Integration and hosting

Use the HTML as its own route or in a viewport-sized iframe. When extracting the source into an existing application, scope the CSS and provide the `ASSETS` map with bundled/local image imports. The current storage key is `learn-cell-structure-deck-v2`; use separate learner keys if adding account-based persistence. No student data leaves the browser.

Serve `dist/` on any static host. `.openai/hosting.json` preserves the private Sites project identity. GitHub and Sites receive the same committed source state.

## Validation

Install the test dependencies with `npm install`, install Chromium with `npx playwright install chromium`, serve `dist/` on port 4173, and run `npm test`. `PLAYWRIGHT_MODULE`, `CHROMIUM_PATH` and `TEST_URL` optionally select existing installations and a different test origin. Tests use isolated browser contexts and write screenshots to ignored `work/`.

The suite checks the entire lesson journey, all slide types at five desktop/portrait viewport sizes, feedback after incorrect attempts, exact-answer rules, per-pair first attempts, persistence, review-and-return navigation, touch/focus outline, arrow keys, reduced motion, annotation alignment, original-image loading, the offline reference download, practice reset and full restart. `resources/validation-results.json` records the latest result.

Rights to supplied academic content and illustrations remain with their respective owners. No additional licence is asserted over them.

## Content rules

Teaching uses only the supplied academic content and diagrams, stated directly. It contains no attribution lead-ins, outside-science additions or corrective commentary about the academic material. Learning relationships are explained in the presentation rather than assigned as instructions. Original image labels are retained; other labels are covered by plain rectangles. The teaching deck adds zero image labels.
