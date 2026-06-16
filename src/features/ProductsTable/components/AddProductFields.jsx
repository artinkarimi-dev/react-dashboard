function AddProductFields({ newProduct, onChange }) {
  const fields = [
    { label: "Product title", key: "title", type: "text" },
    { label: "Release status", key: "isPublished", type: "select" },
    { label: "Inventory number", key: "entity", type: "number" },
    { label: "Product price", key: "price", type: "text" },
    { label: "Product Description", key: "description", type: "textarea" },
  ];

  const handleChange = (key, value) => {
    let processedValue = value;

    if (key === "price") {
      processedValue = parseFloat(value.replace(/,/g, "")) || 0;
    }

    const product = {
      ...newProduct,
      [key]: processedValue,
    };
    console.log(product);
    onChange(product);
  };

  // تابع فرمت کردن قیمت با toLocaleString
  const formatPriceForDisplay = (value) => {
    if (!value && value !== 0) return "";
    const num =
      typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;
    return num.toLocaleString();
  };

  return (
    <div dir="ltr" className="flex flex-col gap-5">
      {fields.map((field) => (
        <div key={field.key} className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              name={field.key}
              rows={3}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500 resize-none"
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          ) : field.type === "select" ? (
            <select
              name={field.key}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white cursor-pointer"
              onChange={(e) => handleChange(field.key, e.target.value)}
            >
              <option value="" className="text-gray-400">
                Select option
              </option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          ) : field.key === "price" ? (
            <input
              type="text"
              name={field.key}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
              placeholder="Enter price"
              value={formatPriceForDisplay(newProduct[field.key])}
              onChange={(e) => {
                // فقط اعداد و کاما قبول بشه
                let rawValue = e.target.value.replace(/[^0-9,]/g, "");
                handleChange(field.key, rawValue);
              }}
            />
          ) : (
            <input
              type={field.type}
              name={field.key}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
              placeholder={`Enter ${field.label.toLowerCase()}`}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AddProductFields;
