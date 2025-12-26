import TechTemplate from "../components/TechTemplate";

export default function JavaPage() {
  return (
    <TechTemplate
      title="Java"
      description="Java is a high‑level, object‑oriented programming language widely used for building enterprise applications, backend services, Android apps, and distributed systems."
      sections={[
        {
          title: "Why Java?",
          content:
            "Java offers platform independence through the JVM, strong memory management, a massive ecosystem, and proven reliability for enterprise‑grade applications.",
        },
        {
          title: "Key Features",
          content:
            "Object‑oriented design, automatic garbage collection, multithreading, portability, and a rich standard library make Java a top choice for scalable systems.",
        },
      ]}
      codeSnippet={`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`}
    />
  );
}