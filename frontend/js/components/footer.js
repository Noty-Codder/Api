/**
 * Global Compliance Footer for Razorpay Verification & Navigation.
 */

import { esc, getBrand } from "../api.js";

export function renderFooter(state, handlers) {
  const root = document.getElementById("footer-root");
  if (!root) return;

  const brand = getBrand(state);

  root.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand & About -->
          <div class="footer-col" style="max-width:360px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
              <div style="width:30px;height:22px;background:#ff0000;border-radius:6px;display:flex;align-items:center;justify-content:center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff"><polygon points="6,4 20,12 6,20"/></svg>
              </div>
              <strong style="font-size:16px;color:var(--text-primary);">${esc(brand.appName)}</strong>
            </div>
            <p style="margin:0 0 16px;font-size:13px;color:var(--text-muted);line-height:1.6;">
              Cloud-native media & song stream extraction gateway built for Telegram music bots, audio applications, and developers. Instant 320kbps MP3 streams with guaranteed zero-bot-block routing.
            </p>
            <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text-dim);">
              <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#2ba640;"></span>
              <span>All Systems Operational · 99.9% Uptime</span>
            </div>
          </div>

          <!-- Col 2: Platform -->
          <div class="footer-col">
            <h4>Platform</h4>
            <ul class="footer-links">
              <li><a href="#/" data-nav="#/">Media Hub</a></li>
              <li><a href="#pricing" data-nav="#pricing">Pricing Plans</a></li>
              <li><a href="#docs" data-nav="#docs">API Documentation</a></li>
              <li><a href="#playground" data-nav="#playground">API Playground</a></li>
              <li><a href="/sdk/youtube.py" target="_blank">Download youtube.py SDK</a></li>
              <li><a href="/healthz" target="_blank">System Health</a></li>
            </ul>
          </div>

          <!-- Col 3: Legal & Razorpay Compliance -->
          <div class="footer-col">
            <h4>Legal & Policies</h4>
            <ul class="footer-links">
              <li><a href="#terms" data-nav="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy" data-nav="#privacy">Privacy Policy</a></li>
              <li><a href="#refund" data-nav="#refund">Refund & Cancellation</a></li>
              <li><a href="#shipping" data-nav="#shipping">Shipping & Delivery</a></li>
              <li><a href="#contact" data-nav="#contact">Contact Us</a></li>
            </ul>
          </div>

          <!-- Col 4: Razorpay Secured Payment & Contact -->
          <div class="footer-col">
            <h4>Payment & Support</h4>
            <p style="margin:0 0 10px;font-size:12.5px;color:var(--text-muted);">
              <strong>Operating Entity:</strong> ${esc(brand.companyName)}<br>
              <strong>Support Email:</strong> <a href="mailto:${esc(brand.supportEmail)}">${esc(brand.supportEmail)}</a><br>
              <strong>Hours:</strong> Mon - Sat, 9 AM - 7 PM IST
            </p>
            <div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:8px;padding:10px 12px;margin-top:10px;">
              <div style="display:flex;align-items:center;gap:6px;font-size:11.5px;font-weight:700;color:var(--text-primary);margin-bottom:4px;">
                <span style="color:#2ba640;">🔒</span> Secured by Razorpay
              </div>
              <span style="font-size:11px;color:var(--text-muted);display:block;line-height:1.4;">
                UPI (GPay, PhonePe, Paytm), RuPay, Visa, Mastercard, Netbanking supported with 256-bit encryption.
              </span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            © ${new Date().getFullYear()} ${esc(brand.appName)} by ${esc(brand.companyName)}. All rights reserved.
          </div>
          <div style="display:flex;gap:16px;">
            <a href="#terms" data-nav="#terms" style="color:var(--text-muted);">Terms</a>
            <a href="#privacy" data-nav="#privacy" style="color:var(--text-muted);">Privacy</a>
            <a href="#refund" data-nav="#refund" style="color:var(--text-muted);">Refunds</a>
            <a href="#contact" data-nav="#contact" style="color:var(--text-muted);">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  root.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.getAttribute("data-nav");
      handlers.navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
