const paysIsoCode = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 
    'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA', 'KY', 'CF', 
    'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 
    'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 
    'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 
    'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 
    'LT', 'LU', 'MO', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 
    'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 
    'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 
    'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 
    'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 
    'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW'];

const paysIso = [
    'Afghanistan', 'Åland', 'Albanie', 'Algérie', 'Samoa américaines', 'Andorre', 'Angola', 'Anguilla', 'Antarctique', 'Antigua-et-Barbuda',
    'Argentine', 'Arménie', 'Aruba', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Biélorussie',
    'Belgique', 'Belize', 'Bénin', 'Bermudes', 'Bhoutan', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Île Bouvet', 'Brésil', 'Territoire britannique de l océan Indien',
    'Brunéi', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cap-Vert', 'Cambodge', 'Cameroun', 'Canada', 'Îles Caïmans', 'République centrafricaine',
    'Tchad', 'Chili', 'Chine', 'Île Christmas', 'Îles Cocos', 'Colombie', 'Comores', 'République du Congo', 'République démocratique du Congo', 'Îles Cook',
    'Costa Rica', 'Côte d Ivoire', 'Croatie', 'Cuba', 'Chypre', 'République tchèque', 'Danemark', 'Djibouti', 'Dominique', 'République dominicaine', 
    'Équateur', 'Égypte', 'Salvador', 'Guinée équatoriale', 'Érythrée', 'Estonie', 'Éthiopie', 'Îles Malouines', 'Îles Féroé', 'Fidji',
    'Finlande', 'France', 'Guyane française', 'Polynésie française', 'Terres australes et antarctiques françaises', 'Gabon', 'Gambie', 'Géorgie', 'Allemagne', 'Ghana', 
    'Gibraltar', 'Grèce', 'Groenland', 'Grenade', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernesey', 'Guinée', 'Guinée-Bissau', 'Guyana', 'Haïti', 'Îles Heard-et-MacDonald', 
    'Saint-Siège', 'Honduras', 'Hong Kong', 'Hongrie', 'Islande', 'Inde', 'Indonésie', 'Iran', 'Irak', 'Irlande', 'Île de Man', 'Israël', 'Italie', 
    'Jamaïque', 'Japon', 'Jersey', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kiribati', 'Corée du Nord', 'Corée du Sud', 'Koweït', 'Kirghizistan', 'Laos', 
    'Lettonie', 'Liban', 'Lesotho', 'Liberia', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macao', 'Madagascar', 'Malawi', 'Malaisie', 
    'Maldives', 'Mali', 'Malte', 'Îles Marshall', 'Martinique', 'Mauritanie', 'Maurice', 'Mayotte', 'Mexique', 'Micronésie', 'Moldavie', 
    'Monaco', 'Mongolie', 'Monténégro', 'Montserrat', 'Maroc', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Népal', 'Pays-Bas', 'Nouvelle-Calédonie', 
    'Nouvelle-Zélande', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Île Norfolk', 'Îles Mariannes du Nord', 'Norvège', 'Oman', 'Pakistan', 'Palaos', 'Palestine', 'Panama', 
    'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pérou', 'Philippines', 'Îles Pitcairn', 'Pologne', 'Portugal', 'Porto Rico', 'Qatar', 'Réunion', 
    'Roumanie', 'Russie', 'Rwanda', 'Saint-Barthélemy', 'Sainte-Hélène', 'Saint-Kitts-et-Nevis', 'Sainte-Lucie', 'Saint-Martin', 'Saint-Pierre-et-Miquelon', 'Saint-Vincent-et-les-Grenadines', 
    'Samoa', 'Saint-Marin', 'Sao Tomé-et-Principe', 'Arabie saoudite', 'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 
    'Sint Maarten', 'Slovaquie', 'Slovénie', 'Îles Salomon', 'Somalie', 'Afrique du Sud', 'Géorgie du Sud-et-les Îles Sandwich du Sud', 'Soudan du Sud', 
    'Espagne', 'Sri Lanka', 'Soudan', 'Suriname', 'Svalbard et Jan Mayen', 'Eswatini', 'Suède', 'Suisse', 'Syrie', 'Taïwan', 'Tadjikistan', 
    'Tanzanie', 'Thaïlande', 'Timor oriental', 'Togo', 'Tokelau', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turquie', 'Turkménistan', 'Îles Turques-et-Caïques', 
    'Tuvalu', 'Ouganda', 'Ukraine', 'Émirats arabes unis', 'Royaume-Uni', 'États-Unis', 'Îles mineures éloignées des États-Unis', 'Uruguay', 
    'Ouzbékistan', 'Vanuatu', 'Venezuela', 'Viêt Nam', 'Îles Vierges britanniques', 'Îles Vierges des États-Unis', 'Wallis-et-Futuna', 'Sahara occidental', 
    'Yémen', 'Zambie', 'Zimbabwe'];
    
