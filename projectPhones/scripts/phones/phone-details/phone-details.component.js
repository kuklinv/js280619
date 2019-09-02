// import {BaseComponent} from "../common/base/base.component.js";

export class PhoneDetailsComponent {
    constructor({element}) {
        this._element = element;             // теперь когда создали common класс - не нужно
        this._render();
    }
   // show(phone) {
   //     this.phone = phone;
   //     this._render();
   //     super.show();
   // }

    _render() {
        this._element.innerHTML = `
        <div>
  <div>

    <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

    <button>Back</button>
    <button>Add to basket</button>


    <h1>Motorola XOOM™ with Wi-Fi</h1>

    <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>

    <ul class="phone-thumbs">
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
      </li>
    </ul>

    <ul class="specs">
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd></dd>
          <dt>WiFi</dt>
          <dd>802.11 b/g/n</dd>
          <dt>Bluetooth</dt>
          <dd>Bluetooth 2.1</dd>
          <dt>Infrared</dt>
          <dd>✘</dd>
          <dt>GPS</dt>
          <dd>✓</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>Android 3.0</dd>
          <dt>UI</dt>
          <dd>Honeycomb</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          <dd>249.1 mm (w)</dd>
          <dd>167.8 mm (h)</dd>
          <dd>12.9 mm (d)</dd>
          <dt>Weight</dt>
          <dd>708.0 grams</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>10.1 inches</dd>
          <dt>Screen resolution</dt>
          <dd>WXGA (1200 x 800)</dd>
          <dt>Touch screen</dt>
          <dd>✓</dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>1 GHz Dual Core Tegra 2</dd>
          <dt>USB</dt>
          <dd>USB 2.0</dd>
          <dt>Audio / headphone jack</dt>
          <dd>3.5mm</dd>
          <dt>FM Radio</dt>
          <dd>✘</dd>
          <dt>Accelerometer</dt>
          <dd>✓</dd>
        </dl>
      </li>
    </ul>
  </div>
</div>
        `;
    }
}