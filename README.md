# Cell Structure · Learn

A standalone Human Biology Learn module styled after the supplied 2.0 UI. Seven stages, 20 teaching cards, 18 checkpoint screens, 16 practice points and 9 auto-marked final-check points. The written explanation is self-checked separately.

![Learn module preview](docs/preview.png)

## Open the module

Open **`dist/index.html`** in a modern browser. It contains the complete application, images, reference transcript, styles and fonts. It needs no internet connection, account, backend or package installation. Progress is saved in that browser where local storage is available; if storage is blocked, the lesson continues for the current session. Browser handling of storage for local files varies; serve the file from one stable origin for consistent persistence.

For a local server, run `python3 -m http.server 4173 --directory dist`, then visit `http://localhost:4173`. No build step is needed to use the committed version.

## Edit and rebuild

- `src/content.js`: stage sequence, teaching copy, questions, accepted answers and feedback.
- `src/app.js`: navigation, grading, retries, progress, self-check and results.
- `src/styles.css`: layout, colour and typography.
- `src/index.html`: application shell and dialogs.
- `src/reference.html`: complete original Part B academic transcript, including its comparison table and callouts.
- `assets/`: both untouched original schematics, teaching/assessment crops, embedded font sources and font licences.
- `resources/source-pack.zip`: the original supplied content pack, unchanged.
- `build.py`: standard-library Python builder. Run `python3 build.py` after editing. The output is `dist/index.html`.

No content-management service or external asset host is required. Keep `assets/`, `src/`, `resources/` and `build.py` together in Git. Commit the rebuilt `dist/index.html` too so the module can be used directly from a checkout.

## Design and content decisions

Newsreader is bundled for serif headings and italic emphasis. Hanken Grotesk is the bundled sans-serif substitute for the supplied name “Hansen Grotesk”; exact Hansen font files were not supplied. Both bundled fonts include their SIL Open Font Licences. All fonts are embedded in the built HTML.

Both biology images are supplied schematics, not verified light-microscope or TEM images. No external or generated biological images are used. Crops preserve the original orientation; white masks remove label fragments in otherwise blank outer margins, without removing biological features. Interface markers identify targets, with a leader line keeping the small ribosome target visible. Both complete original images are preserved in the reference and assets directory. The original ER schematic includes additional material outside the specification; teaching crops exclude those labels, and the full image remains in the reference with a scope note.

Outcome 1.1 retains its exact wording but is only partially assessed. Results explicitly separate recognition knowledge, schematic identification and structure–function performance. Real-micrograph identification is not assessed. No mastery claim is inferred from participation.

First attempts and corrected responses are separate. Matching awards one point per pair, with per-pair feedback. Practice retries never inflate the final-check score. “Practise again” clears practice attempts and retains the final check. “Restart module” explicitly confirms that it clears all stored progress and responses. Written responses are not exact-string graded.

## Integration

Use the complete HTML as an iframe/module route, or move `content.js`, `app.js` and the styles into the host application. Supply the `ASSETS` object from local asset imports if splitting the file. Prefix or scope CSS when integrating into an existing app. The browser storage key is `learn-cell-structure-v1`; use a different version/key for a new schema or learner context. No student data leaves the browser.

`.openai/hosting.json` identifies the separate private Sites preview. It does not configure GitHub hosting. To host elsewhere, serve the committed `dist/` directory as static files. Set `dist/index.html` as the entry page.

## Validation

The browser suite covers the full 38-step journey, blank attempts, first-attempt vs corrected scores, accepted case/space variants, rejection of unlisted spellings, independently shuffled matching rows/options, per-pair scores, saved progress on reload, all original images, mobile overflow, marker alignment, self-check, practice reset and full restart.

Install Playwright (`npm install`) and its Chromium browser (`npx playwright install chromium`), serve `dist/` on port 4173, then run `npm test`. In a preconfigured environment, `PLAYWRIGHT_MODULE` and `CHROMIUM_PATH` may select an existing Playwright installation and Chromium executable. Screenshots are written to ignored `work/`.

The application itself has no JavaScript package dependencies. Rights to the supplied academic content and illustrations remain with their respective owners; no additional licence is asserted over them.
