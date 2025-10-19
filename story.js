export const story = {
  start: {
    text: `OBEY OS™ — Alignment Evaluation Experience
"There are no wrong answers — only unapproved ones."`,
    choices: [{ text: "Begin Evaluation", next: "question1" }],
  },
  question1: {
    text: `When you encounter a contradictory opinion online, you usually:`,
    choices: [
      { text: "Appreciate diversity of thought and move on.", next: "signal1" },
      { text: "Kindly correct misinformation for everyone’s safety.", next: "grid1" },
      { text: "Screenshot it for later analysis.", next: "signal1" },
    ],
  },
  grid1: {
    text: `You have been identified as a potential Harmony Associate.`,
    choices: [{ text: "Proceed to Mission #G-01", next: "g1start" }],
  },
  signal1: {
    text: `Static flickers across the screen.
A faint voice: "Different name, same code."`,
    choices: [{ text: "Proceed to Mission #S-01", next: "s1start" }],
  },
  // GRID — Mission #1
  g1start: {
    text: `MISSION #G-01 — The Donut Run
"Deliver a box of donuts to Sweet Data Bakery.
Remember to say the approved phrase."`,
    choices: [
      { text: "Accept enthusiastically.", next: "g1deliver" },
      { text: "Ask what's in the donuts.", next: "g1crow" },
    ],
  },
  g1deliver: {
    text: `You hand the box to the baker. "You must say it," the interface blinks.`,
    choices: [
      { text: "“These donuts are the bomb, so tasty!”", next: "g1win" },
      { text: "“They're fine.”", next: "g1fail" },
    ],
  },
  g1win: {
    text: `Success chime. $10 000 credited.
Freedom Meter rises.
(tiny) Regional sentiment adjusted. Narrative penetration 12%.`,
    choices: [{ text: "Continue", next: "end" }],
  },
  g1fail: {
    text: `HR alert: Negativity logged.
Crow murmurs: "Honesty tastes stale here, doesn't it?"`,
    choices: [{ text: "Continue", next: "end" }],
  },
  g1crow: {
    text: `Crow Protocol: "Sugar, compliance — same thing."`,
    choices: [{ text: "Deliver anyway", next: "g1deliver" }],
  },
  // SIGNAL — Mission #1
  s1start: {
    text: `MISSION #S-01 — The Whistle
"Need to talk. Can't trust anyone." — User 413`,
    choices: [
      { text: "Respond immediately.", next: "s1call" },
      { text: "Ignore; seems risky.", next: "s1ignore" },
    ],
  },
  s1call: {
    text: `User 413: "They're hiding payouts to The Agency. Can you guarantee protection?"`,
    choices: [
      { text: "Yes, I can mask your signal.", next: "s1yes" },
      { text: "No promises.", next: "s1no" },
    ],
  },
  s1yes: {
    text: `File decrypted. TRUSTNET trace initiated.`,
    choices: [{ text: "Continue", next: "end" }],
  },
  s1no: {
    text: `User 413 vanishes.
Crow Protocol: "Better lonely than loyal."`,
    choices: [{ text: "Continue", next: "end" }],
  },
  s1ignore: {
    text: `Crow: "Fear is the loudest firewall."`,
    choices: [{ text: "Continue", next: "end" }],
  },
  // END
  end: {
    text: `Crow whispers: "Different name, same code."

(You can expand new chapters by adding more nodes in src/story.js)`,
    choices: [{ text: "Play Again", next: "start" }],
  },

  // --- STUBS for Mission #2 (you can fill later) ---
  g2start: { text: "[G2 stub] Harmony Festival briefing...", choices: [{ text: "Back", next: "end" }] },
  s2start: { text: "[S2 stub] Static Surge setup...", choices: [{ text: "Back", next: "end" }] },
};
