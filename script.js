// ========================
// 1. SERVICES DATA
// ========================
const servicesData = [
    { 
        id: "specialistische-reiniging", 
        name: "Specialistische Reiniging", 
        fullDesc: "Schoonmaakbedrijf Golden Touch cleaning biedt allerlei schoonmaakdiensten op het gebied van specialistische reiniging. Wilt u uw gevel, glas, portiek, zonnepanelen of vloer grondig laten reinigen? Wij laten uw gebouw er van binnen en buiten weer als nieuw uitzien.", 
        img: "Specialistische reiniging.webp" 
    },
    { 
        id: "bouwoplevering-schoonmaken", 
        name: "Bouwoplevering schoonmaken", 
        fullDesc: "Een professionele reiniging van de woning na de bouw / renovatie door een ervaren schoonmaakbedrijf kan de algehele look en feel van een ruimte aanzienlijk verbeteren en helpt ook om een project op te leveren zoals de klant het verwacht.", 
        img: "Bouwoplevering schoonmaken.webp" 
    },
    { 
        id: "gevel-impregneren", 
        name: "Gevel Impregneren", 
        fullDesc: "Waarom gevel impregneren?\nJe gevel impregneren is een investering in de toekomst van je woning. Hier zijn de belangrijkste voordelen:\n\n1. Bescherming tegen vocht en schimmel\nRegen, sneeuw en opspattend water kunnen je gevel flink aantasten. Door te impregneren voorkom je dat vocht in de stenen trekt en schimmel of vorstschade veroorzaakt.\n\n2. Minder onderhoud, minder kosten\nEen geïmpregneerde gevel blijft langer schoon. Vuil en aanslag hechten zich minder snel, waardoor je minder vaak hoeft te reinigen of te herstellen.\n\n3. Verlengde levensduur van je gevel\nJe gevel ziet er niet alleen mooier uit, hij blijft ook langer in topconditie. Dat scheelt in de toekomst in dure reparaties of vervangingen.\n\n4. Natuurlijke uitstraling blijft behouden\nGoede impregneermiddelen veranderen niets aan het uiterlijk van je gevel. Je behoudt dus die mooie, authentieke look — maar dan met extra bescherming.", 
        img: "Gevel impregneren.webp" 
    },
    { 
        id: "hogedrukreiniging", 
        name: "Hogedrukreiniging", 
        fullDesc: "Hogedrukreiniging nu is dé specialist als het gaat om hogedrukreiniging. Wij zijn gespecialiseerd in het reinigen van gevels, daken, straatwerk, openbare voorzieningen en nog veel meer. Het is onze missie om uw object zorgvuldig te reinigen, zonder dat de ondergrond beschadigd raakt bij de werkzaamheden.\n\nWij maken gebruik van modern materieel. Zo beschikken wij onder andere over geavanceerde hogedruk-installaties, straalketels en bovendien reinigen wij . Vraag gerust een offerte aan of kijk rond op onze website. Wij helpen u graag!", 
        img: "Hogedrukreiniger.webp" 
    },
    { 
        id: "zonnepanelen", 
        name: "Zonnepanelen Reinigen", 
        fullDesc: "Heeft uw bedrijf of uw huis, zonnepark, of vereniging van eigenaren veel zonnepanelen? Schone zonnepanelen hebben een hogere energieopbrengst. Laat daarom uw zonnepanelen reinigen door een professioneel schoonmaakbedrijf. Golden Touch cleaning is dé specialist in het reinigen van grote zonne-installaties. Laat ons uw zonnepanelen schoon en efficiënt houden", 
        img: "Zonnepanelen reinigen.webp" 
    },
    { 
        id: "glasbewassing", 
        name: "Glasbewassing", 
        fullDesc: "Ramen wassen draagt bij aan de uitstraling van het exterieur van uw kantoorpand. De glazenwasser geeft een fris en stralend resultaat aan het exterieur aan uw bedrijfspand die u als ondernemer of beheerder voor ogen heeft. Goed gewassen ramen geven net iets meer chic aan uw kantoorgebouw of pand. Wilt u voor de glasbewassing kun je de beste glazenwasser inschakelen bel Golden Touch cleaning voor schone ramen. De telescopische glasbewassing geeft een heldere en streeploze glaspartij. Onze glazenwasser heeft ruime ervaring als vakman voor glasbewassing van uw ramen.", 
        img: "Glasbewassing.webp" 
    },
    { 
        id: "kozijnen-reiniging", 
        name: "Kozijnen Reiniging", 
        fullDesc: "Vaak zijn bij gladde kunststof en aluminium kozijnen op den duur zwarte vuilstrepen zichtbaar.\nWanneer deze kozijnen niet tijdig worden schoongemaakt bestaat de kans dat deze vuilstrepen inbranden in de kozijnen, waarna deze niet meer te verwijderen zijn zonder de toplaag van de kozijnen te beschadigen.\n\nBij het reinigen van uw kunststof of aluminium kozijnen voeren wij de volgende schoonmaakwerkzaamheden uit:\n\nHet reinigen van de kunststof of aluminium kozijnen met een speciale intensieve reiniger, Dit reinigingsmiddel verwijderd eventuele zwarte strepen, en brengt uiteraard geen schade aan op uw kozijnen.\n\nHet netjes schoon wassen van uw buitenramen.", 
        img: "Kozijnen reiniging.webp" 
    },
    { 
        id: "vloeronderhoud", 
        name: "Vloeronderhoud", 
        fullDesc: "Heeft uw bedrijf of uw Huis linoleum of marmoleum of natuursteen vloeren? Deze moeten goed worden onderhouden. Een speciale beschermlaag voorkomt slijtage en uitdroging. Na verloop van tijd slijt deze laag echter weg. Laat uw linoleum daarom professioneel reinigen en onderhouden", 
        img: "Vloeronderhoud.webp" 
    },
    { 
        id: "graffiti-verwijderen", 
        name: "Graffiti Verwijderen", 
        fullDesc: "Heeft u last van graffiti en wilt u deze professioneel laten verwijderen? Dan staat golden Touch cleaning voor u klaar. Zelf graffiti verwijderen met removers werkt niet goed. Zeker niet bij hardnekkig graffiti. Schakel daarom een professioneel reinigingsbureau in zoals golden Touch cleaning . De specialisten van golden Touch cleaning brengen graag een anti-graffiti coating aan om het oppervlak of de gevel te beschermen.", 
        img: "Graffiti verwijderen.webp" 
    }
];

