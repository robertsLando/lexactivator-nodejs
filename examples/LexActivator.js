const FFI = require('ffi');
const ref = require('ref');

const libraryPath = './libs/libLexActivator';

const LicenseCallback = function (callback) {
  return FFI.Callback('void', [ref.types.int], callback)
};

const uint32Ptr = ref.refType(ref.types.uint32);
const charPtr = ref.refType(ref.types.char);

const PermissionFlags = {
  LA_USER: 1,
  LA_SYSTEM: 2
};

const LexActivator = new FFI.Library(libraryPath, {
  SetProductFile: [ref.types.int, [
    'string',
  ]],
  SetProductData: [ref.types.int, [
    'string',
  ]],
  SetProductId: [ref.types.int, [
    'string',
    ref.types.uint32,
  ]],
  SetLicenseKey: [ref.types.int, [
    'string',
  ]],
  SetLicenseCallback: [ref.types.int, [
    'pointer',
  ]],
  SetActivationMetadata: [ref.types.int, [
    'string',
    'string',
  ]],
  SetTrialActivationMetadata: [ref.types.int, [
    'string',
    'string',
  ]],
  SetAppVersion: [ref.types.int, [
    'string',
  ]],
  SetNetworkProxy: [ref.types.int, [
    'string',
  ]],
  GetProductMetadata: [ref.types.int, [
    'string',
    charPtr,
    ref.types.uint32,
  ]],
  GetLicenseMetadata: [ref.types.int, [
    'string',
    charPtr,
    ref.types.uint32,
  ]],
  GetLicenseKey: [ref.types.int, [
    charPtr,
    ref.types.uint32,
  ]],
  GetLicenseExpiryDate: [ref.types.int, [
    uint32Ptr,
  ]],
  GetLicenseUserEmail: [ref.types.int, [
    charPtr,
    ref.types.uint32,
  ]],
  GetLicenseUserName: [ref.types.int, [
    charPtr,
    ref.types.uint32,
  ]],
  GetActivationMetadata: [ref.types.int, [
    'string',
    charPtr,
    ref.types.uint32,
  ]],
  GetTrialActivationMetadata: [ref.types.int, [
    'string',
    charPtr,
    ref.types.uint32,
  ]],
  GetTrialExpiryDate: [ref.types.int, [
    uint32Ptr,
  ]],
  GetTrialId: [ref.types.int, [
    charPtr,
    ref.types.uint32,
  ]],
  GetLocalTrialExpiryDate: [ref.types.int, [
    uint32Ptr,
  ]],
  ActivateLicense: [ref.types.int, [
  ]],
  ActivateLicenseOffline: [ref.types.int, [
    'string',
  ]],
  GenerateOfflineActivationRequest: [ref.types.int, [
    'string',
  ]],
  DeactivateLicense: [ref.types.int, [
  ]],
  GenerateOfflineDeactivationRequest: [ref.types.int, [
    'string',
  ]],
  IsLicenseGenuine: [ref.types.int, [
  ]],
  IsLicenseValid: [ref.types.int, [
  ]],
  ActivateTrial: [ref.types.int, [
  ]],
  IsTrialGenuine: [ref.types.int, [
  ]],
  ActivateLocalTrial: [ref.types.int, [
    ref.types.uint32
  ]],
  IsLocalTrialGenuine: [ref.types.int, [
  ]],
  ExtendLocalTrial: [ref.types.int, [
    ref.types.uint32
  ]],
  Reset: [ref.types.int, [
  ]],
});

