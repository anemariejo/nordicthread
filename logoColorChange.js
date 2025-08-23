document.addEventListener("DOMContentLoaded", () => {
    const logoText = document.getElementById("logoText");
    const produkterTekst = document.getElementById("produkterTekst");
    const omOssTekst = document.getElementById("omOssTekst");

    const sectionsToObserve = [
        {
            section: document.getElementById("mainPage"), // f.eks. forsiden
            colors: {
                logo: "black",
                produkter: "black",
                omOss: "black"
            }
        },
        {
            section: document.getElementById("produktSection"),
            colors: {
                logo: "black",
                produkter: "black",
                omOss: "black"
            }
        },
        {
            section: document.getElementById("instagramSection"),
            colors: {
                logo: "black",
                produkter: "black",
                omOss: "black"
            }
        },
        {
            section: document.querySelector(".sisteSide"),
            colors: {
                logo: "black",
                produkter: "black",
                omOss: "black"
            }
        }
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const match = sectionsToObserve.find(obj => obj.section === entry.target);
                if (match) {
                    if (logoText) logoText.style.color = match.colors.logo;
                    if (produkterTekst) produkterTekst.style.color = match.colors.produkter;
                    if (omOssTekst) omOssTekst.style.color = match.colors.omOss;
                }

            }
        });
    }, {
        threshold: 0.6
    });

    sectionsToObserve.forEach(obj => {
        if (obj.section) {
            observer.observe(obj.section);
        }
    });
});
