const collageGrid = document.getElementById("collageGrid");

const mediaItems = [];

/* 54 fotos verticales */
for (let i = 1; i <= 54; i++) {
  mediaItems.push({
    type: "image",
    src: `img/collage/foto${i}.jpeg`,
    alt: `Foto ${i}`
  });
}

/* 9 videos verticales */
for (let i = 1; i <= 9; i++) {
  mediaItems.push({
    type: "video",
    src: `videos/video${i}.mp4`
  });
}

/*
  Posiciones pensadas para que se superpongan
  y ocupen poco alto.
  x = porcentaje horizontal
  y = porcentaje vertical
*/
const positions = [
  { x: 1, y: 2 },   { x: 8, y: 5 },   { x: 15, y: 1 },  { x: 22, y: 6 },
  { x: 29, y: 2 },  { x: 36, y: 7 },  { x: 43, y: 3 },  { x: 50, y: 6 },
  { x: 57, y: 2 },  { x: 64, y: 7 },  { x: 71, y: 3 },  { x: 78, y: 6 },
  { x: 85, y: 2 },  { x: 92, y: 5 },

  { x: 3, y: 24 },  { x: 10, y: 28 }, { x: 17, y: 23 }, { x: 24, y: 29 },
  { x: 31, y: 24 }, { x: 38, y: 30 }, { x: 45, y: 25 }, { x: 52, y: 29 },
  { x: 59, y: 24 }, { x: 66, y: 30 }, { x: 73, y: 25 }, { x: 80, y: 29 },
  { x: 87, y: 24 }, { x: 94, y: 28 },

  { x: 1, y: 47 },  { x: 8, y: 51 },  { x: 15, y: 46 }, { x: 22, y: 52 },
  { x: 29, y: 47 }, { x: 36, y: 53 }, { x: 43, y: 48 }, { x: 50, y: 52 },
  { x: 57, y: 47 }, { x: 64, y: 53 }, { x: 71, y: 48 }, { x: 78, y: 52 },
  { x: 85, y: 47 }, { x: 92, y: 51 },

  { x: 3, y: 70 },  { x: 10, y: 74 }, { x: 17, y: 69 }, { x: 24, y: 75 },
  { x: 31, y: 70 }, { x: 38, y: 76 }, { x: 45, y: 71 }, { x: 52, y: 75 },
  { x: 59, y: 70 }, { x: 66, y: 76 }, { x: 73, y: 71 }, { x: 80, y: 75 },
  { x: 87, y: 70 }, { x: 94, y: 74 }
];

const sizeClasses = [
  "size-normal",
  "size-small",
  "size-large",
  "size-normal",
  "size-xl",
  "size-small",
  "size-normal",
  "size-large"
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCollage() {
  collageGrid.innerHTML = "";

  const shuffledItems = shuffleArray([...mediaItems]);

  shuffledItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.classList.add("collage-item");

    if (item.type === "video") {
      card.classList.add("video-item");
    }

    const sizeClass = sizeClasses[index % sizeClasses.length];
    card.classList.add(sizeClass);

    const position = positions[index % positions.length];

    const extraX = 0;
    const extraY = 0;
    const rotation = ((index % 7) - 3) * 1.4;
    
    card.style.left = `${position.x + extraX}%`;
    card.style.top = `${position.y + extraY}%`;
    card.style.zIndex = `${10 + (index % 20)}`;
    card.style.transform = `rotate(${rotation}deg)`;

    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.loading = "lazy";
      card.appendChild(img);
    }

    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      card.appendChild(video);
    }

    collageGrid.appendChild(card);
  });
}

createCollage();
