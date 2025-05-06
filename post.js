
const POSTS = {
  "1": {
    title: "Maximizing Student Engagement",
    date: "April 10, 2025",
    author: "Schulportals Team",
    image: "./images/best employe.jpg",
    content: `
      <p>Keeping students motivated online starts with interactive content...</p>
      <h4>Key Strategies</h4>
      <ul><li>Live polls</li><li>Breakout rooms</li><li>Gamified quizzes</li></ul>
    `
  },
  "2": {
    title: "Top LMS Features in 2025",
    date: "March 22, 2025",
    author: "Schulportals Team",
    image: "./images/best employe.jpg",
    content: `
      <p>Modern LMSes need to do more than just host courses...</p>
      <h4>Must-Haves</h4>
      <ul><li>AI-driven recommendations</li><li>Seamless mobile UX</li><li>Advanced analytics</li></ul>
    `
  },
  "3": {
    title: "Hosting Effective Webinars",
    date: "February 15, 2025",
    author: "Schulportals Team",
    image: "./images/best employe.jpg",
    content: `
      <p>Webinars can be powerful—but only if you plan them right...</p>
      <h4>Best Practices</h4>
      <ul><li>Pre-session surveys</li><li>Engagement hotspots</li><li>On-demand recordings</li></ul>
    `
  }
};


    // 1. Grab the “post” query-param
    const params = new URLSearchParams(location.search);
    const id = params.get('post');
    const keys = Object.keys(POSTS);
    const post = POSTS[id];
    
    // 2. Get the data for that ID
    
    if (!post) {
      document.body.innerHTML = '<p class="text-center p-5">Post not found.</p>';
      throw new Error('Post not found');
    }
  
    // 3. Inject into the page
    document.getElementById('postTitle').textContent  = post.title;
    document.getElementById('postDate').textContent   = post.date;
    document.getElementById('postAuthor').textContent = post.author;
    document.getElementById('postImage').src          = post.image;
    document.getElementById('postContent').innerHTML  = post.content;

     // Prev/Next logic
     const idx = keys.indexOf(id);
    const prevId = keys[idx - 1];
    const nextId = keys[idx + 1];
    if (prevId) {
      document.getElementById('prevLink').innerHTML = `<a href="blogPost.html?post=${prevId}" class="btn btn-outline-primary"><i class=\"bi bi-arrow-left\"></i> ${POSTS[prevId].title}</a>`;
    }
    if (nextId) {
      document.getElementById('nextLink').innerHTML = `<a href="blogPost.html?post=${nextId}" class="btn btn-outline-primary">${POSTS[nextId].title} <i class=\"bi bi-arrow-right\"></i></a>`;
    }

    // Comment logic with localStorage
    const commentsKey = 'comments_' + id;
    const commentsList = document.getElementById('commentsList');
    const saved = JSON.parse(localStorage.getItem(commentsKey)) || [];

    function renderComments() {
      commentsList.innerHTML = '';
      saved.forEach(c => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${c.author}</strong> <span class="text-muted small">on ${c.date}</span><p>${c.text}</p>`;
        commentsList.appendChild(li);
      });
    }
    renderComments();

    document.getElementById('commentForm').addEventListener('submit', e => {
      e.preventDefault();
      const author = document.getElementById('commentAuthor').value;
      const text = document.getElementById('commentText').value;
      const date = new Date().toLocaleDateString();
      saved.push({ author, text, date });
      localStorage.setItem(commentsKey, JSON.stringify(saved));
      renderComments();
      e.target.reset();
    });

    // After dynamic load, update meta tags

  if (post) {
    document.getElementById('metaTitle').textContent = post.title + ' | Schulportals Blog';
    document.getElementById('metaDesc').setAttribute('content', post.content.substring(0,150));
    const ogTitle = document.getElementById('ogTitle');
    const ogDesc  = document.getElementById('ogDesc');
    const ogImg   = document.getElementById('ogImage');
    const twTitle = document.getElementById('twTitle');
    const twDesc  = document.getElementById('twDesc');
    const twImg   = document.getElementById('twImage');

    ogTitle.content = post.title;
    twTitle.content = post.title;
    const descText = post.content.replace(/<[^>]+>/g,'').slice(0,150);
    ogDesc.content = descText;
    twDesc.content = descText;
    ogImg.content  = post.image;
    twImg.content  = post.image;
  }

