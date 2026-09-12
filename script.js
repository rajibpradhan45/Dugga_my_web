// ======================================
// DUGGA 1.0 — PHASE 1
// Cinematic Homepage Animations
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // HERO ENTRANCE ANIMATION
    // -------------------------------

    const heroContent = document.querySelector(".hero-content");
    const pandal = document.querySelector(".pandal");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(35px)";

    pandal.style.opacity = "0";
    pandal.style.transform = "translateX(-50%) translateY(40px)";

    setTimeout(() => {
        heroContent.style.transition =
            "opacity 1.4s ease, transform 1.4s ease";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        pandal.style.transition =
            "opacity 1.8s ease, transform 1.8s ease";

        pandal.style.opacity = "1";
        pandal.style.transform =
            "translateX(-50%) translateY(0)";
    }, 700);


    // -------------------------------
    // FLOATING PARTICLES
    // -------------------------------

    const hero = document.querySelector(".hero");

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 6 + "s";

        particle.style.animationDuration =
            4 + Math.random() * 5 + "s";

        hero.appendChild(particle);
    }


    // -------------------------------
    // MOUSE PARALLAX
    // -------------------------------

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 2;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 2;

        if (window.innerWidth > 768) {

            pandal.style.marginLeft =
                `${x * 10}px`;

            pandal.style.marginTop =
                `${y * 6}px`;
        }
    });


    // -------------------------------
    // BUTTON INTERACTION
    // -------------------------------

    const buttons =
        document.querySelectorAll(".hero-buttons button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.95)";

            setTimeout(() => {
                button.style.transform = "";
            }, 150);

        });

    });

});

// ======================================
// PUJA COUNTDOWN
// ======================================

