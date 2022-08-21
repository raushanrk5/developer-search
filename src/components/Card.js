import developers from "../constants/Developers";

export default function Card() {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {developers.map((developer) => (
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src={developer.image} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{developer.name}</div>
            <p class="text-gray-700 text-base">{developer.desc}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            {developer.skills.map((skill) => (
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
