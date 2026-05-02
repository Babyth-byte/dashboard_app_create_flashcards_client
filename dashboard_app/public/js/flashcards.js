// サーバーからデータを取得する関数を作成してください

export default async function setupFlashcards() {
  // 暗記カード機能に必要な処理を作成してください
  async function fetchFlashcards() {
    try {
      const response = await fetch("/api/flashcards");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching flashcards:", error);
      return [];
    }
  }
  async function renderFlashcards(wordList) {
    const flashcardsList = document.querySelector(".flashcards-list");
    flashcardsList.innerHTML = "";
    wordList.forEach((word) => {
      let flashcard = `<div class="flashcard">
         <div class ="flashcard-content">
           <p>${word.word}</p>
           <div class="flashcard-icons">
       <button class="flashcard-meaning" data-toggle=${word.id}>
             <span class="ri-eye-line"></span>
            </button>
           </div>
           </div>
         </div>
         <div data-meaning= "${word.id}" class="hidden">
           <p>${word.meaning}</p>
         </div>
        </div>
    `;
      flashcardsList.innerHTML += flashcard;
    });
  }
  async function readFlashcards() {
    const flashcards = await fetchFlashcards();
    renderFlashcards(flashcards);
  }
  await readFlashcards();

  const flashcardsList = document.querySelector(".flashcards-list");
  flashcardsList.addEventListener("click", event => {
    const button = event.target.closest(".flashcard-meaning");
    if(!button)      return;
    const id = button.getAttribute("data-toggle");
    toggleMeaning(id);
  })
  function toggleMeaning(id){
    const meaning = document.querySelector(`[data-meaning="${id}"]`);
    if (meaning) {
     meaning.classList.toggle("hidden");
   }
  };
}
