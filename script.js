/* =========================
   VARIABLES
========================= */

let currentCategory = "renforcement";
let currentPosition = "debout";
let currentView = "front";

let selectedGroup = null;
let selectedZone = null;


/* =========================
   CHANGER DE CATÉGORIE
========================= */

function changeCategory(category, button) {

    currentCategory = category;

    updateProgress();

    document
        .querySelectorAll(".category-button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");


    /* =========================
   MOBILITÉ — À VENIR
========================= */

if (category === "mobilite") {

    const panel =
        document.getElementById("exercisePanel");

    panel.innerHTML = `
        <h2>Mobilité</h2>

        <p style="
            font-size: 20px;
            font-weight: bold;
            margin-top: 30px;
        ">
            🚧 À venir
        </p>

        <p>
            Cette rubrique est actuellement en préparation.
        </p>

        <p>
            Les exercices de mobilité seront bientôt disponibles.
        </p>
    `;

    return;
    }


        /* =========================
        RENFORCEMENT / ÉTIREMENTS
        ========================= */

if (selectedZone !== null) {

    showExercises(selectedZone);

    } else {

    updatePanel();

    }
}


/* =========================
   CHANGER DE POSITION
========================= */

function changePosition(position, button) {

    currentPosition = position;

    updateProgress();

    document
        .querySelectorAll(".position-button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");


    /* =========================
       MOBILITÉ — À VENIR
    ========================= */

    if (currentCategory === "mobilite") {

        const panel =
            document.getElementById("exercisePanel");

        panel.innerHTML = `
            <h2>Mobilité</h2>

            <p style="
                font-size: 20px;
                font-weight: bold;
                margin-top: 30px;
            ">
                🚧 À venir
            </p>

            <p>
                Cette rubrique est actuellement en préparation.
            </p>

            <p>
                Les exercices de mobilité seront bientôt disponibles.
            </p>
        `;

        return;
    }


    /* =========================
       FONCTIONNEMENT NORMAL
    ========================= */

    if (selectedZone !== null) {

        showExercises(selectedZone);

    } else {

        updatePanel();

    }

}


/* =========================
   CHANGER FACE / DOS
========================= */

function changeView(view, button) {

    currentView = view;

    updateProgress();

    /* =========================
       CHANGER DE VUE
       → DÉVERROUILLER
    ========================= */

    document
        .querySelectorAll(".body-zone.selected")
        .forEach(zone => {
            zone.classList.remove("selected");
        });

    document
        .querySelectorAll(".body-zone.hover-group")
        .forEach(zone => {
            zone.classList.remove("hover-group");
        });


    selectedGroup = null;
    selectedZone = null;


    document
        .querySelectorAll(".view-button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");


    const frontBody = document.getElementById("frontBody");
    const backBody = document.getElementById("backBody");

    const frontZones = document.querySelectorAll(".front-zone");
    const backZones = document.querySelectorAll(".back-zone");


    if (view === "front") {

        frontBody.style.display = "block";
        backBody.style.display = "none";

        frontZones.forEach(zone => {
            zone.style.display = "block";
        });

        backZones.forEach(zone => {
            zone.style.display = "none";
        });

    } else {

        frontBody.style.display = "none";
        backBody.style.display = "block";

        frontZones.forEach(zone => {
            zone.style.display = "none";
        });

        backZones.forEach(zone => {
            zone.style.display = "block";
        });

    }


    /* Mettre à jour le panneau */

if (currentCategory === "mobilite") {

    const panel =
        document.getElementById("exercisePanel");

    panel.innerHTML = `
        <h2>Mobilité</h2>

        <p style="
            font-size: 20px;
            font-weight: bold;
            margin-top: 30px;
        ">
            🚧 À venir
        </p>

        <p>
            Cette rubrique est actuellement en préparation.
        </p>

        <p>
            Les exercices de mobilité seront bientôt disponibles.
        </p>
    `;

    } else {

    updatePanel();

    }
}


/* =========================
   BASE DES EXERCICES
========================= */

