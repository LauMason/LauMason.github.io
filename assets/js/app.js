/**
 * app.js — Renders all page content from PROFILE data object
 * Requires: data/profile.js loaded before this script
 */

(function () {
  'use strict';

  // ── Helpers ──────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  };

  const venueTypeMap = {
    ccfa: { cls: 'venue-ccfa', label: 'CCF-A' },
    ccfb: { cls: 'venue-ccfb', label: 'CCF-B' },
    q1:   { cls: 'venue-q1',   label: 'JCR Q1' },
    other:{ cls: 'venue-ccfb', label: '' },
  };
  const statusMap = {
    accepted:  { cls: 'status-accepted', label: 'Accepted' },
    review:    { cls: 'status-review',   label: 'Under Review' },
    submitted: { cls: 'status-review',   label: 'Submitted' },
  };
  const newsTypeMap = {
    admission: { cls: 'pill-admission', label: '🎉 Admitted' },
    paper:     { cls: 'pill-paper',     label: '📄 Paper' },
    award:     { cls: 'pill-award',     label: '🏆 Award' },
    other:     { cls: 'pill-paper',     label: '📌 Update' },
  };

  // ── Page title ───────────────────────────────────────────
  document.title = `${PROFILE.name.en} | ${PROFILE.name.zh}`;

  // ── Nav logo ─────────────────────────────────────────────
  function renderNav() {
    const logo = $('.nav-logo');
    if (logo) logo.innerHTML = `${PROFILE.name.en} <span>${PROFILE.name.zh}</span>`;
  }

  // ── Hero ─────────────────────────────────────────────────
  function renderHero() {
    const wrap = $('#hero-content');
    if (!wrap) return;

    const aff = PROFILE.affiliation.current;
    const prev = PROFILE.affiliation.previous;

    wrap.innerHTML = `
      <div class="hero-tag">
        <span class="dot"></span>
        PhD Admitted · <a href="${aff.url}" target="_blank">${aff.nameZh}</a> · Fall 2026
      </div>

      <h1 class="hero-name">${PROFILE.name.en}</h1>
      <p class="hero-name-zh">${PROFILE.name.zh}</p>

      <div class="hero-meta">
        <span>${PROFILE.title}</span>
        <span class="sep">·</span>
        <a href="${aff.url}" target="_blank">${aff.name}</a>
        <span class="sep">·</span>
        <span>${PROFILE.hometown}</span>
      </div>

      <p class="hero-bio">${PROFILE.bio}</p>

      <p class="hero-collab">${PROFILE.collaboration}</p>

      <div class="hero-interests">
        ${PROFILE.researchInterests.map(r => `<span class="interest-tag">${r}</span>`).join('')}
      </div>

      <div class="hero-actions">
        <a class="btn btn-primary" href="mailto:${PROFILE.contact.email_nuaa}">
          ✉&nbsp; ${PROFILE.contact.email_nuaa}
        </a>
        ${PROFILE.contact.arxiv ? `<a class="btn btn-ghost" href="${PROFILE.contact.arxiv}" target="_blank">arXiv ↗</a>` : ''}
        ${PROFILE.contact.googleScholar ? `<a class="btn btn-ghost" href="${PROFILE.contact.googleScholar}" target="_blank">Scholar ↗</a>` : ''}
        ${PROFILE.contact.github ? `<a class="btn btn-ghost" href="https://github.com/${PROFILE.contact.github}" target="_blank">GitHub ↗</a>` : ''}
      </div>
    `;

    // Photo
    const photoWrap = $('#hero-photo');
    if (photoWrap) {
      photoWrap.innerHTML = `
        <div class="hero-photo-frame">
          <div class="hero-photo-initials" id="photo-initials">${PROFILE.name.zh.slice(1)}</div>
        </div>
        <div class="hero-photo-caption">
          ${PROFILE.name.en}<br>
          ${aff.nameZh}
        </div>
      `;
      // Try to load real photo
      if (PROFILE.photo) {
        const img = new Image();
        img.src = PROFILE.photo;
        img.alt = PROFILE.name.en;
        img.onload = () => {
          const initials = $('#photo-initials');
          if (initials) initials.replaceWith(img);
        };
      }
    }
  }

  // ── Stats ────────────────────────────────────────────────
  function renderStats() {
    const wrap = $('#stats-row');
    if (!wrap) return;
    const total = Object.keys(PROFILE.publications).length;
    const accepted = Object.values(PROFILE.publications).filter(p => p.status === 'accepted').length;
    const review   = Object.values(PROFILE.publications).filter(p => p.status === 'review' || p.status === 'submitted').length;
    const ccfa = Object.values(PROFILE.publications).filter(p => p.venueType === 'ccfa').length;
    wrap.innerHTML = `
      <div class="stat-item"><div class="stat-number">${total}</div><div class="stat-label">Papers</div></div>
      <div class="stat-item"><div class="stat-number">${accepted}</div><div class="stat-label">Accepted</div></div>
      <div class="stat-item"><div class="stat-number">${review}</div><div class="stat-label">Under Review</div></div>
      <div class="stat-item"><div class="stat-number">${ccfa}</div><div class="stat-label">CCF-A</div></div>
    `;
  }

  // ── News ─────────────────────────────────────────────────
  function renderNews() {
    const wrap = $('#news-list');
    if (!wrap) return;
    wrap.innerHTML = PROFILE.news.map(n => {
      const pill = newsTypeMap[n.type] || newsTypeMap.other;
      return `
        <div class="news-item reveal">
          <span class="news-date">${n.date}</span>
          <div class="news-body">
            <span class="news-pill ${pill.cls}">${pill.label}</span>
            ${n.content}
          </div>
        </div>
      `;
    }).join('');
  }

  // ── Publications ─────────────────────────────────────────
  function renderPublications() {
    const wrap = $('#publications-wrap');
    if (!wrap) return;

    let paperIndex = 0;
    wrap.innerHTML = PROFILE.publicationAreas.map((area) => {
      const papersHtml = area.papers.map(pid => {
        const p = PROFILE.publications[pid];
        if (!p) return '';
        paperIndex++;
        const idx = String(paperIndex).padStart(2, '0');
        const vt = venueTypeMap[p.venueType] || venueTypeMap.other;
        const st = statusMap[p.status] || statusMap.review;
        const authorsHtml = p.authors.map(a =>
          a === 'Minxu Liu' ? `<span class="self">${a} (First Author)</span>` : a
        ).join(', ');

        const linksHtml = Object.entries(p.links || {}).map(([type, url]) => {
          const icons = { arxiv: '📄 arXiv', ieee: '🔗 IEEE', pdf: '📎 PDF', code: '💻 Code', project: '🌐 Project' };
          return `<a class="paper-link" href="${url}" target="_blank">${icons[type] || type}</a>`;
        }).join('');

        const thumbHtml = p.image
          ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
          : `<div class="paper-thumb-fallback">${p.emoji || '📄'}</div>`;

        return `
          <div class="paper-card reveal" id="pub-${pid}">
            <div class="paper-thumb">${thumbHtml}</div>
            <div class="paper-body">
              <div class="paper-meta-row">
                <span class="venue-pill ${vt.cls}">${p.venue}</span>
                <span class="venue-pill ${vt.cls}" style="opacity:0.7">${vt.label}</span>
                <span class="status-pill ${st.cls}">${st.label}</span>
                <span class="paper-index">#${idx}</span>
              </div>
              <div class="paper-title">${p.title}</div>
              <div class="paper-authors">${authorsHtml}</div>
              <div class="paper-venue-line">${p.venueFull} · ${p.period}</div>
              <div class="paper-abstract">${p.abstract}</div>
              ${linksHtml ? `<div class="paper-links">${linksHtml}</div>` : ''}
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="research-area reveal">
          <div class="area-header">
            <div class="area-number">${area.label.replace('Area ', '')}</div>
            <div>
              <div class="area-info-title">${area.title}</div>
              <div class="area-info-sub">${area.subtitle} · ${area.papers.length} papers</div>
            </div>
          </div>
          <div class="area-divider"></div>
          ${papersHtml}
        </div>
      `;
    }).join('');
  }

  // ── Education ────────────────────────────────────────────
  function renderEducation() {
    const wrap = $('#education-list');
    if (!wrap) return;
    wrap.innerHTML = PROFILE.education.map(e => {
      const isIncoming = e.status === 'incoming';
      return `
        <div class="edu-item ${isIncoming ? 'incoming' : ''} reveal">
          <div class="edu-icon-wrap">${e.emoji}</div>
          <div>
            <div class="edu-school">
              <a href="${e.url}" target="_blank">${e.school}</a>
              <span class="edu-school-zh">${e.schoolZh}</span>
              ${isIncoming ? `<span class="incoming-badge">Incoming · 拟录取</span>` : ''}
            </div>
            <div class="edu-degree">${e.degree}</div>
            <div class="edu-note">${e.note}${e.gpa ? ` · <span style="color:var(--jade)">${e.gpa}</span>` : ''}</div>
          </div>
          <div class="edu-period">${e.period}</div>
        </div>
      `;
    }).join('');
  }

  // ── Awards ───────────────────────────────────────────────
  function renderAwards() {
    const wrap = $('#awards-grid');
    if (!wrap) return;
    wrap.innerHTML = PROFILE.awards.map(a => {
      const lvlCls = a.level === 'International' ? 'intl' : a.level === 'National' ? 'natl' : '';
      return `
        <div class="award-item reveal">
          <span class="award-icon">${a.icon}</span>
          <div class="award-content">
            <div class="award-name">${a.name}</div>
            <div class="award-footer">
              <span class="award-date">${a.date}</span>
              <span class="award-level-badge ${lvlCls}">${a.level}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ── Scroll Nav shadow ────────────────────────────────────
  function initNav() {
    const nav = $('#nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Scroll Reveal ────────────────────────────────────────
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // stagger children if parent revealed
        }
      });
    }, { threshold: 0.08 });
    // Observe after a tick to allow rendering
    setTimeout(() => {
      $$('.reveal').forEach(el => observer.observe(el));
    }, 50);
  }

  // ── Footer ───────────────────────────────────────────────
  function renderFooter() {
    const footer = $('#footer-inner');
    if (!footer) return;
    footer.innerHTML = `
      <div>
        <div class="footer-name">${PROFILE.name.en} · ${PROFILE.name.zh}</div>
        <div class="footer-copy" style="margin-top:6px">© ${new Date().getFullYear()} · ${PROFILE.affiliation.current.nameZh}</div>
      </div>
      <div class="footer-links">
        <a href="mailto:${PROFILE.contact.email_nuaa}">Email</a>
        ${PROFILE.contact.arxiv ? `<a href="${PROFILE.contact.arxiv}" target="_blank">arXiv</a>` : ''}
        ${PROFILE.contact.googleScholar ? `<a href="${PROFILE.contact.googleScholar}" target="_blank">Scholar</a>` : ''}
        ${PROFILE.contact.github ? `<a href="https://github.com/${PROFILE.contact.github}" target="_blank">GitHub</a>` : ''}
      </div>
    `;
  }

  // ── Init ────────────────────────────────────────────────
  function init() {
    renderNav();
    renderHero();
    renderStats();
    renderNews();
    renderPublications();
    renderEducation();
    renderAwards();
    renderFooter();
    initNav();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
