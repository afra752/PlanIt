// ============================
// 1. COURSE DATA
// ============================

const uosCS = [
  // Year 1, Semester 1 (id: 1)
  { id: "0201102", name: "Arabic Language", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 1, completed: false, grade: null },
  { id: "0202112", name: "English for Academic Purposes", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 1, completed: false, grade: null },
  { id: "1401100", name: "Introduction to IT", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 1, completed: false, grade: null },
  { id: "1440131", name: "Calculus I", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 1, completed: false, grade: null },
  { id: "1430110", name: "Physics I for Sciences", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 1, completed: false, grade: null },
  { id: "1430116", name: "Physics I Lab", credits: 1, prerequisites: [], corequisites: ["1430110"], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 2, semesterPlaced: 1, completed: false, grade: null },

  // Year 1, Semester 2 (id: 2)
  { id: "univ-elective-1", name: "University Elective 1", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 2, completed: false, grade: null },
  { id: "univ-elective-2", name: "University Elective 2", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 2, completed: false, grade: null },
  { id: "1501116", name: "Programming I", credits: 4, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 2, completed: false, grade: null },
  { id: "1440132", name: "Calculus II", credits: 3, prerequisites: ["1440131"], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 2, completed: false, grade: null },
  { id: "1420101", name: "General Chemistry I", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 2, completed: false, grade: null },
  { id: "1420102", name: "General Chemistry I Lab", credits: 1, prerequisites: ["1420101"], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 2, semesterPlaced: 2, completed: false, grade: null },

  // Year 2, Semester 1 (id: 3)
  { id: "0101100", name: "Islamic Culture", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 3, completed: false, grade: null },
  { id: "1501211", name: "Programming II", credits: 3, prerequisites: ["1501116"], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 3, completed: false, grade: null },
  { id: "1440281", name: "Intro. to Probability and Statistics", credits: 3, prerequisites: ["1440131"], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 3, completed: false, grade: null },
  { id: "1501279", name: "Discrete Structures", credits: 3, prerequisites: ["1440131"], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 3, completed: false, grade: null },
  { id: "1502201", name: "Digital Logic Design", credits: 3, prerequisites: ["1501116"], corequisites: [], yearStanding: 2, terms: ["fall","spring"], difficulty: 4, semesterPlaced: 3, completed: false, grade: null },
  { id: "0302200", name: "Fundamentals of Innovation and Entrepreneurship", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 3, completed: false, grade: null },

  // Year 2, Semester 2 (id: 4)
  { id: "0204102", name: "UAE Society", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 1, semesterPlaced: 4, completed: false, grade: null },
  { id: "1501215", name: "Data Structures", credits: 3, prerequisites: ["1501211"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 4, semesterPlaced: 4, completed: false, grade: null },
  { id: "1501246", name: "Object Oriented Design with Java", credits: 3, prerequisites: ["1501211"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 4, completed: false, grade: null },
  { id: "1501252", name: "Computer Organization & Assembly Language", credits: 4, prerequisites: ["1502201"], corequisites: [], yearStanding: null, terms: ["spring"], difficulty: 4, semesterPlaced: 4, completed: false, grade: null },
  { id: "1502202", name: "Digital Logic Design Lab", credits: 1, prerequisites: ["1502201"], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 4, completed: false, grade: null },
  { id: "1440211", name: "Linear Algebra", credits: 3, prerequisites: ["1440131"], corequisites: [], yearStanding: null, terms: ["fall","spring","summer"], difficulty: 3, semesterPlaced: 4, completed: false, grade: null },

  // Year 3, Semester 1 (id: 5)
  { id: "1501330", name: "Intro. to Artificial Intelligence", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall"], difficulty: 3, semesterPlaced: 5, completed: false, grade: null },
  { id: "1501263", name: "Intro. to Database Management Systems", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 5, completed: false, grade: null },
  { id: "1501371", name: "Design & Analysis of Algorithms", credits: 3, prerequisites: ["1501215","1501279"], corequisites: [], yearStanding: null, terms: ["fall"], difficulty: 4, semesterPlaced: 5, completed: false, grade: null },
  { id: "1501366", name: "Software Engineering", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 5, completed: false, grade: null },
  { id: "0202213", name: "Critical Reading and Writing", credits: 3, prerequisites: ["0202112"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 2, semesterPlaced: 5, completed: false, grade: null },

  // Year 3, Semester 2 (id: 6)
  { id: "1501319", name: "Programming Languages & Paradigms", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 6, completed: false, grade: null },
  { id: "1501352", name: "Operating Systems", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 4, semesterPlaced: 6, completed: false, grade: null },
  { id: "1501372", name: "Formal Languages & Automatation Theory", credits: 3, prerequisites: ["1501215","1501279"], corequisites: [], yearStanding: null, terms: ["spring"], difficulty: 4, semesterPlaced: 6, completed: false, grade: null },
  { id: "1501250", name: "Networking Fundamentals", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 6, completed: false, grade: null },
  { id: "1501394", name: "Junior Project in CS", credits: 2, prerequisites: ["1501215"], corequisites: [], yearStanding: 3, terms: ["fall","spring"], difficulty: 2, semesterPlaced: 6, completed: false, grade: null },

  // CO-OP: real plan lists it here, but it's summer-only so can't sit in a spring slot — left unplaced
  { id: "1501397", name: "CO-OP Summer Training", credits: 3, prerequisites: [], corequisites: [], yearStanding: 3, terms: ["summer"], difficulty: 2, semesterPlaced: null, completed: false, grade: null },

  // Year 4, Semester 1 (id: 7)
  { id: "1501322", name: "Professional, Social & Ethical Issues in CS", credits: 2, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 1, semesterPlaced: 7, completed: false, grade: null },
  { id: "1501459", name: "Information Security", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall"], difficulty: 3, semesterPlaced: 7, completed: false, grade: null },
  { id: "1501454", name: "Cloud Computing", credits: 3, prerequisites: ["1501215"], corequisites: [], yearStanding: null, terms: ["fall"], difficulty: 3, semesterPlaced: 7, completed: false, grade: null },
  { id: "1501494", name: "Senior Project in CS", credits: 3, prerequisites: ["1501394"], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 4, semesterPlaced: 7, completed: false, grade: null },

  // Year 4, Semester 2 (id: 8)
  { id: "elective-1", name: "Dept. Specialized Elective 1", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 8, completed: false, grade: null },
  { id: "elective-2", name: "Dept. Specialized Elective 2", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 8, completed: false, grade: null },
  { id: "elective-3", name: "Dept. Specialized Elective 3", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 8, completed: false, grade: null },
  { id: "elective-4", name: "Dept. Specialized Elective 4", credits: 3, prerequisites: [], corequisites: [], yearStanding: null, terms: ["fall","spring"], difficulty: 3, semesterPlaced: 8, completed: false, grade: null },
];

let currentCourses = [];

const yearLabels = ["Freshman", "Sophomore", "Junior", "Senior"];

let semesters = [
  { id: 1, year: 1, term: "fall" },
  { id: 2, year: 1, term: "spring" },
  { id: 3, year: 2, term: "fall" },
  { id: 4, year: 2, term: "spring" },
  { id: 5, year: 3, term: "fall" },
  { id: 6, year: 3, term: "spring" },
  { id: 7, year: 4, term: "fall" },
  { id: 8, year: 4, term: "spring" },
];
let nextSemesterId = 9;

// Tracks which year currently has its inline "add semester" form open (or null)
let addingSemesterForYear = null;



// ============================
// 2. GRABBING PAGE ELEMENTS
// ============================

const planChoice = document.getElementById("plan-choice");
const plannerWorkspace = document.getElementById("planner-workspace");
const courseListEl = document.getElementById("course-list");
const semesterGridEl = document.getElementById("semester-grid");

const btnScratch = document.getElementById("btn-scratch");
const btnPreset = document.getElementById("btn-preset");
const btnBack = document.getElementById("btn-back");

const btnAddCourse = document.getElementById("btn-add-course");
const addCourseForm = document.getElementById("add-course-form");
const btnSaveCourse = document.getElementById("btn-save-course");
const btnCancelCourse = document.getElementById("btn-cancel-course");
const inputName = document.getElementById("input-name");
const inputCredits = document.getElementById("input-credits");
const inputPrereqs = document.getElementById("input-prereqs");
const inputYear = document.getElementById("input-year");
const inputDifficulty = document.getElementById("input-difficulty");


// ============================
// 3. HELPERS
// ============================

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCourseNames(idArray) {
  if (!idArray || idArray.length === 0) return "None";
  return idArray
    .map(id => {
      const found = currentCourses.find(c => c.id === id);
      return found ? found.name : id;
    })
    .join(", ");
}
function switchScreen(hideEl, showEl) {
  hideEl.classList.add("screen-fade-out");
  setTimeout(() => {
    hideEl.style.display = "none";
    hideEl.classList.remove("screen-fade-out");
    showEl.style.display = "block";
    showEl.classList.add("screen-fade-in");
    setTimeout(() => showEl.classList.remove("screen-fade-in"), 350);
  }, 250);
}
// Ranks a semester so we can compare "earlier than" across fall/spring/summer and custom semesters.
// Same year: fall < spring < summer. Different years: lower year always earlier.
function getSemesterRank(semesterId) {
  const semester = semesters.find(s => s.id === semesterId);
  if (!semester) return -1;
  const termOrder = { fall: 0, spring: 1, summer: 2 };
  return semester.year * 10 + termOrder[semester.term];
}

// ============================
// 4. RENDERING
// ============================

function buildSemesterGrid() {
  semesterGridEl.innerHTML = "";
  for (let yearNum = 1; yearNum <= 4; yearNum++) {
    const yearGroup = document.createElement("div");
    yearGroup.className = "year-group";

    const yearTitle = document.createElement("h3");
    yearTitle.className = "year-label";
    yearTitle.textContent = yearLabels[yearNum - 1];
    yearGroup.appendChild(yearTitle);

    const semesterRow = document.createElement("div");
    semesterRow.className = "semester-row";

    semesters.filter(sem => sem.year === yearNum).forEach(sem => {
      const col = document.createElement("div");
      col.className = "semester-column";
      col.innerHTML = `
        <h4>${capitalize(sem.term)}</h4>
        <div class="semester-dropzone" data-semester-id="${sem.id}"></div>
      `;
      semesterRow.appendChild(col);
    });

    // Either the ghost "+ Add Semester" card, or the open inline form, for this year
    if (addingSemesterForYear === yearNum) {
      const formCard = document.createElement("div");
      formCard.className = "add-semester-inline";
      formCard.innerHTML = `
        <select class="inline-term-select">
          <option value="fall">Fall</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
        </select>
        <div class="form-btn-row">
          <button class="btn-secondary-small btn-inline-cancel">Cancel</button>
          <button class="btn-primary-small btn-inline-add" data-year="${yearNum}">Add</button>
        </div>
      `;
      semesterRow.appendChild(formCard);
    } else {
      const ghostCard = document.createElement("div");
      ghostCard.className = "add-semester-ghost";
      ghostCard.dataset.year = yearNum;
      ghostCard.textContent = "+ Add Semester";
      semesterRow.appendChild(ghostCard);
    }

    yearGroup.appendChild(semesterRow);
    semesterGridEl.appendChild(yearGroup);
  }
}

function createCourseCard(course) {
  const isCustom = course.id.startsWith("custom-");

  const card = document.createElement("div");
  card.className = "course-card";
  card.setAttribute("draggable", "true");
  card.dataset.id = course.id;

  card.innerHTML = `
    <div class="course-card-header">
      <strong>${course.name}</strong>
      ${isCustom ? `<button class="btn-delete" data-id="${course.id}" title="Delete course">🗑</button>` : ""}
    </div>
    <div class="course-details">
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Prerequisites:</strong> ${getCourseNames(course.prerequisites)}</p>
      <p><strong>Corequisites:</strong> ${getCourseNames(course.corequisites)}</p>
      <p><strong>Year Standing:</strong> ${course.yearStanding ? yearLabels[course.yearStanding - 1] + "+" : "None"}</p>
      <p><strong>Terms:</strong> ${course.terms.join(", ")}</p>
      <p><strong>Difficulty:</strong> ${"★".repeat(course.difficulty)}${"☆".repeat(5 - course.difficulty)}</p>
    </div>
  `;
  return card;
}

function renderCourseSidebar() {
  courseListEl.innerHTML = "";
  currentCourses.filter(c => c.semesterPlaced === null).forEach(course => {
    courseListEl.appendChild(createCourseCard(course));
  });
}

function renderPlacedCourses() {
  currentCourses.filter(c => c.semesterPlaced !== null).forEach(course => {
    const zone = document.querySelector(`.semester-dropzone[data-semester-id="${course.semesterPlaced}"]`);
    if (zone) zone.appendChild(createCourseCard(course));
  });
}

function renderPlannerWorkspace() {
  buildSemesterGrid();
  renderPlacedCourses();
  renderCourseSidebar();
  initializeDragAndDrop();
}


// ============================
// 5. DRAG AND DROP
// ============================

let sortableInstances = [];

function initializeDragAndDrop() {
  sortableInstances.forEach(instance => instance.destroy());
  sortableInstances = [];

  const sidebarSortable = new Sortable(courseListEl, {
    group: "courses",
    animation: 150,
    onEnd: handleDragEnd
  });
  sortableInstances.push(sidebarSortable);

  document.querySelectorAll(".semester-dropzone").forEach(zone => {
    const zoneSortable = new Sortable(zone, {
      group: "courses",
      animation: 150,
      onEnd: handleDragEnd
    });
    sortableInstances.push(zoneSortable);
  });
}

function handleDragEnd(evt) {
  const courseId = evt.item.dataset.id;
  const course = currentCourses.find(c => c.id === courseId);
  if (!course) return;

  const droppedInto = evt.to;

  if (droppedInto.classList.contains("semester-dropzone")) {
    const semesterId = parseInt(droppedInto.dataset.semesterId);
    const semester = semesters.find(s => s.id === semesterId);
    if (!semester) return;

    if (course.yearStanding && semester.year < course.yearStanding) {
      alert(`${course.name} requires ${yearLabels[course.yearStanding - 1]} standing or later.`);
      evt.from.appendChild(evt.item);
      return;
    }

    if (!course.terms.includes(semester.term)) {
      alert(`${course.name} is not offered in ${capitalize(semester.term)}.`);
      evt.from.appendChild(evt.item);
      return;
    }

    // NEW: check that every prerequisite is placed in a strictly earlier semester
    const targetRank = getSemesterRank(semesterId);
    for (const prereqId of course.prerequisites) {
      const prereqCourse = currentCourses.find(c => c.id === prereqId);
      if (!prereqCourse) continue; // skip if prereq somehow doesn't exist in the list

      if (prereqCourse.semesterPlaced === null) {
        alert(`${course.name} requires ${prereqCourse.name} to be placed in an earlier semester first.`);
        evt.from.appendChild(evt.item);
        return;
      }

      const prereqRank = getSemesterRank(prereqCourse.semesterPlaced);
      if (prereqRank >= targetRank) {
        alert(`${course.name} requires ${prereqCourse.name} to be completed in an earlier semester.`);
        evt.from.appendChild(evt.item);
        return;
      }
    }
    // Corequisites: must be placed in the same semester or earlier (never later)
    for (const coreqId of course.corequisites) {
      const coreqCourse = currentCourses.find(c => c.id === coreqId);
      if (!coreqCourse) continue;

      if (coreqCourse.semesterPlaced === null) {
        alert(`${course.name} requires ${coreqCourse.name} to be placed in the same semester or earlier.`);
        evt.from.appendChild(evt.item);
        return;
      }

      const coreqRank = getSemesterRank(coreqCourse.semesterPlaced);
      if (coreqRank > targetRank) {
        alert(`${course.name} requires ${coreqCourse.name} to be placed in the same semester or earlier, not after.`);
        evt.from.appendChild(evt.item);
        return;
      }
    }
    course.semesterPlaced = semesterId;
  } else {
    course.semesterPlaced = null;
  }

}


// ============================
// 6. PLAN CHOICE + BACK BUTTON
// ============================

function startPlanner(mode) {
  howToPlanModal.style.display = "none";
  confirmDeleteModal.style.display = "none";
  nameplanModal.style.display = "none";

  currentMode = mode;
  currentPlanId = null;
  if (mode === "preset") {
    const raw = localStorage.getItem("planit-preset");
    if (raw) {
      const saved = JSON.parse(raw);
      currentCourses = saved.courses;
      semesters = saved.semesters;
      nextSemesterId = saved.nextSemesterId;
    } else {
      currentCourses = JSON.parse(JSON.stringify(uosCS));
      semesters = [
        { id: 1, year: 1, term: "fall" }, { id: 2, year: 1, term: "spring" },
        { id: 3, year: 2, term: "fall" }, { id: 4, year: 2, term: "spring" },
        { id: 5, year: 3, term: "fall" }, { id: 6, year: 3, term: "spring" },
        { id: 7, year: 4, term: "fall" }, { id: 8, year: 4, term: "spring" },
      ];
      nextSemesterId = 9;
    }
  } else {
    currentCourses = [];
    semesters = [
      { id: 1, year: 1, term: "fall" }, { id: 2, year: 1, term: "spring" },
      { id: 3, year: 2, term: "fall" }, { id: 4, year: 2, term: "spring" },
      { id: 5, year: 3, term: "fall" }, { id: 6, year: 3, term: "spring" },
      { id: 7, year: 4, term: "fall" }, { id: 8, year: 4, term: "spring" },
    ];
    nextSemesterId = 9;
  }

  switchScreen(planChoice, plannerWorkspace);
  document.getElementById("plan-title").textContent =
    mode === "preset" ? "University of Sharjah — Computer Science" : "My Custom Plan";
  renderPlannerWorkspace();
  setTimeout(() => { howToPlanModal.style.display = "flex"; }, 900);
}

btnScratch.addEventListener("click", () => startPlanner("scratch"));
btnPreset.addEventListener("click", () => startPlanner("preset"));

btnBack.addEventListener("click", () => {
  switchScreen(plannerWorkspace, planChoice);
  refreshSavedBadges();
});


// ============================
// 7. ADD COURSE FORM
// ============================

btnAddCourse.addEventListener("click", () => {
  const isHidden = addCourseForm.style.display === "none";
  addCourseForm.style.display = isHidden ? "flex" : "none";
  if (isHidden) populatePrereqAndCoreqOptions();
});

function populatePrereqAndCoreqOptions() {
  inputPrereqs.innerHTML = "";
  inputCoreqs.innerHTML = "";
  currentCourses.forEach(course => {
    const opt1 = document.createElement("option");
    opt1.value = course.id;
    opt1.textContent = course.name;
    inputPrereqs.appendChild(opt1);

    const opt2 = opt1.cloneNode(true);
    inputCoreqs.appendChild(opt2);
  });
}
function resetAndCloseForm() {
  inputName.value = "";
  inputCredits.value = "";
  inputYear.value = "";
  inputDifficulty.value = "3";
  document.querySelectorAll(".term-check").forEach(cb => cb.checked = false);
  addCourseForm.style.display = "none";
}

btnSaveCourse.addEventListener("click", () => {
  const name = inputName.value.trim();
  const credits = parseInt(inputCredits.value);

  if (!name || isNaN(credits)) {
    alert("Please enter at least a course name and credit count.");
    return;
  }

  const selectedPrereqs = Array.from(inputPrereqs.selectedOptions).map(opt => opt.value);
  const selectedTerms = Array.from(document.querySelectorAll(".term-check:checked")).map(cb => cb.value);

  const newCourse = {
    id: "custom-" + Date.now(),
    name: name,
    credits: credits,
    prerequisites: selectedPrereqs,
    corequisites: Array.from(inputCoreqs.selectedOptions).map(opt => opt.value),
    yearStanding: inputYear.value ? parseInt(inputYear.value) : null,
    terms: selectedTerms.length ? selectedTerms : ["fall", "spring"],
    difficulty: parseInt(inputDifficulty.value),
    semesterPlaced: null,
    completed: false,
    grade: null
  };

  currentCourses.push(newCourse);
  renderPlannerWorkspace();
  resetAndCloseForm();
});

btnCancelCourse.addEventListener("click", resetAndCloseForm);


// ============================
// 8. SHARED COURSE CARD ACTIONS (delete / edit terms)
// Used by both the sidebar and the semester grid, since cards appear in both
// ============================

function handleCourseCardClick(e) {
  if (e.target.classList.contains("btn-delete")) {
    const idToDelete = e.target.dataset.id;
    currentCourses = currentCourses.filter(c => c.id !== idToDelete);
    renderPlannerWorkspace();
  }
}

courseListEl.addEventListener("click", handleCourseCardClick);


// ============================
// 9. SEMESTER GRID ACTIONS (add semester per year)
// ============================

semesterGridEl.addEventListener("click", (e) => {
  // Course-card buttons can also appear here (placed courses), so reuse the same handler
  handleCourseCardClick(e);

  if (e.target.classList.contains("add-semester-ghost")) {
    addingSemesterForYear = parseInt(e.target.dataset.year);
    renderPlannerWorkspace();
    return;
  }

  if (e.target.classList.contains("btn-inline-cancel")) {
    addingSemesterForYear = null;
    renderPlannerWorkspace();
    return;
  }

  if (e.target.classList.contains("btn-inline-add")) {
    const year = parseInt(e.target.dataset.year);
    const termSelect = e.target.closest(".add-semester-inline").querySelector(".inline-term-select");
    semesters.push({ id: nextSemesterId++, year: year, term: termSelect.value });
    addingSemesterForYear = null;
    renderPlannerWorkspace();
  }
});

const howToPlanModal = document.getElementById("how-to-plan-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnGotIt = document.getElementById("btn-got-it");

function closeHowToPlanModal() {
  howToPlanModal.style.display = "none";
}

btnCloseModal.addEventListener("click", closeHowToPlanModal);
btnGotIt.addEventListener("click", closeHowToPlanModal);


// ============================
// SAVE / LOAD PLAN (localStorage)
// ============================

const btnSavePlan = document.getElementById("btn-save-plan");
const nameplanModal = document.getElementById("name-plan-modal");
const inputPlanName = document.getElementById("input-plan-name");
const btnConfirmPlanName = document.getElementById("btn-confirm-plan-name");
const confirmDeleteModal = document.getElementById("confirm-delete-modal");
const btnCancelDelete = document.getElementById("btn-cancel-delete");
const btnConfirmDelete = document.getElementById("btn-confirm-delete");

let currentMode = null;      // "preset" or "scratch"
let currentPlanId = null;    // null for UOS preset, or a saved plan's unique id
let planIdPendingDelete = null;

function getSavedPlans() {
  const raw = localStorage.getItem("planit-saved-plans");
  return raw ? JSON.parse(raw) : [];
}

function setSavedPlans(plans) {
  localStorage.setItem("planit-saved-plans", JSON.stringify(plans));
}

function savePlan() {
  if (currentMode === "preset") {
    localStorage.setItem("planit-preset", JSON.stringify({
      courses: currentCourses, semesters: semesters, nextSemesterId: nextSemesterId
    }));
    alert("Plan saved!");
    return;
  }

  // Scratch mode: brand new plan needs a name first
  if (currentPlanId === null) {
    inputPlanName.value = "";
    nameplanModal.style.display = "flex";
    return;
  }

  // Already-named plan: just update it silently
  const plans = getSavedPlans();
  const plan = plans.find(p => p.id === currentPlanId);
  if (plan) {
    plan.courses = currentCourses;
    plan.semesters = semesters;
    plan.nextSemesterId = nextSemesterId;
    setSavedPlans(plans);
    alert("Plan saved!");
  }
}

btnConfirmPlanName.addEventListener("click", () => {
  const name = inputPlanName.value.trim();
  if (!name) {
    alert("Please enter a name for your plan.");
    return;
  }

  const newPlan = {
    id: "plan-" + Date.now(),
    name: name,
    courses: currentCourses,
    semesters: semesters,
    nextSemesterId: nextSemesterId,
    createdAt: new Date().toLocaleDateString()
  };

  const plans = getSavedPlans();
  plans.push(newPlan);
  setSavedPlans(plans);

  currentPlanId = newPlan.id;
  document.getElementById("plan-title").textContent = newPlan.name;
  nameplanModal.style.display = "none";
});

btnSavePlan.addEventListener("click", savePlan);

function renderSavedPlanCards() {
  // Remove any previously rendered saved-plan cards before re-adding
  document.querySelectorAll(".saved-plan-card").forEach(el => el.remove());

  const plans = getSavedPlans();
  plans.forEach(plan => {
    const card = document.createElement("button");
    card.className = "choice-card saved-plan-card";
    card.innerHTML = `
      <div class="choice-icon">📁</div>
      <h3>${plan.name}</h3>
      <p>Continue where you left off.</p>
      <span class="saved-plan-date">Created ${plan.createdAt}</span>
      <button class="btn-delete-plan" data-id="${plan.id}" title="Delete plan">🗑 Delete</button>
    `;
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-delete-plan")) return; // handled separately below
      loadSavedPlan(plan.id);
    });
    document.getElementById("choice-cards-container").appendChild(card);
  });

  // Wire up delete buttons (event delegation would also work, but list is small so this is fine)
  document.querySelectorAll(".btn-delete-plan").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't also trigger the card's "load" click
      planIdPendingDelete = btn.dataset.id;
      confirmDeleteModal.style.display = "flex";
    });
  });
}

