"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { clusters, type Cluster } from "@/lib/services";

const QUESTIONS = [
  {
    prompt: "What would make this season feel more rewarding?",
    options: [
      { label: "More people and connection", value: "connect" },
      { label: "A meaningful project or role", value: "build" },
      { label: "Learning and personal growth", value: "grow" },
    ],
  },
  {
    prompt: "How do you prefer to get started?",
    options: [
      { label: "With clear, guided steps", value: "guided" },
      { label: "By exploring possibilities", value: "explore" },
      { label: "Alongside other people", value: "people" },
    ],
  },
  {
    prompt: "What's going on for you right now?",
    options: [
      { label: "Getting documents and affairs in order", value: "legacy-and-documents" },
      { label: "Navigating a move, care decision, or big change", value: "life-transitions" },
      { label: "Looking for something new to do or explore", value: "discovery-and-purpose" },
    ],
  },
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const choose = (value: string) => {
    const next = [...answers, value];
    setAnswers(next);
    setStep((s) => s + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
  };

  // The third answer maps directly to a cluster id today. Once the
  // AI quiz-routing API (app/api/quiz-route) is wired up, this should
  // send the full `answers` array there instead and use the model's
  // recommendation (primary + secondary cluster) rather than a hardcoded map.
  const resultClusterId = (answers[2] as Cluster) ?? "discovery-and-purpose";
  const resultCluster = clusters.find((c) => c.id === resultClusterId)!;

  return (
    <main>
      <SiteHeader />
      <section className="quiz-page">
        <div className="section-heading">
          <p className="eyebrow">Find your next step</p>
          <h1>A few quick questions</h1>
        </div>

        {step < QUESTIONS.length && (
          <div className="quiz-modal" role="group" aria-label={`Question ${step + 1} of ${QUESTIONS.length}`}>
            <p className="eyebrow">
              Question {step + 1} of {QUESTIONS.length}
            </p>
            <h2>{QUESTIONS[step].prompt}</h2>
            <div className="quiz-options">
              {QUESTIONS[step].options.map((opt) => (
                <button key={opt.value} onClick={() => choose(opt.value)}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step >= QUESTIONS.length && (
          <div className="quiz-result">
            <p className="eyebrow">A promising place to begin</p>
            <span className="category-icon">{resultCluster.icon}</span>
            <h2>{resultCluster.title}</h2>
            <p>{resultCluster.intro}</p>
            <Link className="button primary" href={`/${resultCluster.id}`}>
              See matched services
            </Link>
            <button className="button secondary" onClick={restart}>
              Retake the quiz
            </button>
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
