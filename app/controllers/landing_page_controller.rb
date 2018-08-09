# frozen_string_literal: true

class LandingPageController < ApplicationController
  layout "landing_page"

  def index
    @landing_page_props = { name: "Stranger" }
  end
end
