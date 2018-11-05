/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '../bower_components/iron-ajax/iron-ajax'
import '../bower_components/paper-button/paper-button'
import '../bower_components/paper-spinner/paper-spinner'

class HomePage extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">H</div>
        <iron-ajax
          auto
          url="https://jsonplaceholder.typicode.com/users/5"
          handle-as="json"
          last-response="{{datos}}"
          loading="{{cargando}}"
        ></iron-ajax>

          <h2>API REST: JSONPlaceholder.com</h2>
          <h1>Los datos recuperados fueron:</h1>
          <paper-spinner active="[[cargando]]"></paper-spinner>
          <p>Nombre: {{datos.name}}</p>
          <p>Usuario: {{datos.username}}</p>
          <p>E-mail: {{datos.email}}</p>
          <p>Dirección: {{datos.address.street}}</p>
          <p>Ciudad: {{datos.city}}</p>
          <p>Teléfono: {{datos.phone}}</p>
          <p>Sitio web: {{datos.website}}</p>
       </div>
    `;
  }
}

window.customElements.define('home-page', HomePage);
