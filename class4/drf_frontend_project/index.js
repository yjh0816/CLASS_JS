const SERVER_URL = 'http://127.0.0.1:8000';

const showModal = () => {
  let modal = document.getElementById('modal');
  insertCategoryList('post-category');
  modal.style.display = 'block';
};

const closeModal = () => {
  let modal = document.getElementById('modal');
  modal.style.display = 'none';
};

const showPostModal = () => {
  let modal = document.getElementById('post-modal');
  modal.style.display = 'block';
};

const closePostModal = () => {
  let modal = document.getElementById('post-modal');
  modal.style.display = 'none';
};

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

async function getCategoryList() {
  let response = await fetch(`${SERVER_URL}/blog/category`);
  let data = await response.json();
  return data;
}

async function insertCategoryList(id) {
  let select = document.getElementById('category');
  select.innerHTML = '<option value="0" selected="selected">모두</option>';
  let result = await getCategoryList();
  if (result.length > 0) {
    result.forEach(element => {
      document
        .getElementById(id)
        .insertAdjacentHTML(
          'afterBegin',
          `<option value="${element.id}">${element.name}</option>`,
        );
    });
  }
}

async function getArticleList() {
  let response = await fetch(`${SERVER_URL}/blog/article`);
  let data = await response.json();
  return data;
}

async function insertArticleList(...kwargs) {
  if (kwargs) {
    console.log(kwargs);
    // insertAdjacentHTML 내부에서 실행
  }
  let result = await getArticleList();
  if (result.length > 0) {
    result.forEach(element => {
      document.body.insertAdjacentHTML(
        'beforeEnd',
        `<div class="article" id="${element.id}" onclick="insertArticle(${
          element.id
        })">
        <p id="category">카테고리: ${element.category.name}</p>
        <p id="title">제목: ${element.title}</p>
        <p id="content">내용: ${element.content}</p>
        <p id="author">작성자: ${element.author}</p>
        <a href="${
          element.image ? element.image : '#'
        }" target="_blank">이미지 링크</a>
        <hr>
      </div>`,
      );
    });
  } else {
    document.body.insertAdjacentHTML(
      'beforeEnd',
      `<div id="post">
      <p>작성된 글이 없습니다</p>
    </div>`,
    );
  }
  insertCategoryList('category');
}
async function postArticle(postArticle) {
  let token = getCookie('access_token');
  let response = await fetch(`${SERVER_URL}/blog/article`, {
    method: 'POST',
    body: postArticle,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  return data;
}

async function submitArticle() {
  let form = document.getElementById('form');
  let formData = new FormData(form);
  let result = await postArticle(formData);
}

async function deleteArticle(id) {
  let token = getCookie('access_token');
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.status;
}

async function eraseArticle(id) {
  let result = deleteArticle(id);
  if (result === 204) {
    let post = document.getElementById(`${id}`);
    post.remove();
    alert('글이 삭제되었습니다!');
    closePostModal();
  }
}

async function getArticle(id) {
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
  let data = await response.json();
  return data;
}

async function insertArticle(id) {
  let data = await getArticle(id);
  document.getElementById('post-modal').innerHTML = `<div id="${id}">
      <h1>${data.title}</h1>
      <p>카테고리: ${data.category.name}</p>
      <p>작성자: ${data.author}</p>
      <p>${data.content}</p>
      <button onclick="eraseArticle(${id})">삭제</button>
      <button onclick="showModifyModal(${id})">수정</button>
      <button onclick="closePostModal()">닫기</button>
    </div>
  `;
  showPostModal();
}

async function updateAricle(postArticle, id) {
  let token = getCookie('access_token');
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
    method: 'PUT',
    body: postArticle,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  return data;
}

async function modifyArticle(id) {
  let form = document.getElementById('updateform');
  let formData = new FormData(form);
  let result = await updateAricle(formData, id);
}

async function showModifyModal(id) {
  closePostModal();
  let data = await getArticle(id);
  document.getElementById('post-modal').innerHTML = `
  <form id="updateform">
      <select name="category" id="modify-category" placeholder="카테고리"/>
      </select>
      <input name="title" id="title" placeholder="제목" value=${data.title}>
      <input name="content" id="content" placeholder="내용" value=${data.content}>
      <input type="file" name="image">
  </form>
  <button onclick="modifyArticle(${id})">수정</button>
  <button onclick="closePostModal()">닫기</button>
  `;
  insertCategoryList('modify-category');
  showPostModal();
}

insertArticleList();

let select = document.getElementById('category');
function logValue() {
  if (this.value == 0) {
    article = document.getElementsByClassName('article');
    for (let i = 0; i < article.length; i++) {
      article[i].innerHTML = '';
    }
    insertArticleList();
    // location.href = 'index.html';
  } else {
    console.log(this.value);
    insertArticleList(this.value);
  }
}
select.addEventListener('change', logValue, false);
