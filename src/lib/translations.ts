export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      listings: "Listings",
      buy: "Buy",
      sell: "Sell",
      saved: "Saved",
      contact: "Contact",
      home: "Home",
      blog: "Blog",
      tagline: "Real Estate · Montréal",
    },
    footer: {
      tagline: "Courtière Immobilière\nVendirect.ca · Montréal",
      services: "Services",
      contact: "Contact",
      buyProperty: "Buy a Property",
      sellHome: "Sell Your Home",
      browseListings: "Browse Listings",
      rights: (year: number) => `© ${year} Teresa Real Estate. All rights reserved.`,
      disclaimer:
        "Listing data sourced from Centris/Matrix MLS and subject to change.",
    },
    home: {
      hero: {
        label: "Teresa · Vendirect.ca · Montréal",
        line1: "Your real estate",
        lineEm: "expert",
        line2: "in Montréal",
        sub: "12+ years of expertise, personal attention, and a proven track record across Montréal's most coveted neighbourhoods.",
        cta1: "Browse Listings",
        cta2: "Free Evaluation",
        agentTag: "Broker · Vendirect.ca",
        years: "Years",
        clients: "Clients",
        sales: "Sales",
      },
      featured: {
        label: "Properties",
        heading: "Featured Listings",
        viewAll: "View all",
        viewAllBtn: "View All Properties",
      },
      about: {
        label: "About",
        line1: "A broker who will",
        lineEm: "exceed",
        line2: "your expectations",
        bioSuffix:
          "Ranked consistently among the top brokers in the Montréal region, Teresa is proud to operate under the Vendirect Prestige banner — offering clients a 1% commission model with full-service, award-winning results year after year.",
        credentials: [
          "Vendirect Prestige · Commission 1%",
          "Top Broker — Montréal Region",
          "Fluent: English · Français",
          "12+ Years Market Experience",
        ],
        browseBtn: "Browse Properties",
      },
      services: {
        label: "Services",
        heading: "Buy or Sell",
        buy: {
          label: "Buy",
          tagline: "Find your perfect home",
          description:
            "Expert buyer representation, access to exclusive listings, and full support from your first search to the moment you receive your keys.",
        },
        sell: {
          label: "Sell",
          tagline: "Sell for the best price",
          description:
            "Professional photography, maximum market exposure, and skilled negotiation — on average, Teresa's listings sell in 8 days.",
        },
        learnMore: "Learn more",
      },
      testimonials: {
        label: "Testimonials",
      },
      blog: {
        label: "From the blog",
        heading: "Latest Insights",
        viewAll: "View All Articles",
      },
      cta: {
        label: "Free service",
        line1: "Do you know",
        line2: "the value of your",
        lineEm: "property?",
        sub: "Get a free, no-obligation market evaluation from Teresa. Discover your home's true market value based on the latest Montréal data — with no strings attached.",
        points: [
          "No commitment required",
          "Response within 24 hours",
          "Based on real market data",
        ],
        formHeading: "Request an Evaluation",
        formSub: "Request a free evaluation",
        defaultMessage:
          "Hi Teresa, I'd like to get a free market evaluation of my property. Please contact me at your earliest convenience.",
      },
    },
    listings: {
      heading: "All Listings",
      searchPlaceholder: "Search address, neighbourhood…",
      propertyCount: (n: number) =>
        `${n} ${n === 1 ? "property" : "properties"} found`,
      noResults: "No listings found",
      noResultsSub: "Try adjusting your search or filters.",
      resetFilters: "Reset Filters",
      filters: {
        typeLabel: "Property Type",
        priceLabel: "Price Range",
        bedsLabel: "Bedrooms",
        statusLabel: "Status",
        filterTitle: "Filter Listings",
        clearAll: "Reset All Filters",
        clear: "Clear",
        filtersBtn: "Filters",
        typeHeader: "Type",
        priceHeader: "Price",
        bedsHeader: "Beds",
        statusHeader: "Status",
        allTypes: "All Types",
        anyPrice: "Any Price",
        under500: "Under $500K",
        range500to800: "$500K – $800K",
        range800to1200: "$800K – $1.2M",
        over1200: "Over $1.2M",
        anyBeds: "Any",
        allStatus: "All",
        active: "Active",
        new: "New",
        pending: "Pending",
      },
    },
    detail: {
      back: "Back to Listings",
      about: "About This Property",
      features: "Features & Amenities",
      listedOn: "Listed on",
      condoFees: "Condo fees",
      month: "month",
      noneParking: "None",
      stats: {
        bedrooms: "Bedrooms",
        bathrooms: "Bathrooms",
        livingArea: "Living Area",
        parking: "Parking",
        yearBuilt: "Year Built",
        taxes: "Taxes / yr",
      },
      locale: "en-CA",
    },
    buy: {
      hero: {
        serviceLabel: "Buyer Services",
        line1: "Buy the property",
        lineEm: "of your dreams",
        sub1: "Find your perfect home in Montréal. Whether you're a first-time buyer, upsizing, or investing, Teresa provides expert guidance from the very first search to the moment you receive your keys.",
        sub2: "Our team speaks English and French — we are here to support you in the language of your choice.",
        cta1: "Browse Listings",
        cta2: "Talk to Teresa",
        satisfaction: "Client satisfaction",
      },
      why: {
        label: "Why choose Teresa",
        heading: "Why Buy With Teresa?",
        benefits: [
          {
            title: "Market Knowledge",
            desc: "12+ years navigating every Montréal neighbourhood — we know which streets, buildings, and micro-markets are worth your attention.",
          },
          {
            title: "Access to Exclusive Listings",
            desc: "Access listings before they hit the public market through our network of agents, developers, and sellers.",
          },
          {
            title: "Expert Negotiation",
            desc: "We fight to get you the best price and conditions — from the first offer to the final signature.",
          },
          {
            title: "Full Support",
            desc: "From mortgage pre-approval to the notary appointment, we guide you through every step with zero surprises.",
          },
        ],
      },
      process: {
        label: "Step by step",
        heading: "The Buying Process",
        sub: "From your first call with Teresa to the moment we hand you the keys — here is exactly what to expect.",
        steps: [
          {
            title: "Mortgage Pre-Approval",
            desc: "Get pre-approved for a mortgage so you know your exact budget and can move fast when the right property appears.",
          },
          {
            title: "Define Your Criteria",
            desc: "We sit down together to clarify your needs — neighbourhood, property type, size, must-haves, and timeline.",
          },
          {
            title: "Targeted Search",
            desc: "We search the MLS and our private network daily, sending you only the properties that truly match your profile.",
          },
          {
            title: "Personalized Showings",
            desc: "We schedule and accompany you to viewings, sharing our professional eye for what to look for and what to avoid.",
          },
          {
            title: "Purchase Offer & Negotiation",
            desc: "When you find the one, we draft a strong offer and negotiate all conditions — price, inclusions, and deadlines.",
          },
          {
            title: "Inspection & Notary",
            desc: "We coordinate the building inspection, review results with you, and accompany you to the notary for a seamless closing.",
          },
        ],
      },
      included: [
        "Full buyer representation",
        "Full buyer representation — no hidden fees",
        "Access to MLS and exclusive listings",
        "Mortgage broker referrals",
        "Certified inspector recommendations",
        "Notary coordination and closing support",
      ],
      contact: {
        label: "Let's start",
        heading1: "Ready to find your",
        heading2: "dream home?",
        sub: "Tell Teresa about what you're looking for. Whether you have a specific property in mind or you're just beginning your search, she'll be in touch within a few hours.",
        formHeading: "Contact Teresa",
        formSub: "Tell us what you're looking for.",
        defaultMessage:
          "Hi Teresa, I'm looking to buy a property in Montréal and would love to discuss my search criteria.",
      },
    },
    sell: {
      hero: {
        serviceLabel: "Seller Services",
        line1: "Sell your property",
        line2: "for the",
        lineEm: "best price",
        sub1: "Sell faster and for more. Teresa's proven marketing system, expert pricing strategy, and skilled negotiation consistently deliver results above asking price.",
        sub2: "Our team guides you from evaluation to signing — in English or French.",
        cta1: "Free Evaluation",
        stats: [
          { value: "8", unit: "days", label: "Average days on market" },
          { value: "94%", unit: "", label: "Listed at or above asking price" },
          { value: "150+", unit: "", label: "Properties sold" },
          { value: "$50M+", unit: "", label: "in total closed sales" },
        ],
      },
      why: {
        label: "Why choose Teresa",
        heading: "Why Sell With Teresa?",
        benefits: [
          {
            title: "Accurate Market Valuation",
            desc: "Accurate pricing is the #1 factor in a successful sale. We use real-time market data to position your property competitively and maximize your return.",
          },
          {
            title: "Professional Photos & Video",
            desc: "Every listing gets professional photography, floor plans, and a virtual tour — because first impressions happen online.",
          },
          {
            title: "Maximum Visibility",
            desc: "Your property is marketed on MLS/Centris, social media, partner networks, and our private buyer database of qualified clients.",
          },
          {
            title: "Expert Negotiation",
            desc: "We review every offer with you, advise on strategy, and negotiate the best possible price and conditions on your behalf.",
          },
        ],
      },
      process: {
        label: "Step by step",
        heading: "The Selling Process",
        sub: "From evaluation to signing — here is exactly what to expect.",
        steps: [
          {
            title: "Free Evaluation",
            desc: "We visit your property, assess its condition, and deliver a precise market value based on recent comparable sales in your area.",
          },
          {
            title: "Property Preparation",
            desc: "We advise on staging, small repairs, and improvements that maximize your sale price without breaking the budget.",
          },
          {
            title: "Photos & Marketing",
            desc: "Professional photography, floor plans, and virtual tour are completed. Your listing goes live on MLS/Centris and all marketing channels.",
          },
          {
            title: "Showings & Offers",
            desc: "We coordinate and attend all showings. When offers arrive, we present each one clearly and advise on the best strategy.",
          },
          {
            title: "Negotiation & Acceptance",
            desc: "We negotiate price, inclusions, conditions, and closing dates to secure the best possible deal for you.",
          },
          {
            title: "Signing at the Notary",
            desc: "We coordinate with all parties for a smooth closing — legal, financial, and logistical — so you can move on with confidence.",
          },
        ],
      },
      testimonials: {
        label: "Seller Testimonials",
        heading: "Sellers Love the Results",
      },
      included: {
        label: "Included with every sale",
        items: [
          "Free property evaluation",
          "Professional photography & virtual tour",
          "MLS/Centris listing",
          "Marketing on social media & partner networks",
          "Access to our qualified buyer database",
          "Expert negotiation & offer management",
          "Inspection and notary coordination",
          "Full transaction support until closing",
          "Staging advice",
        ],
      },
      evaluation: {
        label: "Free evaluation",
        heading1: "What is your",
        heading2: "property worth?",
        sub: "Get a free, no-obligation market evaluation from Teresa. We'll assess your property and share a precise price range based on the latest market data — so you can make an informed decision.",
        formHeading: "Request Evaluation",
        formSub: "Teresa will reply within 24 hours.",
        defaultMessage:
          "Hi Teresa, I'd like to get a free evaluation of my property.",
      },
      crossSell: {
        sub: "Also looking to buy?",
        buyerServices: "Buyer Services",
        browseListings: "Browse Listings",
      },
    },
    saved: {
      heading: "Saved Listings",
      back: "Back to Listings",
      loading: "Loading saved listings…",
      count: (n: number) => `${n} ${n === 1 ? "property" : "properties"} saved`,
      noSaved: "No saved listings yet",
      emptyTitle: "No saved properties yet",
      emptySub:
        "Browse listings and click the heart icon to save properties you love.",
      browseCta: "Browse Listings",
    },
    contact: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      phone: "Phone",
      phoneOptional: "(optional)",
      message: "Message",
      send: "Send Message",
      successTitle: "Message Sent!",
      successSub:
        "Teresa will get back to you within a few hours. Check your inbox for a confirmation.",
      errors: {
        name: "Name is required",
        email: "Please enter a valid email",
        message: "Please write at least a short message",
      },
      defaultMessage: (address: string) =>
        `Hi Teresa, I'm interested in the property at ${address}. Could you please share more information?`,
    },
    scheduler: {
      scheduleBtn: "Schedule a Showing",
      step1Title: "Choose a Date & Time",
      step2Title: "Your Contact Info",
      step3Title: "Showing Confirmed!",
      selectDate: "Select a Date",
      selectTime: "Select a Time",
      continueBtn: "Continue",
      fullName: "Full Name",
      yourName: "Your name",
      confirmBtn: "Confirm Showing",
      confirmedTitle: "You're confirmed!",
      confirmedText: (date: string, time: string) =>
        `Your showing for ${date} at ${time} has been booked. Teresa will send you a confirmation email shortly.`,
      doneBtn: "Done",
      errors: {
        name: "Name is required",
        email: "Valid email required",
        phone: "Phone number required",
      },
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec",
      ],
      locale: "en-CA",
    },
    chat: {
      quickReplies: [
        "Is this listing still available?",
        "Can I schedule a viewing?",
        "What are the condo fees?",
        "Tell me more about this area",
      ],
      greeting: (name: string) =>
        `Hi! 👋 I'm ${name}. How can I help you find your perfect home in Montréal?`,
      onlineStatus: "Usually replies in a few hours",
      placeholder: "Type a message…",
      fallback: (phone: string) =>
        `Thanks for your message! I'll get back to you within a few hours. You can also reach me directly at ${phone}.`,
      canned: {
        available:
          "Great question! Yes, this listing is still active. Would you like to schedule a showing?",
        viewing:
          "Absolutely! You can use the 'Schedule a Showing' button on any listing page to pick a date and time that works for you.",
        condo:
          "Condo fees vary by property. You'll find the exact monthly amount on each listing's detail page. Feel free to ask about a specific address!",
        area: "Montréal has incredible neighbourhoods — each with its own character. Tell me which area you're considering and I'll share my local insights.",
      },
    },
    blog: {
      label: "From the blog",
      heading: "Insights & Advice",
      sub: "Real estate insights, market updates, and expert advice for Montréal buyers and sellers.",
      readMore: "Read Article",
      readTime: (n: number) => `${n} min read`,
      back: "Back to Blog",
      by: "By",
      allPosts: "All Articles",
      related: "More Articles",
      viewAll: "View All Articles",
    },
    saveButton: {
      save: "Save Listing",
      saved: "Saved",
    },
    card: {
      new: "New",
      priceReduced: "Price Reduced",
      pending: "Pending",
      beds: (n: number) => `${n} bed${n !== 1 ? "s" : ""}`,
      baths: (n: number) => `${n} bath${n !== 1 ? "s" : ""}`,
    },
  },

  fr: {
    nav: {
      listings: "Propriétés",
      buy: "Acheter",
      sell: "Vendre",
      saved: "Sauvegardés",
      contact: "Contact",
      home: "Accueil",
      blog: "Blogue",
      tagline: "Immobilier · Montréal",
    },
    footer: {
      tagline: "Courtière Immobilière\nVendirect.ca · Montréal",
      services: "Services",
      contact: "Contact",
      buyProperty: "Acheter une propriété",
      sellHome: "Vendre votre maison",
      browseListings: "Voir les propriétés",
      rights: (year: number) =>
        `© ${year} Teresa Immobilier. Tous droits réservés.`,
      disclaimer:
        "Données d'inscription provenant de Centris/Matrix MLS et sujettes à modification.",
    },
    home: {
      hero: {
        label: "Teresa · Vendirect.ca · Montréal",
        line1: "Votre expert",
        lineEm: "immobilier",
        line2: "à Montréal",
        sub: "12+ ans d'expertise, une attention personnalisée et un bilan exceptionnel dans les quartiers les plus prisés de Montréal.",
        cta1: "Voir les propriétés",
        cta2: "Évaluation gratuite",
        agentTag: "Courtière · Vendirect.ca",
        years: "Ans",
        clients: "Clients",
        sales: "Ventes",
      },
      featured: {
        label: "Propriétés",
        heading: "Propriétés en vedette",
        viewAll: "Voir tout",
        viewAllBtn: "Voir toutes les propriétés",
      },
      about: {
        label: "À propos",
        line1: "Un courtier qui",
        lineEm: "surpassera",
        line2: "vos attentes",
        bioSuffix:
          "Classée régulièrement parmi les meilleurs courtiers de la région de Montréal, Teresa opère sous la bannière Vendirect Prestige — offrant à ses clients un modèle à commission 1 % avec un service complet et des résultats primés année après année.",
        credentials: [
          "Vendirect Prestige · Commission 1 %",
          "Top 10 des courtiers — Région de Montréal",
          "Langues : English · Français",
          "12+ ans d'expérience sur le marché",
        ],
        browseBtn: "Voir les propriétés",
      },
      services: {
        label: "Services",
        heading: "Acheter ou Vendre",
        buy: {
          label: "Acheter",
          tagline: "Trouvez votre propriété idéale",
          description:
            "Représentation complète de l'acheteur, accès aux inscriptions exclusives et soutien complet de votre première recherche jusqu'à la remise des clés.",
        },
        sell: {
          label: "Vendre",
          tagline: "Vendez au meilleur prix",
          description:
            "Photographie professionnelle, exposition maximale au marché et négociation experte — en moyenne, les propriétés de Teresa se vendent en 8 jours.",
        },
        learnMore: "En savoir plus",
      },
      testimonials: {
        label: "Témoignages",
      },
      blog: {
        label: "Du blogue",
        heading: "Conseils & Actualités",
        viewAll: "Voir tous les articles",
      },
      cta: {
        label: "Service gratuit",
        line1: "Connaissez-vous",
        line2: "la valeur de votre",
        lineEm: "propriété ?",
        sub: "Obtenez une évaluation de marché gratuite et sans engagement de la part de Teresa. Découvrez la vraie valeur marchande de votre propriété selon les dernières données du marché montréalais — sans obligation.",
        points: [
          "Aucun engagement requis",
          "Réponse dans les 24 heures",
          "Basé sur des données réelles du marché",
        ],
        formHeading: "Demander une évaluation",
        formSub: "Demande d'évaluation gratuite",
        defaultMessage:
          "Bonjour Teresa, j'aimerais obtenir une évaluation gratuite de ma propriété. Veuillez me contacter à votre convenance.",
      },
    },
    listings: {
      heading: "Toutes les propriétés",
      searchPlaceholder: "Rechercher adresse, quartier…",
      propertyCount: (n: number) =>
        `${n} ${n === 1 ? "propriété trouvée" : "propriétés trouvées"}`,
      noResults: "Aucune propriété trouvée",
      noResultsSub: "Essayez d'ajuster votre recherche ou vos filtres.",
      resetFilters: "Réinitialiser les filtres",
      filters: {
        typeLabel: "Type de propriété",
        priceLabel: "Gamme de prix",
        bedsLabel: "Chambres",
        statusLabel: "Statut",
        filterTitle: "Filtrer les propriétés",
        clearAll: "Réinitialiser les filtres",
        clear: "Effacer",
        filtersBtn: "Filtres",
        typeHeader: "Type",
        priceHeader: "Prix",
        bedsHeader: "Ch.",
        statusHeader: "Statut",
        allTypes: "Tous les types",
        anyPrice: "Tout prix",
        under500: "Moins de 500 k$",
        range500to800: "500 k$ – 800 k$",
        range800to1200: "800 k$ – 1,2 M$",
        over1200: "Plus de 1,2 M$",
        anyBeds: "Tout",
        allStatus: "Tous",
        active: "Actif",
        new: "Nouveau",
        pending: "En attente",
      },
    },
    detail: {
      back: "Retour aux propriétés",
      about: "À propos de cette propriété",
      features: "Caractéristiques et commodités",
      listedOn: "Inscrite le",
      condoFees: "Frais de condo",
      month: "mois",
      noneParking: "Aucun",
      stats: {
        bedrooms: "Chambres",
        bathrooms: "Salles de bain",
        livingArea: "Superficie",
        parking: "Stationnement",
        yearBuilt: "Année de construction",
        taxes: "Taxes / an",
      },
      locale: "fr-CA",
    },
    buy: {
      hero: {
        serviceLabel: "Services aux acheteurs",
        line1: "Achetez la propriété",
        lineEm: "de vos rêves",
        sub1: "Trouvez votre propriété idéale à Montréal. Que vous soyez un premier acheteur, que vous cherchiez à agrandir ou à investir, Teresa vous offre un accompagnement expert de la première recherche jusqu'à la remise des clés.",
        sub2: "Notre équipe parle anglais et français — nous sommes là pour vous accompagner dans la langue de votre choix.",
        cta1: "Voir les propriétés",
        cta2: "Parler à Teresa",
        satisfaction: "Satisfaction client",
      },
      why: {
        label: "Pourquoi choisir Teresa",
        heading: "Pourquoi acheter avec Teresa ?",
        benefits: [
          {
            title: "Connaissance du marché",
            desc: "12+ ans à naviguer dans chaque quartier de Montréal — nous savons quelles rues, quels immeubles et quels micro-marchés méritent votre attention.",
          },
          {
            title: "Accès aux propriétés exclusives",
            desc: "Accédez aux inscriptions avant qu'elles ne soient rendues publiques grâce à notre réseau de courtiers, promoteurs et vendeurs.",
          },
          {
            title: "Négociation experte",
            desc: "Nous défendons vos intérêts pour obtenir le meilleur prix et les meilleures conditions — de la première offre jusqu'à la signature finale.",
          },
          {
            title: "Accompagnement complet",
            desc: "De la préapprobation hypothécaire au rendez-vous chez le notaire, nous vous guidons à chaque étape sans surprises.",
          },
        ],
      },
      process: {
        label: "Étape par étape",
        heading: "Le processus d'achat",
        sub: "De votre premier appel avec Teresa jusqu'au moment où nous vous remettons les clés — voici exactement ce qui vous attend.",
        steps: [
          {
            title: "Préapprobation hypothécaire",
            desc: "Obtenez une préapprobation hypothécaire pour connaître votre budget exact et agir rapidement lorsque la bonne propriété apparaît.",
          },
          {
            title: "Définir vos critères",
            desc: "Nous discutons ensemble pour clarifier vos besoins — quartier, type de propriété, superficie, incontournables et délais.",
          },
          {
            title: "Recherche ciblée",
            desc: "Nous parcourons le MLS et notre réseau privé quotidiennement, en vous envoyant uniquement les propriétés qui correspondent vraiment à votre profil.",
          },
          {
            title: "Visites personnalisées",
            desc: "Nous planifions et vous accompagnons aux visites en partageant notre regard professionnel sur ce qu'il faut rechercher et ce qu'il faut éviter.",
          },
          {
            title: "Offre d'achat & négociation",
            desc: "Lorsque vous avez trouvé la bonne, nous rédigeons une offre solide et négocions toutes les conditions — prix, inclusions et délais.",
          },
          {
            title: "Inspection & notaire",
            desc: "Nous coordonnons l'inspection du bâtiment, en examinons les résultats avec vous et vous accompagnons chez le notaire pour une clôture en douceur.",
          },
        ],
      },
      included: [
        "Représentation complète de l'acheteur",
        "Représentation complète — sans frais cachés",
        "Accès au MLS et aux inscriptions exclusives",
        "Références à des courtiers hypothécaires",
        "Recommandations d'inspecteurs certifiés",
        "Coordination chez le notaire et soutien à la clôture",
      ],
      contact: {
        label: "Commençons",
        heading1: "Prêt(e) à trouver votre",
        heading2: "propriété idéale ?",
        sub: "Parlez à Teresa de ce que vous recherchez. Que vous ayez une propriété spécifique en tête ou que vous commenciez tout juste votre recherche, elle vous répondra dans les prochaines heures.",
        formHeading: "Contactez Teresa",
        formSub: "Dites-nous ce que vous cherchez.",
        defaultMessage:
          "Bonjour Teresa, je cherche à acheter une propriété à Montréal. J'aimerais discuter de mes critères avec vous.",
      },
    },
    sell: {
      hero: {
        serviceLabel: "Services aux vendeurs",
        line1: "Vendez votre propriété",
        line2: "au",
        lineEm: "meilleur prix",
        sub1: "Vendez plus vite et à un meilleur prix. Le système de mise en marché éprouvé de Teresa, sa stratégie de prix experte et ses compétences en négociation offrent constamment des résultats au-dessus du prix demandé.",
        sub2: "Notre équipe vous accompagne de l'évaluation à la signature — en anglais ou en français.",
        cta1: "Évaluation gratuite",
        stats: [
          { value: "8", unit: "jours", label: "Jours moyens sur le marché" },
          { value: "94 %", unit: "", label: "Au prix demandé ou au-dessus" },
          { value: "150+", unit: "", label: "Propriétés vendues" },
          { value: "50 M$+", unit: "", label: "En ventes totales conclues" },
        ],
      },
      why: {
        label: "Pourquoi choisir Teresa",
        heading: "Pourquoi vendre avec Teresa ?",
        benefits: [
          {
            title: "Évaluation précise du marché",
            desc: "Un prix juste est le facteur no 1 d'une vente réussie. Nous utilisons des données de marché en temps réel pour positionner votre propriété de façon compétitive et maximiser votre rendement.",
          },
          {
            title: "Photos & vidéos professionnelles",
            desc: "Chaque inscription bénéficie d'une photographie professionnelle, de plans d'étage et d'une visite virtuelle — parce que la première impression se fait en ligne.",
          },
          {
            title: "Visibilité maximale",
            desc: "Votre propriété est mise en marché sur MLS/Centris, les réseaux sociaux, les réseaux partenaires et notre base de données privée d'acheteurs qualifiés.",
          },
          {
            title: "Négociation experte",
            desc: "Nous examinons chaque offre avec vous, conseillons sur la stratégie et négocions le meilleur prix et les meilleures conditions en votre nom.",
          },
        ],
      },
      process: {
        label: "Étape par étape",
        heading: "Le processus de vente",
        sub: "De l'évaluation à la signature — voici exactement ce qui vous attend.",
        steps: [
          {
            title: "Évaluation gratuite",
            desc: "Nous visitons votre propriété, évaluons son état et fournissons une valeur marchande précise basée sur les ventes comparables récentes dans votre secteur.",
          },
          {
            title: "Préparation de la propriété",
            desc: "Nous vous conseillons sur la mise en valeur, les petites réparations et les améliorations qui maximisent votre prix de vente sans dépasser le budget.",
          },
          {
            title: "Photos & mise en marché",
            desc: "Photographie professionnelle, plans d'étage et visite virtuelle complétés. Votre inscription est publiée sur MLS/Centris et tous les canaux de marketing.",
          },
          {
            title: "Visites et offres",
            desc: "Nous coordonnons et accompagnons toutes les visites. Lorsque les offres arrivent, nous les présentons clairement et conseillons sur la meilleure stratégie.",
          },
          {
            title: "Négociation & acceptation",
            desc: "Nous négocions le prix, les inclusions, les conditions et les dates de clôture pour obtenir la meilleure entente possible pour vous.",
          },
          {
            title: "Signature chez le notaire",
            desc: "Nous coordonnons avec toutes les parties pour une clôture en douceur — juridique, financière et logistique — afin que vous puissiez avancer en toute confiance.",
          },
        ],
      },
      testimonials: {
        label: "Témoignages de vendeurs",
        heading: "Les vendeurs adorent les résultats",
      },
      included: {
        label: "Inclus dans chaque vente",
        items: [
          "Évaluation gratuite de votre propriété",
          "Photographie professionnelle et visite virtuelle",
          "Inscription sur MLS/Centris",
          "Marketing sur les réseaux sociaux et partenaires",
          "Accès à notre base d'acheteurs qualifiés",
          "Négociation experte et gestion des offres",
          "Coordination de l'inspection et du notaire",
          "Soutien complet à la transaction jusqu'à la clôture",
          "Conseils de mise en scène",
        ],
      },
      evaluation: {
        label: "Évaluation gratuite",
        heading1: "Quelle est la valeur",
        heading2: "de votre propriété ?",
        sub: "Obtenez une évaluation de marché gratuite et sans engagement de Teresa. Nous évaluerons votre propriété et partagerons une fourchette de prix précise basée sur les dernières données du marché — pour que vous puissiez prendre une décision éclairée.",
        formHeading: "Demander une évaluation",
        formSub: "Teresa vous répondra dans les 24 heures.",
        defaultMessage:
          "Bonjour Teresa, j'aimerais obtenir une évaluation gratuite de ma propriété.",
      },
      crossSell: {
        sub: "Vous cherchez aussi à acheter ?",
        buyerServices: "Services aux acheteurs",
        browseListings: "Voir les propriétés",
      },
    },
    saved: {
      heading: "Propriétés sauvegardées",
      back: "Retour aux propriétés",
      loading: "Chargement des propriétés sauvegardées…",
      count: (n: number) =>
        `${n} ${n === 1 ? "propriété sauvegardée" : "propriétés sauvegardées"}`,
      noSaved: "Aucune propriété sauvegardée",
      emptyTitle: "Aucune propriété sauvegardée",
      emptySub:
        "Parcourez les propriétés et cliquez sur le cœur pour sauvegarder celles que vous aimez.",
      browseCta: "Voir les propriétés",
    },
    contact: {
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "Courriel",
      phone: "Téléphone",
      phoneOptional: "(facultatif)",
      message: "Message",
      send: "Envoyer le message",
      successTitle: "Message envoyé !",
      successSub:
        "Teresa vous répondra dans les prochaines heures. Vérifiez votre boîte de réception pour une confirmation.",
      errors: {
        name: "Le nom est requis",
        email: "Veuillez entrer un courriel valide",
        message: "Veuillez écrire au moins un court message",
      },
      defaultMessage: (address: string) =>
        `Bonjour Teresa, je suis intéressé(e) par la propriété au ${address}. Pourriez-vous me partager plus d'informations ?`,
    },
    scheduler: {
      scheduleBtn: "Planifier une visite",
      step1Title: "Choisir une date et une heure",
      step2Title: "Vos coordonnées",
      step3Title: "Visite confirmée !",
      selectDate: "Sélectionner une date",
      selectTime: "Sélectionner une heure",
      continueBtn: "Continuer",
      fullName: "Nom complet",
      yourName: "Votre nom",
      confirmBtn: "Confirmer la visite",
      confirmedTitle: "Vous êtes confirmé(e) !",
      confirmedText: (date: string, time: string) =>
        `Votre visite pour le ${date} à ${time} a été réservée. Teresa vous enverra une confirmation par courriel sous peu.`,
      doneBtn: "Terminé",
      errors: {
        name: "Le nom est requis",
        email: "Courriel valide requis",
        phone: "Numéro de téléphone requis",
      },
      days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      months: [
        "jan.","fév.","mar.","avr.","mai","juin",
        "juil.","août","sep.","oct.","nov.","déc.",
      ],
      locale: "fr-CA",
    },
    chat: {
      quickReplies: [
        "Cette propriété est-elle toujours disponible ?",
        "Puis-je planifier une visite ?",
        "Quels sont les frais de condo ?",
        "Parlez-moi de ce quartier",
      ],
      greeting: (name: string) =>
        `Bonjour ! 👋 Je suis ${name}. Comment puis-je vous aider à trouver votre propriété idéale à Montréal ?`,
      onlineStatus: "Répond généralement en quelques heures",
      placeholder: "Écrivez un message…",
      fallback: (phone: string) =>
        `Merci pour votre message ! Je vous répondrai dans les prochaines heures. Vous pouvez aussi me joindre directement au ${phone}.`,
      canned: {
        available:
          "Bonne question ! Oui, cette propriété est toujours active. Aimeriez-vous planifier une visite ?",
        viewing:
          "Bien sûr ! Vous pouvez utiliser le bouton « Planifier une visite » sur la page de n'importe quelle propriété pour choisir une date et une heure qui vous conviennent.",
        condo:
          "Les frais de condo varient selon la propriété. Vous trouverez le montant mensuel exact sur la page de détails de chaque propriété. N'hésitez pas à me demander pour une adresse spécifique !",
        area: "Montréal offre des quartiers incroyables — chacun avec son propre caractère. Dites-moi quel secteur vous intéresse et je partagerai mes connaissances locales.",
      },
    },
    blog: {
      label: "Du blogue",
      heading: "Conseils & Actualités",
      sub: "Tendances du marché immobilier, conseils d'experts et informations pratiques pour les acheteurs et vendeurs à Montréal.",
      readMore: "Lire l'article",
      readTime: (n: number) => `${n} min de lecture`,
      back: "Retour au blogue",
      by: "Par",
      allPosts: "Tous les articles",
      related: "Plus d'articles",
      viewAll: "Voir tous les articles",
    },
    saveButton: {
      save: "Sauvegarder",
      saved: "Sauvegardé",
    },
    card: {
      new: "Nouveau",
      priceReduced: "Prix réduit",
      pending: "En attente",
      beds: (n: number) => `${n} ch.`,
      baths: (n: number) => `${n} sdb`,
    },
  },
};

export type Translations = typeof translations.en;
