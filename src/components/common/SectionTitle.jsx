function SectionTitle({ title, Buttons }) {
  return (
    <div dir="ltr">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold font-sans">{title}</h2>
        <div className="flex items-center gap-3 flex-wrap">{Buttons}</div>
      </div>
    </div>
  );
}

export default SectionTitle;
