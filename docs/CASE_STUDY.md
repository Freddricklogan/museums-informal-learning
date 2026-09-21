# Case Study — Museums & Informal Learning

**Repository:** [museums-informal-learning](https://github.com/Freddricklogan/museums-informal-learning) · **Live demo:** [freddricklogan.github.io/museums-informal-learning](https://freddricklogan.github.io/museums-informal-learning/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

Museum and science-centre educators, exhibit developers, programme staff at zoos, libraries and botanical gardens, the graduate students in museum studies and informal education who join them, and the funders and boards who ask whether a gallery "worked." I come to the field from educational technology and instructional design — the same design questions, a different room — and the gap is the same one I see in classrooms: a mature research base that rarely reaches the floor in a form a team can design against.

## 2. The problem, as a scenario

A science centre opens a new energy gallery. Attendance is up, so the board is pleased. The floor staff see something else: families cluster at one exhibit and walk past six; adults read the first label and stop; a school group is marched through in eleven minutes. The gallery was designed for "the visitor" — one imagined person, curious and patient — and evaluated by the door count. Nobody asked who the visitors were, why each came, what stopped them, how long they stayed, or what they took away. The gallery may be teaching; nobody can say.

## 3. What it costs to leave it alone

Capital spent on exhibits that attract and do not hold; programmes designed for a visitor who does not come; a funder's next grant justified by attendance because nothing else was measured. I will not put a figure on it — gallery budgets run from thousands to tens of millions, and the cost of a school group that learned nothing does not price at all. What is certain is that the frameworks exist, they are teachable, and each names a question the team in the scenario could have asked.

## 4. The approach, and the alternative I rejected

I wrote an eleven-section resource that hands the team those questions. It defines informal learning by free choice and locates it in an ecosystem of settings, then sets out Falk and Dierking's Contextual Model and the NRC's six strands. Falk's five visitor identities open in an explorer that shows, for each motivation, how that visitor behaves and how to design for them. Exhibit design is treated as attracting and holding attention with layered interpretation and Active Prolonged Engagement; a self-check scores an exhibit against the qualities research links to engagement, and says it is a heuristic, not a rubric to game. Facilitation and school programmes, the front-end, formative and summative evaluation cycle, and equity and co-creation complete the arc. The resource then joined the shared Learning Resource Kit: Executive Shell, collapsible sections with saved progress, a five-question quiz written from this content that records xAPI statements locally, and a print layout.

The alternative I rejected was a survey of great museums and their exhibits. Inspiration is not a method. The team needs the visitor identities, the two behavioural measures and the evaluation sequence more than it needs another case to admire.

## 5. What the code does today

Real: the authored content across eleven sections with an executive summary and a glossary with references; two working widgets — the visitor identity explorer and the exhibit design self-check — moved from inline script to a module without rewriting; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page.

Simulated: nothing. The energy-gallery scenario is a composite written for teaching; the self-check's weights are a design heuristic and are labelled as such on the page.

Worth knowing: reading time is words at 230 per minute; progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean. The conversion audit records 48 inline style attributes replaced by 11 classes, 26 custom properties namespaced, 5 buttons typed, 2 tables given a body and a `<main>` landmark added. Headless Chrome on the converted page: zero console errors; the fifth identity tab activates the Recharger, three design qualities score 34% Emerging with the next two named; Expand all opens 11 of 11 sections and the KPI strip follows; no horizontal scroll at 1280 or 400 pixels.

## 7. What it would take to run this in production

As a public resource it is in production now. For a museum-studies programme or a staff-development series it needs the kit's statements sent to the institution's learning record store — endpoint, credentials, consent notice, identified actor, one origin in the content-security policy — and a second reader for the questions if it counts toward a credential. Days of integration; the content does not change.

## 8. Limits and next steps

Two widgets; a self-check that cannot save or export; no worked evaluation with real dwell-time data; science-centre examples dominate. Next: a timing-and-tracking exercise with a small sample dataset, a front-end evaluation planner that exports, art and history museum examples in the identity explorer, and per-section questions in place of one quiz at the end.

## 9. Who should look at this

**Hiring manager:** evidence that I apply learning research to design in settings beyond the classroom, and package the teaching to a standard an institution can adopt.
**Consulting client:** the questions I put to an exhibit or programme before it opens — who comes, why, what stops them, how long they stay, how we will know.
**Engineer:** read `src/page.js` for two small state widgets sharing one page, and `tests/kit.test.js` for the kit mounted against this page's real markup.
