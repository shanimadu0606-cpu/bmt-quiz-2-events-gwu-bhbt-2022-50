const events = [
    // --- Day 1: Nov 20, 2025 ---
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=600&q=80"
    },
    {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&q=80"
    },
    {
        title: "Cybersecurity in the Cloud Era",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80"
    },
    {
        title: "Introduction to Quantum Computing",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600&q=80"
    },
    {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80"
    },

    // --- Day 2: Nov 21, 2025 ---
    {
        title: "The Ethics of Machine Learning",
        type: "Talk",
        date: "2025-11-21T09:30:00",
        description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80"
    },
    {
        title: "Building Scalable Web Apps with Microservices",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "Learn the principles of microservices from lead engineers at a top tech company.",
        image: "https://images.unsplash.com/photo-1504208434309-cb69f4c42b1b?w=600&q=80"
    },
    {
        title: "Mastering React Performance",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80"
    },
    {
        title: "The Psychology of User Experience (UX)",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
        image: "https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?w=600&q=80"
    },
    {
        title: "Panel: The Future of Remote Work in Tech",
        type: "Panel",
        date: "2025-11-21T16:00:00",
        description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
        image: "https://images.unsplash.com/photo-1589994237527-35a1f9ff2495?w=600&q=80"
    },

    // --- Day 3: Nov 22, 2025 ---
    {
        title: "UI/UX Design Fundamentals for Developers",
        type: "Workshop",
        date: "2025-11-22T09:00:00",
        description: "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80"
    },
    {
        title: "From Monolith to Serverless",
        type: "Talk",
        date: "2025-11-22T10:00:00",
        description: "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
        image: "https://images.unsplash.com/photo-1563289037-a69c5a519f0a?w=600&q=80"
    },
    {
        title: "State of Web Assembly in 2025",
        type: "Talk",
        date: "2025-11-22T11:30:00",
        description: "Discover how WebAssembly is enabling near-native performance for web applications.",
        image: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&q=80"
    },
    {
        title: "Data Visualization with D3.js",
        type: "Workshop",
        date: "2025-11-22T13:30:00",
        description: "Learn to create stunning, interactive data visualizations for the web from scratch.",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80"
    },
    {
        title: "Closing Panel: Ask Me Anything with Speakers",
        type: "Panel",
        date: "2025-11-22T16:00:00",
        description: "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80"
    },

    // --- Bonus / Past Events for testing ---
    {
        title: "Pre-Conference Hackathon",
        type: "Social",
        date: "2025-11-19T09:00:00",
        description: "A 24-hour coding challenge with prizes for the most innovative projects. Kicks off before the main event.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
    },
    {
        title: "API Design Best Practices",
        type: "Talk",
        date: "2025-11-21T15:00:00",
        description: "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
    },
    {
        title: "DevOps Culture and Tooling",
        type: "Talk",
        date: "2025-11-20T15:30:00",
        description: "An introduction to the principles of DevOps and the tools that enable continuous integration and deployment.",
        image: "https://images.unsplash.com/photo-1573495783079-52d7a230da93?w=600&q=80"
    },
    {
        title: "Mobile-First Design in Practice",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites.",
        image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bf3f?w=600&q=80"
    },
    {
        title: "Closing Ceremony & Awards",
        type: "Social",
        date: "2025-11-22T17:30:00",
        description: "Join us as we celebrate the best of the conference and announce the hackathon winners.",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80"
    }
];

/**
 * Global timer interval for countdowns.
 */
let countdownInterval;

/**
 * Converts a date string to a UTC format required for Google Calendar links.
 * e.g., 20251120T090000Z
 * @param {string} dateString - The ISO date string.
 * @returns {string} A formatted UTC date string.
 */
function toUTCString(dateString) {
    const date = new Date(dateString);
    return date.toISOString().replace(/-|:|\.\d{3}/g, '');
}

/**
 * Generates a Google Calendar link for an event.
 * @param {object} event - The event object.
 * @returns {string} A URL for adding the event to Google Calendar.
 */
