-- Création de la table "RESEAUX" si elle n'existe pas
CREATE TABLE IF NOT EXISTS RESEAUX (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(50) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    coordonnees VARCHAR(255) NOT NULL
);

-- Création de la table "DBUSER" (USER) si elle n'existe pas
CREATE TABLE IF NOT EXISTS DBUSER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    adresse_mail VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    adresse VARCHAR(100),
    code_postal VARCHAR(10),
    ville VARCHAR(50),
    numero_telephone VARCHAR(15) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user',
    reseaux INT, -- Colonne de référence
    FOREIGN KEY (reseaux) REFERENCES RESEAUX(id)
);

-- Création de la table "COMMANDES" si elle n'existe pas
CREATE TABLE IF NOT EXISTS COMMANDES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total_commande DECIMAL(10, 2) NOT NULL,
    date_heure_commande DATETIME,
    total_produits_quantite INT,
    utilisateur INT,
    reseaux INT,
    FOREIGN KEY (utilisateur) REFERENCES DBUSER(id),
    FOREIGN KEY (reseaux) REFERENCES RESEAUX(id)
);

-- Création de la table "PRODUIT" si elle n'existe pas
CREATE TABLE IF NOT EXISTS PRODUIT (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    designation VARCHAR(255),
    photo VARCHAR(255),
    prix DECIMAL(10, 2) NOT NULL,
    unites VARCHAR(20) NOT NULL,
    quantite INT,
    quantum INT,
    quota INT,
    poids DECIMAL(10, 2)
);
