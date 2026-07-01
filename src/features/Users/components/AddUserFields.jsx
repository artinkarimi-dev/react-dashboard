import { useMemo, useCallback } from "react";

function AddUserFields({ newUser, onChange }) {
  const fields = useMemo(
    () => [
      {
        label: "Full name",
        key: "fullName",
        type: "text",
        placeholder: "Enter full name",
      },
      {
        label: "Username",
        key: "userName",
        type: "text",
        placeholder: "Enter username",
      },
      {
        label: "Email",
        key: "email",
        type: "email",
        placeholder: "Enter email",
      },
      {
        label: "Phone number",
        key: "phoneNumber",
        type: "text",
        placeholder: "Enter phone number",
      },
      {
        label: "Role",
        key: "role",
        type: "select",
        options: [
          { label: "User", value: "User" },
          { label: "Admin", value: "Admin" },
          { label: "Manager", value: "Manager" },
        ],
      },
    ],
    [],
  );

  const handleChange = useCallback(
    (key, value) => {
      onChange({
        ...newUser,
        [key]: value,
      });
    },
    [newUser, onChange],
  );

  return (
    <div dir="ltr" className="flex flex-col gap-4 sm:gap-5 w-full">
      {fields.map((field) => (
        <div key={field.key} className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              name={field.key}
              value={newUser[field.key] || ""}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white cursor-pointer"
              onChange={(e) => handleChange(field.key, e.target.value)}
            >
              <option value="">Select role</option>

              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.key}
              value={newUser[field.key] || ""}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AddUserFields;
