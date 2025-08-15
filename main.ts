import SafeAppsSDK from '@gnosis.pm/safe-apps-sdk';

const sdk = new SafeAppsSDK();

// Example: get current Safe info
async function initSafeApp() {
  try {
    const safeInfo = await sdk.safe.getInfo();
    console.log('Safe info:', safeInfo);

    // You can now interact with the Safe
    // e.g., sdk.txs.send({txs: [{to, value, data}]})
  } catch (error) {
    console.error('Safe SDK initialization failed:', error);
  }
}

initSafeApp();