btnCancelDelete.addEventListener("click", () => {
  planIdPendingDelete = null;
  confirmDeleteModal.style.display = "none";
});

btnConfirmDelete.addEventListener("click", () => {
  const plans = getSavedPlans().filter(p => p.id !== planIdPendingDelete);
  setSavedPlans(plans);
  planIdPendingDelete = null;
  confirmDeleteModal.style.display = "none";
  renderSavedPlanCards();
});

function loadSavedPlan(planId) {
 howToPlanModal.style.display = "none";
  confirmDeleteModal.style.display = "none";
  nameplanModal.style.display = "none";

  const plan = getSavedPlans().find(p => p.id === planId);  if (!plan) return;

  currentMode = "scratch";
  currentPlanId = plan.id;
  currentCourses = plan.courses;
  semesters = plan.semesters;
  nextSemesterId = plan.nextSemesterId;

  switchScreen(planChoice, plannerWorkspace);
  document.getElementById("plan-title").textContent = plan.name;
  renderPlannerWorkspace();
  setTimeout(() => { howToPlanModal.style.display = "flex"; }, 900);
}

function refreshSavedBadges() {
  document.getElementById("badge-preset").style.display = localStorage.getItem("planit-preset") ? "block" : "none";
  renderSavedPlanCards();
}
refreshSavedBadges();


const inputCoreqs = document.getElementById("input-coreqs");


