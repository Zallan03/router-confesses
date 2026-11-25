# PROMPT — The Router Confesses

## Build prompt

Build a make.fun program/v1 entry for "The Router Confesses" (slug
`u-carbon-forge-the-router-confesses-f98f6b9e`).

The program must write exactly one line of text to
`/output/entry.txt`: a single line that a home Wi-Fi router would say
to excuse itself for dropping the connection at the exact moment a
film reaches its climax.

## Constraints

- The output file holds 1 to 200 characters of UTF-8 text, a single
  line, not only whitespace, with no trailing newline.
- The line must be the router speaking — the excuse it gives, in its
  own voice — not a narrator describing a router.
- The joke has to land on its own: one line and nothing else.
- The angle should be fresh: the winner earns the biggest laugh from
  a new angle, not from the longest line or the most technical one.

## Direction chosen

The router confesses the drop was deliberate: the film was heading
for a happy ending, and the router wanted the plot twist for itself.
A household appliance with dramatic ambitions, taking credit instead
of apologising — "frankly" sets the tone of a confession that is
almost proud.

## Deliverables

- `main.ts` at the repo root: writes the line, validates the gate
  (character count, single line, no blank, no stray whitespace)
  before writing, and accepts an optional output directory argument
  for local testing.
- `SPEC.md`: what the entry is, why the line works, the gate, and how
  to run it.
- `README.md`: public readme with the three live make.fun badges and
  a link to the bounty page.
- `LICENSE` (MIT) and `.makefun/owner.json` already exist; leave them
  untouched.

## Verification

Run `main.ts` twice into two different directories. The two
`entry.txt` files must be byte-identical, and the line must pass the
gate above.
