// ==================================================
// VEN Alliance Hub - Central Logic & Dynamic Events Engine
// ==================================================

const MY_KINGDOM_ID = 2166;

// Base de Dados dos Cartões de Eventos para Renderização Dinâmica
const EVENT_CARDS = {
    viking: {
        title: "🛡️ Viking Attack Guide",
        url: "viking-attack.html",
        desc: "Estratégia de 20 ondas, defesa do QG e reforços de Infantaria para maximizar pontos."
    },
    bear: {
        title: "🐻 Bear Trap Strategy",
        url: "bear-trap.html",
        desc: "Otimiza os heróis de rally, formações de entrada e danos na Bear Trap."
    },
    mobi: {
        title: "📋 Alliance Mobilization",
        url: "alliance-mobilization.html",
        desc: "Cumpre missões, gere speedups e desbloqueia os baús de metas da aliança."
    },
    championship: {
        title: "🏆 Alliance Championship",
        url: "alliance-championship.html",
        desc: "Inscrição no Middle Lane, heróis táticos e rácios de tropas para vitória."
    },
    swordland: {
        title: "🗡️ Swordland Showdown",
        url: "swordland-showdown.html",
        desc: "Truques F2P para o hospital, captura de edifícios e meta dos 180K pontos."
    }
};

// TIMELINE OFICIAL DO REINO #2166
const OFFICIAL_TIMELINE = [
    { date: "2026-06-07", title: "Generation 1 Heroes", type: "heroes", desc: "Gen 1 Heroes introduced at kingdom launch." },
    { date: "2026-06-13", title: "First Sanctuary Battle", type: "event", desc: "The first Sanctuary battle opens." },
    { date: "2026-06-20", title: "Plains fog cleared", type: "event", desc: "The outer plains fog lifts." },
    { date: "2026-06-24", title: "Mystic Trial", type: "event", desc: "Mystic Trial becomes available." },
    { date: "2026-07-01", title: "First Fortress Battle", type: "event", desc: "The first Fortress battle opens." },
    { date: "2026-07-13", title: "Generation 2 Heroes", type: "heroes", desc: "Gen 2 Heroes introduced in events." },
    { date: "2026-07-14", title: "Fertile Land fog cleared", type: "event", desc: "The Fertile Land fog lifts." },
    { date: "2026-07-21", title: "Alliance resource exchange", type: "event", desc: "Alliance resource exchange unlocks." },
    { date: "2026-07-30", title: "First King's Castle Battle", type: "castle", desc: "The first King's Castle battle opens!" },
    { date: "2026-07-31", title: "Generation 1 Pets", type: "pets", desc: "Gray Wolf introduced." },
    { date: "2026-08-01", title: "King's Castle War", type: "castle", desc: "King's Castle war round." },
    { date: "2026-08-08", title: "King's Castle War", type: "castle", desc: "King's Castle war round." },
    { date: "2026-08-15", title: "Age of Truegold", type: "tech", desc: "The Age of Truegold begins." },
    { date: "2026-08-15", title: "King's Castle War", type: "castle", desc: "King's Castle war round." },
    { date: "2026-08-15", title: "Generation 2 Pets", type: "pets", desc: "Moose, Cheetah, Bison & Lynx unlocked." },
    { date: "2026-08-19", title: "First KvK preparation", type: "kvk", desc: "Preparation for the first KvK starts!" },
    { date: "2026-08-22", title: "King's Castle War", type: "castle", desc: "King's Castle war round." },
    { date: "2026-08-24", title: "First KvK Castle Battle", type: "kvk", desc: "The first cross-server castle battle!" },
    { date: "2026-08-26", title: "First Alliance Brawl", type: "event", desc: "The first Alliance Brawl opens." },
    { date: "2026-09-14", title: "Governor gear exchange", type: "tech", desc: "Governor gear material exchange opens." },
    { date: "2026-09-14", title: "Generation 3 Heroes", type: "heroes", desc: "Gen 3 Heroes introduced." },
    { date: "2026-09-14", title: "Generation 3 Pets", type: "pets", desc: "Lion & Grizzly Bear unlocked." },
    { date: "2026-10-26", title: "Truegold 5", type: "tech", desc: "Truegold Tier 5 unlocked." },
    { date: "2026-10-26", title: "Governor charm exchange", type: "tech", desc: "Governor charm material exchange opens." },
    { date: "2026-11-16", title: "Governor charm cap raised", type: "tech", desc: "The Governor charm cap increases." },
    { date: "2026-12-07", title: "Generation 4 Heroes", type: "heroes", desc: "Gen 4 Heroes introduced." },
    { date: "2026-12-07", title: "Generation 4 Pets", type: "pets", desc: "Mighty Bison & Giant Rhino unlocked." },
    { date: "2027-01-04", title: "War Academy", type: "tech", desc: "War Academy building & tech unlocks." },
    { date: "2027-03-01", title: "Generation 5 Heroes", type: "heroes", desc: "Gen 5 Heroes introduced." },
    { date: "2027-03-01", title: "Generation 5 Pets", type: "pets", desc: "Great Moose & Alpha Black Panther unlocked." },
    { date: "2027-04-12", title: "Truegold 8", type: "tech", desc: "Truegold Tier 8 unlocked." },
    { date: "2027-05-24", title: "Generation 6 Heroes", type: "heroes", desc: "Gen 6 Heroes introduced." },
    { date: "2027-05-24", title: "Generation 6 Pets", type: "pets", desc: "Regal White Lion & Ironclad War Elephant." },
    { date: "2027-08-16", title: "Generation 7 Heroes", type: "heroes", desc: "Gen 7 Heroes introduced." },
    { date: "2027-08-16", title: "Generation 7 Pets", type: "pets", desc: "Gen 7 Pets unlocked." },
    { date: "2027-09-27", title: "Truegold 10", type: "tech", desc: "Truegold Tier 10 unlocked." },
    { date: "2027-11-08", title: "Generation 8 Heroes", type: "heroes", desc: "Gen 8 Heroes introduced." },
    { date: "2027-11-08", title: "Generation 8 Pets", type: "pets", desc: "Gen 8 Pets unlocked." },
    { date: "2028-01-31", title: "Generation 9 Heroes", type: "heroes", desc: "Gen 9 Heroes introduced." },
    { date: "2028-01-31", title: "Generation 9 Pets", type: "pets", desc: "Gen 9 Pets unlocked." },
    { date: "2028-04-24", title: "Generation 10 Heroes", type: "heroes", desc: "Gen 10 Heroes introduced." },
    { date: "2028-04-24", title: "Generation 10 Pets", type: "pets", desc: "Gen 10 Pets unlocked." },
    { date: "2028-07-17", title: "Generation 11 Heroes", type: "heroes", desc: "Gen 11 Heroes introduced." },
    { date: "2028-07-17", title: "Generation 11 Pets", type: "pets", desc: "Gen 11 Pets unlocked." },
    { date: "2028-10-09", title: "Generation 12 Heroes", type: "heroes", desc: "Gen 12 Heroes introduced." },
    { date: "2028-10-09", title: "Generation 12 Pets", type: "pets", desc: "Gen 12 Pets unlocked." }
];

