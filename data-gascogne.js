const graphData = {
  "nodes": [
    {"id": "Interconnexion France–Espagne par le Golfe de Gascogne", "label": "Interconnexion France–Espagne", "group": "Projet central", "size": 32, "detail": "Projet d’interconnexion électrique France–Espagne par le Golfe de Gascogne.", "position": "Projet central.", "evidence": "Projet central du corpus analysé."},
    {"id": "RTE", "label": "RTE", "group": "Porteurs du projet", "size": 26, "detail": "Gestionnaire français du réseau de transport d’électricité.", "position": "Porteur français du projet ; favorable.", "evidence": "Défend un projet stratégique pour la transition énergétique, la sécurité d’approvisionnement et l’intégration des renouvelables."},
    {"id": "Red Eléctrica", "label": "Red Eléctrica", "group": "Porteurs du projet", "size": 25, "detail": "Gestionnaire espagnol du réseau.", "position": "Co-porteur du projet ; favorable.", "evidence": "Défend les bénéfices énergétiques, économiques et climatiques du projet."},
    {"id": "Inelfe", "label": "Inelfe", "group": "Porteurs du projet", "size": 21, "detail": "Coentreprise RTE / Red Eléctrica.", "position": "Maîtrise d’ouvrage transfrontalière.", "evidence": "Porte le développement de l’interconnexion."},
    {"id": "Union européenne / CINEA", "label": "Union européenne / CINEA", "group": "Institutions publiques", "size": 19, "detail": "Institution européenne et financeur.", "position": "Soutien institutionnel et financier.", "evidence": "Considère le projet comme d’intérêt commun européen."},
    {"id": "Banque européenne d’investissement (BEI)", "label": "BEI", "group": "Institutions publiques", "size": 19, "detail": "Institution financière européenne.", "position": "Financeur majeur.", "evidence": "Soutien financier de 1,6 Md€."},
    {"id": "Prysmian PowerLink (PPL)", "label": "Prysmian PowerLink", "group": "Acteurs économiques / industriels", "size": 16, "detail": "Entreprise industrielle.", "position": "Prestataire technique.", "evidence": "Pose des câbles sous-marins."},
    {"id": "NKT", "label": "NKT", "group": "Acteurs économiques / industriels", "size": 16, "detail": "Entreprise industrielle.", "position": "Prestataire technique.", "evidence": "Pose des câbles sous-marins."},
    {"id": "Van Laar", "label": "Van Laar", "group": "Acteurs économiques / industriels", "size": 15, "detail": "Armateur néerlandais.", "position": "Prestataire contesté.", "evidence": "Fourniture de navires de surveillance ; contesté par la CGT pour des questions de sécurité."},
    {"id": "Marie Darzacq", "label": "Marie Darzacq", "group": "Opposants nommés", "size": 22, "detail": "Présidente de StopTHT40 ; présidente de Landes Atlantique Environnement (LAE).", "position": "Opposée au projet et à son tracé actuel ; critique les procédures environnementales et la concertation.", "evidence": "« La justice sera le seul rempart qui pourra freiner les abus de pouvoir de l’État » ; « Cette décision démontre que RTE ne respecte pas le droit environnemental »."},
    {"id": "Lamya Essemlali", "label": "Lamya Essemlali", "group": "Opposants nommés", "size": 19, "detail": "Présidente de Sea Shepherd France.", "position": "Critique du projet au nom de la protection du vivant.", "evidence": "Le projet participe selon elle à une logique consistant à « sacrifier le vivant au nom de la lutte contre le réchauffement climatique »."},
    {"id": "Paul Watson", "label": "Paul Watson", "group": "Opposants nommés", "size": 18, "detail": "Fondateur de Sea Shepherd.", "position": "Soutien aux opposants ; critique environnementale générale.", "evidence": "Participation à une conférence organisée par StopTHT40 ; déclaration critique sur l’impact humain sur la planète."},
    {"id": "Marc Mortelmans", "label": "Marc Mortelmans", "group": "Acteurs seulement cités", "size": 13, "detail": "Journaliste et conférencier.", "position": "Présent lors d’événements d’opposition ; position explicite non détaillée.", "evidence": "Cité aux côtés de Marie Darzacq lors d’une conférence d’opposition. Certitude faible."},
    {"id": "CGT (représentants au CSMM)", "label": "CGT au CSMM", "group": "Syndicats", "size": 17, "detail": "Représentants CGT auprès du Conseil supérieur de la marine marchande.", "position": "Critique la sécurité maritime associée au chantier.", "evidence": "Demande le retrait des navires de Van Laar et dénonce une flotte « totalement en dehors des règles de la sécurité maritime »."},
    {"id": "Françoise Tahéri", "label": "Françoise Tahéri", "group": "Élus favorables / prudents", "size": 18, "detail": "Préfète des Landes.", "position": "Institutionnelle ; favorable à la poursuite du chantier sous contrôle environnemental.", "evidence": "Défend une méthode de « transparence et de vigilance » et met en avant les contrôles réalisés."},
    {"id": "Préfet des Landes", "label": "Préfet des Landes", "group": "Institutions publiques", "size": 16, "detail": "Représentant de l’État dans les Landes.", "position": "Position institutionnelle ; suivi du chantier.", "evidence": "Préside le Comité de suivi environnemental et demande des contrôles complémentaires sur les mammifères marins."},
    {"id": "Philippe Tabarot", "label": "Philippe Tabarot", "group": "Acteurs seulement cités", "size": 12, "detail": "Ministre chargé des Transports.", "position": "Seulement cité.", "evidence": "Sollicité par la CGT dans le cadre du dossier maritime."},
    {"id": "Sébastien Lecornu", "label": "Sébastien Lecornu", "group": "Élus favorables / prudents", "size": 16, "detail": "Premier ministre tel que cité dans le document.", "position": "Favorable à l’électrification et à la réduction de la dépendance aux énergies fossiles.", "evidence": "Citation sur la dépendance aux énergies fossiles."},
    {"id": "StopTHT40", "label": "StopTHT40", "group": "Collectifs citoyens", "size": 24, "detail": "Principal collectif citoyen opposé au projet.", "position": "Opposition au tracé, aux impacts environnementaux et aux procédures.", "evidence": "Le corpus le présente comme le principal collectif opposé au projet."},
    {"id": "Landes Atlantique Environnement (LAE)", "label": "Landes Atlantique Environnement", "group": "Associations environnementales", "size": 22, "detail": "Association environnementale.", "position": "Contestation environnementale ; dépôt de plainte sur le nématode du pin.", "evidence": "Critique ; demande enquêtes et traçabilité des opérations."},
    {"id": "SEPANSO 40", "label": "SEPANSO 40", "group": "Associations environnementales", "size": 18, "detail": "Association environnementale.", "position": "Critique prudente.", "evidence": "Co-signataire de plainte liée au nématode ; demande enquête indépendante."},
    {"id": "Sea Shepherd France", "label": "Sea Shepherd France", "group": "Associations environnementales", "size": 20, "detail": "ONG environnementale.", "position": "Soutien aux opposants locaux ; critique du projet et de ses impacts potentiels.", "evidence": "Mobilisation au nom de la protection du vivant."},
    {"id": "CGT", "label": "CGT", "group": "Syndicats", "size": 19, "detail": "Syndicat.", "position": "Critique des conditions maritimes du chantier.", "evidence": "Dénonce les navires utilisés sur le chantier."},
    {"id": "FOMM, FSM, FNPD", "label": "FOMM, FSM, FNPD", "group": "Syndicats", "size": 16, "detail": "Organisations syndicales maritimes.", "position": "Critiques sur la sécurité maritime.", "evidence": "Associées à la démarche CGT."},
    {"id": "Conseil supérieur de la marine marchande (CSMM)", "label": "CSMM", "group": "Institutions publiques", "size": 15, "detail": "Instance consultative.", "position": "Pas de position institutionnelle explicite.", "evidence": "Saisi des questions de sécurité maritime."},
    {"id": "Jérôme Rieu", "label": "Jérôme Rieu", "group": "Porteurs du projet", "size": 16, "detail": "Délégué régional RTE.", "position": "Défense du projet et réponse aux critiques.", "evidence": "Fonction mentionnée dans les personnes clés du portage du projet."},
    {"id": "Emmanuel Gosset", "label": "Emmanuel Gosset", "group": "Porteurs du projet", "size": 15, "detail": "Directeur de projet RTE.", "position": "Portage du projet.", "evidence": "Fonction mentionnée dans les personnes clés du portage du projet."},
    {"id": "Ludivine Mellier", "label": "Ludivine Mellier", "group": "Porteurs du projet", "size": 15, "detail": "Directrice du programme interconnexions RTE.", "position": "Portage du projet.", "evidence": "Fonction mentionnée dans les personnes clés du portage du projet."},
    {"id": "Émilie Piette", "label": "Émilie Piette", "group": "Porteurs du projet", "size": 14, "detail": "Présidente du directoire de RTE, citée par la CGT.", "position": "Actrice du portage RTE ; citée dans le dossier maritime.", "evidence": "Mentionnée comme présidente du directoire de RTE citée par la CGT."},
    {"id": "Ramon Granadino Goenechea", "label": "Ramon Granadino Goenechea", "group": "Porteurs du projet", "size": 14, "detail": "Directeur planification Red Eléctrica.", "position": "Portage côté Red Eléctrica.", "evidence": "Fonction mentionnée dans les personnes clés du portage du projet."},
    {"id": "Juan Prieto Monterrubio", "label": "Juan Prieto Monterrubio", "group": "Porteurs du projet", "size": 14, "detail": "Directeur de projets Red Eléctrica.", "position": "Portage côté Red Eléctrica.", "evidence": "Fonction mentionnée dans les personnes clés du portage du projet."},
    {"id": "Xavier Piechaczyk", "label": "Xavier Piechaczyk", "group": "Porteurs du projet", "size": 17, "detail": "Président du directoire de RTE.", "position": "Défend les bénéfices énergétiques de l’interconnexion.", "evidence": "Mentionné comme défendant les bénéfices énergétiques de l’interconnexion."},
    {"id": "Franceinfo", "label": "Franceinfo", "group": "Médias / sources", "size": 12, "detail": "Média national.", "position": "Source documentaire.", "evidence": "Information sur la baleine échouée."},
    {"id": "ICI Gascogne", "label": "ICI Gascogne", "group": "Médias / sources", "size": 12, "detail": "Média local Radio France.", "position": "Source documentaire.", "evidence": "Couverture du chantier et des échouages."},
    {"id": "France 3 Nouvelle-Aquitaine", "label": "France 3 Nouvelle-Aquitaine", "group": "Médias / sources", "size": 12, "detail": "Média régional.", "position": "Source documentaire.", "evidence": "Reportages environnementaux."},
    {"id": "Sud Ouest", "label": "Sud Ouest", "group": "Médias / sources", "size": 13, "detail": "Quotidien régional.", "position": "Source documentaire majeure.", "evidence": "Source majeure sur le conflit local."},
    {"id": "Mer et Marine", "label": "Mer et Marine", "group": "Médias / sources", "size": 12, "detail": "Média spécialisé maritime.", "position": "Source documentaire.", "evidence": "Suivi du chantier et enjeux maritimes."},
    {"id": "Energies de la Mer", "label": "Energies de la Mer", "group": "Médias / sources", "size": 12, "detail": "Média spécialisé énergie maritime.", "position": "Source documentaire.", "evidence": "Suivi technique du projet."},
    {"id": "La Relève et la Peste", "label": "La Relève et la Peste", "group": "Médias / sources", "size": 12, "detail": "Média environnemental.", "position": "Source documentaire.", "evidence": "Relais des critiques écologistes."},
    {"id": "Objectif Aquitaine / La Tribune", "label": "Objectif Aquitaine / La Tribune", "group": "Médias / sources", "size": 12, "detail": "Média économique.", "position": "Source documentaire.", "evidence": "Analyse stratégique des infrastructures."},
    {"id": "L’Info Durable", "label": "L’Info Durable", "group": "Médias / sources", "size": 11, "detail": "Média environnement-économie.", "position": "Source secondaire.", "evidence": "Source secondaire."},
    {"id": "La République des Pyrénées", "label": "La République des Pyrénées", "group": "Médias / sources", "size": 11, "detail": "Quotidien régional.", "position": "Source documentaire.", "evidence": "Analyse des interconnexions européennes."},
    {"id": "Impacts sur les mammifères marins", "label": "Impacts mammifères marins", "group": "Points de vigilance / griefs", "size": 15, "detail": "Impacts potentiels sur les baleines, cétacés et échouages.", "position": "Grief structurant.", "evidence": "Interrogation sur les effets des travaux en mer."},
    {"id": "Protection de la biodiversité marine", "label": "Biodiversité marine", "group": "Points de vigilance / griefs", "size": 15, "detail": "Protection de la biodiversité marine dans le secteur du Gouf de Capbreton.", "position": "Grief structurant.", "evidence": "Secteur considéré comme particulièrement sensible."},
    {"id": "Respect du droit environnemental", "label": "Droit environnemental", "group": "Points de vigilance / griefs", "size": 15, "detail": "Respect du droit environnemental.", "position": "Grief structurant.", "evidence": "Contestation de certaines autorisations ou études d’impact."},
    {"id": "Concertation et gouvernance", "label": "Concertation et gouvernance", "group": "Points de vigilance / griefs", "size": 15, "detail": "Critiques de la concertation et de la gouvernance du projet.", "position": "Grief structurant.", "evidence": "Accusation de ne pas examiner suffisamment les alternatives de tracé."},
    {"id": "Question du nématode du pin", "label": "Nématode du pin", "group": "Points de vigilance / griefs", "size": 14, "detail": "Soupçons ou interrogations sur un lien indirect avec les travaux.", "position": "Point de vigilance ; preuve non établie.", "evidence": "Le document ne fournit aucune preuve établissant un lien avec RTE."},
    {"id": "Champs électromagnétiques", "label": "Champs électromagnétiques", "group": "Points de vigilance / griefs", "size": 14, "detail": "Risques sanitaires liés aux champs électromagnétiques.", "position": "Point de vigilance.", "evidence": "Évoqués par certaines associations."},
    {"id": "Sécurité maritime", "label": "Sécurité maritime", "group": "Points de vigilance / griefs", "size": 15, "detail": "Sécurité maritime, notamment concernant certains navires employés sur le chantier.", "position": "Grief structurant.", "evidence": "Point notamment porté par la CGT et des organisations syndicales maritimes."},
    {"id": "Développement énergétique au détriment du vivant", "label": "Développement au détriment du vivant", "group": "Points de vigilance / griefs", "size": 15, "detail": "Critique d’un projet présenté comme symbole d’une logique de développement énergétique au détriment du vivant.", "position": "Grief structurant.", "evidence": "Argument environnemental relayé dans le corpus."}
    {"id": "Mr Chambily (RTE)", "label": "Mr Chambily", "group": "Acteurs seulement cités", "size": 12, "detail": "Personne désignée comme relevant de RTE dans une publication de Stop THT 40.", "position": "Position sur le projet non établie.", "evidence": "Le post du 14 juin cite « Mr Chambily (RTE) » et l’invite à une table ronde."},
    {"id": "Mme Pajot (RTE)", "label": "Mme Pajot", "group": "Acteurs seulement cités", "size": 12, "detail": "Personne désignée comme relevant de RTE dans une publication de Stop THT 40.", "position": "Position sur le projet non établie.", "evidence": "Le post du 14 juin cite « Mme Pajot (RTE) » et l’invite à une table ronde."},
    {"id": "Vert",
      "label": "Vert",
      "group": "Médias / sources",
      "size": 13,
      "detail": "Média à l’origine d’une enquête de terrain sur le conflit local.",
      "position": "Source documentaire.",
      "evidence": "Article du 13 juin 2026 sur le projet, Stop THT 40, RTE et les enjeux environnementaux."
    },
    {
      "id": "Gilles Clavreul",
      "label": "Gilles Clavreul",
      "group": "Acteurs seulement cités",
      "size": 13,
      "detail": "Désigné dans l’article de Vert comme préfet des Landes.",
      "position": "Aucune position explicite ; il n’a pas répondu aux questions de Vert.",
      "evidence": "« Contacté, Gilles Clavreul, le préfet des Landes, n’a pas voulu répondre à nos questions. »"
    },
    {
      "id": "Conseil national de la protection de la nature (CNPN)",
      "label": "CNPN",
      "group": "Institutions publiques",
      "size": 18,
      "detail": "Instance d’expertise scientifique et technique de l’État.",
      "position": "Avis défavorable au projet en 2022, au regard des impacts terrestres, des mesures de réduction et de compensation, et des alternatives.",
      "evidence": "Le rapport cite l’avis défavorable du 22 août 2022."
    },
    {
      "id": "Ministère de la transition énergétique",
      "label": "Ministère T. énergétique",
      "group": "Institutions publiques",
      "size": 15,
      "detail": "Ministère cité comme ayant déclaré le projet d’utilité publique.",
      "position": "Rôle administratif rapporté ; position politique non détaillée.",
      "evidence": "Le projet est décrit comme « déclaré d’utilité publique » par ce ministère."
    },
    {
      "id": "Ministère de la transition écologique",
      "label": "Ministère T. écologique",
      "group": "Institutions publiques",
      "size": 15,
      "detail": "Ministère cité au sujet des autorisations et de l’avis du CNPN.",
      "position": "Rôle administratif rapporté ; aucune explication immédiate sur la non-prise en compte de l’avis du CNPN.",
      "evidence": "RTE rappelle qu’un « avis favorable conforme » a été émis ; le ministère indique ne pas pouvoir répondre dans l’immédiat."
    },
    {
      "id": "Landes Aquitaine Environnement",
      "label": "Landes Aquitaine Environnement",
      "group": "Associations environnementales",
      "size": 18,
      "detail": "Association citée comme soutien juridique de Stop THT 40.",
      "position": "Critique ; porte un recours contre les travaux et relaie des inquiétudes sanitaires.",
      "evidence": "Le rapport indique qu’elle soutient juridiquement Stop THT 40 et est à l’initiative d’un recours devant le Conseil d’État."
    },
    {
      "id": "Leyla Labescat",
      "label": "Leyla Labescat",
      "group": "Opposants nommés",
      "size": 16,
      "detail": "Secrétaire de l’association Landes Aquitaine Environnement.",
      "position": "Inquiète des effets potentiels sur la santé humaine et de l’absence d’étude signalée.",
      "evidence": "« Aucune étude n’a été menée sur le sujet » ; « On ne veut pas être des cobayes. »"
    },
    {
      "id": "Conseil d’État",
      "label": "Conseil d’État",
      "group": "Institutions publiques",
      "size": 15,
      "detail": "Juridiction saisie d’un recours contre les travaux.",
      "position": "Aucune position ni décision rapportée.",
      "evidence": "Le recours initié par Landes Aquitaine Environnement est indiqué comme porté devant le Conseil d’État."
    },
    {
      "id": "François Bayrou",
      "label": "François Bayrou",
      "group": "Acteurs seulement cités",
      "size": 12,
      "detail": "Désigné dans le rapport comme le destinataire d’une lettre ouverte de 2024.",
      "position": "Position sur le projet non établie.",
      "evidence": "La lettre ouverte demandant un moratoire lui a été adressée, selon le rapport."
    },
    {
      "id": "Monique Barbut",
      "label": "Monique Barbut",
      "group": "Acteurs seulement cités",
      "size": 12,
      "detail": "Désignée dans le rapport comme nouvelle ministre de la transition écologique.",
      "position": "Position sur le projet non établie ; elle est sollicitée par les militants.",
      "evidence": "Les militants comptent sur elle pour accéder à leur demande de moratoire."
    },
    {
      "id": "Mairie de Capbreton",
      "label": "Mairie de Capbreton",
      "group": "Institutions publiques",
      "size": 15,
      "detail": "Institution municipale citée au sujet de l’échouage d’une baleine.",
      "position": "Indique initialement qu’aucun élément ne permet de relier le décès au chantier.",
      "evidence": "La mairie explique que rien ne permet « de lier la mort de la baleine au chantier » de RTE."
    },
    {
      "id": "Laboratoire Pélagis",
      "label": "Pélagis",
      "group": "Acteurs seulement cités",
      "size": 16,
      "detail": "Laboratoire rattaché à l’université de La Rochelle, cité aussi comme observatoire Pélagis et coordinateur du réseau national échouages.",
      "position": "Expertise scientifique ; aucune attribution causale du décès au chantier.",
      "evidence": "Les premières observations tendent vers une forte probabilité d’infection ; la cause primaire du décès demeure indéterminée."
    },
    {
      "id": "Comité de suivi environnemental (CSE)",
      "label": "CSE",
      "group": "Institutions publiques",
      "size": 16,
      "detail": "Instance de suivi des travaux et des engagements environnementaux de RTE.",
      "position": "Suivi institutionnel ; aucune position autonome sur le projet n’est rapportée.",
      "evidence": "Cinquième réunion tenue le 5 juin 2026 sous la présidence du préfet des Landes."
    },
    {
      "id": "DREAL",
      "label": "DREAL",
      "group": "Institutions publiques",
      "size": 14,
      "detail": "Service de l’État cité parmi les autorités supervisant le suivi environnemental.",
      "position": "Supervision et contrôle environnementaux.",
      "evidence": "Le rapport cite la DREAL parmi les services de l’État assurant la supervision."
    },
    {
      "id": "DDTM",
      "label": "DDTM",
      "group": "Institutions publiques",
      "size": 14,
      "detail": "Service de l’État cité parmi les autorités supervisant le suivi environnemental.",
      "position": "Supervision et contrôle environnementaux.",
      "evidence": "Le rapport cite la DDTM parmi les services de l’État assurant la supervision."
    },
    {
      "id": "OFB",
      "label": "OFB",
      "group": "Institutions publiques",
      "size": 14,
      "detail": "Service de l’État cité parmi les autorités supervisant le suivi environnemental.",
      "position": "Supervision et contrôle environnementaux.",
      "evidence": "Le rapport cite l’OFB parmi les services de l’État assurant la supervision."
    },
    {
      "id": "Écologue missionné par RTE",
      "label": "Écologue RTE",
      "group": "Acteurs seulement cités",
      "size": 12,
      "detail": "Écologue non nommé, missionné par RTE pour la surveillance environnementale.",
      "position": "Rôle de suivi ; aucune position personnelle rapportée.",
      "evidence": "Le rapport mentionne la surveillance de « l’écologue missionné par RTE »."
    },
    {"id": "Chercheur spécialiste du suivi morphologique du canyon (anonyme)", "label": "Chercheur anonyme", "group": "Acteurs seulement cités", "size": 12, "detail": "Chercheur non identifié, cité au sujet du gouf de Capbreton.", "position": "Apporte une expertise technique sur l’impossibilité de faire passer les câbles dans le canyon ; aucune position globale sur le projet n’est rapportée.", "evidence": "Il évoque un canyon actif et la mouvance du fond, et a requis l’anonymat."}
  ],
  "links": [
    {"source": "RTE", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "portage du projet", "evidence": "RTE est le porteur français du projet."},
    {"source": "Red Eléctrica", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "portage du projet", "evidence": "Red Eléctrica est le co-porteur espagnol."},
    {"source": "Inelfe", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "portage du projet", "evidence": "Inelfe assure la maîtrise d’ouvrage transfrontalière."},
    {"source": "Inelfe", "target": "RTE", "kind": "rattachement", "evidence": "Inelfe est une coentreprise RTE / Red Eléctrica."},
    {"source": "Inelfe", "target": "Red Eléctrica", "kind": "rattachement", "evidence": "Inelfe est une coentreprise RTE / Red Eléctrica."},
    {"source": "Union européenne / CINEA", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "financement", "evidence": "Projet considéré comme d’intérêt commun européen."},
    {"source": "Banque européenne d’investissement (BEI)", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "financement", "evidence": "Soutien financier de 1,6 Md€."},
    {"source": "Prysmian PowerLink (PPL)", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "relation institutionnelle", "evidence": "Prestataire technique pour la pose des câbles sous-marins."},
    {"source": "NKT", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "relation institutionnelle", "evidence": "Prestataire technique pour la pose des câbles sous-marins."},
    {"source": "Van Laar", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "relation institutionnelle", "evidence": "Fourniture de navires de surveillance."},
    {"source": "StopTHT40", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "opposition", "evidence": "Principal collectif opposé au projet."},
    {"source": "Landes Atlantique Environnement (LAE)", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "critique", "evidence": "Contestation environnementale."},
    {"source": "SEPANSO 40", "target": "Question du nématode du pin", "kind": "signataire", "evidence": "Co-signataire de plainte liée au nématode."},
    {"source": "Sea Shepherd France", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "critique", "evidence": "Critique du projet et de ses impacts potentiels."},
    {"source": "CGT", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "critique", "evidence": "Critique des conditions maritimes du chantier."},
    {"source": "Marie Darzacq", "target": "StopTHT40", "kind": "représentation", "evidence": "Présidente de StopTHT40."},
    {"source": "Marie Darzacq", "target": "Landes Atlantique Environnement (LAE)", "kind": "représentation", "evidence": "Présidente de Landes Atlantique Environnement."},
    {"source": "Marie Darzacq", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "opposition", "evidence": "Opposée au projet et à son tracé actuel."},
    {"source": "Lamya Essemlali", "target": "Sea Shepherd France", "kind": "représentation", "evidence": "Présidente de Sea Shepherd France."},
    {"source": "Lamya Essemlali", "target": "Développement énergétique au détriment du vivant", "kind": "critique", "evidence": "Critique la logique de sacrifice du vivant."},
    {"source": "Paul Watson", "target": "Sea Shepherd France", "kind": "rattachement", "evidence": "Fondateur de Sea Shepherd."},
    {"source": "Paul Watson", "target": "StopTHT40", "kind": "mobilisation commune", "evidence": "Participation à une conférence organisée par StopTHT40."},
    {"source": "Marc Mortelmans", "target": "Marie Darzacq", "kind": "position ambiguë", "evidence": "Cité aux côtés de Marie Darzacq lors d’une conférence d’opposition."},
    {"source": "CGT (représentants au CSMM)", "target": "Conseil supérieur de la marine marchande (CSMM)", "kind": "relation institutionnelle", "evidence": "Représentants au CSMM."},
    {"source": "CGT (représentants au CSMM)", "target": "Van Laar", "kind": "critique", "evidence": "Demande le retrait des navires de Van Laar."},
    {"source": "CGT (représentants au CSMM)", "target": "Sécurité maritime", "kind": "critique", "evidence": "Dénonce une flotte totalement en dehors des règles de sécurité maritime."},
    {"source": "CGT", "target": "FOMM, FSM, FNPD", "kind": "mobilisation commune", "evidence": "Organisations associées à la démarche CGT."},
    {"source": "CGT", "target": "Sécurité maritime", "kind": "critique", "evidence": "Dénonce les navires utilisés sur le chantier."},
    {"source": "FOMM, FSM, FNPD", "target": "Sécurité maritime", "kind": "critique", "evidence": "Critiques sur la sécurité maritime."},
    {"source": "Conseil supérieur de la marine marchande (CSMM)", "target": "Sécurité maritime", "kind": "relation institutionnelle", "evidence": "Saisi des questions de sécurité maritime."},
    {"source": "Philippe Tabarot", "target": "CGT", "kind": "relation institutionnelle", "evidence": "Sollicité par la CGT dans le cadre du dossier maritime."},
    {"source": "Françoise Tahéri", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "soutien", "evidence": "Favorable à la poursuite du chantier sous contrôle environnemental."},
    {"source": "Préfet des Landes", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "relation institutionnelle", "evidence": "Suivi du chantier et contrôles complémentaires."},
    {"source": "Préfet des Landes", "target": "Impacts sur les mammifères marins", "kind": "relation institutionnelle", "evidence": "Demande des contrôles complémentaires sur les mammifères marins."},
    {"source": "Sébastien Lecornu", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "soutien", "evidence": "Favorable à l’électrification et à la réduction de la dépendance aux énergies fossiles."},
    {"source": "Jérôme Rieu", "target": "RTE", "kind": "rattachement", "evidence": "Délégué régional RTE."},
    {"source": "Emmanuel Gosset", "target": "RTE", "kind": "rattachement", "evidence": "Directeur de projet RTE."},
    {"source": "Ludivine Mellier", "target": "RTE", "kind": "rattachement", "evidence": "Directrice du programme interconnexions RTE."},
    {"source": "Émilie Piette", "target": "RTE", "kind": "rattachement", "evidence": "Présidente du directoire de RTE."},
    {"source": "Xavier Piechaczyk", "target": "RTE", "kind": "rattachement", "evidence": "Président du directoire de RTE."},
    {"source": "Xavier Piechaczyk", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "soutien", "evidence": "Défend les bénéfices énergétiques de l’interconnexion."},
    {"source": "Ramon Granadino Goenechea", "target": "Red Eléctrica", "kind": "rattachement", "evidence": "Directeur planification Red Eléctrica."},
    {"source": "Juan Prieto Monterrubio", "target": "Red Eléctrica", "kind": "rattachement", "evidence": "Directeur de projets Red Eléctrica."},
    {"source": "StopTHT40", "target": "Impacts sur les mammifères marins", "kind": "critique", "evidence": "Critique les impacts environnementaux."},
    {"source": "StopTHT40", "target": "Respect du droit environnemental", "kind": "critique", "evidence": "Critique les procédures environnementales."},
    {"source": "StopTHT40", "target": "Concertation et gouvernance", "kind": "critique", "evidence": "Critique la concertation et la gouvernance."},
    {"source": "Landes Atlantique Environnement (LAE)", "target": "Question du nématode du pin", "kind": "critique", "evidence": "Dépôt de plainte et demande de traçabilité."},
    {"source": "Landes Atlantique Environnement (LAE)", "target": "Respect du droit environnemental", "kind": "critique", "evidence": "Contestation environnementale."},
    {"source": "Sea Shepherd France", "target": "Protection de la biodiversité marine", "kind": "critique", "evidence": "Critique au nom de la protection du vivant."},
    {"source": "Sea Shepherd France", "target": "Impacts sur les mammifères marins", "kind": "critique", "evidence": "Critique les impacts potentiels sur le vivant marin."},
    {"source": "Sea Shepherd France", "target": "Développement énergétique au détriment du vivant", "kind": "critique", "evidence": "Critique du projet comme symbole d’une logique énergétique au détriment du vivant."},
    {"source": "Franceinfo", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Information sur la baleine échouée."},
    {"source": "ICI Gascogne", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Couverture du chantier et des échouages."},
    {"source": "France 3 Nouvelle-Aquitaine", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Reportages environnementaux."},
    {"source": "Sud Ouest", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Source majeure sur le conflit local."},
    {"source": "Mer et Marine", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Suivi du chantier et enjeux maritimes."},
    {"source": "Energies de la Mer", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Suivi technique du projet."},
    {"source": "La Relève et la Peste", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Relais des critiques écologistes."},
    {"source": "Objectif Aquitaine / La Tribune", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Analyse stratégique des infrastructures."},
    {"source": "L’Info Durable", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Source secondaire."},
    {"source": "La République des Pyrénées", "target": "Interconnexion France–Espagne par le Golfe de Gascogne", "kind": "source documentaire", "evidence": "Analyse des interconnexions européennes."}
    {
  "links": [
    {
      "source": "Mr Chambily (RTE)",
      "target": "RTE",
      "kind": "rattachement",
      "evidence": "Le post de Stop THT 40 le désigne comme « Mr Chambily (RTE) »."
    },
    {
      "source": "Mme Pajot (RTE)",
      "target": "RTE",
      "kind": "rattachement",
      "evidence": "Le post de Stop THT 40 la désigne comme « Mme Pajot (RTE) »."
    },
    {
      "source": "StopTHT40",
      "target": "Mr Chambily (RTE)",
      "kind": "interpellation publique",
      "evidence": "Le collectif l’invite à sa table ronde du 28 juin."
    },
    {
      "source": "StopTHT40",
      "target": "Mme Pajot (RTE)",
      "kind": "interpellation publique",
      "evidence": "Le collectif l’invite à sa table ronde du 28 juin."
    },
    {
      "source": "Vert",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "source documentaire",
      "evidence": "Enquête du 13 juin 2026 sur le conflit local."
    },
    {
      "source": "Gilles Clavreul",
      "target": "Préfet des Landes",
      "kind": "fonction citée",
      "evidence": "L’article de Vert le désigne comme « le préfet des Landes »."
    },
    {
      "source": "Conseil national de la protection de la nature (CNPN)",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "avis défavorable",
      "evidence": "Avis défavorable du 22 août 2022 cité dans le rapport."
    },
    {
      "source": "Ministère de la transition énergétique",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "déclaration d’utilité publique",
      "evidence": "Le projet est présenté comme déclaré d’utilité publique par ce ministère."
    },
    {
      "source": "Ministère de la transition écologique",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "autorisation administrative",
      "evidence": "RTE indique qu’un avis favorable conforme a été émis et que les autorisations ont été signées."
    },
    {
      "source": "Landes Aquitaine Environnement",
      "target": "StopTHT40",
      "kind": "soutien juridique",
      "evidence": "L’association est décrite comme soutenant juridiquement le collectif."
    },
    {
      "source": "Landes Aquitaine Environnement",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "contestation judiciaire",
      "evidence": "Le rapport cite un recours contre les travaux à son initiative."
    },
    {
      "source": "Landes Aquitaine Environnement",
      "target": "Conseil d’État",
      "kind": "recours contentieux",
      "evidence": "Le recours est indiqué comme porté devant le Conseil d’État."
    },
    {
      "source": "Leyla Labescat",
      "target": "Landes Aquitaine Environnement",
      "kind": "représentation",
      "evidence": "Elle est citée comme secrétaire de l’association."
    },
    {
      "source": "Leyla Labescat",
      "target": "Champs électromagnétiques",
      "kind": "inquiétude",
      "evidence": "Elle questionne l’absence d’étude sur les conséquences potentielles pour la santé."
    },
    {
      "source": "StopTHT40",
      "target": "François Bayrou",
      "kind": "demande de moratoire",
      "evidence": "Une lettre ouverte lui a été adressée en 2024 pour demander un moratoire."
    },
    {
      "source": "StopTHT40",
      "target": "Monique Barbut",
      "kind": "interpellation",
      "evidence": "Les militants comptent sur elle pour accéder à leur demande."
    },
    {
      "source": "Mairie de Capbreton",
      "target": "Impacts sur les mammifères marins",
      "kind": "position institutionnelle",
      "evidence": "Elle indique initialement qu’aucun élément ne permet de relier le décès au chantier."
    },
    {
      "source": "Laboratoire Pélagis",
      "target": "Impacts sur les mammifères marins",
      "kind": "expertise scientifique",
      "evidence": "Pélagis évoque une probable infection et précise que la cause primaire demeure indéterminée."
    },
    {
      "source": "Comité de suivi environnemental (CSE)",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "suivi environnemental",
      "evidence": "Le CSE est dédié aux travaux et aux engagements environnementaux de RTE."
    },
    {
      "source": "Préfet des Landes",
      "target": "Comité de suivi environnemental (CSE)",
      "kind": "présidence",
      "evidence": "La cinquième réunion s’est tenue sous la présidence du préfet des Landes."
    },
    {
      "source": "DREAL",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "supervision environnementale",
      "evidence": "La DREAL est citée parmi les services de l’État assurant la supervision."
    },
    {
      "source": "DDTM",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "supervision environnementale",
      "evidence": "La DDTM est citée parmi les services de l’État assurant la supervision."
    },
    {
      "source": "OFB",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "supervision environnementale",
      "evidence": "L’OFB est cité parmi les services de l’État assurant la supervision."
    },
    {
      "source": "Écologue missionné par RTE",
      "target": "RTE",
      "kind": "mission",
      "evidence": "Le rapport le décrit comme missionné par RTE."
    },
    {
      "source": "Écologue missionné par RTE",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "suivi environnemental",
      "evidence": "Sa surveillance est citée parmi les dispositifs de respect des prescriptions environnementales."
    },
    {
      "source": "Chercheur spécialiste du suivi morphologique du canyon (anonyme)",
      "target": "Interconnexion France–Espagne par le Golfe de Gascogne",
      "kind": "expertise technique",
      "evidence": "Il explique l’impossibilité de faire passer des câbles dans le gouf de Capbreton."}
  ]
};
