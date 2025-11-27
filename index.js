// const Menu = [
//   {
//     MenuItems: ["Home", "About", "Contact us", "Courses"],
//   },
// ];

const CoursesText = [
  {
    Title: "1. The Coaching Certification Model",
    AboutCourses: [
      "In-depth exploration of coaching foundations",
      "Mastery in effective communication strategies",
      "Proficiency in navigating ICF Core Competencies",
    ],
  },
  {
    Title: "2. The Coach’s Learning Model",
    AboutCourses: [
      "In-depth Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification",
      "Mastery in Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom",
      "Through practice and repetition, candidates achieve competence and transcendence in their coaching abilities",
    ],
  },
  {
    Title: "3. The Coaching Engagement Model",
    AboutCourses: [
      "In-depth exploration of coaching foundations",
      "Mastery in effective communication strategies",
      "Proficiency in navigating ICF Core Competencies",
    ],
  },
];

// Отримуємо всі контейнери з класом CoursesContainer
const coursesContainers = document.querySelectorAll(".CoursesContainer");

// Генеруємо HTML-контент для всього масиву
const coursesHTML = CoursesText.map((course) => {
  return `
    <div class="course-item fade-in-on-scroll fade-zoom">
      <h2 class="course-title fade-in-on-scroll fade-zoom">${course.Title}</h2>
      <ul class="course-list">
        ${course.AboutCourses.map(
          (item) => `<li class="course-list-item">${item}</li>`
        ).join("")}
      </ul>
    </div>
  `;
}).join("");

// Вставляємо однаковий контент у всі контейнери
coursesContainers.forEach((container) => {
  container.innerHTML = coursesHTML;
});

// const MenuContainer = document.querySelectorAll(".menuJs");

// const menuHTML = Menu.map((itemMenu) => {
//   return `
//   <div class="menuItems">
//     <h2 >${itemMenu.MenuItems.join(" ")}</h2>
//   </div>`;
// }).join("");

// MenuContainer.forEach((container) => {
//   container.innerHTML = menuHTML;
// });

document.querySelector(".fade-in").classList.add("show");

function checkVisibilyte() {
  const elements = document.querySelectorAll(".fade-in-on-scroll");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkVisibilyte);
window.addEventListener("load", checkVisibilyte);

document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("smoothAppearanceText");
  if (text) {
    const checkVisibility = () => {
      const rect = text.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        text.classList.add("show");
      }
    };

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("load", checkVisibility);
  } else {
    console.error("Element with ID 'smoothAppearanceText' not found.");
  }
});

// Отримуємо контейнер для анімації
const SpellOfWord = document.getElementById("CoursesContainerId_SpellOfWord");

if (SpellOfWord) {
  SpellOfWord.textContent = ""; // Очищаємо контейнер

  // Проходимо по кожному елементу масиву CoursesText
  CoursesText.forEach((course) => {
    const courseContainer = document.createElement("div");
    courseContainer.classList.add("course-item");

    // Додаємо заголовок Title
    const titleElement = document.createElement("h3");
    titleElement.classList.add("course-title");
    titleElement.textContent = course.Title;
    courseContainer.appendChild(titleElement);

    // Додаємо список AboutCourses
    const aboutList = document.createElement("ul");
    aboutList.classList.add("course-list");

    course.AboutCourses.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("course-list-item");
      listItem.textContent = item;
      aboutList.appendChild(listItem);
    });

    courseContainer.appendChild(aboutList);
    SpellOfWord.appendChild(courseContainer);
  });
} else {
  console.error("Element with ID 'CoursesContainerId_SpellOfWord' not found.");
}

// Отримуємо всі <li> елементи
const listItems = document.querySelectorAll("li");

// Додаємо анімацію до кожного <li>
listItems.forEach((item, index) => {
  item.style.opacity = "0"; // Початковий стан
  item.style.transform = "translateY(20px)";
  item.style.transition = `opacity 0.3s ease ${
    index * 0.1
  }s, transform 0.3s ease ${index * 0.1}s`;

  // Додаємо анімацію з затримкою
  setTimeout(() => {
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  }, index * 100);
});
