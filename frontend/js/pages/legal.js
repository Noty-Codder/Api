/**
 * Dedicated Legal, Policy & Contact Pages for Razorpay Merchant Verification.
 * Complies with RBI guidelines and Razorpay Merchant Verification Checklist.
 */

import { esc, getBrand, showToast } from "../api.js";

export function renderLegalPage(type, state, handlers) {
  const root = document.getElementById("app-root");
  if (!root) return;

  const brand = getBrand(state);

  const pages = {
    terms: {
      badge: "Legal Agreement",
      title: "Terms and Conditions",
      subtitle: `Last updated: November 15, 2026 · Governing the use of ${brand.appName} and services by ${brand.companyName}.`,
      content: `
        <div class="legal-section">
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing, registering, or subscribing to <strong>${esc(brand.appName)}</strong> ("the Service", "we", "us", or "our"), operated by <strong>${esc(brand.companyName)}</strong>, you ("User", "Developer", "Client") agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
        </div>

        <div class="legal-section">
          <h3>2. Description of Service</h3>
          <p>${esc(brand.appName)} provides API developer keys, cloud media gateways, and high-performance audio stream extraction services primarily targeted for developers, software integrations, and Telegram music bot ecosystems. The service is provided on an electronic subscription or pay-per-quota model.</p>
        </div>

        <div class="legal-section">
          <h3>3. Account Registration & Developer Keys</h3>
          <ul>
            <li>You must provide accurate, complete, and current information when creating an account or subscribing to our plans.</li>
            <li>You are solely responsible for maintaining the confidentiality of your API keys and credentials. Any requests executed using your API key are deemed executed by you.</li>
            <li>Free tier usage is strictly limited to <strong>one (1) free API key per user per month (30 days)</strong>. Any automated abuse or duplicate account creation to circumvent rate limits will result in account suspension.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>4. Subscription Plans & Payments</h3>
          <ul>
            <li>Subscription plans, pricing tiers (e.g., ₹29 for 3K songs, ₹65 for 5K songs, ₹115 for 10K songs, etc.), and request quotas are listed on our official pricing page.</li>
            <li>All payments are securely processed through <strong>Razorpay Payment Gateway</strong> using UPI, Debit/Credit Cards, or Netbanking.</li>
            <li>Prices are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>5. Acceptable Use Policy</h3>
          <p>You agree not to use the service to:</p>
          <ul>
            <li>Launch Distributed Denial of Service (DDoS) attacks, brute-force requests, or exploit vulnerabilities.</li>
            <li>Redistribute API keys to unauthorized third parties or reselling raw gateway bandwidth without explicit permission.</li>
            <li>Violate any local, national, or international laws or regulations.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>6. Limitation of Liability</h3>
          <p>In no event shall ${esc(brand.companyName)}, its operators, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, including data loss, bot downtime, or upstream service changes.</p>
        </div>

        <div class="legal-section">
          <h3>7. Modifications & Termination</h3>
          <p>We reserve the right to modify these Terms at any time. Material changes will be communicated via the website. We may terminate or suspend access to our service immediately, without prior notice, for breach of these Terms.</p>
        </div>

        <div class="legal-section">
          <h3>8. Governing Law & Jurisdiction</h3>
          <p>These terms shall be governed and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in India.</p>
        </div>
      `,
    },

    privacy: {
      badge: "Data Protection",
      title: "Privacy Policy",
      subtitle: `Last updated: November 15, 2026 · How ${brand.appName} collects, uses, and safeguards your personal information.`,
      content: `
        <div class="legal-section">
          <h3>1. Information We Collect</h3>
          <p>When you register for an account or interact with our APIs, we may collect:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, company or project name, and password hash (or Google OAuth profile identifiers).</li>
            <li><strong>Billing & Payment Data:</strong> Razorpay order IDs, transaction timestamps, payment status, and receipt numbers. <em>(Note: We never store your full debit/credit card numbers or UPI PINs; all sensitive payment credentials are handled exclusively by RBI-authorized payment aggregator Razorpay).</em></li>
            <li><strong>Technical & API Usage Telemetry:</strong> IP addresses, request endpoints, timestamps, latency metrics, HTTP status codes, and browser user-agent for fraud prevention and rate-limiting enforcement.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>To provision, authenticate, and maintain your unique API keys and active subscriptions.</li>
            <li>To enforce fair usage quotas and prevent automated abuse.</li>
            <li>To send critical account notifications (e.g., password reset links, email verifications, and Razorpay GST invoices).</li>
            <li>To troubleshoot system outages and improve media routing speed.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>3. Data Sharing & Third-Party Processors</h3>
          <p>We do not sell, rent, or trade your personal data. We only share information with vetted third-party service providers essential for operating the platform:</p>
          <ul>
            <li><strong>Razorpay:</strong> Payment processing, checkout verification, and automated tax receipts.</li>
            <li><strong>Google Cloud:</strong> OAuth 2.0 authentication (when you choose Continue with Google).</li>
            <li><strong>Cloudflare / AWS / Neon:</strong> Secure cloud infrastructure, database hosting, and DDoS mitigation.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>4. Data Security</h3>
          <p>We implement industry-standard cryptographic practices including HTTPS (TLS 1.3), hashed passwords (PBKDF2/SHA-256), encrypted API secrets, and isolated database connections. However, no electronic transmission over the internet is 100% impenetrable.</p>
        </div>

        <div class="legal-section">
          <h3>5. Cookies & Local Storage</h3>
          <p>We use localized tokens and HTTP cookies solely for session state preservation, theme preference (Day/Night mode), and authentication. We do not use third-party tracking or behavioral advertising cookies.</p>
        </div>

        <div class="legal-section">
          <h3>6. Your Rights & Data Deletion</h3>
          <p>You have the right to access, review, update, or request the deletion of your account data. To request account deletion or data export, contact our support team at <a href="mailto:${esc(brand.supportEmail)}">${esc(brand.supportEmail)}</a>.</p>
        </div>
      `,
    },

    refund: {
      badge: "Fair Policy",
      title: "Refund and Cancellation Policy",
      subtitle: `Last updated: November 15, 2026 · Transparent guidelines for plan cancellations and payment refunds.`,
      content: `
        <div class="legal-section">
          <h3>1. Cancellation Policy</h3>
          <ul>
            <li>You may cancel your active subscription at any time directly through your <strong>Dashboard</strong> under the <em>Subscription</em> or <em>Billing</em> tab.</li>
            <li>Upon cancellation, your existing subscription will remain active until the end of your current 30-day billing cycle, after which your API keys will automatically expire and no further renewals will be billed.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>2. Refund Eligibility Window</h3>
          <p>Because ${esc(brand.appName)} delivers immediate digital API keys and server bandwidth upon purchase:</p>
          <ul>
            <li><strong>Within 48 Hours:</strong> If you experience persistent technical defects, continuous gateway outages (>6 consecutive hours), or accidental double billing, you are eligible for a <strong>100% full refund</strong> provided your quota usage is under 15% of the purchased plan limit.</li>
            <li><strong>After 48 Hours or Substantial Usage:</strong> Plans where more than 50% of the request quota has been consumed or where 48 hours have passed are generally non-refundable, as server resources and extraction bandwidth have already been provisioned.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>3. How to Request a Refund</h3>
          <p>To initiate a refund request, submit an email to <a href="mailto:${esc(brand.supportEmail)}">${esc(brand.supportEmail)}</a> with:</p>
          <ol>
            <li>Your registered account email address.</li>
            <li>Razorpay Payment ID / Order ID (e.g., <code>pay_...</code> or receipt number <code>BETA-...</code>).</li>
            <li>A brief description of the issue encountered.</li>
          </ol>
        </div>

        <div class="legal-section">
          <h3>4. Refund Processing Timeline</h3>
          <p>Once your refund request is verified and approved by our support team:</p>
          <ul>
            <li>Refunds are initiated via Razorpay back to your original payment method (UPI account, Credit/Debit card, or Bank Account).</li>
            <li>Refunds typically reflect in your bank account within <strong>5 to 7 business days</strong>, depending on your bank's clearance cycle.</li>
          </ul>
        </div>
      `,
    },

    shipping: {
      badge: "Digital Services",
      title: "Shipping and Delivery Policy",
      subtitle: `Last updated: November 15, 2026 · Information regarding delivery of digital API products and developer keys.`,
      content: `
        <div class="legal-section">
          <h3>1. Nature of Products</h3>
          <p><strong>${esc(brand.appName)}</strong> exclusively sells and provisions <strong>digital products, SaaS subscriptions, and cloud API access keys</strong>. We do NOT manufacture, stock, or ship any tangible physical goods.</p>
        </div>

        <div class="legal-section">
          <h3>2. Method of Delivery</h3>
          <ul>
            <li>All subscriptions and API keys are delivered <strong>100% electronically</strong> through our online web dashboard.</li>
            <li>Upon successful payment confirmation by Razorpay, your developer key and plan quota are <strong>instantly provisioned</strong> and rendered on your screen.</li>
            <li>A confirmation receipt containing your purchase details, transaction receipt number, and active plan quota is simultaneously logged to your account and emailed to your registered email address.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h3>3. Delivery Timeline</h3>
          <p><strong>Instantaneous (0 to 60 seconds).</strong> Under normal server operations, key provisioning is automated and occurs immediately upon HMAC payment verification. No physical waiting period or courier dispatch is required.</p>
        </div>

        <div class="legal-section">
          <h3>4. Delivery Issues & Support</h3>
          <p>If for any reason your API key or updated subscription limit does not display automatically within 5 minutes of completing payment, please email our support team at <a href="mailto:${esc(brand.supportEmail)}">${esc(brand.supportEmail)}</a> with your Razorpay Payment ID, and our engineering team will manually reconcile and provision your access within 1-2 hours.</p>
        </div>
      `,
    },

    contact: {
      badge: "Get in Touch",
      title: "Contact Us",
      subtitle: `We are here to assist you with API integrations, Telegram bots, custom enterprise limits, or billing inquiries.`,
      content: `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;">
          <div class="glass-card" style="padding:24px;">
            <h4 style="margin:0 0 12px;font-size:16px;color:var(--text-primary);">📍 Operating & Business Address</h4>
            <p style="margin:0 0 16px;font-size:13.5px;color:var(--text-muted);line-height:1.6;">
              <strong>${esc(brand.companyName)}</strong><br>
              Operational Entity for ${esc(brand.appName)}<br>
              Bihar, India - 845401
            </p>

            <h4 style="margin:0 0 12px;font-size:16px;color:var(--text-primary);">📧 Electronic Support</h4>
            <p style="margin:0 0 16px;font-size:13.5px;color:var(--text-muted);line-height:1.6;">
              <strong>Official Support:</strong> <a href="mailto:${esc(brand.supportEmail)}">${esc(brand.supportEmail)}</a><br>
              <strong>Developer Escalation:</strong> <a href="mailto:mdistkhar601@gmail.com">mdistkhar601@gmail.com</a>
            </p>

            <h4 style="margin:0 0 12px;font-size:16px;color:var(--text-primary);">⏰ Support Hours</h4>
            <p style="margin:0;font-size:13.5px;color:var(--text-muted);line-height:1.6;">
              Monday – Saturday: 9:00 AM – 7:00 PM IST<br>
              Sunday: Emergency bot & gateway downtime coverage only<br>
              <span style="color:#2ba640;font-weight:600;">Response SLA: Typically under 4 hours (max 24 hours).</span>
            </p>
          </div>

          <div class="glass-card" style="padding:24px;">
            <h4 style="margin:0 0 14px;font-size:16px;color:var(--text-primary);">💬 Send Us a Direct Message</h4>
            <form id="contact-support-form" style="display:flex;flex-direction:column;gap:12px;">
              <div class="field">
                <label>Your Name</label>
                <input class="input" type="text" id="c-name" required placeholder="Aarav Sharma" value="${esc(state.user?.full_name || "")}" />
              </div>
              <div class="field">
                <label>Email Address</label>
                <input class="input" type="email" id="c-email" required placeholder="developer@gmail.com" value="${esc(state.user?.email || "")}" />
              </div>
              <div class="field">
                <label>Subject / Topic</label>
                <select class="input" id="c-subject" required>
                  <option value="Billing / Razorpay Query">Billing or Razorpay Payment</option>
                  <option value="Telegram Music Bot Integration">Telegram Music Bot Integration (youtube.py)</option>
                  <option value="Quota Upgrade / Higher Limit">Custom Quota / Fleet Keys Upgrade</option>
                  <option value="Technical Issue / Bug Report">Technical Issue / Bug Report</option>
                  <option value="Other">General Inquiry</option>
                </select>
              </div>
              <div class="field">
                <label>Message</label>
                <textarea class="textarea" id="c-message" required rows="4" placeholder="How can our engineering team help you?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" id="c-submit" style="width:100%;">Send Support Inquiry</button>
            </form>
          </div>
        </div>
      `,
    },
  };

  const p = pages[type] || pages.terms;

  root.innerHTML = `
    <div class="container" style="max-width:880px;padding-top:40px;padding-bottom:60px;">
      <div style="text-align:center;margin-bottom:36px;">
        <span class="badge badge-neutral" style="margin-bottom:10px;">${esc(p.badge)}</span>
        <h1 style="font-size:32px;font-weight:800;color:var(--text-primary);margin:0 0 10px;">${esc(p.title)}</h1>
        <p style="margin:0;font-size:14px;color:var(--text-muted);">${esc(p.subtitle)}</p>
      </div>

      <div class="glass-card" style="padding:32px 36px;line-height:1.7;">
        ${p.content}
      </div>

      <div style="margin-top:24px;text-align:center;">
        <button class="btn btn-secondary btn-sm" data-nav="#/">← Back to Media Hub</button>
      </div>
    </div>
  `;

  // Attach navigation
  root.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.getAttribute("data-nav");
      handlers.navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Handle contact form submission
  if (type === "contact") {
    document.getElementById("contact-support-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("c-name").value;
      const email = document.getElementById("c-email").value;
      const subj = document.getElementById("c-subject").value;
      const msg = document.getElementById("c-message").value;
      
      const mailtoUrl = `mailto:${encodeURIComponent(brand.supportEmail)}?subject=${encodeURIComponent(`[${subj}] from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`)}`;
      window.location.href = mailtoUrl;
      showToast("Thank you! Opening your email client to dispatch your message.", "success", 6000);
    });
  }
}
