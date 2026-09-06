export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/auth/epic/login") {
      return new Response("EPIC LOGIN ROUTE OK");
    }

    return env.ASSETS.fetch(request);
  }
};
