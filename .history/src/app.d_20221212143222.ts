// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
  onMount(async () => {
  const posthog = (await import("posthog-js")).default;
  posthog.init('phc_ksb2H9Z1IYSj0Kr4sZjnHH09IBOEOpbzLkh2z43qjcw',{ 
      api_host: 'https://app.posthog.com', 
      autocapture: false,
      capture_pageview: false,
      cross_subdomain_cookie: true,
      enable_recording_console_log: true,
      secure_cookie: true,
      session_recording:{
        maskAllInputs: false
      }
      });
  posthog.capture('$pageview');
})