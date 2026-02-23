module.exports = {
  platform: 'github',

  // --- AUTOMATION SETTINGS ---
  // 1. autodiscover: true allows the bot to find ALL repos the token has access to.
  //    If you prefer a manual list, keep using "repositories: []"
  autodiscover: true,

  // --- RATE LIMITS ---
  prConcurrentLimit: 0, // Unlimited concurrent PRs
  prHourlyLimit: 0,     // Unlimited PRs per hour 

  // --- GLOBAL CONFIGURATION LOGIC ---
  // 2. Disable Onboarding. The bot will NOT create "Configure Renovate" PRs.
  onboarding: false,

  // 3. Whitelist Config. "required" means Renovate will SKIP any repo that doesn't 
  //    have a renovate.json file in it.
  requireConfig: "required",

  // --- DASHBOARD ---
  dependencyDashboard: true, // Gives you the summary issue
  dependencyDashboardApproval: false, // Ensures PRs are created AUTOMATICALLY

  // --- RULES ---
  // These apply to everyone.
  // If a repo HAS a renovate.json, it will merge with these rules.
  extends: ["config:recommended"], // Fixed your migration warning (was config:base)

  packageRules: [
    {
      matchUpdateTypes: ["minor", "patch", "pin", "digest"],
      groupName: "all non-major dependencies",
      groupSlug: "all-minor-patch",
    },
  ],
};