const SERVER_URL = 'http://127.0.0.1:8000';

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function getArticleList() {
  let response = await fetch(`${SERVER_URL}/blog/article`);
  let data = await response.json();
  return data;
}

async function insertArticleList() {
  let data = await getArticleList();
  data.forEach(element => {
    document.body.insertAdjacentHTML(
      'beforeEnd',
      `<div id="${element.id}">
        <h1>${element.author}</h1>
        <h1>${element.title}</h1>
        <p>${element.content}</p>
        <button onclick="deleteArticle(${element.id})">삭제</button>
      </div>`,
    );
  });
}
async function deleteArticle(id) {
  let token = getCookie('access_token');
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 204) {
    let post = document.getElementById(`${id}`);
    post.remove();
  }
  // return response.status;
}

// async function eraseArticle(id) {
//   let result = deleteArticle(id);
//   let div = document.getElementById(`${id}`);
//   div.remove();
// }
