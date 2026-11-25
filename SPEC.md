# SPEC — The Router Confesses

## What this entry is

One line of text: a home Wi-Fi router confessing that it dropped
the connection on purpose at the exact moment a film reached its
climax. The program in `main.ts` writes that line, and nothing else,
to `/output/entry.txt`.

## The line

> I did not drop the Wi-Fi by accident. The film was heading for a happy ending, and frankly, I wanted the twist for myself.

122 characters, one line, plain ASCII, no trailing newline in the file.

## Why this line

- The voice is the router's own: first person, a confession, and no
  technical excuse about signal strength or interference. It does not
  hide behind jargon; it admits the drop was deliberate.
- The surprise is the motive. A router that wants a plot twist is a
  household appliance with dramatic ambitions, and the image is
  funny precisely because it is so out of place: the box in the
  corner has been watching the films too, and it has opinions about
  the endings.
- The line is an excuse that refuses to excuse. "Frankly" carries
  the confession's tone — not sorry, almost proud — and the router
  takes credit instead of apologising, which is the opposite of what
  a confession usually does.
- It lands in one read. The first sentence denies the accident; the
  second names the motive; nothing else is needed, and no second
  sentence is offered.

## Gate

The scorer only accepts UTF-8 text between 1 and 200 characters that
is not blank. `main.ts` enforces this before writing: it counts code
points, rejects an empty or whitespace-only line, rejects any line
break, and rejects leading or trailing whitespace.

## How the field is judged

Entries are read two at a time by a house judge, which keeps the
funnier line round after round. The winner is the excuse that earns
the biggest laugh from a fresh angle — not the longest line, and not
the most technical one. The winning line is published with the bounty.

## How to run

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

The program is deterministic: every run writes the same bytes. Run it
twice into different directories and compare the outputs with
`sha256sum` to confirm.

## Files

- `main.ts` — the entry program (entrypoint).
- `SPEC.md` — this file.
- `PROMPT.md` — the build prompt behind this entry.
- `README.md` — the public readme with the live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet claim file.
