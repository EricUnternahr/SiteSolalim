CREATE TABLE IF NOT EXISTS roles(
    Id_roles INT,
    nom_roles VARCHAR(50),
    PRIMARY KEY(Id_roles)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS produit(
    Id_produit INT,
    nom_produit VARCHAR(50),
    prix_produit REAL,
    libele_produit TEXT,
    unite_produit VARCHAR(50),
    quota_produit REAL,
    quantum_produit REAL,
    poids_produit REAL,
    PRIMARY KEY(Id_produit)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS commande(
    Id_commande INT,
    date_commande DATETIME,
    PRIMARY KEY(Id_commande)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS reseau(
    Id_reseau INT AUTO_INCREMENT,
    nom_reseau VARCHAR(50),
    description_reseau TEXT,
    PRIMARY KEY(Id_reseau)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS utilisateur(
    Id_utilisateur INT,
    nom_utilisateur VARCHAR(50),
    prenom_utilisateur VARCHAR(50),
    mail_utilisateur VARCHAR(50),
    mot_passe_utilisateur VARCHAR(100),
    telephone_utilisateur VARCHAR(10),
    numero_rue_utilisateur INT,
    nom_rue_utilisateur VARCHAR(50),
    code_postal_utilisateur INT,
    ville_utilisateur VARCHAR(50),
    Id_roles INT NOT NULL,
    PRIMARY KEY(Id_utilisateur),
    UNIQUE(mail_utilisateur),
    FOREIGN KEY(Id_roles) REFERENCES roles(Id_roles)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS ajouter(
    Id_produit INT,
    Id_commande INT,
    quantite REAL,
    PRIMARY KEY(Id_produit, Id_commande),
    FOREIGN KEY(Id_produit) REFERENCES produit(Id_produit),
    FOREIGN KEY(Id_commande) REFERENCES commande(Id_commande)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS commander(
    Id_utilisateur INT,
    Id_commande INT,
    PRIMARY KEY(Id_utilisateur, Id_commande),
    FOREIGN KEY(Id_utilisateur) REFERENCES utilisateur(Id_utilisateur),
    FOREIGN KEY(Id_commande) REFERENCES commande(Id_commande)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS creer(
    Id_utilisateur INT,
    Id_commande INT,
    PRIMARY KEY(Id_utilisateur, Id_commande),
    FOREIGN KEY(Id_utilisateur) REFERENCES utilisateur(Id_utilisateur),
    FOREIGN KEY(Id_commande) REFERENCES commande(Id_commande)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS consulter(
    Id_utilisateur INT,
    Id_reseau INT,
    PRIMARY KEY(Id_utilisateur, Id_reseau),
    FOREIGN KEY(Id_utilisateur) REFERENCES utilisateur(Id_utilisateur),
    FOREIGN KEY(Id_reseau) REFERENCES reseau(Id_reseau)
)Engine=InnoDB DEFAULT CHARSET=utf8mb4;