export default function MovieCard({
  imageSrc,
  title,
  description,
  rate,
}: {
  imageSrc: string;
  title: string;
  description: string;
  rate: string;
}) {
  return (
    <div className="py-3 sm:max-w-xl mx-4">
      <div className="bg-white shadow-lg border-gray-100 h-full border rounded-3xl p-8 flex space-x-8">
        <div className="h-full overflow-visible w-1/2">
          <img className="rounded-3xl shadow-lg" src={imageSrc} alt="" />
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">{rate}</div>
          </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
