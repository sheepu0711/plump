'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c7bc7d9f681843e880c50f4eecf6e6c6",
".git/config": "df980b5d428ecd56ca3ce7e53891f0ba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8d0225514ac5849b2db72539f4f2c9fb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "67272ced235422557e6a2cdc5185f817",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d682cac15010d02cdaf860069bd63a3",
".git/logs/refs/heads/main": "7f6d6c1d6079bdc66f470d4e69bd3d07",
".git/logs/refs/remotes/origin/main": "c1d6ed680a6deedd8f0aaaff3fcba034",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/06/4ad478a510a9c581bb16d295f659256e1f920a": "70263889abab446706a6ec8f59c81b2a",
".git/objects/08/43d9800eb01f620210f9cdb7f300c953d44e36": "cc994c6af3b7f4f0781be9a62ba3cdf1",
".git/objects/09/258773c7219ad9e60b92b918e3c50b58f43c9e": "c71a001b45bc5ce35b03dd00bf670eb8",
".git/objects/09/e4812abc2d18d14f9d97fcd0f3edc7f1997f4a": "a168241df6ecec51f223e1739446d2ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/4dd60473fa9a7506a5484b7b12d2420ace5938": "199200f49d5ce6c16d25c5ec3b51fa2f",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/12/d4018cfd1eeaab5813e24b07836274d717038f": "ea4a7fd0b9428c88de0b36fef0f172e0",
".git/objects/15/c7ce4ea2fbe4b4571b6c1d823abb405bea1c93": "961b1d3a19bf9e9c94a2dd10bc1cff21",
".git/objects/16/c1c8e85f9c8ebc0a5bf663dae282d29df92887": "cbd61ed77d58db95709eb7525f2cfeb6",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/19/8a1ad57b7edf44359bf16d0aa6abe0f4ca9e56": "6c1458afb40c804f24bd066462837ba3",
".git/objects/1a/4aa435b0345823a5b6f7ef5e0174aebeb3528a": "64e00eeb300c4294d924a82b49d1147d",
".git/objects/1b/27de937a7d8c5c6034bd0984d81b84755977d9": "c280ff89789f7dbd9625a078c74ba649",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/4110f9f6b9867d8ea4f8327d7e173c3a8a6660": "0087d17de9b4a5f4563f61cbfdbf67a2",
".git/objects/2a/ae3d8a5844f21e7aa91995ad6d1cc535ac33c5": "c8e32b767bade573bf5f8a66c238a1cb",
".git/objects/33/9c0b13d238b4f2d4493ff528c9bbc2fb7470d1": "056e28309cc9bb5f64afbeb8b335c192",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/5be252516d20e279fc0736f3fe2568d5149eb2": "c23af0e35ac8330b04a1f728ccfdd47a",
".git/objects/3c/69c5a015eca0cc3ec8387c4d628959c50af8d6": "c29cb08619e49f5ef353d199bb2acdf2",
".git/objects/3f/b56e6ca96abb415c47a880054274fb2e103579": "ec50f32e333e893523b02ea1264e9e34",
".git/objects/48/cc775249c274bc8bcb813e4bb939d1fb7e4fdf": "8a3c473e401abae991dbc3066615cec4",
".git/objects/49/50544b86782ef4abb8ed88e55f3c2a414a604a": "464f54d67faab335d66b2722ab000ff5",
".git/objects/4d/a670272719a952f74900dfab924ae6717fba34": "a3801db609a3c6cb4ddfe179a0116541",
".git/objects/4f/e55b9a06ecc928d7291ff5f65f7bfe273d8763": "6dc76c7a3a97f0fd0e6c3b79bbce9595",
".git/objects/51/31d59283b67830ebe00ad1daccf5b75d09746e": "a3a01c0708b09b82a8d333dac396e597",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/5a/98d7a624b42a927b61efafd2bb3a3410981612": "5cc11607d8ab24ead05e484ebeabccc9",
".git/objects/5d/be6f908239d00a9f88c335df3efb9261ecc3cc": "84efb630510dd4cab1973c2f39b99f51",
".git/objects/61/9ba2fbcdaa9d289482a0854c9e84a49449b330": "f81f25b7a1c77b585b2cfbfcd91a6ed3",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/642f982e7ee18d1c110285679323e2ef6d23d9": "a07cc368d31094a93e864e97463ff4bf",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/68/2c86d083b598c76db89f1a5474051464240990": "fdd554d354acf8e893a3cc9aebc37a53",
".git/objects/6b/b4769d5bfe99a30924ab55c3fd20ca8680ddc3": "722e99026755f9b6470291b316605d01",
".git/objects/6d/7356b80b49bf3983f96a0a67ba63c6dd863618": "f38dce0755c08c3cfdaddb0438b906a4",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/75/9d08f4a3116ab2cb8ccfb335ba6790c44a7980": "0fca181c053ec3885f9483094a09ee1a",
".git/objects/7f/33e3202bb7469ad4b0945557aafbbff9c69164": "2c7d0f033981d5d1357d41b3f991deb6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/74f00e91bd4733ad6b5313c3ead3ef6d359e11": "8be5a094a93fd48afbc9d772b12989e3",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/96/bff443bcfa7dca1c92fdba57cc6241f19d0ea9": "426133fd375672e72c08b8be973203b0",
".git/objects/97/2fc80fe29bf891eefbb46c8c9191af18b00c9c": "7a57d420136e681c9c4c796df1ca835a",
".git/objects/98/f510168e032b2257949ef4f1d77d0f51804fae": "7b858dea0875bfb4abe0a1464ad20c1a",
".git/objects/a0/1db8a5d32416aadd4fd77098f966be15b723e0": "256cf86d75095a8f9a98611a714f0bf8",
".git/objects/a4/81b97b4f84fd4199360c511517a5cf22d2a664": "3b4d0ec44fa97ccd3562608aa394e024",
".git/objects/a6/a0ae635475b0ebabcaee91c743efdcda46a356": "a92ac72cf8c735077b434817cef92f98",
".git/objects/ac/c161e8e1213243e370a89e7a2c1e4800146ced": "d6db0b9ecd84dace17ea4c25ed27b6f1",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/43ceba769a8d8182de585f2ecd17dcb02df010": "9f13fa29879cbeb49befe9d382f29081",
".git/objects/b0/19da9075d8810ac942265305bdf53396a71623": "511fcb48c349110aad279349858b78ba",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c6/3283dd3ee3fa1bf53eb8c34ccaa64cb0f8e45b": "a8a72bd76f25b6bf6b55435c54e97cc4",
".git/objects/ce/4807f7bbe0b977c15d47710272cabd858543a0": "f56bea7485eb5fc3429e86eeb014d6c3",
".git/objects/d0/824e83c5552dac1338900a3f0aa71086016d67": "9c45ede6b2237746b77ea445d53ae4f5",
".git/objects/d3/7402172d9c6f90534934d39baff7dbb383b526": "ab2f5643246db76f6fe1160b9eece510",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/9d4b99f868bf7afe5d779413086db7c7fe59f0": "2bcec74db973f33e961b5e4cdf8232db",
".git/objects/d6/50705087cb962ed4cafb04578d9873e91ca873": "c78680974554b6195d2a601a2636ae50",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8cfaa08d6ab54329d19fa9a07aca7c0db0932c": "d9ba5ae1529c5b3bcce0015499d44ba0",
".git/objects/da/f6f1bfd17555290a09383d62d536464d795d23": "4cfbbe609698469267c380ee88cd1dc1",
".git/objects/e2/2522aab5f78c81f7d9f5c69c98f35a383875d3": "17112948eaef753474ec31699e1cd9fd",
".git/objects/e3/fb0f31a0f2105a6877db0117c17d9497c5fbee": "16e8ab68cd95e02360ef38be8dcafd27",
".git/objects/e7/37ba96918b3132ae23e1e2fd002d4f9df75cb1": "ef06f66c919573824c09d26ed505ad7f",
".git/objects/ea/7b06fc5177c8576a0f1921cad628bd000fc869": "56bf378acf9dfb87c6a265ce81a734bf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/bd90a250175ed6e2b030258a77c2ddaf183ee2": "3eeb34357c1ea0eba631d29bbb1dab76",
".git/objects/f4/f0a4563525a748f07133d33c2209c4612424de": "ab5bcf3d19dbe6d6b61734df4ec9e2d2",
".git/refs/heads/main": "f7f13538ed1700c72cab7852b5c70d1e",
".git/refs/remotes/origin/main": "f7f13538ed1700c72cab7852b5c70d1e",
"assets/AssetManifest.bin": "575f35064a3b3f0c5faa03f224c29e9e",
"assets/AssetManifest.json": "f6e26741fd005bee325e8472efaed457",
"assets/FontManifest.json": "29b825733e1e9fdbcc42f5fa1562ca35",
"assets/fonts/digital-7-italic.ttf": "7c6e146fe91c1b2633316a6aee97a9af",
"assets/fonts/digital-7-mono-italic.ttf": "f6e67539e25adbf860808313c8e75ce5",
"assets/fonts/digital-7-mono.ttf": "58045dabdc3a361cb9bb9faf2f1dd1f3",
"assets/fonts/digital-7.ttf": "1e670d88b23c7ab956f1829e3828a210",
"assets/fonts/digitalism.ttf": "21ade23345944c47f4060f07e498305b",
"assets/fonts/dismay.otf": "582cac299faac1ab8d378a6488ba2ced",
"assets/fonts/display.ttf": "f07da7a2ee5379094633ef4a5e51dbb0",
"assets/fonts/ds-digi.ttf": "63f874d192fb3892d88d5e26f942b5e2",
"assets/fonts/ds-digib.ttf": "1467e2d37ec60cc50117a8db7c24f626",
"assets/fonts/ds-digii.ttf": "8e8e625f12e45ecc674f9579c4547351",
"assets/fonts/ds-digit.ttf": "223f224650510797e0f06233d2a0f97b",
"assets/fonts/IONB-Black.ttf": "0283e01e1bd2168325a25af0c71e751e",
"assets/fonts/IONB-Bold.ttf": "1765e62bfed9854edeb4712f91ce958c",
"assets/fonts/IONB-Cells.ttf": "9e1beb2feeb0dc88821fe692d94c3447",
"assets/fonts/IONB-Light.ttf": "766db3a7223d4ac4b104013c5cfc47b9",
"assets/fonts/IONB-Medium.ttf": "02d5c82aef2eae41283529607adb3df8",
"assets/fonts/IONB-Regular.ttf": "ac5bd7ded696a5fb5e88417b5b795f6f",
"assets/fonts/IONB-Semibold.ttf": "d129369342110c05041d4a9909eb5fd7",
"assets/fonts/IONB-Thin.ttf": "f0ccec12043979dcea586c586ce64173",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/QuartzMSRegular.TTF": "7df4d03e072bfaf9685f06ed5d179aff",
"assets/NOTICES": "69af9c522ba6f04eb494ca518ab25167",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25f9c56d74698c40b3492d2118c84b89",
"/": "25f9c56d74698c40b3492d2118c84b89",
"main.dart.js": "7aa9718527aae03ee9105e01fb9201bc",
"manifest.json": "da9e63754334174a807aea54f160fb46",
"version.json": "3146f2d9c9515f1a9364a2f880e3df2c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
