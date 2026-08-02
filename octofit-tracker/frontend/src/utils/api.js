export function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}

export function getApiUrl(resource) {
  const normalizedResource = resource.replace(/^\/+|\/+$/g, '');
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}/api/${normalizedResource}/`;
}

export function getApiUrlFromCurrentOrigin(resource) {
  const normalizedResource = resource.replace(/^\/+|\/+$/g, '');
  return `/api/${normalizedResource}/`;
}

export function resolveCollection(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray(payload.results)) {
    return payload.results;
  }

  if (payload && Array.isArray(payload.items)) {
    return payload.items;
  }

  return [];
}