// ========================
// 2. RENDER SERVICES
// ========================
const servicesGrid = document.getElementById('servicesGrid');
function buildServices() {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = '';
    servicesData.forEach((s, idx) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.id = s.id;
        
        const animations = ['slide-left', 'slide-right', 'fade-up', 'fade-down'];
        const anim = animations[idx % animations.length];
        card.setAttribute('data-animate', anim);
        
        card.innerHTML = `
            <div class="service-img" style="background-image: url('assets/${s.img}');"></div>
            <div class="service-info">
                <h3>${s.name}</h3>
            </div>
        `;
        card.addEventListener('click', () => openModal(s));
        servicesGrid.appendChild(card);
    });
}
buildServices();

// ========================
// 3. MODAL LOGIC
// ========================
const modal = document.getElementById('serviceModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBenefits = document.getElementById('modalBenefits');
const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

function openModal(service) {
    if (!modal) return;
    modalImg.src = `assets/${service.img}`;
    modalTitle.innerText = service.name;
    modalDesc.innerText = service.fullDesc;
    modalBenefits.innerHTML = '';
    modalWhatsappBtn.href = `https://wa.me/31643608505?text=${encodeURIComponent(`Hallo Golden Touch, ik wil graag de dienst "${service.name}" boeken.`)}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.close-modal')?.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// ========================
// 4. HERO VIDEO LOGIC
// ========================
function initHeroVideo() {
    const poster = document.getElementById('heroPoster');
    const iframe = document.querySelector('.hero-video-iframe');

    if (!poster || !iframe) return;

    iframe.onload = () => {
        poster.style.opacity = '0';
        setTimeout(() => {
            poster.style.display = 'none';
        }, 500);
    };

    setTimeout(() => {
        poster.style.opacity = '0';
        setTimeout(() => {
            poster.style.display = 'none';
        }, 500);
    }, 3000);
}
initHeroVideo();

// ========================
// 5. SERVICE NAVIGATION LOGIC
// ========================
function initServiceNav() {
    const navItems = document.querySelectorAll('.service-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetCard = document.getElementById(targetId);
            const service = servicesData.find(s => s.id === targetId);

            if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                targetCard.classList.add('highlight');
                setTimeout(() => targetCard.classList.remove('highlight'), 2000);

                if (service) {
                    setTimeout(() => openModal(service), 800);
                }
            }
        });
    });
}
initServiceNav();

// ========================
// 6. UTILITIES (Observer)
// ========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate], .service-card, .portfolio-card').forEach(el => observer.observe(el));

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
});
