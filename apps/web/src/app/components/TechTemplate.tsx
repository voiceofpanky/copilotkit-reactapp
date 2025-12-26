import Breadcrumbs from "./BreadCrumbs";

interface Section {
  title: string;
  content: string;
}

interface TechTemplateProps {
  title: string;
  description: string;
  sections?: Section[];
  codeSnippet?: string;
}

export default function TechTemplate({
  title,
  description,
  sections = [],
  codeSnippet,
}: TechTemplateProps) {
  return (
    <div className="p-4">
      <Breadcrumbs />

      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        {description}
      </p>

      {sections.length > 0 && (
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {codeSnippet && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm">
            {codeSnippet}
          </pre>
        </section>
      )}
    </div>
  );
}