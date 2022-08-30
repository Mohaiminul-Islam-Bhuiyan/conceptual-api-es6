document.getElementById('error-message').style.display = 'none';
document.getElementById('loading-spinner').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('input-field')
    const searchValue = searchField.value;
    searchField.value = '';
    if(searchValue === ''){
        document.getElementById('error-message').style.display = 'block';
    }
    else{
        document.getElementById('loading-spinner').style.display = 'block';
    fetch (`http://openlibrary.org/search.json?q=${searchValue}`)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
    .catch(error => {
        document.getElementById("error-message").style.display = "block";
    })
    }
}

const displaySearchResult = (books) => {
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('heading').style.display = 'none';

    const resultContainer = document.getElementById('search-result')
    resultContainer.innerHTML = '';
    books.forEach(singleBook => {
        const {title, author_name, publish_date, cover_i, author_key} = singleBook;
        const bookCard = document.createElement('div')
        bookCard.classList.add('col')
        bookCard.innerHTML = `
        <div class="card shadow-lg mt-5">
        <div class="">
        <img src="https://covers.openlibrary.org/b/id/${cover_i}-S.jpg" alt=".." class="card-img-top w-full">
        </div>
        <div class="card-body">
        <h5 class="card-title">Book Title: ${title}</h5>
        <p class="card-text">Author Name: ${author_name[0]}</p>
        <p class="card-text">Published Date: ${publish_date[0]}</p>
        </div>
        <div class="card-footer"><button class="btn btn-outline btn-outline-primary" onClick="authorInfo('${author_key[0]}')">Author Details: </div>
        </div>
        `
        resultContainer.appendChild(bookCard)
    })
}

const authorInfo = (authId) =>{
    console.log(authId)
    fetch(`https://openlibrary.org/authors/${authId}.json`)
    .then(res => res.json())
    .then(data => displayAuthorInfo(data))
}

const displayAuthorInfo = (author) => {
    window.scrollTo(0, 40)
    const {name, birth_date, bio} = author;
    const detailContainer = document.getElementById('author-detail')
    detailContainer.innerHTML = `
        <div>
        <h5 class="card-title">Author Name: ${name}</h5>
        <p class="card-text">Author DOB: ${birth_date ? birth_date : "N/a"}</p>
        <p class="card-text">Author Bio: ${bio ? bio : "N/a"}</p>
        </div>
    `
}