//Declaration variables initiales
    const countriesDisplayed = [];
    let points = 0;
    let lastOk = [];
    let propositions = [];

//Selectionne un pays et pousse les pays déjà utilisés dans countriesDisplayed. Compare si le pays est déjà dans countriesDisplayed.

const selectCountry = () => {
    let rand = Math.floor(Math.random()*254)
    if (countriesDisplayed.includes(paysIso[rand])) {
        if (points >= paysIso.length - 1) {
            console.log('Tous les pays ont été joués')
        return null;
       } else {
        return selectCountry();
        }
    } else {
        points ++;
        countriesDisplayed.push(paysIso[rand])
    }
    lastOk.push(paysIso[rand]);
    return paysIso[rand];
}

// set le drapeau d'une nouvelle carte
const flag = () => {
    let drapeauCarte = document.getElementById("drapeauCarte")
     drapeauCarte.src = `img/${paysIsoCode[paysIso.indexOf(lastOk[lastOk.length-1])]}.png`;
}

//génère trois mauvaises réponses
const badAnswer = () => {
    let propositions = [];
    
    for (let j = 0; j < 3; j++) {
        let bad;
        do {
            bad = Math.floor(Math.random() * 254);
        } while (lastOk.includes(paysIso[bad]) || propositions.includes(paysIso[bad])); 
        
        propositions.push(paysIso[bad]);
        console.log(paysIso[bad]);
    }
    
    return propositions;
}


// Tests
/*for (let i = 0; i  < paysIso.length ; i++){
    selectCountry();
}

//appelle une bonne réponse
console.log(selectCountry());

//affiche la liste de pays déjà appellés en bonne réponse
console.log(countriesDisplayed)
console.log(flag())
console.log(badAnswer());

*/

//reset une partie

let nouvellePartie = document.getElementById("nouvellePartie");

nouvellePartie.addEventListener('click', newGame)

function newGame() {
    let card = document.getElementById('card');
    card.style.display = 'none';
}

// lance une partie monde

let monde = document.getElementById('monde');

monde.addEventListener('click', gameMonde);

// Shuffle Fischer-Yates

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//store la bonne reponse dans la variable

let bonneReponse = lastOk[lastOk.length-1];

//Génére les mauvaises propositions

let mauvaisesPropositions = badAnswer();

// Genere un array 4 choix

let choix = [bonneReponse, ...mauvaisesPropositions];

//melange des propositions

let reponsesAleatoires = shuffleArray(choix);

// insertions dans l'html

let choix1 = document.getElementById('choix1')
let choix2 = document.getElementById('choix2')
let choix3 = document.getElementById('choix3')
let choix4 = document.getElementById('choix4')

choix1.innerHTML = reponsesAleatoires[0];
choix2.innerHTML = reponsesAleatoires[1];
choix3.innerHTML = reponsesAleatoires[2];
choix4.innerHTML = reponsesAleatoires[3];

/*
const genererChoix = () => {
    let choix1 = document.getElementById('choix1')
    let choix2 = document.getElementById('choix2')
    let choix3 = document.getElementById('choix3')
    let choix4 = document.getElementById('choix4')
    const tableauChoix = [choix1, choix2, choix3, choix4]
    const randomChoix = (tableauChoix) => {
        for (let i = tableauChoix.length - 1; i > 0; i--) {
            // Générer un index aléatoire
            const j = Math.floor(Math.random() * (i + 1));
            // Échanger les éléments array[i] et array[j]
            [tableauChoix[i], tableauChoix[j]] = [tableauChoix[j], tableauChoix[i]];
        }
        return tableauChoix;
    }
    choix1.innerHTML = tableauChoix[0];
    choix2.innerHTML = tableauChoix[1];
    choix3.innerHTML = tableauChoix[2];
    choix4.innerHTML = tableauChoix[3];
}
    */

function gameMonde() {
    card.style.display = 'flex';
    selectCountry();
    flag();
    genererChoix();
}