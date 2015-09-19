module Helpers

  def page_title
    if current_page.data.title
      "#{current_page.data.title} | #{site.title}"
    else
      site.title
    end
  end
end