function createGoogleCalendarLink(event) {
    const startTime = toUTCString(event.date);
    // Assuming a 1-hour duration for simplicity
    const endTime = toUTCString(new Date(new Date(event.date).getTime() + 60 * 60 * 1000));
    const url = new URL('https://www.google.com/calendar/render');
    url.searchParams.append('action', 'TEMPLATE');
    url.searchParams.append('text', event.title);
    url.searchParams.append('dates', `${startTime}/${endTime}`);
    url.searchParams.append('details', event.description);
    return url.href;
}

/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The ISO date string.
 * @returns {string} A formatted date and time string.
 */
function formatEventDate(dateString) {
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    return new Date(dateString).toLocaleString('en-US', options);
}

/**
 * Renders events into the container based on current filters.
 * @param {string} searchTerm - The text to filter by.
 * @param {string} dayFilter - The day to filter by ('all', '20', '21', '22').
 * @param {string} filterType - The event type to filter by.
 */
function renderEvents(searchTerm = '', dayFilter = 'all', filterType = 'all') {
    const eventContainer = document.getElementById('event-container');
    const noResults = document.getElementById('no-results');
    if (!eventContainer || !noResults) return;

    // Clear any existing countdown timers before re-rendering
    if (countdownInterval) clearInterval(countdownInterval);

    eventContainer.innerHTML = ''; // Clear existing events

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredEvents = events
        .filter(event => {
            const eventDay = new Date(event.date).getDate().toString();
            const matchesDay = dayFilter === 'all' || eventDay === dayFilter;
            const matchesType = filterType === 'all' || event.type === filterType;
            const matchesSearch = !searchTerm ||
                event.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                event.description.toLowerCase().includes(lowerCaseSearchTerm);
            return matchesDay && matchesType && matchesSearch;
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort events by date

    if (filteredEvents.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }

    filteredEvents.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'event-card';
        const calendarLink = createGoogleCalendarLink(event);

        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-card-content">
                <div class="event-meta">
                    <span>${formatEventDate(event.date)}</span>
                    <span class="event-type type-${event.type.toLowerCase()}">${event.type}</span>
                </div>
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <div class="card-actions">
                    <div class="countdown-display" id="countdown-${index}" data-event-date="${event.date}">
                        Loading countdown...
                    </div>
                    <a href="${calendarLink}" target="_blank" rel="noopener noreferrer" class="add-to-calendar-btn">
                        Add to Calendar
                    </a>
                </div>
            </div>
        `;
        eventContainer.appendChild(card);
    });

    // Start the new countdown timer
    updateCountdowns();
    countdownInterval = setInterval(updateCountdowns, 1000);
}

/**
 * Updates all countdown timers on the page every second.
 */
function updateCountdowns() {
    const countdownElements = document.querySelectorAll('.countdown-display');
    const now = new Date().getTime();

    countdownElements.forEach(el => {
        const eventDate = new Date(el.dataset.eventDate).getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            el.innerHTML = "Event has ended";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        el.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}

/**
 * Toggles the theme between 'light' and 'dark' and saves the preference.
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Persist user's choice
}

/**
 * Sets up all event listeners for the page.
 */
function setupEventListeners() {
    const searchInput = document.getElementById('event-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dayTabs = document.querySelectorAll('.day-tab');
    const themeToggleButton = document.getElementById('theme-toggle');

    let currentDay = 'all';
    let currentFilter = 'all';
    let currentSearch = '';

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderEvents(currentSearch, currentDay, currentFilter);
    });

    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            dayTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentDay = tab.dataset.day;
            renderEvents(currentSearch, currentDay, currentFilter);
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderEvents(currentSearch, currentDay, currentFilter);
        });
    });

    themeToggleButton.addEventListener('click', toggleTheme);
}

// Initial render and setup when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    renderEvents('', 'all', 'all');
    setupEventListeners();
});