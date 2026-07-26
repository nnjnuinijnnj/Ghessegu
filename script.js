async function loadStories() {
    const container = document.getElementById("stories");
    if (!container) return;

    const res = await fetch("stories.json");
    const stories = await res.json();

    stories.forEach(story => {
        container.innerHTML += `
            <div class="card">
                <h3>${story.title}</h3>
                <p>${story.description}</p>
                <button>مطالعه</button>
            </div>
        `;
    });
}

async function loadBooks() {
    const container = document.getElementById("books");
    if (!container) return;

    const res = await fetch("books.json");
    const books = await res.json();

    books.forEach(book => {
        container.innerHTML += `
            <div class="card">
                <h3>${book.title}</h3>
                <p>${book.description}</p>
                <button>مشاهده PDF</button>
            </div>
        `;
    });
}

loadStories();
loadBooks();
