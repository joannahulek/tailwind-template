function renderHobby() {
    const container = document.getElementById('hobby-container');

    let content = `<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl font-bold mb-2">Hobby</h2>
                    <p>dancing, sailing, gardening, books</p>
      </div>
    `;
    container.innerHTML = content;
}

renderHobby();
