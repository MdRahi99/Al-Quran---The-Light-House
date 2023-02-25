function navigateToAllList(){
  window.location="allList.html";
  }

function navigateToSpecificList(){
  window.location="specificList.html";
  }

const loadAllListData = async () => {
  const url = "http://api.alquran.cloud/v1/quran/ar.alafasy";
  const res = await fetch(url);
  const data = await res.json();
  showAllListData(data.data);
};

const showAllListData = (allInfo) => {
  const {surahs} = allInfo;
  const infoContainer = document.getElementById("listInfo");
  surahs.forEach((info) => {
    console.log(info)
    const infoDiv = document.createElement("div");
    infoDiv.classList.add(
      "card",
      "hover:outline",
      "outline-2",
      "outline-amber-400",
      "w-96",
      "bg-gray-200",
      "shadow-xl"
    );
    infoDiv.innerHTML = `
        <div class="card-body flex flex-row justify-between">
            <div class="flex justify-start gap-4">
              <p class="text-lg bg-amber-400 font-bold font-serif p-2 items-center">${info.number}</p>
              <div class="flex flex-col text-start">
                <p class="text-lg font-serif font-bold">${info.englishName}</p>
                <p class="text-sm text-muted font-mono">${info.englishNameTranslation}</p>
              </div>
            </div>
            <div class="flex flex-col text-end">
              <h2 class="card-title text-lg font-serif text-amber-400 font-bold">${info.name}</h2>
              <p class="text-md text-muted font-mono">${info.ayahs.length} Ayahs</p>
            </div>
        </div>
            `;
    infoContainer.appendChild(infoDiv);
  });
};

loadAllListData();