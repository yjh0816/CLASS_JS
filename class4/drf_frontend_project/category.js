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
async function addCategory(category_name) {
  let token = getCookie('access_token');
  let response = await fetch(`${SERVER_URL}/blog/category`, {
    method: 'POST',
    body: category_name,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  return data;
}

async function submitCategory() {
  let form = document.getElementById('form');
  let formData = new FormData(form);
  let result = await addCategory(formData);
  if (result.status === 201) {
    alert('카테고리 등록이 완료되었습니다!');
    location.href = 'category.html';
  }
}

async function getCategoryList() {
  let response = await fetch(`${SERVER_URL}/blog/category`);
  let data = await response.json();
  return data;
}

async function insertCategoryList() {
  let result = await getCategoryList();
  if (result.length > 0) {
    result.forEach(element => {
      document.body.insertAdjacentHTML(
        'beforeEnd',
        `<div class="category">
        <p id="id">${element.id}: ${element.name}</p>
      </div>`,
      );
    });
  } else {
    document.body.insertAdjacentHTML(
      'beforeEnd',
      `<div>
      <p>생성된 카테고리가 없습니다</p>
    </div>`,
    );
  }
}

insertCategoryList();
