export default function Message({ justify, message }) {
    return (
        <li className={`flex justify-${justify}`}>
      <div className={`${justify === "start" ? "bg-blue-200" : ""} relative max-w-xl px-4 py-2 text-gray-700 rounded shadow`}>
        <span className="block">{message}</span>
      </div>
    </li>
    );
}