const LexStatusCodes = {
  /*
      CODE: LA_OK
 
      MESSAGE: Success code.
  */
  LA_OK: 0,

  /*
      CODE: LA_FAIL
 
      MESSAGE: Failure code.
  */
  LA_FAIL: 1,

  /*
      CODE: LA_EXPIRED
 
      MESSAGE: The license has expired or system time has been tampered
      with. Ensure your date and time settings are correct.
  */
  LA_EXPIRED: 20,

  /*
      CODE: LA_SUSPENDED
 
      MESSAGE: The license has been suspended.
  */
  LA_SUSPENDED: 21,

  /*
      CODE: LA_GRACE_PERIOD_OVER
 
      MESSAGE: The grace period for server sync is over.
  */
  LA_GRACE_PERIOD_OVER: 22,

  /*
      CODE: LA_TRIAL_EXPIRED
 
      MESSAGE: The trial has expired or system time has been tampered
      with. Ensure your date and time settings are correct.
  */
  LA_TRIAL_EXPIRED: 25,

  /*
      CODE: LA_LOCAL_TRIAL_EXPIRED
 
      MESSAGE: The local trial has expired or system time has been tampered
      with. Ensure your date and time settings are correct.
  */
  LA_LOCAL_TRIAL_EXPIRED: 26,

  /*
      CODE: LA_E_FILE_PATH
 
      MESSAGE: Invalid file path.
  */
  LA_E_FILE_PATH: 40,

  /*
      CODE: LA_E_PRODUCT_FILE
 
      MESSAGE: Invalid or corrupted product file.
  */
  LA_E_PRODUCT_FILE: 41,

  /*
      CODE: LA_E_PRODUCT_DATA
 
      MESSAGE: Invalid product data.
  */
  LA_E_PRODUCT_DATA: 42,

  /*
      CODE: LA_E_PRODUCT_ID
 
      MESSAGE: The product id is incorrect.
  */
  LA_E_PRODUCT_ID: 43,

  /*
      CODE: LA_E_SYSTEM_PERMISSION
 
      MESSAGE: Insufficent system permissions. Occurs when LA_SYSTEM flag is used
      but application is not run with admin privileges.
  */
  LA_E_SYSTEM_PERMISSION: 44,

  /*
      CODE: LA_E_FILE_PERMISSION
 
      MESSAGE: No permission to write to file.
  */
  LA_E_FILE_PERMISSION: 45,

  /*
      CODE: LA_E_WMIC
 
      MESSAGE: Fingerprint couldn't be generated because Windows Management
      Instrumentation (WMI) service has been disabled. This error is specific
      to Windows only.
  */
  LA_E_WMIC: 46,

  /*
      CODE: LA_E_TIME
 
      MESSAGE: The system time has been tampered with. Ensure your date
      and time settings are correct.
  */
  LA_E_TIME: 47,

  /*
      CODE: LA_E_INET
 
      MESSAGE: Failed to connect to the server due to network error.
  */
  LA_E_INET: 48,

  /*
      CODE: LA_E_NET_PROXY
 
      MESSAGE: Invalid network proxy.
  */
  LA_E_NET_PROXY: 49,

  /*
      CODE: LA_E_HOST_URL
 
      MESSAGE: Invalid Cryptlex host url.
  */
  LA_E_HOST_URL: 50,

  /*
      CODE: LA_E_BUFFER_SIZE
 
      MESSAGE: The buffer size was smaller than required.
  */
  LA_E_BUFFER_SIZE: 51,

  /*
      CODE: LA_E_APP_VERSION_LENGTH
 
      MESSAGE: App version length is more than 256 characters.
  */
  LA_E_APP_VERSION_LENGTH: 52,

  /*
      CODE: LA_E_REVOKED
 
      MESSAGE: The license has been revoked.
  */
  LA_E_REVOKED: 53,

  /*
      CODE: LA_E_LICENSE_KEY
 
      MESSAGE: Invalid license key.
  */
  LA_E_LICENSE_KEY: 54,

  /*
      CODE: LA_E_LICENSE_TYPE
 
      MESSAGE: Invalid license type. Make sure floating license
      is not being used.
  */
  LA_E_LICENSE_TYPE: 55,

  /*
      CODE: LA_E_OFFLINE_RESPONSE_FILE
 
      MESSAGE: Invalid offline activation response file.
  */
  LA_E_OFFLINE_RESPONSE_FILE: 56,

  /*
      CODE: LA_E_OFFLINE_RESPONSE_FILE_EXPIRED
 
      MESSAGE: The offline activation response has expired.
  */
  LA_E_OFFLINE_RESPONSE_FILE_EXPIRED: 57,

  /*
      CODE: LA_E_ACTIVATION_LIMIT
 
      MESSAGE: The license has reached it's allowed activations limit.
  */
  LA_E_ACTIVATION_LIMIT: 58,

  /*
      CODE: LA_E_ACTIVATION_NOT_FOUND
 
      MESSAGE: The license activation was deleted on the server.
  */
  LA_E_ACTIVATION_NOT_FOUND: 59,

  /*
      CODE: LA_E_DEACTIVATION_LIMIT
 
      MESSAGE: The license has reached it's allowed deactivations limit.
  */
  LA_E_DEACTIVATION_LIMIT: 60,

  /*
      CODE: LA_E_TRAIL_NOT_ALLOWED
 
      MESSAGE: Trial not allowed for the product.
  */
  LA_E_TRAIL_NOT_ALLOWED: 61,

  /*
      CODE: LA_E_TRIAL_ACTIVATION_LIMIT
 
      MESSAGE: Your account has reached it's trial activations limit.
  */
  LA_E_TRIAL_ACTIVATION_LIMIT: 62,

  /*
      CODE: LA_E_MACHINE_FINGERPRINT
 
      MESSAGE: Machine fingerprint has changed since activation.
  */
  LA_E_MACHINE_FINGERPRINT: 63,

  /*
      CODE: LA_E_METADATA_KEY_LENGTH
 
      MESSAGE: Metadata key length is more than 256 characters.
  */
  LA_E_METADATA_KEY_LENGTH: 64,

  /*
      CODE: LA_E_METADATA_VALUE_LENGTH
 
      MESSAGE: Metadata value length is more than 256 characters.
  */
  LA_E_METADATA_VALUE_LENGTH: 65,

  /*
      CODE: LA_E_ACTIVATION_METADATA_LIMIT
 
      MESSAGE: The license has reached it's metadata fields limit.
  */
  LA_E_ACTIVATION_METADATA_LIMIT: 66,

  /*
      CODE: LA_E_TRIAL_ACTIVATION_METADATA_LIMIT
 
      MESSAGE: The trial has reached it's metadata fields limit.
  */
  LA_E_TRIAL_ACTIVATION_METADATA_LIMIT: 67,

  /*
      CODE: LA_E_METADATA_KEY_NOT_FOUND
 
      MESSAGE: The metadata key does not exist.
  */
  LA_E_METADATA_KEY_NOT_FOUND: 68,

  /*
      CODE: LA_E_VM
 
      MESSAGE: Application is being run inside a virtual machine / hypervisor,
      and activation has been disallowed in the VM.
  */
  LA_E_VM: 80,

  /*
      CODE: LA_E_COUNTRY
 
      MESSAGE: Country is not allowed.
  */
  LA_E_COUNTRY: 81,

  /*
      CODE: LA_E_IP
 
      MESSAGE: IP address is not allowed.
  */
  LA_E_IP: 82,

  /*
      CODE: LA_E_RATE_LIMIT
 
      MESSAGE: Rate limit for API has reached, try again later.
  */
  LA_E_RATE_LIMIT: 90,

  /*
      CODE: LA_E_SERVER
 
      MESSAGE: Server error.
  */
  LA_E_SERVER: 91,

  /*
      CODE: LA_E_CLIENT
 
      MESSAGE: Client error.
  */
  LA_E_CLIENT: 92
};

module.exports = { LexActivator, LicenseCallback, PermissionFlags, LexStatusCodes };