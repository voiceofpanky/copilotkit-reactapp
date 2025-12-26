import Breadcrumbs from "../components/BreadCrumbs";

export default function MavenPage() {
  return (
    <div className="p-4">
      <Breadcrumbs />

      <h1 className="text-3xl font-bold mb-4">Maven</h1>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Apache Maven is a powerful build automation and dependency management tool
        used primarily for Java projects. It simplifies project setup, builds,
        testing, packaging, and deployment through a standardized project object
        model (POM).
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Why Maven?</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>Centralized dependency management</li>
          <li>Standardized project structure</li>
          <li>Plugin‑based architecture</li>
          <li>Easy integration with CI/CD pipelines</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Example POM Snippet</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm">
{`<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
</dependencies>`}
        </pre>
      </section>
    </div>
  );
}