import VideoDemo from "@/components/ui/VideoDemo";

const features = [
  {
    title: "Edit",
    description:
      "Make quick edits across your codebase with AI assistance. Continue understands your context and suggests changes that make sense.",
    videoSrc: "/663e06c56841363663ffbbcf688c2232a91c3db15036c037_edit-720-transcode.mp4",
    posterSrc: "/663e06c56841363663ffbbcf688c2232a91c3db15036c037_edit-720-poster-00001.jpg",
  },
  {
    title: "Agent",
    description:
      "Let AI agents handle complex tasks autonomously. Define workflows and let Continue execute them across your development environment.",
    videoSrc: "/663e06c56841363663ffbbcf688c22697ec54277a64a73dc_agent-720-transcode.mp4",
    posterSrc: "/663e06c56841363663ffbbcf688c22697ec54277a64a73dc_agent-720-poster-00001.jpg",
  },
  {
    title: "Chat",
    description:
      "Have natural conversations about your code. Ask questions, get explanations, and brainstorm solutions with AI that understands your codebase.",
    videoSrc: "/663e06c56841363663ffbbcf688c227d6c33caf96730c833_chat-720-transcode.mp4",
    posterSrc: "/663e06c56841363663ffbbcf688c227d6c33caf96730c833_chat-720-poster-00001.jpg",
  },
  {
    title: "Autocomplete",
    description:
      "Get intelligent code completions as you type. Continue predicts what you need next based on your patterns and project context.",
    videoSrc: "/663e06c56841363663ffbbcf688c22e3f6371b43798190e5_autocomplete-720-transcode.mp4",
    posterSrc: "/663e06c56841363663ffbbcf688c22e3f6371b43798190e5_autocomplete-720-poster-00001.jpg",
  },
  {
    title: "CLI",
    description:
      "Bring AI assistance to your terminal. Run Continue commands to automate workflows, analyze code, and manage your development tasks.",
    videoSrc: "/663e06c56841363663ffbbcf68cb488f0253af8326841f27_cli-sep2025-transcode.mp4",
    posterSrc: "/663e06c56841363663ffbbcf68cb488f0253af8326841f27_cli-sep2025-poster-00001.jpg",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: "linear-gradient(to bottom, #000000 0%, #666666 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Everything you need to code faster
          </h2>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto leading-relaxed">
            Continue brings AI to every part of your development workflow—from writing code to
            deploying it.
          </p>
        </div>

        {/* Feature Demos */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <VideoDemo
              key={feature.title}
              title={feature.title}
              description={feature.description}
              videoSrc={feature.videoSrc}
              posterSrc={feature.posterSrc}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
