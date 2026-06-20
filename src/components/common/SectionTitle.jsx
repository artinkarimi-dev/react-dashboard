function SectionTitle({ title, Buttons }) {
  return (
    <div dir="ltr">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold font-sans">{title}</h2>
        <div className="hidden sm:flex items-center gap-3">{Buttons}</div>
      </div>
    </div>
  );
}

export default SectionTitle;
