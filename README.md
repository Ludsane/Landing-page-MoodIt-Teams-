# MoodIt Teams — Landing Page (Version Growth)

Landing page optimisée pour la conversion, orientée capture de leads qualifiés avec démo personnalisée comme CTA principal.

## 🎯 Objectif

Capter des leads qualifiés, inspirer confiance, proposer une démo personnalisée comme CTA principal. Rédaction expert Growth + UX + Branding.

## 📋 Structure de la page

1. **Hero** — Kicker, H1, lead, 2 CTAs (démo + essai gratuit), micro-proof, visual dashboard
2. **Problème** — "Ce que les rétros n'osent pas dire" (court et percutant)
3. **Solution** — MoodIt Teams : Capture. Comprend. Conseille. (6 features)
4. **Social Proof** — Témoignages + stat clé (+32% vélocité)
5. **Comment ça marche** — 3 étapes simples
6. **Pour les managers** — GPS émotionnel
7. **Pour les collaborateurs** — S'exprimer sans risque
8. **Résultats & KPIs** — Stats animées avec compteurs
9. **Pricing** — Teaser (Starter / Scale / Enterprise)
10. **Formulaire de démo** — Modal avec validation
11. **Footer** — Navigation complète

## 🎨 Design System

### Palette de couleurs
- **Primary** : `#5B21B6` (purple profond)
- **Accent** : `#7C3AED` (lilas)
- **Neutral Dark** : `#0F172A` / `#111827`
- **Background** : `#FFFFFF` / `#F8FAFC`
- **Success** : `#10B981`
- **Warning** : `#F59E0B`

### Typographie
- **Display/H1** : Inter 700, 48-60px
- **H2** : Inter 600, 28-36px
- **Body** : Inter 400, 16px
- **Mono** : JetBrains Mono (microcopy)

### Spacing
- Sections : 96-160px vertical spacing (desktop), 32-48px (mobile)
- Comfortable spacing avec variables CSS

### Composants
- Boutons : rounded-xl, shadow-sm, padding 14-18px
- Cards : soft shadows, 12-16px border-radius, hover lift
- Dashboard mockup : 3D card avec drop shadow

## 🚀 Fonctionnalités

### Conversion
- ✅ Modal de démo avec formulaire complet
- ✅ Validation en temps réel
- ✅ CTAs stratégiquement placés
- ✅ Social proof (témoignages + stats)
- ✅ Micro-proofs ("Déjà utilisé par...")

### UX/UI
- ✅ Design premium et minimaliste
- ✅ Animations au scroll (Intersection Observer)
- ✅ Compteurs animés pour les stats
- ✅ Micro-interactions (hover, ripple)
- ✅ Dashboard mockup animé
- ✅ Responsive (mobile, tablette, desktop)

### Technique
- ✅ SEO optimisé (meta tags, structure sémantique)
- ✅ Accessibilité (navigation clavier, contrastes)
- ✅ Performance (CSS optimisé, JS léger)
- ✅ Validation de formulaire
- ✅ Smooth scroll

## 📁 Fichiers

```
Projet/
├── index.html      # Page principale avec toutes les sections
├── styles.css      # Design system complet
├── script.js       # Interactions, modal, animations
└── README.md       # Documentation
```

## 🛠️ Installation

### Local
```bash
# Option 1 : Ouvrir directement
open index.html

# Option 2 : Serveur local (recommandé)
python3 -m http.server 8000
# ou
npx http-server
```

### Déploiement
- **Netlify** : Drag & drop
- **Vercel** : `vercel deploy`
- **GitHub Pages** : Push vers repo
- **Surge.sh** : `surge`

## 📝 Formulaire de démo

Le formulaire capture :
- Prénom (requis)
- Nom (optionnel)
- Email (requis)
- Société (requis)
- Taille de l'équipe (dropdown)
- Rôle (Manager / Tech Lead / HR / CEO / Autre)
- Type de démo (Live 30min / Walkthrough 15min / Essai 14j)

**À intégrer** :
- Backend API pour enregistrer les leads
- Calendly embed ou système de booking
- Page de remerciement avec lien vers "page connecter"
- Email automatique de confirmation

## 🎯 Prochaines étapes

### Intégrations à prévoir
- [ ] Backend API pour le formulaire
- [ ] Calendly ou système de booking
- [ ] Page de remerciement (`/merci`)
- [ ] Page "Connecter" (post-demo)
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Email automation (nurturing post-demo)

### Améliorations possibles
- [ ] A/B testing des CTAs
- [ ] Vidéo de démonstration
- [ ] Carousel de logos clients
- [ ] Blog/ressources
- [ ] Mode sombre
- [ ] Multilingue (i18n)

## 📊 SEO

### Meta tags
- **Title** : "MoodIt Teams — Baromètre émotionnel pour équipes tech & managers"
- **Description** : Optimisée pour la conversion avec CTA "Réservez une démo"

### Structure
- HTML sémantique
- Headings hiérarchiques (H1, H2, H3)
- Alt text pour images (à ajouter si images)
- Schema.org markup (à ajouter)

## ♿ Accessibilité

- Structure HTML sémantique
- Navigation au clavier
- Contrastes respectés (>= 4.5:1)
- Labels sur tous les inputs
- Focus visible
- ARIA labels sur les boutons modaux

## 📱 Responsive

Breakpoints :
- **Mobile** : < 480px
- **Tablette** : 480px - 768px
- **Desktop** : > 768px
- **Large Desktop** : > 1024px

## 🎨 Microcopy

### CTAs
- "Réserver une démo"
- "Essayer 14 jours — Gratuit"
- "Voir le dashboard"
- "Contacter l'équipe"

### Hero
- "MoodIt Teams capte l'état émotionnel de votre équipe, anonymement et en continu."
- "Stop aux non-dits. Commencez à prévenir."

## 📄 Licence

Ce projet est fourni tel quel pour MoodIt Teams.

---

**MoodIt Teams** — Baromètre émotionnel pour équipes tech & managers
