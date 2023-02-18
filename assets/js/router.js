const route = (event) => {
    event = event || window.event;
    console.log("event", event)
    event.preventDefault();
    window.history.pushState({}, "genial", event.target.href);
    handleLocation();
};

// const routes = {
//     404: "/pages/404.html",
//     "/": "/pages/home.html",
//     "/about": "/pages/about.html",
//     "/lorem": "/pages/lorem.html",
// };

const routes = {
    404: `Page non disponible`,
    "/": `
    <div class="page-container">
        <section id="hero">
            <div class="container hero">
                <div class="hero_about">
                    <div class="hero__logo">
                        <img src="assets/images/LOGO.svg" alt="">
                    </div>
                    <h6 class="section-title">CPH & PARTNERS</h6>
                    <p>
                        Est un cabinet spécialisé en études d’ingénierie du Génie Civil, transport, Management de projets et
                        de renforcement de capacités.
                        Notre ambition est de déployer une démarche professionnelle axée sur l’excellence et fondée sur la
                        transparence et la responsabilité avec une volonté affirmée d’instaurer et de maintenir avec nos
                        clients, une relation partenariale pour analyser et identifier ensemble, les enjeux techniques,
                        économiques et financiers
                        de leurs projets

                    </p>
                </div>

                <div class="hero__image">
                    <img src="../assets/images/hero.png" alt="">
                </div>
            </div>
        </section>

        <section id="domaine" class="dotted-bg">
            <div class="container">
                <h6 class="section-title" data-description="EXPERTISES">Nos domaines d’activités</h6>

                <div class="domaine-list">
                    <div class="domaine__card">
                        <div class="domaine__icon">
                            <i>
                                <svg width="40px" height="40px" viewBox="0 0 40 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="40" height="40" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_1_2115" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1_2115" width="64" height="64"
                                            xlink:href="data:image/png;base64,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" />
                                    </defs>
                                </svg>

                            </i>
                        </div>
                        <div class="domaine__details">
                            <h6 class="domaine__title">Audit & Expertise</h6>
                            <p class="domaine__description">
                                Audit technique, audit des marchés
                                publics, suivi et évaluation de projets, expertise immobilière...
                            </p>
                        </div>
                    </div>

                    <div class="domaine__card">
                        <div class="domaine__icon">
                            <i>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="40" height="40" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_1_2104" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1_2104" width="64" height="64"
                                            xlink:href="data:image/png;base64,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" />
                                    </defs>
                                </svg>

                            </i>
                        </div>
                        <div class="domaine__details">
                            <h6 class="domaine__title">Assistance à maitrise d’ouvrage
                            </h6>
                            <p class="domaine__description">
                                Assistance, organisation et
                                planification, assistance au suivi
                                technique.........

                            </p>
                        </div>
                    </div>

                    <div class="domaine__card">
                        <div class="domaine__icon">
                            <i>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="40" height="40" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_1_2120" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1_2120" width="64" height="64"
                                            xlink:href="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <div class="domaine__details">
                            <h6 class="domaine__title">Etudes préliminaires</h6>
                            <p class="domaine__description">
                                Etudes de diagnostic, études de
                                faisabilité, de programmation ou
                                d’impacts, échémas directeurs....

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="valeur" class="circular-bg">
            <div class="container">
                <h6 class="section-title" data-description="A PROPOS DE NOUS">Nos valeurs</h6>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a consequatur itaque nihil quia, esse
                    minima quod. Omnis fuga, magni exercitationem eius voluptatem inventore autem ipsa porro, delectus earum
                    molestiae dolores, aliquam amet soluta. Nemo consequatur ex aut sunt ipsum explicabo sint, alias minima
                    in facilis amet fuga quos natus?
                </p>

            </div>
        </section>

        <section id="formation" class="dotted-bg">
            <div class="container">
                <h6 class="section-title" data-description="COMPÉTENCES">Nos Formations</h6>

                <div class="formation-list">
                    <div class="formation__item">

                        <div class="formation__description">
                            <h3 class="formation__title">Passation des marchés</h3>
                            <p class="formation__details">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit culpa hic commodi
                                aspernatur nemo quaerat.
                            </p>
                            <!--  -->
                        </div>
                        <div class="formation__cover">
                            <a href="#">
                                <img src="../assets/images/formations/formation-1.png" alt="">
                            </a>
                        </div>
                    </div>

                    <div class="formation__item">

                        <div class="formation__description">
                            <h3 class="formation__title">Maîtrise des coûts BTP</h3>
                            <p class="formation__details">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit culpa hic commodi
                                aspernatur nemo quaerat.
                            </p>
                        </div>
                        <div class="formation__cover">
                            <a href="#">
                                <img src="../assets/images/formations/formation-2.png" alt="">
                            </a>
                        </div>
                    </div>

                    <div class="formation__item">

                        <div class="formation__description">
                            <h3 class="formation__title">Exécution des travaux</h3>
                            <p class="formation__details">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique repellendus maiores
                                sapiente labore, molestias eos eveniet perspiciatis expedita nostrum?
                            </p>
                        </div>
                        <div class="formation__cover">
                            <a href="#">
                                <img src="../assets/images/formations/formation-3.png" alt="">
                            </a>
                        </div>
                    </div>

                    <div class="formation__item">

                        <div class="formation__description">
                            <h3 class="formation__title">Gestion de projets</h3>
                            <p class="formation__details">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim voluptatum possimus quod
                                dicta exercitationem, neque iure maiores iste voluptatibus, autem, saepe culpa!
                            </p>
                        </div>
                        <div class="formation__cover">
                            <a href="#">
                                <img src="../assets/images/formations/formation-1.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="statistic" class="">
            <div class="container">
                <h6 class="section-title__secondary">Plus de 2000 formations & accompagnement
                    réalisées avec succès
                </h6>

                <div class="stat__list">
                    <div class="stat__item">
                        <i class="stat__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path
                                    d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
                            </svg>
                        </i>
                        <h6 data-val="500" class="stat__counter num">500</h6>
                        <div class="stat__line"></div>
                        <p class="stat__name">Projets</p>
                    </div>

                    <div class="stat__item">
                        <i class="stat__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
                            </svg>
                        </i>
                        <h6 data-val="100" class="stat__counter num">100</h6>
                        <div class="stat__line"></div>
                        <p class="stat__name">Clients</p>
                    </div>

                    <div class="stat__item">
                        <i class="stat__icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                            </svg>
                        </i>
                        <h6 data-val="250" class="stat__counter num">250</h6>
                        <div class="stat__line"></div>
                        <p class="stat__name">Formations</p>
                    </div>

                    <div class="stat__item">
                        <i class="stat__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path
                                    d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
                            </svg>
                        </i>
                        <h6 data-val="500" class="stat__counter num">500</h6>
                        <div class="stat__line"></div>
                        <p class="stat__name">Projets</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="partners">
            <div class="partners container">
                <h6 class="section-title__secondary">Ils nous font confiance</h6>

                <div class="partners__gallery">
                    <ul role="list">
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/ue.svg" alt="">
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img src="../assets/images/partners/nip.svg" alt="">
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img src="../assets/images/partners/afd.svg" alt="">
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img src="../assets/images/partners/worldbank logo 1.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/kekeli.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/bidc.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/isdb.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/morocco.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/giz.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/africa.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/artelia.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/cellule.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/eprd.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/armp.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/millenium.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/MCVDD 1.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/nsia.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/suez.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/hiram.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/sofreco.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/came.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/getran.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/projes.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/SIRAT.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/boad.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/images/partners/banca.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    `,
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    console.log(path);
    const route = routes[path] || routes[404];
    let html
    if (path == '/') {
        html = route
     }
    else {
        html = await fetch(route).then((data) => data.text());
    }
    document.getElementById("main-page").innerHTML = html;
    document.getElementById('nav').classList.remove(['show-menu'])
    document.getElementById('burger').classList.remove(['active'])

    if (path == '/') {
        let valueDisplays = document.querySelectorAll(".num");
        let interval = 4000;
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();