import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.intro': 'Introduction',
    'nav.simple': 'Simple Infrastructure',
    'nav.distributed': 'Distributed Infrastructure',
    'nav.secured': 'Secured Infrastructure',
    'nav.conclusion': 'Conclusion',
    
    // Hero
    'hero.title': 'Web Infrastructure Design',
    'hero.subtitle': 'A comprehensive guide to understanding, designing, and scaling web systems',
    'hero.badge': 'Holberton School Project',
    'hero.cta': 'Start Learning',
    
    // Section 1 - Introduction
    'intro.title': 'Introduction',
    'intro.subtitle': 'Understanding Web Infrastructure',
    'intro.p1': 'Web infrastructure refers to the collection of hardware, software, networks, and services required to host and deliver web applications to users. It encompasses everything from the physical servers that store your code to the intricate network configurations that route user requests.',
    'intro.p2': 'In this educational blog, we will explore the evolution of web infrastructure design, starting from a simple single-server setup and progressively building towards a robust, scalable, and secure architecture.',
    'intro.goal.title': 'Our Learning Goals',
    'intro.goal.1': 'Understand the fundamental components of web infrastructure',
    'intro.goal.2': 'Learn how to design systems that can handle increasing loads',
    'intro.goal.3': 'Identify and mitigate single points of failure',
    'intro.goal.4': 'Implement security best practices and monitoring',
    'intro.holberton': 'This project is part of the Holberton School curriculum, designed to provide hands-on understanding of how modern web applications are architected and deployed.',
    
    // Section 2 - Simple Infrastructure
    'simple.title': 'Simple Web Infrastructure',
    'simple.subtitle': 'One Server Setup',
    'simple.intro': 'Let\'s start with the most basic web infrastructure: a single server hosting www.foobar.com. This setup, while simple, introduces us to all the fundamental concepts we need to understand.',
    
    'simple.server.title': 'What is a Server?',
    'simple.server.desc': 'A server is a computer (physical or virtual) that provides services to other computers over a network. In our case, it hosts all the components needed to serve our website. Our server is accessible at IP address 8.8.8.8.',
    
    'simple.domain.title': 'Domain Name',
    'simple.domain.desc': 'The domain name (foobar.com) is a human-readable address that maps to our server\'s IP address. Instead of remembering 8.8.8.8, users can simply type www.foobar.com.',
    
    'simple.dns.title': 'DNS Record Type',
    'simple.dns.desc': 'The www subdomain uses an A record (Address record) that points to our server\'s IP address 8.8.8.8. When a user types www.foobar.com, DNS resolves this to the actual IP address.',
    
    'simple.webserver.title': 'Web Server (Nginx)',
    'simple.webserver.desc': 'Nginx acts as the front door of our application. It handles incoming HTTP/HTTPS requests, serves static files (HTML, CSS, images), and forwards dynamic requests to the application server.',
    
    'simple.appserver.title': 'Application Server',
    'simple.appserver.desc': 'The application server executes the business logic of our application. It processes user requests, interacts with the database, and generates dynamic content. This is where your code runs.',
    
    'simple.database.title': 'Database (MySQL)',
    'simple.database.desc': 'MySQL stores all persistent data: user accounts, content, configurations. The application server queries the database to retrieve and store information.',
    
    'simple.communication.title': 'Server-User Communication',
    'simple.communication.desc': 'The server communicates with users via HTTP/HTTPS protocols over TCP/IP. When a user requests www.foobar.com, their browser establishes a TCP connection and sends HTTP requests. The server responds with the requested content.',
    
    'simple.issues.title': 'Issues with This Infrastructure',
    'simple.spof.title': 'Single Point of Failure (SPOF)',
    'simple.spof.desc': 'If this single server fails, the entire website becomes unavailable. There\'s no backup or redundancy.',
    'simple.downtime.title': 'Maintenance Downtime',
    'simple.downtime.desc': 'Deploying new code or restarting the web server requires taking the site offline temporarily.',
    'simple.scale.title': 'Cannot Scale',
    'simple.scale.desc': 'A single server has limited resources. If traffic increases significantly, performance degrades or the server crashes.',
    
    // Section 3 - Distributed Infrastructure
    'distributed.title': 'Three Server Infrastructure',
    'distributed.subtitle': 'Load Balancer Architecture',
    'distributed.intro': 'To address the limitations of a single-server setup, we introduce a distributed architecture with a load balancer and multiple backend servers.',
    
    'distributed.lb.title': 'Load Balancer (HAProxy)',
    'distributed.lb.desc': 'The load balancer distributes incoming traffic across multiple servers. This eliminates the single point of failure and allows us to handle more traffic by adding more servers.',
    
    'distributed.algorithm.title': 'Load Balancing Algorithm',
    'distributed.algorithm.desc': 'We use Round Robin algorithm, which distributes requests sequentially to each server in turn. Other algorithms include Least Connections (sends to server with fewest active connections) and IP Hash (routes based on client IP).',
    
    'distributed.active.title': 'Active-Active vs Active-Passive',
    'distributed.active.desc': 'Active-Active: All servers handle traffic simultaneously, maximizing resource utilization. Active-Passive: One server handles traffic while others stand by as backups, ready to take over if the primary fails.',
    'distributed.active.current': 'Our setup uses Active-Active configuration for better performance and resource utilization.',
    
    'distributed.db.title': 'Database Primary-Replica (Master-Slave)',
    'distributed.db.desc': 'In this setup, the Primary (Master) node handles all write operations. The Replica (Slave) nodes copy data from the Primary and handle read operations. This improves read performance and provides data redundancy.',
    
    'distributed.primary.title': 'Primary Node',
    'distributed.primary.desc': 'Handles all write operations (INSERT, UPDATE, DELETE). Changes are propagated to replicas.',
    
    'distributed.replica.title': 'Replica Node',
    'distributed.replica.desc': 'Handles read operations (SELECT). Contains a copy of the data from the Primary. Can be promoted to Primary if the original fails.',
    
    'distributed.issues.title': 'Remaining Issues',
    'distributed.spof.desc': 'The load balancer itself is a SPOF. If HAProxy fails, no traffic reaches the servers.',
    'distributed.security.title': 'Security Issues',
    'distributed.security.desc': 'No firewall protection. Traffic is not encrypted (no HTTPS). Vulnerable to attacks.',
    'distributed.monitoring.title': 'No Monitoring',
    'distributed.monitoring.desc': 'Without monitoring, we can\'t detect issues before they become critical. No visibility into system health.',
    
    // Section 4 - Secured Infrastructure
    'secured.title': 'Secured & Monitored Infrastructure',
    'secured.subtitle': 'Enterprise-Grade Security',
    'secured.intro': 'Now we add security layers and monitoring to create a production-ready infrastructure.',
    
    'secured.firewall.title': 'Firewalls (3x)',
    'secured.firewall.desc': 'Firewalls filter network traffic based on predefined rules. We deploy: one at the perimeter (before load balancer), and one for each backend server. This creates defense in depth.',
    
    'secured.ssl.title': 'SSL Certificate (HTTPS)',
    'secured.ssl.desc': 'HTTPS encrypts all traffic between users and our servers using SSL/TLS. This protects sensitive data from eavesdropping and ensures users are connecting to the legitimate server.',
    
    'secured.monitoring.title': 'Monitoring Agents (3x)',
    'secured.monitoring.desc': 'Monitoring agents (like Sumo Logic, Datadog, or Prometheus) collect metrics, logs, and performance data from each server. This enables proactive issue detection and capacity planning.',
    
    'secured.collection.title': 'How Monitoring Works',
    'secured.collection.desc': 'Agents run on each server, collecting: CPU/memory/disk usage, application logs, network traffic, response times. Data is sent to a central monitoring platform for analysis and alerting.',
    
    'secured.qps.title': 'Monitoring Web Server QPS',
    'secured.qps.desc': 'To monitor Queries Per Second (QPS), configure Nginx to log all requests with timestamps. The monitoring agent parses these logs and calculates the request rate. Set alerts for unusual spikes or drops.',
    
    'secured.remaining.title': 'Remaining Issues',
    'secured.ssl.termination': 'SSL Termination at Load Balancer',
    'secured.ssl.termination.desc': 'If SSL terminates at the load balancer, traffic between the LB and backend servers is unencrypted. Consider end-to-end encryption.',
    'secured.single.mysql': 'Single Writable MySQL Server',
    'secured.single.mysql.desc': 'Only one MySQL server can accept writes. If it fails, the application becomes read-only or unavailable.',
    'secured.identical.servers': 'Identical Server Components',
    'secured.identical.servers.desc': 'Servers with all components (web, app, database) are harder to scale and maintain. Consider separating concerns.',
    
    // Section 5 - Conclusion
    'conclusion.title': 'Conclusion',
    'conclusion.subtitle': 'Key Takeaways',
    'conclusion.intro': 'We\'ve journeyed from a simple single-server setup to a secured, monitored, distributed infrastructure. Let\'s summarize the key lessons learned.',
    
    'conclusion.evolution.title': 'Infrastructure Evolution',
    'conclusion.evolution.desc': 'Web infrastructure design is iterative. Start simple, identify weaknesses, and evolve. Each improvement addresses specific limitations while potentially introducing new considerations.',
    
    'conclusion.scalability.title': 'Scalability',
    'conclusion.scalability.desc': 'Horizontal scaling (adding more servers) provides better fault tolerance than vertical scaling (bigger server). Load balancers are essential for distributing traffic across multiple servers.',
    
    'conclusion.security.title': 'Security',
    'conclusion.security.desc': 'Defense in depth: multiple layers of security (firewalls, encryption, access controls). Always encrypt data in transit with HTTPS. Regular security audits are essential.',
    
    'conclusion.reliability.title': 'Reliability',
    'conclusion.reliability.desc': 'Eliminate single points of failure through redundancy. Implement comprehensive monitoring and alerting. Plan for failure: backups, failover, disaster recovery.',
    
    'conclusion.final': 'Understanding these concepts is fundamental to becoming a proficient software engineer. The ability to design, implement, and troubleshoot web infrastructure is a valuable skill in today\'s cloud-first world.',
    
    'conclusion.cta': 'Keep Learning!',
    
    // Footer
    'footer.project': 'Holberton School - Web Infrastructure Design Project',
    'footer.copyright': '© 2025 Educational Content',
  },
  fr: {
    // Navigation
    'nav.intro': 'Introduction',
    'nav.simple': 'Infrastructure Simple',
    'nav.distributed': 'Infrastructure Distribuée',
    'nav.secured': 'Infrastructure Sécurisée',
    'nav.conclusion': 'Conclusion',
    
    // Hero
    'hero.title': 'Conception d\'Infrastructure Web',
    'hero.subtitle': 'Un guide complet pour comprendre, concevoir et faire évoluer les systèmes web',
    'hero.badge': 'Projet Holberton School',
    'hero.cta': 'Commencer',
    
    // Section 1 - Introduction
    'intro.title': 'Introduction',
    'intro.subtitle': 'Comprendre l\'Infrastructure Web',
    'intro.p1': 'L\'infrastructure web désigne l\'ensemble du matériel, des logiciels, des réseaux et des services nécessaires pour héberger et fournir des applications web aux utilisateurs. Elle englobe tout, des serveurs physiques qui stockent votre code aux configurations réseau complexes qui acheminent les requêtes des utilisateurs.',
    'intro.p2': 'Dans ce blog éducatif, nous explorerons l\'évolution de la conception d\'infrastructure web, en commençant par une configuration simple à serveur unique et en progressant vers une architecture robuste, évolutive et sécurisée.',
    'intro.goal.title': 'Nos Objectifs d\'Apprentissage',
    'intro.goal.1': 'Comprendre les composants fondamentaux de l\'infrastructure web',
    'intro.goal.2': 'Apprendre à concevoir des systèmes capables de gérer des charges croissantes',
    'intro.goal.3': 'Identifier et atténuer les points de défaillance uniques',
    'intro.goal.4': 'Mettre en œuvre les meilleures pratiques de sécurité et de surveillance',
    'intro.holberton': 'Ce projet fait partie du programme de Holberton School, conçu pour fournir une compréhension pratique de la façon dont les applications web modernes sont architecturées et déployées.',
    
    // Section 2 - Simple Infrastructure
    'simple.title': 'Infrastructure Web Simple',
    'simple.subtitle': 'Configuration à Un Serveur',
    'simple.intro': 'Commençons par l\'infrastructure web la plus basique : un seul serveur hébergeant www.foobar.com. Cette configuration, bien que simple, nous présente tous les concepts fondamentaux que nous devons comprendre.',
    
    'simple.server.title': 'Qu\'est-ce qu\'un Serveur ?',
    'simple.server.desc': 'Un serveur est un ordinateur (physique ou virtuel) qui fournit des services à d\'autres ordinateurs via un réseau. Dans notre cas, il héberge tous les composants nécessaires pour servir notre site web. Notre serveur est accessible à l\'adresse IP 8.8.8.8.',
    
    'simple.domain.title': 'Nom de Domaine',
    'simple.domain.desc': 'Le nom de domaine (foobar.com) est une adresse lisible par l\'homme qui correspond à l\'adresse IP de notre serveur. Au lieu de se souvenir de 8.8.8.8, les utilisateurs peuvent simplement taper www.foobar.com.',
    
    'simple.dns.title': 'Type d\'Enregistrement DNS',
    'simple.dns.desc': 'Le sous-domaine www utilise un enregistrement A (Address record) qui pointe vers l\'adresse IP de notre serveur 8.8.8.8. Lorsqu\'un utilisateur tape www.foobar.com, le DNS résout cela en l\'adresse IP réelle.',
    
    'simple.webserver.title': 'Serveur Web (Nginx)',
    'simple.webserver.desc': 'Nginx agit comme la porte d\'entrée de notre application. Il gère les requêtes HTTP/HTTPS entrantes, sert les fichiers statiques (HTML, CSS, images) et transmet les requêtes dynamiques au serveur d\'application.',
    
    'simple.appserver.title': 'Serveur d\'Application',
    'simple.appserver.desc': 'Le serveur d\'application exécute la logique métier de notre application. Il traite les requêtes des utilisateurs, interagit avec la base de données et génère du contenu dynamique. C\'est là que votre code s\'exécute.',
    
    'simple.database.title': 'Base de Données (MySQL)',
    'simple.database.desc': 'MySQL stocke toutes les données persistantes : comptes utilisateurs, contenu, configurations. Le serveur d\'application interroge la base de données pour récupérer et stocker des informations.',
    
    'simple.communication.title': 'Communication Serveur-Utilisateur',
    'simple.communication.desc': 'Le serveur communique avec les utilisateurs via les protocoles HTTP/HTTPS sur TCP/IP. Lorsqu\'un utilisateur demande www.foobar.com, son navigateur établit une connexion TCP et envoie des requêtes HTTP. Le serveur répond avec le contenu demandé.',
    
    'simple.issues.title': 'Problèmes de Cette Infrastructure',
    'simple.spof.title': 'Point de Défaillance Unique (SPOF)',
    'simple.spof.desc': 'Si ce serveur unique tombe en panne, l\'ensemble du site web devient indisponible. Il n\'y a pas de sauvegarde ni de redondance.',
    'simple.downtime.title': 'Temps d\'Arrêt pour Maintenance',
    'simple.downtime.desc': 'Le déploiement de nouveau code ou le redémarrage du serveur web nécessite de mettre le site hors ligne temporairement.',
    'simple.scale.title': 'Impossible de Scalabilité',
    'simple.scale.desc': 'Un seul serveur a des ressources limitées. Si le trafic augmente significativement, les performances se dégradent ou le serveur plante.',
    
    // Section 3 - Distributed Infrastructure
    'distributed.title': 'Infrastructure à Trois Serveurs',
    'distributed.subtitle': 'Architecture avec Répartiteur de Charge',
    'distributed.intro': 'Pour remédier aux limitations d\'une configuration à serveur unique, nous introduisons une architecture distribuée avec un répartiteur de charge et plusieurs serveurs backend.',
    
    'distributed.lb.title': 'Répartiteur de Charge (HAProxy)',
    'distributed.lb.desc': 'Le répartiteur de charge distribue le trafic entrant sur plusieurs serveurs. Cela élimine le point de défaillance unique et nous permet de gérer plus de trafic en ajoutant plus de serveurs.',
    
    'distributed.algorithm.title': 'Algorithme de Répartition',
    'distributed.algorithm.desc': 'Nous utilisons l\'algorithme Round Robin, qui distribue les requêtes séquentiellement à chaque serveur tour à tour. D\'autres algorithmes incluent Least Connections (envoie au serveur avec le moins de connexions actives) et IP Hash (route basée sur l\'IP du client).',
    
    'distributed.active.title': 'Actif-Actif vs Actif-Passif',
    'distributed.active.desc': 'Actif-Actif : Tous les serveurs gèrent le trafic simultanément, maximisant l\'utilisation des ressources. Actif-Passif : Un serveur gère le trafic tandis que les autres sont en veille comme sauvegardes, prêts à prendre le relais en cas de défaillance.',
    'distributed.active.current': 'Notre configuration utilise le mode Actif-Actif pour de meilleures performances et utilisation des ressources.',
    
    'distributed.db.title': 'Base de Données Principal-Réplique (Maître-Esclave)',
    'distributed.db.desc': 'Dans cette configuration, le nœud Principal (Maître) gère toutes les opérations d\'écriture. Les nœuds Réplique (Esclave) copient les données du Principal et gèrent les opérations de lecture. Cela améliore les performances de lecture et fournit une redondance des données.',
    
    'distributed.primary.title': 'Nœud Principal',
    'distributed.primary.desc': 'Gère toutes les opérations d\'écriture (INSERT, UPDATE, DELETE). Les modifications sont propagées aux répliques.',
    
    'distributed.replica.title': 'Nœud Réplique',
    'distributed.replica.desc': 'Gère les opérations de lecture (SELECT). Contient une copie des données du Principal. Peut être promu Principal si l\'original échoue.',
    
    'distributed.issues.title': 'Problèmes Restants',
    'distributed.spof.desc': 'Le répartiteur de charge lui-même est un SPOF. Si HAProxy échoue, aucun trafic n\'atteint les serveurs.',
    'distributed.security.title': 'Problèmes de Sécurité',
    'distributed.security.desc': 'Pas de protection par pare-feu. Le trafic n\'est pas chiffré (pas de HTTPS). Vulnérable aux attaques.',
    'distributed.monitoring.title': 'Pas de Surveillance',
    'distributed.monitoring.desc': 'Sans surveillance, nous ne pouvons pas détecter les problèmes avant qu\'ils ne deviennent critiques. Aucune visibilité sur l\'état du système.',
    
    // Section 4 - Secured Infrastructure
    'secured.title': 'Infrastructure Sécurisée et Surveillée',
    'secured.subtitle': 'Sécurité de Niveau Entreprise',
    'secured.intro': 'Maintenant, nous ajoutons des couches de sécurité et de surveillance pour créer une infrastructure prête pour la production.',
    
    'secured.firewall.title': 'Pare-feu (3x)',
    'secured.firewall.desc': 'Les pare-feu filtrent le trafic réseau selon des règles prédéfinies. Nous déployons : un au périmètre (avant le répartiteur de charge), et un pour chaque serveur backend. Cela crée une défense en profondeur.',
    
    'secured.ssl.title': 'Certificat SSL (HTTPS)',
    'secured.ssl.desc': 'HTTPS chiffre tout le trafic entre les utilisateurs et nos serveurs en utilisant SSL/TLS. Cela protège les données sensibles contre l\'écoute clandestine et garantit que les utilisateurs se connectent au serveur légitime.',
    
    'secured.monitoring.title': 'Agents de Surveillance (3x)',
    'secured.monitoring.desc': 'Les agents de surveillance (comme Sumo Logic, Datadog ou Prometheus) collectent des métriques, des logs et des données de performance de chaque serveur. Cela permet la détection proactive des problèmes et la planification de capacité.',
    
    'secured.collection.title': 'Comment Fonctionne la Surveillance',
    'secured.collection.desc': 'Les agents s\'exécutent sur chaque serveur, collectant : utilisation CPU/mémoire/disque, logs d\'application, trafic réseau, temps de réponse. Les données sont envoyées à une plateforme de surveillance centrale pour analyse et alertes.',
    
    'secured.qps.title': 'Surveillance du QPS du Serveur Web',
    'secured.qps.desc': 'Pour surveiller les Requêtes Par Seconde (QPS), configurez Nginx pour enregistrer toutes les requêtes avec des horodatages. L\'agent de surveillance analyse ces logs et calcule le taux de requêtes. Définissez des alertes pour les pics ou baisses inhabituels.',
    
    'secured.remaining.title': 'Problèmes Restants',
    'secured.ssl.termination': 'Terminaison SSL au Répartiteur de Charge',
    'secured.ssl.termination.desc': 'Si SSL se termine au répartiteur de charge, le trafic entre le LB et les serveurs backend n\'est pas chiffré. Envisagez le chiffrement de bout en bout.',
    'secured.single.mysql': 'Serveur MySQL Unique en Écriture',
    'secured.single.mysql.desc': 'Un seul serveur MySQL peut accepter les écritures. S\'il échoue, l\'application devient en lecture seule ou indisponible.',
    'secured.identical.servers': 'Composants de Serveur Identiques',
    'secured.identical.servers.desc': 'Les serveurs avec tous les composants (web, app, base de données) sont plus difficiles à mettre à l\'échelle et à maintenir. Envisagez de séparer les préoccupations.',
    
    // Section 5 - Conclusion
    'conclusion.title': 'Conclusion',
    'conclusion.subtitle': 'Points Clés à Retenir',
    'conclusion.intro': 'Nous avons parcouru le chemin d\'une simple configuration à serveur unique vers une infrastructure distribuée, sécurisée et surveillée. Résumons les leçons clés apprises.',
    
    'conclusion.evolution.title': 'Évolution de l\'Infrastructure',
    'conclusion.evolution.desc': 'La conception d\'infrastructure web est itérative. Commencez simplement, identifiez les faiblesses et évoluez. Chaque amélioration répond à des limitations spécifiques tout en introduisant potentiellement de nouvelles considérations.',
    
    'conclusion.scalability.title': 'Scalabilité',
    'conclusion.scalability.desc': 'La mise à l\'échelle horizontale (ajout de serveurs) offre une meilleure tolérance aux pannes que la mise à l\'échelle verticale (serveur plus puissant). Les répartiteurs de charge sont essentiels pour distribuer le trafic sur plusieurs serveurs.',
    
    'conclusion.security.title': 'Sécurité',
    'conclusion.security.desc': 'Défense en profondeur : plusieurs couches de sécurité (pare-feu, chiffrement, contrôles d\'accès). Toujours chiffrer les données en transit avec HTTPS. Des audits de sécurité réguliers sont essentiels.',
    
    'conclusion.reliability.title': 'Fiabilité',
    'conclusion.reliability.desc': 'Éliminer les points de défaillance uniques grâce à la redondance. Mettre en œuvre une surveillance et des alertes complètes. Planifier pour les pannes : sauvegardes, basculement, reprise après sinistre.',
    
    'conclusion.final': 'Comprendre ces concepts est fondamental pour devenir un ingénieur logiciel compétent. La capacité de concevoir, mettre en œuvre et dépanner l\'infrastructure web est une compétence précieuse dans le monde actuel axé sur le cloud.',
    
    'conclusion.cta': 'Continuez à Apprendre !',
    
    // Footer
    'footer.project': 'Holberton School - Projet de Conception d\'Infrastructure Web',
    'footer.copyright': '© 2025 Contenu Éducatif',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