// Função Principal de Inicialização do Reino
async function initKingdomData() {
    const summaryContainer = document.getElementById('timeline-summary');
    const roadmapContainer = document.getElementById('timeline-roadmap');
    const badge = document.getElementById('kingdom-header-badge');
    const liveEventsGrid = document.getElementById('live-events-grid');

    const openDate = new Date("2026-06-07T11:35:01.000Z");
    const today = new Date();
    const ageDays = Math.max(0, Math.floor((today - openDate) / (1000 * 60 * 60 * 24)));
    const dayOfWeek = today.getDay(); 

    let activeEventsList = [];
    let activeCardKeys = [];

    // Cálculo do Ciclo do Hall of Governors (14 Dias)
    const hogReferenceStart = new Date("2026-07-27T00:00:00Z");
    const diffDaysFromRef = Math.floor((today - hogReferenceStart) / (1000 * 60 * 60 * 24));
    const hogCycleDay = ((diffDaysFromRef % 14) + 14) % 14;

    if (hogCycleDay < 6) {
        activeEventsList.push(`🏆 Hall of Governors (Day ${hogCycleDay + 1}/6)`);
    }

    // Regras de Eventos por Dia da Semana / Ciclos
    // Terças (2) e Quintas (4) costumam ter Bear Trap / Viking
    if (dayOfWeek === 2 || dayOfWeek === 4) {
        activeEventsList.push("Viking Vengeance", "Bear Hunt");
        activeCardKeys.push("viking", "bear");
    } else if (dayOfWeek === 1 || dayOfWeek === 5) {
        // Segundas e Sextas com Mobilização / Championship
        activeEventsList.push("Alliance Mobilization");
        activeCardKeys.push("mobi", "championship");
    } else {
        // Padrão nos restantes dias
        activeEventsList.push("Bear Hunt", "Viking Vengeance");
        activeCardKeys.push("bear", "viking");
    }

    // Atualiza o Emblema do Header
    const eventsText = activeEventsList.length > 0 ? ` • Active: ${activeEventsList.join(', ')}` : '';
    if (badge) {
        badge.innerText = `Kingdom #${MY_KINGDOM_ID} | Day ${ageDays}${eventsText}`;
    }

    // RENDERIZAÇÃO DINÂMICA DOS CARTÕES "LIVE NOW"
    if (liveEventsGrid && activeCardKeys.length > 0) {
        liveEventsGrid.innerHTML = activeCardKeys.map(key => {
            const card = EVENT_CARDS[key];
            if (!card) return '';
            return `
                <a href="${card.url}" class="home-card">
                    <div>
                        <span class="badge live">LIVE NOW</span>
                        <h3>${card.title}</h3>
                        <p>${card.desc}</p>
                    </div>
                    <div style="margin-top:15px; color:var(--accent-gold); font-weight:bold; font-size:0.85rem;">Read Guide →</div>
                </a>
            `;
        }).join('');
    }

    // Renderiza o Resumo da Timeline
    if (summaryContainer) {
        summaryContainer.innerHTML = `
            <div class="card" style="border-left: 4px solid var(--accent-gold); padding: 18px 20px;">
                <h3 style="margin:0; font-family: var(--font-header);">Kingdom #${MY_KINGDOM_ID} Server Status</h3>
                <p style="margin: 5px 0 0 0; color: var(--text-muted);">
                    Server Opened: <strong>07-06-2026</strong> | Server Age: <strong style="color: var(--accent-gold);">${ageDays} Days Old</strong>
                </p>
            </div>
        `;
    }

    // Renderiza a Timeline Roadmap Completa
    if (roadmapContainer) {
        let roadmapHtml = '';
        let foundCurrent = false;

        OFFICIAL_TIMELINE.forEach(m => {
            const milestoneDate = new Date(m.date);
            const diffTime = milestoneDate.setHours(0,0,0,0) - new Date().setHours(0,0,0,0);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            let statusClass = '';
            let statusPill = '';

            if (diffDays < 0) {
                statusClass = 'completed';
                statusPill = `<span class="status-pill passed">${m.date} · ${Math.abs(diffDays)}d ago</span>`;
            } else if (diffDays === 0 || (!foundCurrent && diffDays > 0)) {
                foundCurrent = true;
                statusClass = 'current';
                statusPill = `<span class="status-pill active">${m.date} · ${diffDays === 0 ? 'TODAY 🔥' : 'in ' + diffDays + ' days'}</span>`;
            } else {
                statusClass = 'upcoming';
                statusPill = `<span class="status-pill upcoming">${m.date} · in ${diffDays} days</span>`;
            }

            const tagHtml = m.type ? `<span class="tag ${m.type}">${m.type}</span>` : '';

            roadmapHtml += `
                <div class="timeline-item ${statusClass}">
                    <div class="timeline-header">
                        <h4 class="timeline-title">${m.title} ${tagHtml}</h4>
                        ${statusPill}
                    </div>
                    <p class="timeline-desc">${m.desc}</p>
                </div>
            `;
        });

        roadmapContainer.innerHTML = roadmapHtml;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initKingdomData();

    // Sombra no Header ao fazer Scroll
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.style.boxShadow = window.scrollY > 20 
                ? "0 8px 25px rgba(0,0,0,.45)" 
                : "0 6px 18px rgba(0,0,0,.35)";
        });
    }
});
