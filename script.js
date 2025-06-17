
const photos = [
    { name: '1', type: 'image', date: '2025.02.02' },
    { name: '2', type: 'video', date: '2025.04.17' },
    { name: '3', type: 'image', date: '2025.04.27' },
    { name: '4', type: 'image', date: '2025.06.08' },
    { name: '5', type: 'image', date: '2025.04.20' },
    { name: '6', type: 'image', date: '2025.04.27' },
    { name: '7', type: 'image', date: '2025.04.20' },
    { name: '8', type: 'image', date: '2025.04.21' },
    { name: '9', type: 'image', date: '2025.02.02' },
    { name: '10', type: 'image', date: '2025.04.17' },
    { name: '11', type: 'image', date: '2025.01.10' },
    { name: '12', type: 'image', date: '2024.11.15' },
    { name: '13', type: 'image', date: '2025.04.17' },
    { name: '14', type: 'image', date: '2025.02.02' },
    { name: '15', type: 'image', date: '2025.04.27' },
    { name: '18', type: 'image', date: '2025.04.20' },
    { name: '20', type: 'image', date: '2025.02.02' },
    { name: '21', type: 'image', date: '2024.11.15' },
    { name: '22', type: 'image', date: '2024.11.15' },
    { name: '23', type: 'image', date: '2024.11.15' },
    { name: '24', type: 'image', date: '2025.04.27' },
    { name: '25', type: 'image', date: '2025.05.20' },
    { name: '26', type: 'image', date: '2025.01.10' },
    { name: '27', type: 'image', date: '2025.04.27' },
    { name: '28', type: 'image', date: '2024.10.06' },
    { name: '29', type: 'image', date: '2025.04.27' },
    { name: '30', type: 'image', date: '2025.05.20' },
    { name: '31', type: 'image', date: '2025.04.20' },
    { name: '32', type: 'video', date: '2025.04.17' },
    { name: '33', type: 'image', date: '2025.01.17' },
    { name: '34', type: 'image', date: '2024.10.06' },
    { name: '35', type: 'image', date: '2025.02.02' },
    { name: '36', type: 'image', date: '2025.01.10' },
    { name: '37', type: 'image', date: '2025.02.02.' },
    { name: '38', type: 'image', date: '2025.04.27' },
    { name: '39', type: 'image', date: '2025.04.27' },
    { name: '40', type: 'image', date: '2025.02.01 Helyi patak' },
    { name: '41', type: 'image', date: '2025.02.02' },
    { name: '43', type: 'image', date: '2025.04.17' },
    { name: '44', type: 'image', date: '2025.04.17' },
    { name: '45', type: 'image', date: '2025.04.20' },
    { name: '46', type: 'image', date: '2025.04.20' },
    { name: '47', type: 'image', date: '2025.04.20' },
    { name: '48', type: 'image', date: '2025.04.27 Victoria Cruziana mag' },
    { name: '49', type: 'image', date: '2025.05.25' },
    { name: '50', type: 'image', date: '2025.04.27' },
    { name: '51', type: 'image', date: '2025.04.27' },
    { name: '52', type: 'image', date: '2025.04.27' },
    { name: '53', type: 'image', date: '2025.04.27' },
    { name: '54', type: 'image', date: '2025.04.27' },
    { name: '55', type: 'image', date: '2025.04.27' },
    { name: '56', type: 'image', date: '2025.04.27' },
    { name: '57', type: 'image', date: '2025.04.27' },
    { name: '58', type: 'image', date: '2025.05.25' },
    { name: '59', type: 'image', date: '2025.05.25' },
    { name: '60', type: 'image', date: '2025.05.25' },
    { name: '61', type: 'image', date: '2025.05.25.' },
    { name: '62', type: 'image', date: '2025.05.25' },
    { name: '63', type: 'image', date: '2025.05.25' },
    { name: '64', type: 'image', date: '2025.05.25' },
    { name: '65', type: 'image', date: '2025.06.08' },
    { name: '66', type: 'image', date: '2025.06.08' },
    { name: '67', type: 'image', date: '2025.06.08' },
    { name: '68', type: 'image', date: '2025.06.08' },
    { name: '69', type: 'image', date: '2025.06.08' },
    { name: '70', type: 'image', date: '2025.06.08' },
    { name: '71', type: 'image', date: '2025.06.08' },
    { name: '72', type: 'image', date: '2025.06.08' },
    { name: '73', type: 'image', date: '2025.05.30' },
    { name: '74', type: 'image', date: '2025.05.30' },
    { name: '75', type: 'image', date: '2025.06.08' },
    { name: '76', type: 'image', date: '2025.06.08' },
    { name: '77', type: 'image', date: '2025.06.08' },
    { name: '78', type: 'image', date: '2025.06.08' },
    { name: '79', type: 'image', date: '2025.06.08' },
    { name: '80', type: 'image', date: '2025.06.08' },
    { name: '81', type: 'image', date: '2025.06.08' },
    { name: '82', type: 'image', date: '2025.06.08' },
    { name: '83', type: 'image', date: '2025.06.08.' },
    { name: '84', type: 'image', date: '2025.05.30' },
    { name: '85', type: 'image', date: '2025.06.08' },
    { name: '86', type: 'image', date: '2025.06.08' },
    { name: '87', type: 'image', date: '2025.05.30' },
    { name: '88', type: 'image', date: '2025.05.30' },
    { name: '89', type: 'image', date: '2025.06.04' },
    { name: '90', type: 'image', date: '2025.07.29' }
  ];
  
    
    
    const grid = document.getElementById('photo-grid');
    let currentIndex = 0;
    
    photos.forEach((photo, index) => {
      const div = document.createElement('div');
      div.className = `product div${index + 1}`;
    
      if (photo.type === 'image') {
        const img = document.createElement('img');
        img.src = `images/${photo.name}.jpg`;
        img.alt = `Kép ${photo.name}`;
        img.onerror = () => {
          img.src = `images/${photo.name}.jpeg`;
        };
        img.onclick = () => openViewer(index);
        div.appendChild(img);
      } else if (photo.type === 'video') {
        const video = document.createElement('video');
        video.src = `images/${photo.name}.mov`;
        video.controls = false;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        video.onclick = () => openViewer(index);
        video.style.width = '100%';
        div.appendChild(video);
      }
    
      const label = document.createElement('p');
      label.textContent = photo.date;
    
      div.appendChild(label);
      grid.appendChild(div);
    });
    
    function openViewer(index) {
      currentIndex = index;
      const viewer = document.getElementById('viewer');
      const viewerImg = document.getElementById('viewer-img');
      const viewerVideo = document.getElementById('viewer-video');
    
      const item = photos[index];
      viewer.classList.remove('hidden');
    
      if (item.type === 'image') {
        viewerImg.style.display = 'block';
        viewerVideo.style.display = 'none';
        viewerImg.src = `images/${item.name}.jpg`;
        viewerImg.onerror = () => {
          viewerImg.src = `images/${item.name}.jpeg`;
        };
      } else {
        viewerImg.style.display = 'none';
        viewerVideo.style.display = 'block';
        viewerVideo.src = `images/${item.name}.mov`;
        viewerVideo.play();
      }
    }
    
    function closeViewer() {
      const viewer = document.getElementById('viewer');
      const viewerVideo = document.getElementById('viewer-video');
      viewer.classList.add('hidden');
      viewerVideo.pause();
    }
    
    function prevImage() {
      currentIndex = (currentIndex - 1 + photos.length) % photos.length;
      openViewer(currentIndex);
    }
    
    function nextImage() {
      currentIndex = (currentIndex + 1) % photos.length;
      openViewer(currentIndex);
    }
    
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('viewer').classList.contains('hidden')) return;
    
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeViewer();
    });
    