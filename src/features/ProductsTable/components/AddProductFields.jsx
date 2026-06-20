import { useMemo, useCallback } from "react";

function AddProductFields({ newProduct, onChange }) {
  const fields = useMemo(
    () => [
      { label: "Product title", key: "title", type: "text" },
      { label: "Release status", key: "isPublished", type: "select" },
      { label: "Inventory number", key: "stock", type: "number" },
      { label: "Product price", key: "price", type: "text" },
      { label: "Product Description", key: "description", type: "textarea" },
    ],
    [],
  );

  const handleChange = useCallback(
    (key, value) => {
      let processedValue;

      if (key === "isPublished") {
        processedValue = value === "published";
      } else if (key === "price") {
        const raw = value.replace(/[^0-9]/g, "");
        processedValue = raw === "" ? "" : Number(raw);
      } else if (key === "stock") {
        processedValue = value === "" ? "" : Number(value);
      } else {
        processedValue = value;
      }

      if (newProduct[key] !== processedValue) {
        onChange({ ...newProduct, [key]: processedValue });
      }
    },
    [newProduct, onChange],
  );

  const formatPriceForDisplay = useCallback((value) => {
    if (value === "" || value === null || value === undefined) return "";
    return Number(value).toLocaleString();
  }, []);

  const getSelectValue = useCallback(
    (boolValue) => {
      if (boolValue === true) return "published";
      if (
        boolValue === false &&
        newProduct.isPublished !== undefined &&
        newProduct.title !== ""
      )
        return "draft";
      return "";
    },
    [newProduct.isPublished, newProduct.title],
  );

  return (
    <div dir="ltr" className="flex flex-col gap-4 sm:gap-5 w-full">
      {fields.map((field) => (
        <div key={field.key} className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              name={field.key}
              rows={3}
              value={newProduct[field.key] || ""}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500 resize-none"
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          ) : field.type === "select" ? (
            <select
              name={field.key}
              value={getSelectValue(newProduct[field.key])}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white cursor-pointer"
              onChange={(e) => handleChange(field.key, e.target.value)}
            >
              <option value="">Select option</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          ) : field.key === "price" ? (
            <input
              type="text"
              name={field.key}
              value={formatPriceForDisplay(newProduct[field.key])}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
              placeholder="Enter price"
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          ) : (
            <input
              type={field.type}
              name={field.key}
              value={newProduct[field.key] || ""}
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
