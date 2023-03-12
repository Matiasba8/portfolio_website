// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import './add_jquery'
import * as bootstrap from "bootstrap"

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});