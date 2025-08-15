import SafeAppsSDK from '@gnosis.pm/safe-apps-sdk';

export class App {
  private sdk: SafeAppsSDK;

  constructor() {
    this.sdk = new SafeAppsSDK();
  }

  async init() {
    try {
      const safeInfo = await this.sdk.safe.getInfo();
      console.log('Safe Info:', safeInfo);

      const appDiv = document.getElementById('app');
      if (appDiv) {
        appDiv.innerHTML = `
          <h1>Welcome to SafeVault</h1>
          <p>Connected Safe: ${safeInfo.safeAddress}</p>
          <p>Network: ${safeInfo.chainId}</p>
        `;
      }
    } catch (error) {
      console.error('Safe SDK initialization failed:', error);
      const appDiv = document.getElementById('app');
      if (appDiv) {
        appDiv.innerHTML = `<p style="color:red;">Failed to connect to Safe.</p>`;
      }
    }
  }
}
