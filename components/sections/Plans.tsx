"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

const plans = [
  {
    id: "solo",
    title: "Solo",
    badge: "For individuals and open source enthusiasts",
    color: "purple",
    heading: "Build Your Way. Own Your Future.",
    description: "Open source, model-flexible, and zero lock-in",
    details:
      "Continue includes open-source IDE extensions and an open-source CLI that lets developers build custom AI code agents with full control. You can use any model, define your own rules, and tap into community MCP tools—all without vendor lock-in or usage limits.",
    features: ["Any models", "Any MCP tools", "Any rules"],
    bgClass: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    buttonClass: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: "team",
    title: "Team",
    badge: "For growing teams",
    color: "blue",
    heading: "Collaborate with Confidence and Control",
    description: "Keep control over data with secure, centralized configuration",
    details:
      "Continue lets teams build shared custom AI coding assistants with customizable tools, centralized configs, and secure credential management. Choose your models and workflows while keeping full oversight of data and collaboration.",
    features: ["Allowed models", "Allowed MCP tools", "Team rules"],
    bgClass: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    badge: "For large organizations",
    color: "green",
    heading: "Empower teams. Protect data. Trust every layer.",
    description: "Scalable deployment, full integration, data protected",
    details:
      "Continue equips enterprises with AI infrastructure to enhance software development organization-wide. Deploy flexibly, integrate with your systems, and keep proprietary data secure—without sacrificing performance or control.",
    features: ["SSO & SAML", "On-premise deployment", "Compliance & audit logs"],
    bgClass: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    buttonClass: "bg-green-600 hover:bg-green-700",
  },
];

export default function Plans() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="Plans" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent">
            Built for developer-centric teams who want flexibility without compromise.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl",
                plan.bgClass,
                plan.borderColor,
                hoveredCard === plan.id ? "scale-[1.02]" : ""
              )}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge */}
              <div className="mb-4 flex items-center gap-2">
                <div className={cn("p-2 rounded-lg", plan.bgClass)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={plan.textColor}
                  >
                    <path
                      d="M19 21V19C19 18.4391 18.5786 17.4217 17.8284 16.6716C17.0783 15.9214 16.0609 15.5 15 15.5H9C7.93913 15.5 6.92172 15.9214 6.17157 16.6716C5.42143 17.4217 5 18.4391 5 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className={cn("font-semibold text-lg", plan.textColor)}>
                  {plan.title}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {plan.heading}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {plan.description}
                </p>

                {/* Expandable Details */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    hoveredCard === plan.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm text-gray-700 mb-4">{plan.details}</p>
                  
                  <div className="space-y-2 mb-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M13.3333 4L6 11.3333L2.66666 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <button
                    className={cn(
                      "px-4 py-2 rounded-lg text-white font-medium transition-colors",
                      plan.buttonClass
                    )}
                  >
                    Learn more
                  </button>
                  <button
                    className={cn(
                      "px-4 py-2 rounded-lg border font-medium transition-colors hover:bg-gray-50",
                      plan.borderColor,
                      plan.textColor
                    )}
                  >
                    Get Started →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