const exercises = {

    /* =========================
   COU — FACE
========================= */

"Cou face": {

    "renforcement": [

        /* =========================
           COU FACE — DEBOUT
        ========================= */

        {
            title: "Cou debout — flexion cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-debout-flexion-cervicale.pdf",
            position: "debout"
        },

        {
            title: "Cou debout — extension cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-debout-extension-cervicale.pdf",
            position: "debout"
        },

        {
            title: "Cou debout — rotation cervicale contrôlée",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-debout-rotation-cervicale.pdf",
            position: "debout"
        },

        {
            title: "Cou debout — inclinaison latérale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-debout-inclinaison-laterale.pdf",
            position: "debout"
        },


        /* =========================
           COU FACE — ASSIS
        ========================= */

        {
            title: "Cou assis — flexion cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-assis-flexion-cervicale.pdf",
            position: "assis"
        },

        {
            title: "Cou assis — extension cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-assis-extension-cervicale.pdf",
            position: "assis"
        },

        {
            title: "Cou assis — rotation cervicale contrôlée",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-assis-rotation-cervicale.pdf",
            position: "assis"
        },

        {
            title: "Cou assis — inclinaison latérale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-assis-inclinaison-laterale.pdf",
            position: "assis"
        },


        /* =========================
           COU FACE — AU SOL
        ========================= */

        {
            title: "Cou au sol — flexion cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-sol-flexion-cervicale.pdf",
            position: "sol"
        },

        {
            title: "Cou au sol — renforcement cervical isométrique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-face-sol-renforcement-isometrique.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        /* =========================
           COU FACE — DEBOUT
        ========================= */

        {
            title: "Étirement du cou debout — inclinaison latérale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-face-debout-inclinaison-laterale.pdf",
            position: "debout"
        },

        {
            title: "Étirement du cou debout — rotation",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-face-debout-rotation.pdf",
            position: "debout"
        },


        /* =========================
           COU FACE — ASSIS
        ========================= */

        {
            title: "Étirement du cou assis — inclinaison latérale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-face-assis-inclinaison-laterale.pdf",
            position: "assis"
        },

        {
            title: "Étirement du cou assis — rotation",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-face-assis-rotation.pdf",
            position: "assis"
        },


        /* =========================
           COU FACE — AU SOL
        ========================= */

        {
            title: "Étirement du cou au sol — position allongée",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-face-sol.pdf",
            position: "sol"
        }

    ]

},


    /* =========================
       PECTORAUX
    ========================= */

    "Pectoraux": {

        "renforcement": [

            /* =========================
               PECTORAUX DEBOUT
            ========================= */

            {
                title: "Pompes contre un mur",
                video: "https://www.youtube.com/embed/ZTxkqKftwIs",
                pdf: "fiches/Pompes-contre-un-mur.pdf",
                position: "debout"
            },

            {
                title: "Développé avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Developpe-avec-elastique.pdf",
                position: "debout"
            },

            {
                title: "Écarté avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Ecarte-avec-elastique.pdf",
                position: "debout"
            },


            /* =========================
               PECTORAUX ASSIS
            ========================= */

            {
                title: "Développé assis avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Developpe-assis-elastique.pdf",
                position: "assis"
            },

            {
                title: "Écarté assis avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Ecarte-assis-elastique.pdf",
                position: "assis"
            },


            /* =========================
               PECTORAUX AU SOL
            ========================= */

            {
                title: "Développé au sol avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Developpe-au-sol-elastique.pdf",
                position: "sol"
            },

            {
                title: "Pompes au sol adaptées",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Pompes-au-sol-adaptees.pdf",
                position: "sol"
            }

        ],
            /* =========================
               Etirements
            ========================= */

        "etirements": [

            {
                title: "Étirement des pectoraux",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-des-pectoraux.pdf",
                position: "debout"
            },

            {
                title: "Étirement des pectoraux assis",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-des-pectoraux-assis.pdf",
                position: "assis"
            },

            {
                title: "Étirement des pectoraux au sol",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-des-pectoraux-sol.pdf",
                position: "sol"
            }

        ]

    },


    /* =========================
       ABDOMINAUX
    ========================= */

    "Abdominaux": {

        "renforcement": [

            /* =========================
               ABDOMINAUX DEBOUT
            ========================= */

            {
                title: "Abdominaux debout — flexion du tronc",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Abdominaux-debout-flexion.pdf",
                position: "debout"
            },

            {
                title: "Abdominaux debout — montée de genou",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Abdominaux-debout-montee-genou.pdf",
                position: "debout"
            },

            {
                title: "Abdominaux debout — crunch avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Abdominaux-debout-crunch-elastique.pdf",
                position: "debout"
            },


            /* =========================
               ABDOMINAUX ASSIS
            ========================= */

            {
                title: "Abdominaux assis — flexion du tronc",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Abdominaux-assis-flexion.pdf",
                position: "assis"
            },

            {
                title: "Abdominaux assis — montée de genou",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Abdominaux-assis-montee-genou.pdf",
                position: "assis"
            },


            /* =========================
               ABDOMINAUX AU SOL
            ========================= */

            {
                title: "Abdominaux au sol — crunch",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Abdominaux-sol-crunch.pdf",
                position: "sol"
            },

            {
                title: "Abdominaux au sol — relevé de bassin",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Abdominaux-sol-releve-bassin.pdf",
                position: "sol"
            }

        ],
       /* =========================
               Etirements abdo
            ========================= */

        "etirements": [

            {
                title: "Étirement des abdominaux debout — extension du tronc",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-abdominaux-debout.pdf",
                position: "debout"
            },

            {
                title: "Étirement des abdominaux assis — extension du tronc",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-abdominaux-assis.pdf",
                position: "assis"
            },

            {
                title: "Étirement des abdominaux au sol — extension du tronc",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-abdominaux-sol.pdf",
                position: "sol"
            }

        ]

    },


    /* =========================
       OBLIQUES
    ========================= */

    "Obliques": {

        "renforcement": [

            /* =========================
               OBLIQUES DEBOUT
            ========================= */

            {
                title: "Obliques debout — inclinaison latérale",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Obliques-debout-inclinaison.pdf",
                position: "debout"
            },

            {
                title: "Obliques debout — flexion latérale avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Obliques-debout-flexion-elastique.pdf",
                position: "debout"
            },

            {
                title: "Obliques debout — rotation du tronc",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Obliques-debout-rotation.pdf",
                position: "debout"
            },


            /* =========================
               OBLIQUES ASSIS
            ========================= */

            {
                title: "Obliques assis — inclinaison latérale",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Obliques-assis-inclinaison.pdf",
                position: "assis"
            },

            {
                title: "Obliques assis — rotation du tronc",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Obliques-assis-rotation.pdf",
                position: "assis"
            },


            /* =========================
               OBLIQUES AU SOL
            ========================= */

            {
                title: "Obliques au sol — gainage latéral",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Obliques-sol-gainage-lateral.pdf",
                position: "sol"
            },

            {
                title: "Obliques au sol — flexion latérale",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Obliques-sol-flexion-laterale.pdf",
                position: "sol"
            }

        ],
            /* =========================
               Etirements obliques
            ========================= */

        "etirements": [

            {
                title: "Étirement des obliques debout — inclinaison latérale",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-obliques-debout.pdf",
                position: "debout"
            },

            {
                title: "Étirement des obliques assis — inclinaison latérale",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-obliques-assis.pdf",
                position: "assis"
            },

            {
                title: "Étirement des obliques au sol — inclinaison latérale",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-obliques-sol.pdf",
                position: "sol"
            }

        ]

    },


    /* =========================
       CUISSES
    ========================= */

    "Cuisses": {

        "renforcement": [

            /* =========================
               CUISSES DEBOUT
            ========================= */

            {
                title: "Cuisses debout — squat",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Cuisses-debout-squat.pdf",
                position: "debout"
            },

            {
                title: "Cuisses debout — demi-squat",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Cuisses-debout-demi-squat.pdf",
                position: "debout"
            },

            {
                title: "Cuisses debout — extension de genou",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Cuisses-debout-extension-genou.pdf",
                position: "debout"
            },


            /* =========================
               CUISSES ASSIS
            ========================= */

            {
                title: "Cuisses assis — extension de genou",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Cuisses-assis-extension-genou.pdf",
                position: "assis"
            },

            {
                title: "Cuisses assis — montée de genou",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Cuisses-assis-montee-genou.pdf",
                position: "assis"
            },


            /* =========================
               CUISSES AU SOL
            ========================= */

            {
                title: "Cuisses au sol — extension de hanche",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Cuisses-sol-extension-hanche.pdf",
                position: "sol"
            },

            {
                title: "Cuisses au sol — pont fessier",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Cuisses-sol-pont-fessier.pdf",
                position: "sol"
            }

        ],

            /* =========================
               Etirements cuisses
            ========================= */

        "etirements": [

            {
                title: "Étirement des cuisses debout — quadriceps",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-cuisses-debout-quadriceps.pdf",
                position: "debout"
            },

            {
                title: "Étirement des cuisses assis — quadriceps",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-cuisses-assis-quadriceps.pdf",
                position: "assis"
            },

            {
                title: "Étirement des cuisses au sol — quadriceps",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-cuisses-sol-quadriceps.pdf",
                position: "sol"
            }

        ]

    },


    /* =========================
       TIBIAS
    ========================= */

    "Tibias": {

        "renforcement": [

            /* =========================
               TIBIAS DEBOUT
            ========================= */

            {
                title: "Tibias debout — relevé de pointe de pied",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Tibias-debout-releve-pointe.pdf",
                position: "debout"
            },

            {
                title: "Tibias debout — relevé de pointe alterné",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Tibias-debout-releve-alterne.pdf",
                position: "debout"
            },

            {
                title: "Tibias debout — relevé de pointe avec appui",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Tibias-debout-releve-appui.pdf",
                position: "debout"
            },


            /* =========================
               TIBIAS ASSIS
            ========================= */

            {
                title: "Tibias assis — relevé de pointe de pied",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Tibias-assis-releve-pointe.pdf",
                position: "assis"
            },

            {
                title: "Tibias assis — flexion de cheville avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Tibias-assis-flexion-cheville.pdf",
                position: "assis"
            },


            /* =========================
               TIBIAS AU SOL
            ========================= */

            {
                title: "Tibias au sol — flexion de cheville",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Tibias-sol-flexion-cheville.pdf",
                position: "sol"
            },

            {
                title: "Tibias au sol — renforcement avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Tibias-sol-elastique.pdf",
                position: "sol"
            }

        ],

            /* =========================
               Etirements Tibias
            ========================= */

        "etirements": [

    /* =========================
       ÉTIREMENTS TIBIAS DEBOUT
    ========================= */

            {
                title: "Étirement des tibias debout — flexion de cheville",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-tibias-debout-flexion-cheville.pdf",
                position: "debout"
            },


            /* =========================
            ÉTIREMENTS TIBIAS ASSIS
            ========================= */

            {
                title: "Étirement des tibias assis — flexion de cheville",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-tibias-assis-flexion-cheville.pdf",
                position: "assis"
            },


            /* =========================
            ÉTIREMENTS TIBIAS AU SOL
            ========================= */

            {
                title: "Étirement des tibias au sol — flexion de cheville",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-tibias-sol-flexion-cheville.pdf",
                position: "sol"
            }

        ]

    },


    /* =========================
       ÉPAULES
    ========================= */

    "Épaules": {

        "renforcement": [

            /* =========================
               ÉPAULES DEBOUT
            ========================= */

            {
                title: "Épaules debout — élévations latérales",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-debout-elevations-laterales.pdf",
                position: "debout"
            },

            {
                title: "Épaules debout — élévations frontales",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-debout-elevations-frontales.pdf",
                position: "debout"
            },

            {
                title: "Épaules debout — développé épaules",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-debout-developpe.pdf",
                position: "debout"
            },


            /* =========================
               ÉPAULES ASSIS
            ========================= */

            {
                title: "Épaules assis — élévations latérales",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-assis-elevations-laterales.pdf",
                position: "assis"
            },

            {
                title: "Épaules assis — élévations frontales",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-assis-elevations-frontales.pdf",
                position: "assis"
            },

            {
                title: "Épaules assis — développé épaules",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-assis-developpe.pdf",
                position: "assis"
            },


            /* =========================
               ÉPAULES AU SOL
            ========================= */

            {
                title: "Épaules au sol — élévation des bras",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-sol-elevation-bras.pdf",
                position: "sol"
            },

            {
                title: "Épaules au sol — rotation externe",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Epaules-sol-rotation-externe.pdf",
                position: "sol"
            }

        ],
            /* =========================
               Etirements Epaules
            ========================= */

        "etirements": [

           {
                title: "Étirement des épaules debout — bras croisé",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-epaules-debout.pdf",
                position: "debout"
            },

            {
                title: "Étirement des épaules assis — bras croisé",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-epaules-assis.pdf",
                position: "assis"
            },

            {
                title: "Étirement des épaules au sol",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-epaules-sol.pdf",
                position: "sol"
            }

        ]

    },


    /* =========================
       BICEPS
    ========================= */

    "Biceps": {

        "renforcement": [

            /* =========================
               BICEPS DEBOUT
            ========================= */

            {
                title: "Biceps debout — curl avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Biceps-debout-curl-elastique.pdf",
                position: "debout"
            },

            {
                title: "Biceps debout — curl avec haltères",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Biceps-debout-curl-halteres.pdf",
                position: "debout"
            },

            {
                title: "Biceps debout — curl alterné",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Biceps-debout-curl-alterne.pdf",
                position: "debout"
            },


            /* =========================
               BICEPS ASSIS
            ========================= */

            {
                title: "Biceps assis — curl avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Biceps-assis-curl-elastique.pdf",
                position: "assis"
            },

            {
                title: "Biceps assis — curl avec haltères",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Biceps-assis-curl-halteres.pdf",
                position: "assis"
            },


            /* =========================
               BICEPS AU SOL
            ========================= */

            {
                title: "Biceps au sol — curl avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Biceps-sol-curl-elastique.pdf",
                position: "sol"
            }

        ],
            /* =========================
               Etirements BICEPS
            ========================= */

        "etirements": [

            {
                title: "Étirement des biceps debout",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-biceps-debout.pdf",
                position: "debout"
            },

            {
                title: "Étirement des biceps assis",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-biceps-assis.pdf",
                position: "assis"
            },

            {
                title: "Étirement des biceps au sol",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-biceps-sol.pdf",
                position: "sol"
            }

        ]

    },


        /* =========================
       AVANT-BRAS
    ========================= */

    "Avant-bras": {

        "renforcement": [

            {
                title: "Avant-bras debout — flexion des poignets",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-debout-flexion-poignets.pdf",
                position: "debout"
            },

            {
                title: "Avant-bras debout — extension des poignets",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-debout-extension-poignets.pdf",
                position: "debout"
            },

            {
                title: "Avant-bras debout — serrage de balle",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-debout-serrage-balle.pdf",
                position: "debout"
            },

            {
                title: "Avant-bras assis — flexion des poignets",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-assis-flexion-poignets.pdf",
                position: "assis"
            },

            {
                title: "Avant-bras assis — extension des poignets",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-assis-extension-poignets.pdf",
                position: "assis"
            },

            {
                title: "Avant-bras assis — serrage de balle",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-assis-serrage-balle.pdf",
                position: "assis"
            },

            {
                title: "Avant-bras au sol — renforcement des poignets",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-sol-poignets.pdf",
                position: "sol"
            },

            {
                title: "Avant-bras au sol — appui sur les mains",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Avant-bras-sol-appui-mains.pdf",
                position: "sol"
            }

        ],

        "etirements": [

            {
                title: "Étirement des avant-bras debout — fléchisseurs",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-avant-bras-debout-flechisseurs.pdf",
                position: "debout"
            },

            {
                title: "Étirement des avant-bras assis — fléchisseurs",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-avant-bras-assis-flechisseurs.pdf",
                position: "assis"
            },

            {
                title: "Étirement des avant-bras au sol",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-avant-bras-sol.pdf",
                position: "sol"
            }

        ]

    },

    /* =========================
       Titres Vidéos et PDF pour la zone du dos
    ========================= */

    /* =========================
   COU — DOS
========================= */

"Cou dos": {

    "renforcement": [

        /* =========================
           COU DOS — DEBOUT
        ========================= */

        {
            title: "Cou debout — rétraction cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-debout-retraction-cervicale.pdf",
            position: "debout"
        },

        {
            title: "Cou debout — extension cervicale contrôlée",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-debout-extension-cervicale.pdf",
            position: "debout"
        },

        {
            title: "Cou debout — maintien cervical isométrique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-debout-maintien-isometrique.pdf",
            position: "debout"
        },


        /* =========================
           COU DOS — ASSIS
        ========================= */

        {
            title: "Cou assis — rétraction cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-assis-retraction-cervicale.pdf",
            position: "assis"
        },

        {
            title: "Cou assis — maintien cervical isométrique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-assis-maintien-isometrique.pdf",
            position: "assis"
        },

        {
            title: "Cou assis — extension cervicale contrôlée",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-assis-extension-cervicale.pdf",
            position: "assis"
        },


        /* =========================
           COU DOS — AU SOL
        ========================= */

        {
            title: "Cou au sol — rétraction cervicale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-sol-retraction-cervicale.pdf",
            position: "sol"
        },

        {
            title: "Cou au sol — maintien cervical isométrique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Cou-dos-sol-maintien-isometrique.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        /* =========================
           COU DOS — DEBOUT
        ========================= */

        {
            title: "Étirement de la nuque debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-dos-debout-nuque.pdf",
            position: "debout"
        },

        {
            title: "Étirement de la nuque debout — inclinaison latérale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-dos-debout-inclinaison.pdf",
            position: "debout"
        },


        /* =========================
           COU DOS — ASSIS
        ========================= */

        {
            title: "Étirement de la nuque assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-dos-assis-nuque.pdf",
            position: "assis"
        },

        {
            title: "Étirement de la nuque assis — inclinaison latérale",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-dos-assis-inclinaison.pdf",
            position: "assis"
        },


        /* =========================
           COU DOS — AU SOL
        ========================= */

        {
            title: "Étirement de la nuque au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-cou-dos-sol-nuque.pdf",
            position: "sol"
        }

    ]

},

/* =========================
   TRAPÈZES ET RHOMBOÏDES
========================= */

"Trapèzes et rhomboïdes": {

    "renforcement": [

        {
            title: "Trapèzes debout — haussements d'épaules",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Trapezes-debout-haussements.pdf",
            position: "debout"
        },

        {
            title: "Rhomboïdes debout — tirage avec élastique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Rhomboides-debout-tirage-elastique.pdf",
            position: "debout"
        },

        {
            title: "Trapèzes assis — haussements d'épaules",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Trapezes-assis-haussements.pdf",
            position: "assis"
        },

        {
            title: "Rhomboïdes assis — rétraction des omoplates",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Rhomboides-assis-retraction.pdf",
            position: "assis"
        },

        {
            title: "Rhomboïdes au sol — rétraction des omoplates",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Rhomboides-sol-retraction.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        {
            title: "Étirement des trapèzes debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-trapezes-debout.pdf",
            position: "debout"
        },

        {
            title: "Étirement des trapèzes assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-trapezes-assis.pdf",
            position: "assis"
        },

        {
            title: "Étirement du haut du dos au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-haut-dos-sol.pdf",
            position: "sol"
        }

    ]

},

/* =========================
   LOMBAIRES
========================= */

"Lombaires": {

    "renforcement": [

        {
            title: "Lombaires debout — extension du tronc",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Lombaires-debout-extension-tronc.pdf",
            position: "debout"
        },

        {
            title: "Lombaires assis — auto-grandissement",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Lombaires-assis-autograndissement.pdf",
            position: "assis"
        },

        {
            title: "Lombaires au sol — bird dog",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Lombaires-sol-bird-dog.pdf",
            position: "sol"
        },

        {
            title: "Lombaires au sol — extension du tronc",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Lombaires-sol-extension.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        {
            title: "Étirement des lombaires debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-lombaires-debout.pdf",
            position: "debout"
        },

        {
            title: "Étirement des lombaires assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-lombaires-assis.pdf",
            position: "assis"
        },

        {
            title: "Étirement des lombaires au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-lombaires-sol.pdf",
            position: "sol"
        }

    ]

},

/* =========================
   TRICEPS
========================= */

"Triceps": {

    "renforcement": [

        {
            title: "Triceps debout — extension avec élastique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Triceps-debout-extension-elastique.pdf",
            position: "debout"
        },

        {
            title: "Triceps debout — extension au-dessus de la tête",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Triceps-debout-extension-tete.pdf",
            position: "debout"
        },

        {
            title: "Triceps assis — extension avec élastique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Triceps-assis-extension-elastique.pdf",
            position: "assis"
        },

        {
            title: "Triceps au sol — extension des bras",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Triceps-sol-extension.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        {
            title: "Étirement des triceps debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-triceps-debout.pdf",
            position: "debout"
        },

        {
            title: "Étirement des triceps assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-triceps-assis.pdf",
            position: "assis"
        },

        {
            title: "Étirement des triceps au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-triceps-sol.pdf",
            position: "sol"
        }

    ]

    },

    /* =========================
   EXTENSEURS DES AVANT-BRAS
========================= */

"Extenseurs des avant-bras": {

    "renforcement": [

        {
            title: "Extenseurs des avant-bras debout — extension des poignets",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Extenseurs-avant-bras-debout.pdf",
            position: "debout"
        },

        {
            title: "Extenseurs des avant-bras assis — extension des poignets",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Extenseurs-avant-bras-assis.pdf",
            position: "assis"
        },

        {
            title: "Extenseurs des avant-bras au sol — appui sur les mains",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Extenseurs-avant-bras-sol.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        {
            title: "Étirement des extenseurs des avant-bras debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-extenseurs-avant-bras-debout.pdf",
            position: "debout"
        },

        {
            title: "Étirement des extenseurs des avant-bras assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-extenseurs-avant-bras-assis.pdf",
            position: "assis"
        },

        {
            title: "Étirement des extenseurs des avant-bras au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-extenseurs-avant-bras-sol.pdf",
            position: "sol"
        }

    ]

},

/* =========================
   FESSIERS
========================= */

"Fessiers": {

    "renforcement": [

        {
            title: "Fessiers debout — extension de hanche",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Fessiers-debout-extension-hanche.pdf",
            position: "debout"
        },

        {
            title: "Fessiers debout — abduction de hanche",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Fessiers-debout-abduction.pdf",
            position: "debout"
        },

        {
            title: "Fessiers assis — contraction isométrique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Fessiers-assis-contraction.pdf",
            position: "assis"
        },

        {
            title: "Fessiers au sol — pont fessier",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Fessiers-sol-pont.pdf",
            position: "sol"
        },

        {
            title: "Fessiers au sol — extension de hanche",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Fessiers-sol-extension-hanche.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        {
            title: "Étirement des fessiers debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-fessiers-debout.pdf",
            position: "debout"
        },

        {
            title: "Étirement des fessiers assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-fessiers-assis.pdf",
            position: "assis"
        },

        {
            title: "Étirement des fessiers au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-fessiers-sol.pdf",
            position: "sol"
        }

    ]

    },
 /* =========================
   ISCHIO-JAMBIERS
========================= */

"Ischio-jambiers": {

    "renforcement": [

        {
            title: "Ischio-jambiers debout — flexion du genou",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Ischio-debout-flexion-genou.pdf",
            position: "debout"
        },

        {
            title: "Ischio-jambiers debout — extension de hanche",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Ischio-debout-extension-hanche.pdf",
            position: "debout"
        },

        {
            title: "Ischio-jambiers assis — flexion du genou",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Ischio-assis-flexion-genou.pdf",
            position: "assis"
        },

        {
            title: "Ischio-jambiers au sol — pont fessier",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Ischio-sol-pont-fessier.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        {
            title: "Étirement des ischio-jambiers debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-ischio-debout.pdf",
            position: "debout"
        },

        {
            title: "Étirement des ischio-jambiers assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-ischio-assis.pdf",
            position: "assis"
        },

        {
            title: "Étirement des ischio-jambiers au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-ischio-sol.pdf",
            position: "sol"
        }

    ]

},

/* =========================
   MOLLETS
========================= */

"Mollets": {

    "renforcement": [

        {
            title: "Mollets debout — montée sur la pointe des pieds",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Mollets-debout-montees-pointes.pdf",
            position: "debout"
        },

        {
            title: "Mollets debout — montée sur une jambe",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Mollets-debout-une-jambe.pdf",
            position: "debout"
        },

        {
            title: "Mollets assis — extension de cheville",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Mollets-assis-extension-cheville.pdf",
            position: "assis"
        },

        {
            title: "Mollets au sol — flexion plantaire avec élastique",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Mollets-sol-elastique.pdf",
            position: "sol"
        }

    ],

    "etirements": [

        {
            title: "Étirement des mollets debout",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-mollets-debout.pdf",
            position: "debout"
        },

        {
            title: "Étirement des mollets assis",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-mollets-assis.pdf",
            position: "assis"
        },

        {
            title: "Étirement des mollets au sol",
            video: "https://www.youtube.com/embed/LIEN_VIDEO",
            pdf: "fiches/Etirement-mollets-sol.pdf",
            position: "sol"
        }

    ]

},

    /* =========================
       DORSAUX
    ========================= */

    "Dorsaux": {

        "renforcement": [

            {
                title: "Dorsaux debout — tirage avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Dorsaux-debout-tirage-elastique.pdf",
                position: "debout"
            },

            {
                title: "Dorsaux debout — tirage horizontal avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Dorsaux-debout-tirage-horizontal.pdf",
                position: "debout"
            },

            {
                title: "Dorsaux assis — tirage avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Dorsaux-assis-tirage-elastique.pdf",
                position: "assis"
            },

            {
                title: "Dorsaux assis — tirage horizontal avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Dorsaux-assis-tirage-horizontal.pdf",
                position: "assis"
            },

            {
                title: "Dorsaux au sol — tirage avec élastique",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Dorsaux-sol-tirage-elastique.pdf",
                position: "sol"
            },

            {
                title: "Dorsaux au sol — tirage bras tendus",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Dorsaux-sol-tirage-bras-tendus.pdf",
                position: "sol"
            }

        ],

        "etirements": [

            {
                title: "Étirement des dorsaux debout",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-dorsaux-debout.pdf",
                position: "debout"
            },

            {
                title: "Étirement des dorsaux assis",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-dorsaux-assis.pdf",
                position: "assis"
            },

            {
                title: "Étirement des dorsaux au sol",
                video: "https://www.youtube.com/embed/LIEN_VIDEO",
                pdf: "fiches/Etirement-dorsaux-sol.pdf",
                position: "sol"
            }

        ]

    }

};


/* =========================
   AFFICHAGE EXERCICES
   ACCORDÉON
========================= */

function showExercises(zone) {

    /* Mobilité : ne pas modifier le message */
    if (currentCategory === "mobilite") {
        return;
    }

    const panel = document.getElementById("exercisePanel");

    const categoryExercises =
        (exercises[zone]?.[currentCategory] || [])
        .filter(exercise => exercise.position === currentPosition);

    let html = `
        <h2>${zone}</h2>

        <p>
            <strong>Catégorie :</strong>
            ${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
        </p>
    `;


    if (categoryExercises.length === 0) {

        html += `
            <p>
                Aucun exercice disponible pour le moment.
            </p>
        `;

    } else {

        categoryExercises.forEach((exercise, index) => {

            html += `
                <div class="accordion-item">

                    <button
                        class="accordion-title"
                        onclick="toggleExercise(this)">

                        <span>▶</span>
                        ${exercise.title}

                    </button>

                    <div class="accordion-content">

                        <iframe
                            width="100%"
                            height="200"
                            src="${exercise.video}"
                            title="${exercise.title}"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                        <a
                            href="${exercise.pdf}"
                            target="_blank"
                            class="pdf-link">
                            📄 Voir la fiche de l'exercice en PDF
                        </a>

                    </div>

                </div>
            `;

        });

    }


    panel.innerHTML = html;

    /* Scroll automatique uniquement sur mobile */
    scrollToExercisesMobile();
}


/* =========================
   OUVRIR / FERMER EXERCICE
========================= */

function toggleExercise(button) {

    const item = button.parentElement;

    const content =
        item.querySelector(".accordion-content");

    const isOpen =
        item.classList.contains("open");


    /* Fermer tous les exercices */

    document
        .querySelectorAll(".accordion-item")
        .forEach(otherItem => {

            otherItem.classList.remove("open");

            const otherContent =
                otherItem.querySelector(".accordion-content");

            if (otherContent) {
                otherContent.style.display = "none";
            }

            const arrow =
                otherItem.querySelector(".accordion-title span");

            if (arrow) {
                arrow.textContent = "▶";
            }

        });


    /* Ouvrir celui qui vient d'être cliqué */

    if (!isOpen) {

        item.classList.add("open");

        content.style.display = "block";

        const arrow =
            button.querySelector("span");

        if (arrow) {
            arrow.textContent = "▼";
        }

    }
}


/* =========================
   PANNEAU
========================= */

function updatePanel() {

    const panel =
        document.getElementById("exercisePanel");

    panel.innerHTML = `

        <h2>Choisissez trois options</h2>

        <p>
            Puis cliquez sur une partie du corps pour afficher
            les exercices disponibles.
        </p>

        <p>
            <strong>Programme sélectionné :</strong>
            ${currentCategory
                ? currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)
                : "Aucun"}
        </p>

        <p>
            <strong>Position :</strong>
            ${currentPosition
                ? currentPosition.charAt(0).toUpperCase() + currentPosition.slice(1)
                : "Aucune"}
        </p>
    `;
}


/* =========================
   GROUPES DE ZONES
========================= */

const zoneGroups = {

    "Biceps": [
        ".zone-biceps-gauche",
        ".zone-biceps-droite"
    ],

    "Triceps": [
        ".zone-triceps-gauche",
        ".zone-triceps-droite"
    ],

    "Dorsaux": [
        ".zone-dorsal-gauche",
        ".zone-dorsal-droite"
    ],

    "Trapèzes et rhomboïdes": [
        ".zone-trapezes-rhomboides"
    ],

    "Épaules": [
        ".zone-epaule-gauche",
        ".zone-epaule-droite",
        ".zone-epaule-dos-gauche",
        ".zone-epaule-dos-droite"
    ],

    "Avant-bras": [
        ".zone-avant-bras-gauche",
        ".zone-avant-bras-droite"
    ],

    "Extenseurs des avant-bras": [
        ".zone-extenseur-gauche",
        ".zone-extenseur-droite"
    ],

    "Cuisses": [
        ".zone-cuisse-gauche",
        ".zone-cuisse-droite"
    ],

    "Tibias": [
        ".zone-tibia-gauche",
        ".zone-tibia-droite"
    ],

    "Obliques": [
        ".zone-oblique-gauche",
        ".zone-oblique-droite"
    ],

    "Ischio-jambiers": [
        ".zone-ischio-gauche",
        ".zone-ischio-droite"
    ],

    "Mollets": [
        ".zone-mollet-gauche",
        ".zone-mollet-droite"
    ],

    "Lombaires": [
        ".zone-lombaires"
    ],

    "Fessiers": [
        ".zone-fessiers"
    ]

};


/* =========================
   RÉCUPÉRER LES ZONES
   D'UN GROUPE
========================= */

function getGroupZones(groupName) {

    const selectors =
        zoneGroups[groupName] || [];

    return selectors.flatMap(selector =>
        Array.from(
            document.querySelectorAll(selector)
        )
    );
}


/* =========================
   TROUVER LE GROUPE
   D'UNE ZONE
========================= */

function getZoneGroup(zone) {

    for (const groupName in zoneGroups) {

        const zones =
            getGroupZones(groupName);

        if (zones.includes(zone)) {
            return groupName;
        }
    }

    return null;
}


/* =========================
   RÉCUPÉRER LE NOM
   D'UNE ZONE INDIVIDUELLE
========================= */

function getZoneName(zone) {

    const onclickValue =
        zone.getAttribute("onclick");

    if (!onclickValue) {
        return null;
    }

    const match =
        onclickValue.match(
            /showExercises\('([^']+)'\)/
        );

    if (match) {
        return match[1];
    }

    return null;
}

/* =========================
   SCROLL AUTOMATIQUE MOBILE
========================= */

function scrollToExercisesMobile() {

    /* Uniquement sur mobile */
    if (window.innerWidth > 768) {
        return;
    }

    const panel =
        document.getElementById("exercisePanel");

    if (!panel) {
        return;
    }

    /*
       On attend que le panneau soit mis à jour
       avant de calculer sa position.
    */
    setTimeout(() => {

        /*
           On fait descendre la page suffisamment
           pour faire disparaître le haut du site,
           tout en gardant la silhouette visible.
        */

        const silhouette =
            document.querySelector(".body-container");

        if (!silhouette) {
            return;
        }

        const silhouetteTop =
            silhouette.getBoundingClientRect().top +
            window.scrollY;

        /*
           On place le haut de la silhouette
           légèrement au-dessus de l'écran.
           La silhouette reste donc visible,
           mais le titre et les boutons du haut
           sortent de l'écran.
        */

        const scrollPosition =
            silhouetteTop - 70;

        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });

    }, 100);
}

/* =========================
   ÉVÉNEMENT SUR CHAQUE ZONE
========================= */

document
    .querySelectorAll(".body-zone")
    .forEach(zone => {


    /* =========================
       SURVOL
    ========================= */

    zone.addEventListener("mouseenter", function () {


        /* Si quelque chose est verrouillé,
           le survol ne change rien */

        if (selectedZone !== null) {
            return;
        }


        const groupName =
            getZoneGroup(this);


        /* =========================
           ZONE EN GROUPE survol
        ========================= */

        if (groupName) {

            getGroupZones(groupName)
                .forEach(groupZone => {

                    groupZone.classList.add(
                        "hover-group"
                    );

                });


            showExercises(groupName);

        }


        /* =========================
           ZONE INDIVIDUELLE
        ========================= */

        else {

            const zoneName =
                getZoneName(this);

            if (zoneName) {
                showExercises(zoneName);
            }

        }

    });


    /* =========================
       SORTIE DE ZONE
    ========================= */

    zone.addEventListener("mouseleave", function () {


        if (selectedZone !== null) {
            return;
        }


        const groupName =
            getZoneGroup(this);


        if (groupName) {

            setTimeout(() => {

                const stillHovered =
                    getGroupZones(groupName)
                        .some(groupZone =>
                            groupZone.matches(":hover")
                        );


                if (
                    !stillHovered &&
                    selectedZone === null
                ) {

                    getGroupZones(groupName)
                        .forEach(groupZone => {

                            groupZone.classList.remove(
                                "hover-group"
                            );

                        });

                }

            }, 20);

        }

    });


    /* =========================
       CLIC / VERROUILLAGE
    ========================= */

    zone.addEventListener("click", function () {

        const groupName =
            getZoneGroup(this);


        const zoneName =
            getZoneName(this);


        /* =========================
           IDENTIFIANT DE LA SÉLECTION
        ========================= */

        const clickedSelection =
            groupName || zoneName;


        /* =========================
           SI ON RECLIQUE SUR
           LA SÉLECTION ACTUELLE
        ========================= */

        if (
            selectedZone === clickedSelection
        ) {

            document
                .querySelectorAll(
                    ".body-zone.selected"
                )
                .forEach(zone => {

                    zone.classList.remove(
                        "selected"
                    );

                });


            selectedGroup = null;
            selectedZone = null;


            return;
        }


        /* =========================
           NOUVELLE SÉLECTION
           → EFFACER L'ANCIENNE
        ========================= */

        document
            .querySelectorAll(
                ".body-zone.selected"
            )
            .forEach(zone => {

                zone.classList.remove(
                    "selected"
                );

            });


        document
            .querySelectorAll(
                ".body-zone.hover-group"
            )
            .forEach(zone => {

                zone.classList.remove(
                    "hover-group"
                );

            });


        /* =========================
            ZONE INDIVIDUELLE partie clique
        ========================= */

        if (!groupName) {

        this.classList.add("selected");

        selectedGroup = this;

        selectedZone = zoneName;


        if (zoneName) {
         showExercises(zoneName);
        }

        return;
    }


                /* =========================
           GROUPE bloc clic
        ========================= */

        getGroupZones(groupName)
            .forEach(groupZone => {

                groupZone.classList.add(
                    "selected"
                );

            });

        selectedGroup = groupName;
        selectedZone = groupName;

        showExercises(groupName);

    });

}); // ← IMPORTANT : fermeture de querySelectorAll().forEach()


/* =========================
   INITIALISATION
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        resetSelection();

    }
);

/* =========================
   RÉINITIALISER
========================= */

function resetSelection() {

    /* Désélectionner toutes les zones */

    document
        .querySelectorAll(".body-zone.selected")
        .forEach(zone => {
            zone.classList.remove("selected");
        });

    document
        .querySelectorAll(".body-zone.hover-group")
        .forEach(zone => {
            zone.classList.remove("hover-group");
        });


    /* Réinitialiser les sélections */

    selectedGroup = null;
    selectedZone = null;


    /* Réinitialiser les boutons */

    document
        .querySelectorAll(".category-button")
        .forEach(button => {
            button.classList.remove("active");
        });

    document
        .querySelectorAll(".position-button")
        .forEach(button => {
            button.classList.remove("active");
        });

    document
        .querySelectorAll(".view-button")
        .forEach(button => {
            button.classList.remove("active");
        });


    /* Réinitialiser les variables */

currentCategory = null;
currentPosition = null;
currentView = null;


/* Cacher toutes les zones */

document
    .querySelectorAll(".front-zone")
    .forEach(zone => {
        zone.style.display = "none";
    });

document
    .querySelectorAll(".back-zone")
    .forEach(zone => {
        zone.style.display = "none";
    });


/* Cacher les deux silhouettes */

document.getElementById("frontBody").style.display = "none";
document.getElementById("backBody").style.display = "none";


/* Mettre à jour la progression */

updateProgress();


/* Remettre le panneau à zéro */

const panel =
    document.getElementById("exercisePanel");

panel.innerHTML = `
    <h2>Choisissez trois options</h2>

    <p>
        Puis cliquez sur une partie du corps pour afficher
        les exercices disponibles.
    </p>
`;
}

/* =========================
   PROGRESSION 0 / 3
========================= */

function updateProgress() {

    const progress =
        document.getElementById("progressIndicator");

    if (!progress) return;

    let count = 0;

    if (currentCategory !== null) {
        count++;
    }

    if (currentPosition !== null) {
        count++;
    }

    if (currentView !== null) {
        count++;
    }

    progress.textContent = `${count} / 3`;
}
