import { SectionHeader } from '@/components/SectionHeader'

function Arrow() {
  return (
    <div className="flex items-center justify-center text-primary/70 text-xl select-none" aria-hidden>
      <span className="lg:hidden">↓</span>
      <span className="hidden lg:inline">→</span>
    </div>
  )
}

function Stage({ step, title, items, note }: { step: string; title: string; items: string[]; note?: string }) {
  return (
    <div className="border border-primary/40 bg-background/70 p-4">
      <p className="text-xs text-muted-foreground mb-1">{step}</p>
      <p className="text-primary font-bold mb-2">{title}</p>
      <ul className="text-sm text-[#e2e8f0] space-y-0.5">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {note && <p className="mt-2 text-xs text-muted-foreground">{note}</p>}
    </div>
  )
}

export function CaseStudy() {
  return (
    <div className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
        <SectionHeader
          command="cat case-study.md"
          title="Case study: event-driven integration platform at ALGOcas"
          description="Event-driven integration on AWS · ALGOcas · client details omitted"
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-10 text-sm leading-relaxed">
          <div className="terminal-card">
            <p className="text-primary font-bold mb-2"># problem</p>
            <p className="text-foreground">
              Five systems across on-prem, Azure and SaaS (ITSM, CRM, e-commerce) were wired together point to point.
              Every new link added another fragile connection, and a failed message could simply be lost.
            </p>
          </div>
          <div className="terminal-card">
            <p className="text-primary font-bold mb-2"># approach</p>
            <p className="text-foreground">
              One ingest layer on AWS replaced the point-to-point links. Each destination gets its own SQS queue with a
              dead-letter queue, and processing is idempotent in DynamoDB, so retries never create duplicates.
            </p>
          </div>
          <div className="terminal-card">
            <p className="text-primary font-bold mb-2"># result</p>
            <p className="text-foreground">
              Failed messages are retried and recoverable through event replay instead of lost. Correlation IDs, X-Ray
              tracing and CloudWatch alarms with SNS show where any message is. IAM, KMS and Secrets Manager protect access.
            </p>
          </div>
        </div>

        <figure className="border border-border p-4 sm:p-6 bg-[#0b0f0c]">
          <figcaption className="text-xs text-muted-foreground mb-5">
            fig. 1 — simplified message flow
          </figcaption>

          <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 items-stretch">
            <Stage step="01 · sources" title="Source systems" items={['On-prem apps', 'Azure', 'SaaS: ITSM · CRM · e-commerce']} />
            <Arrow />
            <Stage step="02 · ingest" title="Single ingest layer" items={['One entry point', 'Correlation ID per event']} note="replaces point-to-point links" />
            <Arrow />
            <Stage step="03 · route" title="Per-destination SQS" items={['One queue per target', 'Dead-letter queue each', 'Idempotency in DynamoDB']} />
            <Arrow />
            <Stage step="04 · deliver" title="Destination systems" items={['5 systems connected', 'Retry on failure']} />
          </div>

          <div className="mt-4 grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-3">
            <div className="hidden lg:block lg:col-span-4" />
            <div className="border border-dashed border-[#febc2e]/60 p-3 text-sm text-[#e2e8f0] lg:col-span-3">
              <span className="text-[#febc2e]">↺ failure path:</span> message → DLQ → inspect → event replay back into its queue
            </div>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="border border-primary/25 p-3">
              <span className="text-primary">observability:</span>{' '}
              <span className="text-[#e2e8f0]">correlation IDs · X-Ray tracing · CloudWatch alarms · SNS alerts</span>
            </div>
            <div className="border border-primary/25 p-3">
              <span className="text-primary">security:</span>{' '}
              <span className="text-[#e2e8f0]">IAM least privilege · KMS encryption · Secrets Manager</span>
            </div>
          </div>
        </figure>
      </div>
    </div>
  )
}
