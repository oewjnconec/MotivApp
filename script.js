const phrases = [
  {
    frase: "La mejor manera de predecir el futuro es creándolo.",
    autor: "Peter Drucker",
  },
  {
    frase: "No cuentes los días, haz que los días cuenten.",
    autor: "Muhammad Ali",
  },
  {
    frase:
      "Elige un trabajo que te guste y no tendrás que trabajar ni un día de tu vida.",
    autor: "Confucio",
  },
  {
    frase:
      "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    autor: "Albert Schweitzer",
  },
  {
    frase:
      "La perseverancia no es una carrera larga; son muchas carreras cortas, una tras otra.",
    autor: "Walter Elliot",
  },
  {
    frase: "Cree que puedes y ya estás a medio camino.",
    autor: "Theodore Roosevelt",
  },
  {
    frase:
      "No te rindas. Sufre ahora y vive el resto de tu vida como un campeón.",
    autor: "Muhammad Ali",
  },
  { frase: "Haz de cada día tu obra maestra.", autor: "John Wooden" },
  {
    frase:
      "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    autor: "Vidal Sassoon",
  },
  {
    frase:
      "El talento gana juegos, pero el trabajo en equipo y la inteligencia ganan campeonatos.",
    autor: "Michael Jordan",
  },
  {
    frase: "No mires el reloj; haz lo que él hace. Sigue adelante.",
    autor: "Sam Levenson",
  },
  {
    frase:
      "El trabajo duro supera al talento cuando el talento no trabaja duro.",
    autor: "Tim Notke",
  },
  {
    frase: "La disciplina es el puente entre las metas y los logros.",
    autor: "Jim Rohn",
  },
  {
    frase:
      "La mejor preparación para un buen trabajo mañana es hacer un buen trabajo hoy.",
    autor: "Elbert Hubbard",
  },
  { frase: "Si puedes soñarlo, puedes hacerlo.", autor: "Walt Disney" },
  {
    frase:
      "La oportunidad está perdida por la mayoría de las personas porque está vestida con overoles y parece trabajo.",
    autor: "Thomas Edison",
  },
  {
    frase: "Nunca es demasiado tarde para ser lo que podrías haber sido.",
    autor: "George Eliot",
  },
  {
    frase:
      "La motivación te impulsa a empezar, el hábito te mantiene en marcha.",
    autor: "Jim Ryun",
  },
  { frase: "Sé tan bueno que no puedan ignorarte.", autor: "Steve Martin" },
  {
    frase:
      "El trabajo en equipo divide el trabajo y multiplica los resultados.",
    autor: "Anónimo",
  },
  {
    frase:
      "Grandes obras no son realizadas por la fuerza, sino por la perseverancia.",
    autor: "Samuel Johnson",
  },
  {
    frase: "El único modo de hacer un gran trabajo es amar lo que haces.",
    autor: "Steve Jobs",
  },
  {
    frase:
      "Haz las cosas difíciles mientras son fáciles y haz las grandes cosas mientras son pequeñas.",
    autor: "Lao Tse",
  },
  {
    frase: "Lo que no se empieza hoy nunca se termina mañana.",
    autor: "Johann Wolfgang von Goethe",
  },
  {
    frase: "Tu actitud, no tu aptitud, determinará tu altitud.",
    autor: "Zig Ziglar",
  },
  {
    frase: "La acción es la llave fundamental de todo éxito.",
    autor: "Pablo Picasso",
  },
  {
    frase:
      "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.",
    autor: "Jimmy Johnson",
  },
  {
    frase: "Nunca soñé con el éxito. Trabajé para lograrlo.",
    autor: "Estée Lauder",
  },
  { frase: "Cada día es una oportunidad para ser mejor.", autor: "Anónimo" },
  { frase: "La calidad no es un acto, es un hábito.", autor: "Aristóteles" },
];

const fraseElement = document.getElementById("quote");
const autorElement = document.getElementById("author");
const button = document.getElementById("generate");
const date = document.getElementById("date");

