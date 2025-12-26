import TechTemplate from "../components/TechTemplate";

export default function DockerPage() {
  return (
    <TechTemplate
      title="Docker"
      description="Docker is a containerization platform that packages applications and dependencies into portable containers."
      sections={[
        {
          title: "Why Docker?",
          content:
            "It ensures consistent environments, simplifies deployment, and improves scalability.",
        },
      ]}
      codeSnippet={`docker build -t my-app .
docker run -p 8080:8080 my-app`}
    />
  );
}