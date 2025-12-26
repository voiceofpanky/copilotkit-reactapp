import TechTemplate from "../components/TechTemplate";

export default function ReactPage() {
  return (
    <TechTemplate
      title="React"
      description="React is a JavaScript library for building fast, interactive user interfaces."
      sections={[
        {
          title: "Why React?",
          content:
            "Component-based architecture, virtual DOM, and a massive ecosystem make React ideal for modern web apps.",
        },
      ]}
      codeSnippet={`function App() {
  return <h1>Hello React</h1>;
}`}
    />
  );
}