const rawDate = new Date().toLocaleDateString("es-ES", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

date.innerHTML = rawDate.charAt(0).toUpperCase() + rawDate.slice(1);

// Función para actualizar la hora cada segundo

let showColon = true; // Variable para alternar el separador
function updateclock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;

  const colonElement = document.getElementById("colon");
  colonElement.style.opacity = showColon ? 1 : 0; // Mostrar u ocultar el separador ": "

  showColon = !showColon; // Alternar el separador entre ":" y " "
}

setInterval(updateclock, 1000);
updateclock(); // Llamar a la función una vez al inicio

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);

  // 1. Quitar la clase de animación
  fraseElement.classList.remove("show");
  autorElement.classList.remove("show"); // Opcional si quieres que autor también se anime

  // 2. Esperar un poquito para reiniciar la animación
  setTimeout(() => {
    // 3. Cambiar el texto
    fraseElement.textContent = phrases[randomIndex].frase;
    autorElement.textContent = `~ ${phrases[randomIndex].autor}`;

    // 4. Volver a aplicar la clase de animación
    fraseElement.classList.add("show");
    autorElement.classList.add("show"); // Opcional si quieres que autor también se anime
  }, 50); // 50 milisegundos
});

const lat = 20.6597;
const lon = -103.3496;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=America%2FMexico_City`;
// Mapa de códigos de clima a descripciones
const weatherCodes = {
  0: "Despejado",
  1: "Pocas nubes",
  2: "Nubes dispersas",
  3: "Nublado",
  45: "Niebla",
  48: "Niebla helada",
  51: "Lluvia ligera",
  53: "Lluvia moderada",
  55: "Lluvia fuerte",
  56: "Lluvia helada ligera",
  57: "Lluvia helada fuerte",
  61: "Chubascos",
  63: "Chubascos moderados",
  65: "Chubascos fuertes",
  66: "Lluvia helada ligera",
  67: "Lluvia helada fuerte",
  71: "Nieve ligera",
  73: "Nieve moderada",
  75: "Nieve fuerte",
  77: "Granizo",
  80: "Chubascos de lluvia",
  81: "Chubascos fuertes de lluvia",
  82: "Lluvia de granizo",
  85: "Nieve ligera",
  86: "Nieve fuerte",
  95: "Tormenta eléctrica",
  96: "Tormenta eléctrica con granizo",
  99: "Tormenta eléctrica con granizo fuerte",
};

const weatherIcons = {
  0: "sunny.png",
  1: "cloud.png",
  2: "clouds.png",
  3: "clouds.png",
  45: "🌫️",
  48: "🌫️",
  51: "light-rain.png",
  53: "🌦️",
  55: "🌧️",
  56: "❄️",
  57: "❄️",
  61: "rain.png",
  63: "🌧️",
  65: "🌧️",
  66: "❄️",
  67: "❄️",
  71: "❄️",
  73: "❄️",
  75: "❄️",
  80: "thunder.png",
};

// Función para obtener y mostrar el clima
function obtenerClima(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const urlUbicacion = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo obtener el clima");
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.current_weather.temperature;
      const code = data.current_weather.weathercode;
      const viento = data.current_weather.windspeed;
      const desc = weatherCodes[code] || "Descripción no disponible";

      document.getElementById(
        "temperature"
      ).textContent = `Temperatura: ${temp}°C`;

      const iconPath = weatherIcons[code]
        ? `img/${weatherIcons[code]}`
        : [weatherIcons[code]];
      document.getElementById("icon").src = iconPath;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("temperature").textContent =
        "No se pudo obtener el clima.";
    });

  // Obtener la ubicación
  fetch(urlUbicacion, {
    headers: {
      "User-Agent": "MotivAPP/1.0",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const ciudad =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        "Ubicación no disponible";
      document.getElementById("location").textContent = ` ${ciudad}`;
    })
    .catch(() => {
      document.getElementById("location").textContent =
        "Ubicación no disponible";
    });
}

// Usar la geolocalización del navegador
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      obtenerClima(lat, lon);
    },
    (error) => {
      console.error("Error al obtener la ubicación:", error);
      document.getElementById("temperature").textContent =
        "No se pudo obtener la ubicación.";
    }
  );
} else {
  document.getElementById("temperature").textContent =
    "La geolocalización no está soportada por este navegador.";
}
