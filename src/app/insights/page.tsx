import { SectionHeading } from "@/components/ui/SectionHeading";

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32">
      <div className="container mx-auto px-6 py-20 text-center">
        <SectionHeading title="Insights" subtitle="Coming Soon" />
        <p className="mt-8 text-slate-500 max-w-2xl mx-auto">
          We are currently building this section. Check back soon for research, whitepapers, and enterprise insights.
        </p>
      </div>
    </div>
  );
}
