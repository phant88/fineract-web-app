// filepath: /c:/Users/lcu15/Repositorios/Khipucode/fineract-web-app/src/assets/env.js
(function (window) {
  window['env'] = window['env'] || {};

  // BackEnd Environment variables
  window['env']['fineractApiUrls'] = 'https://ec2-23-21-0-213.compute-1.amazonaws.com:8443';
  window['env']['fineractApiUrl'] = 'https://ec2-23-21-0-213.compute-1.amazonaws.com:8443';
  window['env']['apiProvider'] = '/fineract-provider/api';
  window['env']['apiVersion'] = '/v1';
  window['env']['fineractPlatformTenantId'] = 'default';
  window['env']['fineractPlatformTenantIds'] = 'default';

  // Language Environment variables
  window['env']['defaultLanguage'] = 'en-US';
  window['env']['supportedLanguages'] = 'en-US';
  window['env']['preloadClients'] = 'true';
  window['env']['defaultCharDelimiter'] = ',';
  window['env']['sessionIdleTimeout'] = '$MIFOS_SESSION_IDLE_TIMEOUT';
  window['env']['oauthServerEnabled'] = 'true';
  window['env']['oauthServerUrl'] = 'https://ec2-23-21-0-213.compute-1.amazonaws.com:9090/realms/fineract/protocol/openid-connect';
  window['env']['oauthAppId'] = 'community-app';
  window['env']['oauthAppSecret'] = 'CJCJydpOR6MwjXttnWyqTpER3otvx1AG';

  console.log('Environment variables loaded:', window['env']);
})(this);