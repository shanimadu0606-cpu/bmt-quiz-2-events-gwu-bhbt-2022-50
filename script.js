
const events = [
    {
      title: "Opening Keynote: The Future of AI",
      type: "Keynote",
      date: "2025-11-20T09:00:00",
      description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
      image: "images/placeholder.jpg"
    },
    {
      title: "Advanced JavaScript Workshop",
      type: "Workshop",
      date: "2025-11-20T10:30:00",
      description: "Deep dive into asynchronous JavaScript.",
      image: "images/placeholder.jpg"
    },
    {
      title: "Cybersecurity in Cloud",
      type: "Talk",
      date: "2025-11-20T11:00:00",
      description: "Cloud security threats and defenses.",
      image: "images/placeholder.jpg"
    }
  ];
  
  const container = document.getElementById("event-container");
  
  function loadEvents(list){
    container.innerHTML = "";
    list.forEach(ev=>{
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <img src="${ev.image}" alt="${ev.title}">
        <h2>${ev.title}</h2>
        <p><strong>Type:</strong> ${ev.type}</p>
        <p>${ev.description}</p>
      `;
      container.appendChild(card);
    });
  }
  
  loadEvents(events);
  
  // Filters
  document.querySelectorAll(".filter-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
  
      const type = btn.dataset.type;
      if(type==="All") loadEvents(events);
      else loadEvents(events.filter(e=>e.type===type));
    });
  });
  
  // Dark mode auto + toggle
  const root = document.body;
  
  function applySystemTheme(){
    if(localStorage.getItem("theme")){
      root.classList.toggle("dark", localStorage.getItem("theme")==="dark");
      return;
    }
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", systemDark);
  }
  applySystemTheme();
  
  document.getElementById("themeBtn").addEventListener("click", ()=>{
    root.classList.toggle("dark");
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark":"light");
  });
  