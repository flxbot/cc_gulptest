Jekyll::Hooks.register(:site, :post_render) do ||
  system("./node_modules/.bin/gulp css")
end
