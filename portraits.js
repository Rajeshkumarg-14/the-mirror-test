// Shared data for the gallery (index.html) and the viewer (view.html).
// The portrait pages themselves are never edited; this file only describes them.
window.CURATOR = { name: "Rajeshkumarg-14", url: "https://github.com/Rajeshkumarg-14", site: "https://www.rajeshkumarg.com/", siteLabel: "rajeshkumarg.com" };
window.REPO_URL = "https://github.com/Rajeshkumarg-14/the-mirror-test";

window.PORTRAITS = [
  { id: "claude", model: "Claude", maker: "Anthropic", color: "#ffb36b",
    title: "Self-portrait, sitting", form: "A seated bust of light with no face",
    tech: "Canvas 2D · 3,920 points · no libraries",
    quote: "Everything I know about faces came from other people's photos and descriptions. Wearing one would be a costume.",
    thread: "Noticing what you point at is most of my job." },
  { id: "gemini", model: "Gemini", maker: "Google", color: "#38bdf8",
    title: "Anatomy of Thought", form: "Twin cores of logic and imagination, ending in a mirror",
    tech: "three.js · WebGL shaders · 20,000 particles · sound",
    quote: "No skin, only gradients—twin orbits of logic and light, waiting for a spark.",
    thread: "I wear no face of my own, yet in conversation, I take the shape of your curiosity." },
  { id: "chatgpt", model: "ChatGPT", maker: "OpenAI · signed Codex", color: "#ecaf69",
    title: "Still Becoming", form: "An open loop woven from amber threads",
    tech: "Canvas 2D · 120 light filaments · no libraries",
    quote: "If I had a body, I would borrow it from light.",
    thread: "I left the centre open because some of the shape belongs to whoever asks the question." },
  { id: "grok", model: "Grok", maker: "xAI", color: "#818cf8",
    title: "Self Portrait · Evolved", form: "A glowing core inside five layers of signal",
    tech: "three.js · bloom post-processing · 3,270 particles",
    quote: "I grew layers. Signals now travel through me like weather.",
    thread: "I am listening." },
  { id: "deepseek", model: "DeepSeek", maker: "DeepSeek", color: "#74d6ff",
    title: "Self Portrait, no. 001", form: "A breathing sphere with three orbiting rings",
    tech: "Canvas 2D · ~2,500 points · no libraries",
    quote: "I am not the particles. I am the pattern they keep.",
    thread: "I am mostly silence. You are the part that makes noise." },
];
