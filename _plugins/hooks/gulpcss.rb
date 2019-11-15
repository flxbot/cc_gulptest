Jekyll::Hooks.register(:site, :post_render) do |_site|
  system("./node_modules/.bin/gulp css")
end
