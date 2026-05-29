import { createFileRoute } from "@tanstack/react-router";
import { JrmLanding } from "@/components/jrm/JrmLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JRM Marketing Digital & Gestão — Construímos legados" },
      { name: "description", content: "Marketing Digital, Gestão e Estratégia Comercial. Transformamos negócios com estratégia real e resultados mensuráveis. Alphaville, Barueri - SP." },
      { property: "og:title", content: "JRM Marketing Digital & Gestão" },
      { property: "og:description", content: "Não criamos apenas empresas. Construímos legados." },
    ],
  }),
  component: Index,
});

function Index() {
  return <JrmLanding />;
}
