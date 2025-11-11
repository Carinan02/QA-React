export default function FormField({ label, name, id, children }) {
  const inputId = id || name;

  return (
    <div className="flex flex-row p-1">
      <label
        className="mr-5 w-[38%] text-sm font-medium text-gray-400"
        htmlFor={inputId}
      >
        {label}
      </label>
      {children ? (
        children
      ) : (
        <input
          type="text"
          id={inputId}
          name={name}
          className="outline-0 border border-gray-200 bg-gray-300 rounded-sm w-[60%] text-[10px] font-medium"
        />
      )}
    </div>
  );
}
