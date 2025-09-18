document.addEventListener("DOMContentLoaded", () => {
    /* fonction pour récupérer l'état des paramètres du thème */
    function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
        if (localStorageTheme !== null) {
            return localStorageTheme;
        }
        if (systemSettingDark.matches) {
            return "dark";
        } else {
            /* defaut */
            return "light";
        }
    }

    /* fonction pour mettre à jour l'aria-label et le texte du bonton */
    function updateButton({ buttons, isDark }) {
        const newCta = isDark ? "Thème clair" : "Thème sombre";
        // use an aria-label if you are omitting text on the button
        // and using a sun/moon icon, for example
        buttons.forEach(button => {
            button.setAttribute("aria-label", newCta);
        });
        //buttonEl.querySelector.innerText = newCta;
    }

    /* fonction pour mettre à jour l'attribut sur l'élément html */
    function updateThemeOnHtmlEl({ theme }) {
        document.querySelector("html").setAttribute("data-theme", theme);
    }

    /* fonction principale, au chargement de la page */
    function switchColor() {
        /* récupération des éléments */
        const buttons = document.querySelectorAll(".contraste");
        const localStorageTheme = localStorage.getItem("theme");
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

        /* récupération de l'état actuel du thème du site */
        let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

        /* mise à jour du bouton en fonction du thème */
        updateButton({ buttons: buttons, isDark: currentThemeSetting === "dark" });
        updateThemeOnHtmlEl({ theme: currentThemeSetting });

        /* event listener au click sur le bouton pour changer de thème */
        buttons.forEach(button => {
            button.addEventListener("click", (event) => {
                const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

                localStorage.setItem("theme", newTheme);
                updateButton({ buttons: buttons, isDark: newTheme === "dark" });
                updateThemeOnHtmlEl({ theme: newTheme });

                currentThemeSetting = newTheme;
            });
        })
        
    }
    switchColor();
});