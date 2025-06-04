// Fetch posts from the backend API relative to the current domain
fetch('/api/posts')
  .then(resp => resp.json())
  .then(data => {
    const container = document.getElementById('posts');
    data.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `<h2>${post.title}</h2><div>${post.content}</div>`;
      container.appendChild(div);
    });
  });
