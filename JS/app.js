const loadAllListData = async () => {
  const url = "http://api.alquran.cloud/v1/surah";
  const res = await fetch(url);
  const data = await res.json();
  showAllListData(data.data);
};

const showAllListData = (allInfo) => {
  document.getElementById("allListBtn").addEventListener("click", function () {
    const infoContainer = document.getElementById("info");
    allInfo.forEach((info) => {
        console.log(info)
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("card", "w-96", "bg-gray-200", "shadow-xl");
      infoDiv.innerHTML = `
        <div class="card-body">
            <h2 class="card-title text-xl">Name: <span class="text-4xl text-center font-bold text-amber-500">${info.name}</span></h2>
            <p class="text-lg">Surah Number: <span class="text-2xl font-semibold">${info.number}</span></p>
            <p class="text-lg">English Name: <span class="text-2xl font-semibold">${info.englishName} (${info.englishNameTranslation})</span></p>
            <p class="text-lg">Total Ayahs: <span class="text-2xl font-semibold">${info.numberOfAyahs}</span></p>
            <p class="text-lg">Place: <span class="text-2xl font-semibold">${info.revelationType}</span></p>
            <div class="card-actions justify-center mt-6">
            <button class="font-bold text-amber-400"><i class="fa-solid fa-2x fa-angles-right animate-pulse"></i></button>
            </div>
        </div>
            `;
      infoContainer.appendChild(infoDiv);
    });
  });
};

loadAllListData();