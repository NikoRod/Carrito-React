# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > ONAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if yor are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if your are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:NikoRod/Carrito-React.git main:gh-pages