const pujaDate = new Date("2026-10-17T00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = pujaDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
const startJourneyBtn = document.getElementById("startJourneyBtn");

if (startJourneyBtn) {
    startJourneyBtn.addEventListener("click", () => {
        window.location.href = "clubs.html";
    });
}
// ============================================================
// DUGGA — PUJA LOCATION DATABASE
// ============================================================
// Source-backed initial dataset
//
// HOWRAH:
//   41 Puja entries from Indian Festival Diary's 2025 Howrah list.
//
// SILIGURI:
//   82 Puja Mandaps from Siliguri Police Commissionerate's
//   official Durga Puja Guide Map 2024.
//
// IMPORTANT:
//   - 2026 themes are NOT guessed.
//   - Latitude/longitude are not invented.
//   - Google Maps links use place-name searches.
//   - Later we can add verified coordinates.
// ============================================================


const pujaClubs = [

    // ========================================================
    // HOWRAH — 41 PUJAS
    // ========================================================

    {
        id: "howrah-001",
        name: "Arabinda Nagar Arabinda Sangha Sarbojanin Durga Utsav",
        district: "Howrah",
        area: "Arabinda Nagar",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Arabinda Nagar Arabinda Sangha Sarbojanin Durga Utsav, Howrah"
    },

    {
        id: "howrah-002",
        name: "Arupara Sarbojanin Durgotsab Committee",
        district: "Howrah",
        area: "Arupara",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Arupara Sarbojanin Durgotsab Committee, Howrah"
    },

    {
        id: "howrah-003",
        name: "Azad Hind Sangha Durga Puja",
        district: "Howrah",
        area: "Howrah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Azad Hind Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-004",
        name: "Bachhri Durga Puja",
        district: "Howrah",
        area: "Bachhri",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Bachhri Durga Puja, Howrah"
    },

    {
        id: "howrah-005",
        name: "Bagnan Nabaneer Club Durga Puja",
        district: "Howrah",
        area: "Bagnan",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Bagnan Nabaneer Club Durga Puja, Howrah"
    },

    {
        id: "howrah-006",
        name: "Balitikuri Netaji Balak Sangha",
        district: "Howrah",
        area: "Balitikuri",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Balitikuri Netaji Balak Sangha, Howrah"
    },

    {
        id: "howrah-007",
        name: "Bantra Mohila Sangha Durga Puja",
        district: "Howrah",
        area: "Bantra",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Bantra Mohila Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-008",
        name: "Bantra Nabin Sangha Durga Puja",
        district: "Howrah",
        area: "Bantra",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Bantra Nabin Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-009",
        name: "Batore 41er Pally Sarbojanin",
        district: "Howrah",
        area: "Batore",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Batore 41er Pally Sarbojanin, Howrah"
    },

    {
        id: "howrah-010",
        name: "Belepole Adams Club",
        district: "Howrah",
        area: "Belepole",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Belepole Adams Club Durga Puja, Howrah"
    },

    {
        id: "howrah-011",
        name: "Brindabon Netaji Balak Sangha Durga Puja",
        district: "Howrah",
        area: "Howrah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Brindabon Netaji Balak Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-012",
        name: "Daspara Panch Bhai Sangha",
        district: "Howrah",
        area: "Daspara",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Daspara Panch Bhai Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-013",
        name: "Dharmatala Durga Puja",
        district: "Howrah",
        area: "Dharmatala",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Dharmatala Durga Puja, Howrah"
    },

    {
        id: "howrah-014",
        name: "Ghoshpara Sankalpa Sangha Durga Puja",
        district: "Howrah",
        area: "Ghoshpara",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Ghoshpara Sankalpa Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-015",
        name: "Ghoshpara Young Stars Durga Puja",
        district: "Howrah",
        area: "Ghoshpara",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Ghoshpara Young Stars Durga Puja, Howrah"
    },

    {
        id: "howrah-016",
        name: "Guha Road Sarbojanin Mahapuja",
        district: "Howrah",
        area: "Guha Road",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Guha Road Sarbojanin Mahapuja, Howrah"
    },

    {
        id: "howrah-017",
        name: "Howrah Jatiya Sevadal Club Durga Puja",
        district: "Howrah",
        area: "Howrah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Howrah Jatiya Sevadal Club Durga Puja"
    },

    {
        id: "howrah-018",
        name: "Ichapur Bayam Samity Durga Puja",
        district: "Howrah",
        area: "Ichapur",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Ichapur Bayam Samity Durga Puja, Howrah"
    },

    {
        id: "howrah-019",
        name: "Ichapur Mitali Sangha Durga Puja",
        district: "Howrah",
        area: "Ichapur",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Ichapur Mitali Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-020",
        name: "Ichapur Sanghamitra Durga Puja",
        district: "Howrah",
        area: "Ichapur",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Ichapur Sanghamitra Durga Puja, Howrah"
    },

    {
        id: "howrah-021",
        name: "Jhorehat Pachal Para Puja Committee",
        district: "Howrah",
        area: "Jhorehat",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Jhorehat Pachal Para Puja Committee, Howrah"
    },

    {
        id: "howrah-022",
        name: "Kamardanga Sisu Sangha Durga Puja",
        district: "Howrah",
        area: "Kamardanga",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kamardanga Sisu Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-023",
        name: "Kamardanga Sitalatala Barowari Durga Puja",
        district: "Howrah",
        area: "Kamardanga",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kamardanga Sitalatala Barowari Durga Puja, Howrah"
    },

    {
        id: "howrah-024",
        name: "Kashipur Yubo Gosthi",
        district: "Howrah",
        area: "Kashipur",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kashipur Yubo Gosthi Durga Puja, Howrah"
    },

    {
        id: "howrah-025",
        name: "Kazi Bagan Lane Durga Puja",
        district: "Howrah",
        area: "Kazi Bagan Lane",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kazi Bagan Lane Durga Puja, Howrah"
    },

    {
        id: "howrah-026",
        name: "Kishor Sangsad Club Durga Puja",
        district: "Howrah",
        area: "Howrah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kishor Sangsad Club Durga Puja, Howrah"
    },

    {
        id: "howrah-027",
        name: "Madhusudan Das Lane & Bye Lane Sarbojanin Durgotsab",
        district: "Howrah",
        area: "Madhusudan Das Lane",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Madhusudan Das Lane Sarbojanin Durgotsab, Howrah"
    },

    {
        id: "howrah-028",
        name: "Makardah Karuri Para Sarbojanin Durgotsav",
        district: "Howrah",
        area: "Makardah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Makardah Karuri Para Sarbojanin Durgotsav, Howrah"
    },

    {
        id: "howrah-029",
        name: "Milan Sangha Durga Puja",
        district: "Howrah",
        area: "Howrah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Milan Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-030",
        name: "Nabanagar Badamtala Sarbojanin Durgotsab",
        district: "Howrah",
        area: "Nabanagar",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Nabanagar Badamtala Sarbojanin Durgotsab, Howrah"
    },

    {
        id: "howrah-031",
        name: "Salap Utsahi Sangha Durga Puja",
        district: "Howrah",
        area: "Salap",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Salap Utsahi Sangha Durga Puja, Howrah"
    },

    {
        id: "howrah-032",
        name: "Salkia Baroari Durgatsob",
        district: "Howrah",
        area: "Salkia",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Salkia Baroari Durgatsob, Howrah"
    },

    {
        id: "howrah-033",
        name: "Salkia Chatra Bayam Samity Sarbojanin",
        district: "Howrah",
        area: "Salkia",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Salkia Chatra Bayam Samity Sarbojanin, Howrah"
    },

    {
        id: "howrah-034",
        name: "Salkia Sadharan Durga Puja",
        district: "Howrah",
        area: "Salkia",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Salkia Sadharan Durga Puja, Howrah"
    },

    {
        id: "howrah-035",
        name: "Salkia Sitalatala Sarbojanin Durgotsab",
        district: "Howrah",
        area: "Salkia",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Salkia Sitalatala Sarbojanin Durgotsab, Howrah"
    },

    {
        id: "howrah-036",
        name: "Shaktimoyee Sarbojanin Durgotsab Committee",
        district: "Howrah",
        area: "Howrah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shaktimoyee Sarbojanin Durgotsab Committee, Howrah"
    },

    {
        id: "howrah-037",
        name: "Shibpur Sastitala Durga Puja",
        district: "Howrah",
        area: "Shibpur",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shibpur Sastitala Durga Puja, Howrah"
    },

    {
        id: "howrah-038",
        name: "Subhaspally Shaktinagar Sarbojanin Durgatsav",
        district: "Howrah",
        area: "Subhaspally",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Subhaspally Shaktinagar Sarbojanin Durgatsav, Howrah"
    },

    {
        id: "howrah-039",
        name: "Torpedo Welfare Society Durga Puja",
        district: "Howrah",
        area: "Howrah",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Torpedo Welfare Society Durga Puja, Howrah"
    },

    {
        id: "howrah-040",
        name: "Uttar Bantra Kumar Para Baroary Samity Durga Puja",
        district: "Howrah",
        area: "Uttar Bantra",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Uttar Bantra Kumar Para Baroary Samity Durga Puja, Howrah"
    },

    {
        id: "howrah-041",
        name: "Uttar Salkia Sarbojanin Durgotsab",
        district: "Howrah",
        area: "Uttar Salkia",
        yearSource: 2025,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Uttar Salkia Sarbojanin Durgotsab, Howrah"
    },


    // ========================================================
    // SILIGURI — OFFICIAL POLICE PUJA MAP 2024
    // 82 PUJA MANDAPS
    // ========================================================

    {
        id: "siliguri-001",
        name: "Abahani Chakra Sports & Cultural Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Abahani Chakra Sports & Cultural Club, Siliguri"
    },

    {
        id: "siliguri-002",
        name: "Agragami Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Agragami Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-003",
        name: "Agrani Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Agrani Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-004",
        name: "Amtala Yuba Samity",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Amtala Yuba Samity Durga Puja, Siliguri"
    },

    {
        id: "siliguri-005",
        name: "Arunoday Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Arunoday Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-006",
        name: "Aurobinda Inter Union",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Aurobinda Inter Union Durga Puja, Siliguri"
    },

    {
        id: "siliguri-007",
        name: "Aurobinda Yubak Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Aurobinda Yubak Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-008",
        name: "Baghajatin Park Durgotsob Committee",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Baghajatin Park Durgotsob Committee, Siliguri"
    },

    {
        id: "siliguri-009",
        name: "Balaka Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Balaka Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-010",
        name: "Bandhab Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Bandhab Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-011",
        name: "Bat Tala Puja Committee",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Bat Tala Puja Committee, Siliguri"
    },

    {
        id: "siliguri-012",
        name: "Bharat Sevashram Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Bharat Sevashram Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-013",
        name: "Central Colony (Rly. Inst.)",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Central Colony Railway Institute Durga Puja, Siliguri"
    },

    {
        id: "siliguri-014",
        name: "Desh Bandhu Sporting Union",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Desh Bandhu Sporting Union Durga Puja, Siliguri"
    },

    {
        id: "siliguri-015",
        name: "Dada Bhai Sporting Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Dada Bhai Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-016",
        name: "G.T.S. Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "GTS Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-017",
        name: "Gitalpara Sporting Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Gitalpara Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-018",
        name: "Haiderpara Sporting Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Haiderpara Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-019",
        name: "Himachal Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Himachal Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-020",
        name: "Himalayan Kanya Housing Society",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Himalayan Kanya Housing Society Durga Puja, Siliguri"
    },

    {
        id: "siliguri-021",
        name: "Hotel Mainak",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Hotel Mainak Durga Puja, Siliguri"
    },

    {
        id: "siliguri-022",
        name: "Jogajog Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Jogajog Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-023",
        name: "Jagriti Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Jagriti Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-024",
        name: "Janashree Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Janashree Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-025",
        name: "Jatiyo Tarun Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Jatiyo Tarun Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-026",
        name: "Siliguri Jatiyo Yubak Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Siliguri Jatiyo Yubak Sangha Durga Puja"
    },

    {
        id: "siliguri-027",
        name: "Uttar Mallaguri Sarbojanin Durga Puja Committee",
        district: "Darjeeling",
        area: "Uttar Mallaguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Uttar Mallaguri Sarbojanin Durga Puja Committee, Siliguri"
    },

    {
        id: "siliguri-028",
        name: "Jewel Athletic Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Jewel Athletic Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-029",
        name: "Kabi Sukanta Sisu Uddyan (Purbanchal Club)",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kabi Sukanta Sisu Uddyan Purbanchal Club, Siliguri"
    },

    {
        id: "siliguri-030",
        name: "Kachari Road Yubak Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kachari Road Yubak Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-031",
        name: "Siliguri Kishore Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Siliguri Kishore Sangha Durga Puja"
    },

    {
        id: "siliguri-032",
        name: "Mahananda Sporting Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Mahananda Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-033",
        name: "Mallaguri Athletic Club",
        district: "Darjeeling",
        area: "Mallaguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Mallaguri Athletic Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-034",
        name: "Manas Rover Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Manas Rover Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-035",
        name: "Mayer Ichcha Durga Puja Committee",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Mayer Ichcha Durga Puja Committee, Siliguri"
    },

    {
        id: "siliguri-036",
        name: "Milanpally Sarbojanin Durga Puja Committee",
        district: "Darjeeling",
        area: "Milanpally",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Milanpally Sarbojanin Durga Puja Committee, Siliguri"
    },

    {
        id: "siliguri-037",
        name: "Mitra Samilani",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Mitra Samilani Durga Puja, Siliguri"
    },

    {
        id: "siliguri-038",
        name: "Nabankur Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Nabankur Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-039",
        name: "Nabin Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Nabin Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-040",
        name: "Nava Jagriti Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Nava Jagriti Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-041",
        name: "Netaji Yuba Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Netaji Yuba Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-042",
        name: "Rabindra Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Rabindra Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-043",
        name: "Ramkrishna Byam Siksha Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Ramkrishna Byam Siksha Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-044",
        name: "Rathkhola Sporting Club",
        district: "Darjeeling",
        area: "Rathkhola",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Rathkhola Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-045",
        name: "Renaissance Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Renaissance Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-046",
        name: "S.N.N.A.Y. Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "SNNAY Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-047",
        name: "Sabyasachi Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Sabyasachi Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-048",
        name: "Saktisong Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Saktisong Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-049",
        name: "Salugara Durga Puja Committee",
        district: "Darjeeling",
        area: "Salugara",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Salugara Durga Puja Committee, Siliguri"
    },

    {
        id: "siliguri-050",
        name: "Siliguri Sanghashree",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Siliguri Sanghashree Durga Puja"
    },

    {
        id: "siliguri-051",
        name: "Sanghati Dorgotsab Committee",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Sanghati Dorgotsab Committee, Siliguri"
    },

    {
        id: "siliguri-052",
        name: "Sarada Sevok Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Sarada Sevok Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-053",
        name: "Shaktigarh Pathagar",
        district: "Darjeeling",
        area: "Shaktigarh",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shaktigarh Pathagar Durga Puja, Siliguri"
    },

    {
        id: "siliguri-054",
        name: "Shanti Nagar Sporting Club",
        district: "Darjeeling",
        area: "Shanti Nagar",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shanti Nagar Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-055",
        name: "Shilpanchal Durga Puja Committee",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shilpanchal Durga Puja Committee, Siliguri"
    },

    {
        id: "siliguri-056",
        name: "Shiv Mandir Durga Puja Committee",
        district: "Darjeeling",
        area: "Shiv Mandir",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shiv Mandir Durga Puja Committee, Siliguri"
    },

    {
        id: "siliguri-057",
        name: "Shreepally Nagarik Committee",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shreepally Nagarik Committee Durga Puja, Siliguri"
    },

    {
        id: "siliguri-058",
        name: "South Colony Sporting Club",
        district: "Darjeeling",
        area: "South Colony",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "South Colony Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-059",
        name: "Subrata Sangha Durgapuja Committee",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Subrata Sangha Durgapuja Committee, Siliguri"
    },

    {
        id: "siliguri-060",
        name: "Sukanta Sporting Union Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Sukanta Sporting Union Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-061",
        name: "Surabhi Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Surabhi Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-062",
        name: "Suryanagar Durga Puja (Mahila College)",
        district: "Darjeeling",
        area: "Suryanagar",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Suryanagar Durga Puja Mahila College, Siliguri"
    },

    {
        id: "siliguri-063",
        name: "Suryanagar Friends Union",
        district: "Darjeeling",
        area: "Suryanagar",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Suryanagar Friends Union Durga Puja, Siliguri"
    },

    {
        id: "siliguri-064",
        name: "Suryanagar Sporting Club",
        district: "Darjeeling",
        area: "Suryanagar",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Suryanagar Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-065",
        name: "Swastika Yubak Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Swastika Yubak Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-066",
        name: "Tarun Tirtha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Tarun Tirtha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-067",
        name: "Tinbatti More Durga Puja Committee",
        district: "Darjeeling",
        area: "Tinbatti More",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Tinbatti More Durga Puja Committee, Siliguri"
    },

    {
        id: "siliguri-068",
        name: "Ujjal Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Ujjal Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-069",
        name: "Upkar Athletic Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Upkar Athletic Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-070",
        name: "Vidyasagar Pally Sarbojanin Durgapuja Committee",
        district: "Darjeeling",
        area: "Vidyasagar Pally",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Vidyasagar Pally Sarbojanin Durgapuja Committee, Siliguri"
    },

    {
        id: "siliguri-071",
        name: "Vidyasagar Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Vidyasagar Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-072",
        name: "Vivekananda Sarbojaning Durgotsab",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Vivekananda Sarbojaning Durgotsab, Siliguri"
    },

    {
        id: "siliguri-073",
        name: "Winners Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Winners Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-074",
        name: "Y.M.A.",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "YMA Durga Puja, Siliguri"
    },

    {
        id: "siliguri-075",
        name: "Yubak Sangha (Old)",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Yubak Sangha Old Durga Puja, Siliguri"
    },

    {
        id: "siliguri-076",
        name: "Yuba Jyoti Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Yuba Jyoti Sangha Durga Puja, Siliguri"
    },

    {
        id: "siliguri-077",
        name: "Kshnik Sangha",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Kshnik Sangha Durga Puja, Siliguri"
    },


    {
        id: "siliguri-079",
        name: "Sunrise Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Sunrise Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-080",
        name: "Subhash Sporting Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Subhash Sporting Club Durga Puja, Siliguri"
    },

    {
        id: "siliguri-081",
        name: "Uttoron",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Uttoron Durga Puja, Siliguri"
    },

    {
        id: "siliguri-082",
        name: "Shakti Sangha Club",
        district: "Darjeeling",
        area: "Siliguri",
        yearSource: 2024,
        currentTheme: "Not announced",
        previousTheme: null,
        mapsQuery: "Shakti Sangha Club Durga Puja, Siliguri"
    }

];


// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Return every Puja
function getAllPujaClubs() {
    return pujaClubs;
}


// Find Puja by district
function getPujaByDistrict(district) {

    return pujaClubs.filter(
        club =>
            club.district.toLowerCase() ===
            district.toLowerCase()
    );

}


// Search by name, area or district
function searchPuja(searchText) {

    const query = searchText
        .toLowerCase()
        .trim();

    if (!query) {
        return pujaClubs;
    }

    return pujaClubs.filter(club => {

        return (
            club.name.toLowerCase().includes(query) ||
            club.area.toLowerCase().includes(query) ||
            club.district.toLowerCase().includes(query)
        );

    });

}


// Open a Puja location in Google Maps
function openPujaOnGoogleMaps(club) {

    const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(club.mapsQuery);

    window.open(url, "_blank");

}


// Get all available districts
function getDistricts() {

    return [
        ...new Set(
            pujaClubs.map(
                club => club.district
            )
        )
    ];

}


// Print database information in console
console.log(
    "DUGGA PUJA DATABASE LOADED:",
    pujaClubs.length,
    "locations"
);

console.log(
    "Districts:",
    getDistricts()
);

let dhakAudio = null;
function showMusic(type) {

    const display = document.getElementById("musicDisplay");
    const buttons = document.querySelectorAll(".music-btn");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (type === "mahalaya") {

        buttons[0].classList.add("active");

        display.innerHTML = `
            <div class="song-box">
                <h3>মহিষাসুরমর্দিনী</h3>
                <p>বীরেন্দ্রকৃষ্ণ ভদ্র</p>

                <audio controls autoplay>
                    <source src="assets/music/Mahalaya.mpeg" type="audio/mpeg">
                </audio>
            </div>
        `;


    }



    else if (type === "dhak") {

        // Dhak already playing → stop
        if (dhakAudio) {
            dhakAudio.pause();
            dhakAudio.currentTime = 0;
            dhakAudio = null;

            buttons[2].classList.remove("active");
            return;
        }

        // Dhak not playing → start
        dhakAudio = new Audio("assets/music/dhak 1.mpeg");

        dhakAudio.play();

        buttons[2].classList.add("active");

        // Automatically reset when audio ends
        dhakAudio.onended = () => {
            dhakAudio = null;
            buttons[2].classList.remove("active");
        };
    }


}

/* ================================
   RATING POPUP
================================ */

function openRating(event) {

    if (event) {
        event.preventDefault();
    }

    document.getElementById("ratingPopup").style.display = "flex";

}


function closeRating() {

    document.getElementById("ratingPopup").style.display = "none";

}


/* Close when clicking outside the box */

document.getElementById("ratingPopup").addEventListener("click", function (event) {

    if (event.target === this) {

        closeRating();

    }

});


/* ================================
   RATING SYSTEM
================================ */

const ratingStars = document.querySelectorAll(
    "#ratingPopup .stars span"
);

const ratingTextBox = document.getElementById(
    "rating-text"
);

const ratingSubmit = document.getElementById(
    "submit-rating"
);

window.selectedRating = 0;


ratingStars.forEach(function (star) {

    star.addEventListener("click", function () {

        window.selectedRating = Number(
            this.dataset.rating
        );

        ratingStars.forEach(function (s) {

            if (
                Number(s.dataset.rating)
                <= window.selectedRating
            ) {

                s.classList.add("active");

            } else {

                s.classList.remove("active");

            }

        });

        ratingTextBox.textContent =
            window.selectedRating +
            " out of 5 stars selected";

    });

});


/* Rating submit is handled by the Firebase module script in index.html.
   The window.selectedRating variable and ratingTextBox are kept here so the
   module script can read the selected value and update the status text. */




/* =================================
   ABOUT POPUP
================================= */

function openAbout(event) {

    if (event) {
        event.preventDefault();
    }

    document.getElementById("aboutPopup").style.display = "flex";
}


function closeAbout() {

    document.getElementById("aboutPopup").style.display = "none";
}


/* CLICK OUTSIDE TO CLOSE */

document.addEventListener("click", function (event) {

    const popup = document.getElementById("aboutPopup");

    if (popup && event.target === popup) {

        closeAbout();

    }

});




// ================================
// DURGA PUJA FESTIVAL TEXT
// ================================

const festivalText = document.getElementById("festivalText");

const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();

let message = "পূজোর গন্ধ এসেছে";

// 10 October — Mahalaya
if (month === 10 && date === 10) {
    message = "মহালয়া";
}

// 11–15 October — Maa is coming
else if (month === 10 && date >= 11 && date <= 15) {
    message = "মা আসছেন...";
}

// 16 October — Agomoni
else if (month === 10 && date === 16) {
    message = " আগমনী";
}

// 17 October — Shasthi
else if (month === 10 && date === 17) {
    message = "শুভ ষষ্ঠী";
}

// 18 October — Saptami
else if (month === 10 && date === 18) {
    message = "শুভ সপ্তমী";
}

// 19 October — Ashtami
else if (month === 10 && date === 19) {
    message = "শুভ মহাষ্টমী";
}

// 20 October — Nabami
else if (month === 10 && date === 20) {
    message = "শুভ মহানবমী";
}

// 21 October — Dashami
else if (month === 10 && date === 21) {
    message = "শুভ বিজয়া দশমী";
}

// Change the heading
if (festivalText) {
    festivalText.textContent = message;
}

// ================================
// DAILY DURGA PUJA BACKGROUND
// ================================

let dailyBackground = "background.jpg";

if (month === 10 && date === 10) {
    dailyBackground = "mahalaya.png";
}
else if (month === 10 && date >= 11 && date <= 15) {
    dailyBackground = "maa.png";
}


else if (month === 10 && date === 17) {
    dailyBackground = "sasthi.png";
}
else if (month === 10 && date === 18) {
    dailyBackground = "saptami.png";
}
else if (month === 10 && date === 19) {
    dailyBackground = "asthami.png";
}
else if (month === 10 && date === 20) {
    dailyBackground = "nabami.png";
}
else if (month === 10 && date === 21) {
    dailyBackground = "dasami.png";
}

document.body.style.backgroundImage =
    `url("assets/images/${dailyBackground}")`;






