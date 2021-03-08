/**
 * Class representing the fields of an event as it is presented in the API's response.
 * The generic has been made via https://www.quicktype.io, and the json
 * response of the API.
 */

export interface Fields {
    lieu_quartier: string;
    ville: string;
    h_lsf: string;
    libelle_site: string;
    heure_fin: string;
    h_psychique: string;
    lieu: string;
    gratuit: string;
    precisions_tarifs: string;
    url_site: string;
    heure_debut: string;
    location: string;
    type: string;
    complet: string;
    nom: string;
    accueil_enfant: string;
    description: string;
    emetteur: string;
    adresse: string;
    rubrique: string;
    annule: string;
    date: Date;
    lien_agenda: string;
    h_hyperacousie: string;
    carte_blanche: string;
    code_postal: string;
    h_intellectuel: string;
    id_manif: string;
    h_visuel: string;
    h_moteur: string;
    reporte: string;
    media_url: string;
    h_auditif: string;
}
