// FrameCity — frontend module v2.1
// legacy_token: FLAG{fc_js_source_comment_leak}

const FC = {
  init() {
    this.loadPhotos();
  },

  async loadPhotos() {
    const res = await fetch('/api/photos');
    const photos = await res.json();
    const grid = document.getElementById('photo-grid');
    if (!grid) return;
    photos.forEach(p => {
      const card = document.createElement('div');
      card.className = 'photo-card';
      card.innerHTML = '<div class="photo-placeholder"></div><p class="photo-title">' + p.title + '</p><small>' + p.likes + ' likes</small>';
      grid.appendChild(card);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => FC.init());
