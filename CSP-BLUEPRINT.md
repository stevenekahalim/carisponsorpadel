# CariSponsorPadel - Site Blueprint

## User Flow & Page Architecture

```mermaid
graph TB
    Start([User Lands on Site]) --> Homepage["/"]

    Homepage --> |"Click 'Find Sponsors'"| ForVenues["/for-venues"]
    Homepage --> |"Click 'Browse Opportunities'"| ForBrands["/for-brands"]
    Homepage --> |"Sticky CTA: Venue/Event"| ForVenues
    Homepage --> |"Sticky CTA: Brand"| ForBrands
    Homepage --> |"Navigation: Venues"| ForVenues
    Homepage --> |"Navigation: Brands"| ForBrands
    Homepage --> |"Navigation: Opps"| Opportunities["/opportunities"]

    ForVenues --> |"Sticky WhatsApp CTA"| WhatsAppVenue[WhatsApp: Venue Template]
    ForVenues --> |"Main CTA Button"| WhatsAppVenue

    ForBrands --> |"Sticky WhatsApp CTA"| WhatsAppBrand[WhatsApp: Brand Template]
    ForBrands --> |"Browse Opportunities CTA"| Opportunities

    Opportunities --> |"Request Info on Card"| WhatsAppBrand
    Opportunities --> |"Filter by Type/Location"| Opportunities

    WhatsAppVenue --> Conversion1{Venue Submits Info}
    WhatsAppBrand --> Conversion2{Brand Inquires}

    Conversion1 --> Backend[Manual Processing<br/>by CSP Team]
    Conversion2 --> Backend

    Backend --> Match[Match Making<br/>& Deal Facilitation]

    style Homepage fill:#e1f5e1
    style ForVenues fill:#fff4e6
    style ForBrands fill:#e3f2fd
    style Opportunities fill:#f3e5f5
    style WhatsAppVenue fill:#c8e6c9
    style WhatsAppBrand fill:#c8e6c9
    style Backend fill:#ffccbc
    style Match fill:#ffccbc
```

## Page Content Breakdown

```mermaid
mindmap
  root((CariSponsorPadel))
    Homepage [/]
      Hero Section
        Value Prop: Indonesia's #1 Padel Sponsorship Platform
        2 Columns: Venues vs Brands
        CTAs to dedicated pages
      Trust Bar
        50M+ matched, 15+ venues, 5+ brands
      Featured Opportunities
        6 sample venue cards
        Link to /opportunities
      Success Stories
        3 testimonials
      FAQ Section
        5 common questions
      Final CTA
        2 buttons to dedicated pages
      Sticky CTA Bar
        Venue/Event → /for-venues
        Brand → /for-brands

    For Venues [/for-venues]
      Header
        Find Sponsors for Your Padel Venue or Event
      How It Works
        1. Contact Us on WhatsApp
        2. We Review & List
        3. Get Matched
      Why List With Us
        Free to list
        Access to verified brands
        Professional support
        Fast turnaround
      FAQ
        Costs, timeline, proposal help
      Sticky WhatsApp CTA
        Opens venue template

    For Brands [/for-brands]
      Header
        Sponsor Padel in Indonesia
      Benefits
        Targeted Reach
        Curated Matches
        Bundle Deals
      Why Sponsor Padel
        Fast growing sport
        Affluent audience
        High engagement
        Social media reach
      Success Stories
        3 case studies
      CTA to Browse Opportunities
      Sticky WhatsApp CTA
        Opens brand template

    Opportunities [/opportunities]
      Filters
        Type: Venue/Tournament/Community
        Location: By province
        Results counter
      Opportunity Cards
        Title, description, location
        Courts, reach, frequency
        Status: Available/Partially/Fully Sponsored
        Request Info → WhatsApp
      No sticky CTA
```

## Customer Interaction Flow

