interface Props {
  tag?:        string
  title:       string
  desc?:       string
  centered?:   boolean
  titleClass?: string
}

export default function SectionHeader({
  tag, title, desc, centered = true, titleClass = 'text-4xl sm:text-5xl lg:text-6xl',
}: Props) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {tag && (
        <p className="label-tag mb-3">{tag}</p>
      )}
      <h2 className={`display-title whitespace-pre-line mb-4 ${titleClass}`}>
        {title}
      </h2>
      {desc && (
        <p className={`text-brand-muted text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {desc}
        </p>
      )}
    </div>
  )
}
