interface SectionLabelProps {
  title: string;
  headingId: string;
}

export function SectionLabel({ title, headingId }: SectionLabelProps) {
  return (
    <div className="margin-bottom-4">
      <h2 id={headingId} className="font-heading-xl text-primary-darker margin-y-0">
        {title}
      </h2>
      <div
        aria-hidden
        className="bg-primary margin-top-2"
        style={{ height: 4, width: 64 }}
      />
    </div>
  );
}