```mermaid
sequenceDiagram
    participant V as Venue Owner
    participant B as Brand Manager
    participant Site as CariSponsorPadel.com
    participant WA as WhatsApp
    participant Team as CSP Team

    rect rgb(230, 245, 230)
    Note over V,Team: VENUE JOURNEY
    V->>Site: Visits homepage
    Site->>V: Shows value prop + CTA
    V->>Site: Clicks "Find Sponsors"
    Site->>V: Navigates to /for-venues
    V->>Site: Reads how it works, benefits
    V->>Site: Clicks "Find Sponsors on WhatsApp"
    Site->>WA: Opens WhatsApp with venue template
    V->>WA: Fills out venue details
    WA->>Team: Receives venue submission
    Team->>Team: Reviews within 24h
    Team->>V: Confirms listing
    Team->>Team: Adds to marketplace
    Team->>V: Matches with interested brands
    Team->>V: Facilitates deal (10-20% commission)
    end

    rect rgb(227, 242, 253)
    Note over B,Team: BRAND JOURNEY
    B->>Site: Visits homepage
    Site->>B: Shows verified opportunities
    B->>Site: Clicks "Browse Opportunities"
    Site->>B: Navigates to /for-brands
    B->>Site: Reads benefits, success stories
    alt Browse First
        B->>Site: Clicks "Browse Opportunities"
        Site->>B: Shows /opportunities with filters
        B->>Site: Filters by type/location
        B->>Site: Clicks "Request Info" on card
    else Direct Contact
        B->>Site: Clicks sticky "Contact Us on WhatsApp"
    end
    Site->>WA: Opens WhatsApp with brand template
    B->>WA: Fills out company details & goals
    WA->>Team: Receives brand inquiry
    Team->>Team: Reviews and curates matches
    Team->>B: Sends curated opportunities
    Team->>B: Creates custom bundle if needed
    Team->>B: Facilitates sponsorship deal
    end
```

## Data Flow Architecture

```mermaid
graph LR
    subgraph "Frontend (Static)"
        A[index.html<br/>Homepage]
        B[for-venues<br/>Marketing Page]
        C[for-brands<br/>Marketing Page]
        D[opportunities<br/>Filterable List]
    end

    subgraph "User Actions"
        E[WhatsApp<br/>Venue Template]
        F[WhatsApp<br/>Brand Template]
    end

    subgraph "Backend (Manual)"
        G[CSP Team<br/>WhatsApp Chat]
        H[Internal CRM<br/>Lead Tracking]
        I[Deal Facilitation<br/>& Commission]
    end

    A --> B
    A --> C
    A --> D
    B --> E
    C --> D
    C --> F
    D --> F

    E --> G
    F --> G
    G --> H
    H --> I

    style A fill:#e1f5e1
    style B fill:#fff4e6
    style C fill:#e3f2fd
    style D fill:#f3e5f5
    style E fill:#c8e6c9
    style F fill:#c8e6c9
    style G fill:#ffccbc
    style H fill:#ffccbc
    style I fill:#ffccbc
```

## Key Features & Components

```mermaid
graph TB
    subgraph "Navigation Components"
        Nav[Sticky Navigation Bar]
        Nav --> HomeLink[Home Link]
        Nav --> VenuesLink[Venues Link]
        Nav --> BrandsLink[Brands Link]
        Nav --> OppsLink[Opportunities Link]
    end

    subgraph "CTA Components"
        StickyHome[Homepage Sticky CTA]
        StickyVenue[Venue Page Sticky CTA]
        StickyBrand[Brand Page Sticky CTA]

        StickyHome --> ToVenues[→ /for-venues]
        StickyHome --> ToBrands[→ /for-brands]
        StickyVenue --> VenueWA[→ WhatsApp Venue]
        StickyBrand --> BrandWA[→ WhatsApp Brand]
    end

    subgraph "WhatsApp Templates"
        VenueTemplate[Venue Template]
        VenueTemplate --> VenueFields[Name, Type, Location<br/>Courts, Instagram<br/>Proposal Status]

        BrandTemplate[Brand Template]
        BrandTemplate --> BrandFields[Company Name, Industry<br/>Location Preference, Budget<br/>Timeline, Goals]
        BrandTemplate --> OpportunityTitle[Pre-filled with<br/>Opportunity Title if clicked from card]
    end

    subgraph "Content Sections"
        Hero[Hero Section]
        Trust[Trust Bar with Stats]
        Featured[Featured Opportunities]
        Stories[Success Stories]
        FAQ[FAQ Section]
        Benefits[Benefits/Why Section]
    end

    style Nav fill:#b3e5fc
    style StickyHome fill:#c5e1a5
    style StickyVenue fill:#c5e1a5
    style StickyBrand fill:#c5e1a5
    style VenueTemplate fill:#fff59d
    style BrandTemplate fill:#fff59d
```

## Responsive Design Strategy

