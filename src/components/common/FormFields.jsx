function FormFields({ fields, values, onChange }) {
  const handleChange = (field, value) => {
    const finalValue = field.parseValue ? field.parseValue(value) : value;

    onChange({
      ...values,
      [field.key]: finalValue,
    });
  };

  return (
    <div dir="ltr" className="flex flex-col gap-4 sm:gap-5 w-full">
      {fields.map((field) => (
        <div key={field.key} className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              rows={3}
              value={values[field.key] || ""}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500 resize-none"
              onChange={(e) => handleChange(field, e.target.value)}
            />
          ) : field.type === "select" ? (
            <select
              value={values[field.key] || ""}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white cursor-pointer"
              onChange={(e) => handleChange(field, e.target.value)}
            >
              <option value="">Select option</option>

              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              value={
                field.formatValue
                  ? field.formatValue(values[field.key])
                  : values[field.key] || ""
              }
              placeholder={field.placeholder}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
              onChange={(e) => handleChange(field, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default FormFields;
