export default function SearchBar({
  handleSubmit,
  handleTitleChange,
  handleAnhoChange,
}: {
  handleSubmit: any;
  handleTitleChange: any;
  handleAnhoChange: any;
}) {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <head className="relative flex space-x-8 p-8">
          <input
            type="search"
            id="titulo"
            onChange={(e) => handleTitleChange(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingresá título"
          />
          <input
            type="number"
            id="anho"
            onChange={(e) => handleAnhoChange(e.target.value)}
            className="block w-40 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingresá año"
          />
          <button
            type="submit"
            className="text-white  end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buscar
          </button>
        </head>
      </form>
    </>
  );
}