```mermaid
graph LR
    subgraph "Mobile (< 768px)"
        M1[Compact Navigation<br/>Shortened labels: Opps]
        M2[Sticky CTA:<br/>Horizontal 2-column grid<br/>Compact padding]
        M3[Hero: Smaller fonts<br/>3xl → 2xl → xl]
        M4[Footer: Extra padding<br/>pb-24 for sticky CTA]
    end

    subgraph "Tablet (768px - 1024px)"
        T1[Medium Navigation<br/>Full labels visible]
        T2[Sticky CTA:<br/>2-column layout<br/>Medium padding]
        T3[Hero: Medium fonts<br/>4xl → 3xl]
        T4[Grid: 2 columns]
    end

    subgraph "Desktop (> 1024px)"
        D1[Full Navigation<br/>All labels + spacing]
        D2[Sticky CTA:<br/>Full width buttons<br/>Generous padding]
        D3[Hero: Large fonts<br/>6xl → 5xl]
        D4[Grid: 3 columns]
    end

    Mobile --> Tablet
    Tablet --> Desktop

    style M1 fill:#ffccbc
    style M2 fill:#ffccbc
    style M3 fill:#ffccbc
    style M4 fill:#ffccbc
    style T1 fill:#fff9c4
    style T2 fill:#fff9c4
    style T3 fill:#fff9c4
    style T4 fill:#fff9c4
    style D1 fill:#c8e6c9
    style D2 fill:#c8e6c9
    style D3 fill:#c8e6c9
    style D4 fill:#c8e6c9
```

## Conversion Funnel

```mermaid
graph TB
    Start([Visitor]) --> Homepage{Homepage<br/>First Impression}

    Homepage --> |"I have venue"| VenuePath[/for-venues Page]
    Homepage --> |"I'm a brand"| BrandPath[/for-brands Page]
    Homepage --> |"Just browsing"| Browse[/opportunities Page]

    VenuePath --> VenueEducated{Reads Benefits<br/>Understands Process}
    BrandPath --> BrandEducated{Reads Benefits<br/>Sees Success Stories}

    VenueEducated --> |"Convinced"| VenueWA[Opens WhatsApp<br/>Venue Template]
    BrandEducated --> |"Want to browse first"| Browse
    BrandEducated --> |"Ready to contact"| BrandWA[Opens WhatsApp<br/>Brand Template]

    Browse --> |"Found interesting opp"| BrandWA

    VenueWA --> VenueLead{Completes<br/>Template?}
    BrandWA --> BrandLead{Completes<br/>Template?}

    VenueLead --> |"Yes"| QualifiedVenue[Qualified Venue Lead]
    BrandLead --> |"Yes"| QualifiedBrand[Qualified Brand Lead]

    VenueLead --> |"No"| Lost1[Lost Lead]
    BrandLead --> |"No"| Lost2[Lost Lead]

    QualifiedVenue --> Processing[CSP Team Processing]
    QualifiedBrand --> Processing

    Processing --> Match[Successful Match]
    Processing --> NoMatch[No Match Yet]

    Match --> Deal[Deal Closed<br/>10-20% Commission]

    style Start fill:#e1f5e1
    style Homepage fill:#fff4e6
    style VenuePath fill:#e3f2fd
    style BrandPath fill:#e3f2fd
    style Browse fill:#f3e5f5
    style VenueWA fill:#c8e6c9
    style BrandWA fill:#c8e6c9
    style QualifiedVenue fill:#ffccbc
    style QualifiedBrand fill:#ffccbc
    style Deal fill:#4caf50
    style Lost1 fill:#ef5350
    style Lost2 fill:#ef5350
```

---

## Summary

### Pages (4 total)
1. **/** - Homepage (main landing, education, CTAs)
2. **/for-venues** - Venue marketing page with WhatsApp CTA
3. **/for-brands** - Brand marketing page with WhatsApp CTA
4. **/opportunities** - Filterable sponsorship opportunities list

### External Touchpoints
- **WhatsApp** - Primary conversion point with 2 templates
- **CSP Team** - Manual processing, matching, deal facilitation

### Key Conversion Points
1. Homepage → Dedicated pages (education)
2. Dedicated pages → WhatsApp (lead capture)
3. Opportunities page → WhatsApp (qualified interest)
4. WhatsApp → CSP Team (lead processing)

### Revenue Model
- **Free to list** for venues/events
- **10-20% commission** on closed deals
- **Optional**: 3M for professional proposals (free if deal closes in 60 days)
```
